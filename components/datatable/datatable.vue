<template lang="html">

    <div :class="[prefix, sizeClass, borderClass]">
        <div :class="[contentClass, scrollClass]">

            <div v-if="tableBodyHeight" class="{{prefix}}-header" :style="{left:-tableBodyScrollLeft+'px',width:tableBodyWidth}">
                <table :style="{width:tableBodyWidth}">
                    <thead class="{{prefix}}-thead">
                        <tr>
                            <th v-if="rowSelection" class="{{prefix}}-selection-column">
                                <v-checkbox v-if="rowSelection.type=='checkbox'" :checked.sync="checkAllState" :on-change="checkAllChange"></v-checkbox>
                                <!--<v-radio v-if="rowSelection.type=='radio'" :on-change="rowSelectionChange"></v-radio>-->
                            </th>
                            <template v-for="column in columns">
                                <th :style="{width:column.width}" class="{{column.className}}">
                                    {{column.title}}
                                    <template v-if="column.sort">
                                        <div class="{{prefix}}-column-sorter">
                                            <span @click="sort(column,'asc')" class="{{prefix}}-column-sorter-up {{column.sort == 'asc' ? 'on' : 'off' }}" title="↑"><v-icon type="caret-up"></v-icon></span>
                                            <span @click="sort(column,'desc')" class="{{prefix}}-column-sorter-down {{column.sort == 'desc' ? 'on' : 'off' }}" title="↓"><v-icon type="caret-down"></v-icon></span>
                                        </div>
                                    </template>
                                </th>
                            </template>
                        </tr>
                    </thead>
                </table>
            </div>

            <div class="{{prefix}}-body" :style="{height:tableBodyHeight+'px'}" @scroll="scrollTableBody">
                <v-spin :spinning="loading">
                    <table>
                        <thead class="{{prefix}}-thead">
                        <tr>
                            <th v-if="rowSelection" class="{{prefix}}-selection-column">
                                <v-checkbox v-if="rowSelection.type=='checkbox'" :checked.sync="checkAllState" :on-change="checkAllChange"></v-checkbox>
                                <!--<v-radio v-if="rowSelection.type=='radio'" :on-change="rowSelectionChange"></v-radio>-->
                            </th>
                            <template v-for="column in columns">
                                <th :style="{width:column.width}" class="{{column.className}}">
                                    {{column.title}}
                                    <template v-if="column.sort">
                                        <div class="{{prefix}}-column-sorter">
                                            <span @click="sort(column,'asc')" class="{{prefix}}-column-sorter-up {{column.sort == 'asc' ? 'on' : 'off' }}" title="↑"><v-icon type="caret-up"></v-icon></span>
                                            <span @click="sort(column,'desc')" class="{{prefix}}-column-sorter-down {{column.sort == 'desc' ? 'on' : 'off' }}" title="↓"><v-icon type="caret-down"></v-icon></span>
                                        </div>
                                    </template>
                                </th>
                            </template>
                        </tr>
                        </thead>
                        <tbody class="{{prefix}}-tbody" v-show="current.length">
                            <tr v-for="(index, item) in current">
                                <td v-if="rowSelection" class="{{prefix}}-selection-column">
                                    <v-checkbox v-if="rowSelection.type=='checkbox'" :checked.sync="rowSelectionStates[index]" @click="rowSelectionChange(index)"></v-checkbox>
                                    <!--<v-radio v-if="rowSelection.type=='radio'" :on-change="rowSelectionChange"></v-radio>-->
                                </td>
                                <td v-for="column in columns">
                                    <template v-if="column.component">
                                        <component :is="ghost[column.component]" :index="index" :value="item[column.field]" :item="item" @datatable="datatable"></component>
                                    </template>
                                    <template v-else>
                                        <template v-if="column.render">
                                            {{{column.render(item[column.field],item,index)}}}
                                        </template>
                                        <template v-else>
                                            {{{item[column.field]}}}
                                        </template>
                                    </template>
                                </td>
                            </tr>
                        </tbody>

                        <tbody class="{{prefix}}-tbody" v-if="current.length==0">
                            <tr>
                                <td v-else colspan="{{rowSelection ? columns.length+1 : columns.length}}" style="text-align:center">
                                    {{emptyText}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </v-spin>
            </div>
        </div>

        <div v-if="total" class="{{prefix}}-footer">
            <div class="{{prefix}}-pagination">
                <!--todo select组件有bug,导致自定义pageSizeOptions修改每页条数时报错,修改分页重发请求功能后续开发-->
                <v-pagination
                              :default-current="defaultCurrent"
                              :total="total"
                              :on-change="pageChange"
                              :show-size-changer="true"
                              :on-show-size-change="pageSizeChange"
                              :pageSizeOptions="pageSizeOptions"
                ></v-pagination>
            </div>
            <div class="{{prefix}}-description">
                共有{{total}}条数据
            </div>
            <div class="clearfix"></div>
        </div>


    </div>


</template>

<script lang="babel">
    import vPagination from '../pagination'
    import vSpin from '../spin'
    import vIcon from '../iconfont'
    import vCheckbox from '../checkbox'
    import vRadio from '../radio'
    import $ from 'domtastic'

    export default {
        name:'v-datatable',
        props: {
            size: {
                type: String,
                default:"middle"
            },
            //接口地址
            dataSource: {
                type: String,
                required: true
            },
            //表头信息
            columns: {
                type: Array,
                required: true
            },
            //分页大小
            pageSize: {
                type: Number,
                default: 10
            },
            //当前页数
            pageNum: {
                type: Number,
                default: 1
            },
//            数据处理函数
            formatter: {
                type: Function
            },
            pageSizeOptions:{
                type: Array,
                default:function () {
                    return [10,20,30,40,50];
                }
            },
            // 接口数据结构中各项参数的名称
            paramsName:{
                type: Object,
                default: function () {
                    return {
                        pageNumber:'pageNo',
                        pageSize:'pageSize',
                        total:'totalCount',
                        results:'result',
                        sortColumns:'sortColumns'
                    }
                }
            },
            // 发送请求时需要额外附带的参数
            otherParams:{
                type: Object,
                default: function () {
                    return {}
                }
            },
            rowSelection:{
                type: Object,
                validator: function (value) {
                    return value.type == "checkbox" || value.type == "radio";
                }
            },
            emptyText:{
                type: String,
                default:"老板,没有找到你想要的信息......"
            },
            ghost:{
                type: Object
            },
            bottomGap:{
                type: Number,
                default:''
            },
            height:{
                type: Number,
                default:null
            }
        },
        /*
         我们应当使用一个函数作为 data 选项，让这个函数返回一个新对象
         不能直接简单地把一个对象作为组件的data选项,这会导致所有的实例将共享同一个 data 对象！
         */
        data: function () {
            return {
                //当前分页数据,默认没有
                current: [],
                // 默认总数
                total: 0,
                // class前缀
                prefix: 'ant-table',
                borderClass:"ant-table-bordered",
                contentClass:"ant-table-content",
                // 默认加载第一页
                defaultCurrent:1,
                //加载状态
                loading:false,
                sortParams:{},
//                排序模式:single和multi,单参数和多参数
                sortModel:'single',
                rowSelectionStates:[],
                tableBodyScrollLeft:0,
                tableBodyWidth:"100%",
                tableBodyHeight:null
            }
        },
        created: function () {
            //初始加载数据
            this.getSortParams();
            this.loadData({pageNum: this.pageNum});
        },
        ready: function () {
            var self = this;
            //获取表格实际宽度
            this.calculateSize();

            if(!this.bindResize){
                window.addEventListener("resize",function () {
                    self.$nextTick(function () {
                        self.calculateSize();
                    });
                },false);
                self.bindResize = true;
            }
        },
        methods: {
            clickCheck: function (index, event) {
                //组装消息
                const item = this.items[index];
                const msg = Object.assign({
                    index: index,
                    checked: event.target.checked
                }, item);
                //派发事件
                this.$dispatch('select', msg);
            },
            /**
             * 翻页
             * @param page
             */
            pageChange: function (page) {
                this.pageNum = page;
                //不直接修改pageNum,传递给loadData,待数据加载成功之后修改pageNum
                this.loadData({pageNum: this.pageNum});
            },
            /**
             * 修改分页大小
             * @param pageSize
             */
            pageSizeChange:function (current,pageSize) {
                // todo pagenation的该回调有bug
                this.pageNum = current;
                this.pageSize = pageSize;
                this.loadData({pageNum: this.pageNum});
            },
            /**
             * 排序
             * @param pageSize
             */
            sort:function (column,order) {
                if(this.sortModel == "single"){
                    this.setCurrentSort(column,order);
                }else{
                    this.setSortParams(column,order);
                }

                this.loadData();
            },
//            单参数排序模式
            setCurrentSort:function (sortColumn,order) {

                for(var column of this.columns){
                    if(typeof column.sort == 'string'){
                        column.sort = true;
                    }
                }

                this.currentSort = sortColumn;
                sortColumn.sort = order;
                var sortParams = {};
                sortParams[this.paramsName.sortColumns] = `${sortColumn.field} ${sortColumn.sort} `;
                this.sortParams = sortParams;
            },
            setSortParams:function (sortColumn,order) {
                sortColumn.sort = order;

                var sortStr = "";
                for(var column of this.columns){
                    if(typeof column.sort == 'string'){
                        sortStr += `${column.field} ${column.sort} `;
                    }
                }
                var sortParams = {};
                sortParams[this.paramsName.sortColumns] = sortStr;
                this.sortParams = sortParams;
            },
            getSortParams:function () {
                var sortStr = "";
                for(var column of this.columns){
                    if(typeof column.sort == 'string'){
                        sortStr += `${column.field} ${column.sort} `;
                    }
                }
                var sortParams = {};
                sortParams[this.paramsName.sortColumns] = sortStr;
                this.sortParams = sortParams;
                return this.sortParams;
            },
            /**
             * 加载数据
             * @param params
             */
            loadData: function (params) {
                params = Object.assign({},params);
                var self = this;
                self.loading = true;
                //拼装请求参数
                const url = this.dataSource;
                const remoteParams = Object.assign({}, this.sortParams, this.otherParams);
                remoteParams[this.paramsName.pageNumber] = params.pageNum || self.pageNum;
                remoteParams[this.paramsName.pageSize] = this.pageSize;

                this.$http.post(url, remoteParams,{emulateJSON:true}).then((response) => {
//                            const data = response.data;
                    const data = response.body.data;
                    let results = self.formatter ? self.formatter(data[self.paramsName.results]) : data[self.paramsName.results];
                    self.current = results;
                    self.total = data[self.paramsName.total]*1;
                    self.pageNum = data[self.paramsName.pageNumber];
                    self.pageSize = data[self.paramsName.pageSize];

                    self.rowSelectionStates = new Array(self.current.length || 0).fill(false);
                    self.loading = false;
                    self.$nextTick(function () {
                        self.calculateSize();
                    });
                },(response) =>{
                    // error callback
                    self.loading = false;
                    }
                );
            },
            rowSelectionChange:function (index) {
                if(this.rowSelection.onSelect){
                    this.rowSelection.onSelect(index,this.rowSelectionStates[index],this.current[index]);
                }
            },
            checkAllChange:function (e) {
                this.rowSelectionStates = new Array(this.current.length || 0).fill(e.checked);
                if(this.rowSelection.onSelectAll){
                    this.rowSelection.onSelectAll(e.checked, this.current);
                }
            },
            datatable(fn,...rest){
                this[fn](...rest);
            },
            reload(){
                this.loadData({pageNum: this.pageNum});
            },
            scrollTableBody:function (e) {
                const target = e.target || e.srcElement;
                this.tableBodyScrollLeft = target.scrollLeft;
            },
            //计算并设置表格尺寸
            calculateSize:function () {
                if(!this.$el){
                    return
                }
                var footerHeight = 56;
                if(this.height){
                    this.tableBodyHeight = this.height - footerHeight;
                    this.getBodyWidth();
                }else if(this.bottomGap){
                    //未设置height属性时，处理bottomGap属性（height属性优先）
                    this.fixGapHeight(footerHeight);
                    this.getBodyWidth();
                }
            },
            getBodyWidth:function () {
                //设置表头表格总宽度
                var tbody = $(this.$el).find("div.ant-table-body table");
                tbody[0] && (this.tableBodyWidth = tbody[0].offsetWidth + "px");
                //设置表头th宽度
                this.fixHeaderWidth();
            },
            fixHeaderWidth:function () {
                var theader_ths = $(this.$el).find("div.ant-table-header table>thead>tr>th");
                var tbody_ths = $(this.$el).find("div.ant-table-body table>thead>tr>th");
                if(theader_ths.length && tbody_ths.length){
                    theader_ths.each(function (el,index) {
                        if(index != theader_ths.length-1){
                            $(el).css("width",tbody_ths[index].offsetWidth+'px');
                        }
                    });
                }
            },
            fixGapHeight:function (footerHeight) {
                var self = this;
                //获取挂载元素在屏幕上的位置
                var rect = self.$el.getBoundingClientRect();
                console.log(rect);
                var winHeight = window.innerHeight;
                var tableBodyHeight = winHeight - this.bottomGap*1 - rect.top - footerHeight
//                    在可见首屏范围内且计算高度至少100时处理，否则不处理
                if(rect.top > 0 && tableBodyHeight >= 200){
                    this.tableBodyHeight = tableBodyHeight;
                }
            }
        },
        events:{
            reload:function (event) {
                this.reload();
            }
        },
        computed:{
            sizeClass:function () {
                return this.prefix + "-" + this.size;
            },
            scrollClass:function () {
                if(this.tableBodyHeight){
                    return this.prefix + "-scroll";
                }else{
                    return "";
                }
            },
            checkAllState:function () {
                let checkAllState = false;
                for (var i = 0; i < this.rowSelectionStates.length; i++) {
                    if (this.rowSelectionStates[i] == false){
                        checkAllState = false;
                        break;
                    }else{
                        checkAllState = true;
                    }
                }
                return checkAllState;
            }
        },
        components: {
            vPagination,
            vSpin,
            vIcon,
            vCheckbox,
            vRadio
        }
    }
</script>

<style lang="less">
</style>
