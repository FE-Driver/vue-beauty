<template lang="html">

    <div :class="[prefix, sizeClass, borderClass]">
        <div class="{{prefix}}-content">
            <div class="{{prefix}}-body">
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
                                <!--<td><input type="checkbox" @click="clickCheck($index,$event)"></td>-->
                                <!--<td>{{item.name}}</td>-->
                                <!--<td>{{item.sex}}</td>-->
                            </tr>
                        </tbody>

                        <tbody class="{{prefix}}-tbody" v-show="current.length==0">
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

        <div class="{{prefix}}-pagination">
            <!--todo select组件有bug,导致自定义pageSizeOptions修改每页条数时报错,修改分页重发请求功能后续开发-->
            <v-pagination v-if="total"
                    :default-current="defaultCurrent"
                    :total="total"
                    :on-change="pageChange"
            ></v-pagination>
        </div>

    </div>


</template>

<script lang="babel">
    import vPagination from '../pagination'
    import vSpin from '../spin'
    import vIcon from '../iconfont'
    import vCheckbox from '../checkbox'
    import vRadio from '../radio'

    export default {
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
                // 默认加载第一页
                defaultCurrent:1,
                //加载状态
                loading:false,
                sortParams:{},
//                排序模式:single和multi,单参数和多参数
                sortModel:'single',
                rowSelectionStates:[]
            }
        },
        created: function () {
            //初始加载数据
            this.getSortParams();
            this.loadData({pageNum: this.pageNum});
        },
        ready: function () {
            console.log(this.emptyText)
            console.log(this)
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
            clickHandle:function (index) {
//                console.log(index);
//                console.log(this.rowSelectionStates[index])
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
            pageSizeChange:function (pageSize) {
                // todo pagenation的该回调有bug
                this.pageSize = pageSize;
                this.loadData({pageNum: this.pageNum});
            },
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
                    const data = response.body.data;
                    let results = self.formatter ? self.formatter(data[self.paramsName.results]) : data[self.paramsName.results];
                    self.current = results;
                    self.total = data[self.paramsName.total]*1;
                    self.pageNum = data[self.paramsName.pageNumber];
                    self.pageSize = data[self.paramsName.pageSize];

                    self.rowSelectionStates = new Array(self.current.length || 0).fill(false);
                    self.loading = false;
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
            fuckCell:function (comp) {
                console.log(this);
                console.log(comp);
            },
            datatable(fn,...rest){
                this[fn](...rest);
            },
            reload(){
                this.loadData({pageNum: this.pageNum});
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
