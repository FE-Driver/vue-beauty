<template lang="html">

    <div :class="[prefix, sizeClass, borderClass]">
        <div :class="[contentClass, scrollClass]">

            <div v-if="tableBodyHeight" :class="prefix + '-header'"
                 :style="{left:-tableBodyScrollLeft+'px',width:tableBodyWidth}">
                <table :style="{width:tableBodyWidth}">
                    <thead :class="prefix + '-thead'">
                    <tr>
                        <th v-if="checkType" :class="prefix + '-selection-column'">
                            <v-checkbox v-if="checkType=='checkbox'" :value="checkAllState"
                                        @click="checkAllChange" :indeterminate="checkIndeterminate"></v-checkbox>
                        </th>
                        <template v-for="(column,cindex) in columns">
                            <th :class="column.className">
                                <slot name="th" :title="column.title" :column="column" :cindex="cindex">
                                    {{column.title}}
                                </slot>
                                <template v-if="column.sort">
                                    <div :class="prefix + '-column-sorter'">
                                        <span @click="sort(column,'asc')"
                                              :class="prefix + '-column-sorter-up ' + (column.sort == 'asc' ? 'on' : 'off')"
                                              title="↑"><v-icon type="caret-up"></v-icon></span>
                                        <span @click="sort(column,'desc')"
                                              :class="prefix + '-column-sorter-down '+ (column.sort == 'desc' ? 'on' : 'off')"
                                              title="↓"><v-icon type="caret-down"></v-icon></span>
                                    </div>
                                </template>
                            </th>
                        </template>
                    </tr>
                    </thead>
                </table>
            </div>

            <div :class="prefix + '-body'" :style="{height:tableBodyHeight+'px'}" @scroll="scrollTableBody">
                <v-spin :spinning="loading">
                    <table ref="tbody">

                        <thead :class="prefix + '-thead'">
                        <tr>
                            <th v-if="checkType" :class="prefix + '-selection-column'">
                                <v-checkbox v-if="checkType=='checkbox'" :value="checkAllState"
                                            @click="checkAllChange" :indeterminate="checkIndeterminate"></v-checkbox>
                            </th>

                            <template v-for="(column,cindex) in columns">
                                <th :style="{width:column.width}" :class="column.className">
                                    <slot name="th" :title="column.title" :column="column" :cindex="cindex">
                                        {{column.title}}
                                    </slot>
                                    <template v-if="column.sort">
                                        <div :class="prefix + '-column-sorter'">
                                            <span @click="sort(column,'asc')"
                                                  :class="prefix + '-column-sorter-up' + (column.sort == 'asc' ? 'on' : 'off')"
                                                  title="↑"><v-icon type="caret-up"></v-icon></span>
                                            <span @click="sort(column,'desc')"
                                                  :class="prefix + '-column-sorter-down ' + (column.sort == 'desc' ? 'on' : 'off')"
                                                  title="↓"><v-icon type="caret-down"></v-icon></span>
                                        </div>
                                    </template>
                                </th>
                            </template>
                        </tr>
                        </thead>

                        <tbody :class="prefix + '-tbody'" v-show="current.length">
                        <template v-for="(item,index) in current">
                            <tr v-show="!treeTable || item.vshow" @click="clickRow(index)">
                                <td v-if="checkType" :class="prefix + '-selection-column'">
                                    <v-checkbox v-if="checkType=='checkbox'" v-model="rowSelectionStates[index]"
                                                @click.native.stop="rowSelectionChange(index)"></v-checkbox>
                                </td>
                                <td v-for="(column,cindex) in columns">
                                    <template v-if="treeTable && cindex==treeTableOption.position">
                                        <span :class="prefix + '-row-indent indent-level-' + item.level"
                                              :style="{'padding-left':item.paddingLeft}"></span>
                                        <span v-if="item.isparent" @click="toggle(item)"
                                              :class="prefix + '-row-expand-icon ' + prefix + '-row-' + item.vopen"></span>
                                    </template>

                                    <slot name="td" :content="item[column.field]" :item="item" :column="column"
                                          :index="index" :cindex="cindex">
                                        {{item[column.field]}}
                                    </slot>

                                </td>
                            </tr>
                        </template>

                        </tbody>

                        <tbody :class="prefix + '-tbody'" v-if="current.length==0">
                        <tr>
                            <td :colspan="checkType ? columns.length+1 : columns.length" style="text-align:center">
                                <slot name="emptytext">
                                    老板,没有找到你想要的信息......
                                </slot>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </v-spin>
            </div>
        </div>

        <div v-if="pagination && total" :class="prefix + '-footer'">
            <div :class="prefix + '-pagination'">
                <!--todo select组件有bug,导致自定义pageSizeOptions修改每页条数时报错,修改分页重发请求功能后续开发-->
                <v-pagination
                        v-model="pageNumber"
                        :total="total"
                        :show-size-changer="true"
                        @sizechange="pageSizeChange"
                        :page-size-options="pageSizeOptions"
                        :page-size="pageSizeT"
                ></v-pagination>
            </div>
            <div :class="prefix + '-description'">
                共有{{total}}条数据
            </div>
            <div class="clearfix"></div>
        </div>


    </div>


</template>

<script>
    import vPagination from '../pagination'
    import vSpin from '../spin'
    import vIcon from '../icon'
    import vCheckbox from '../checkbox'
    import vRadio from '../radio'

    export default {
        name: 'DataTable',
        props: {
            size: {
                type: String,
                default: "middle"
            },
            //接口地址
            data: {
                type: Function,
                required: true
            },
            //表头信息
            columns: {
                type: Array,
                required: true
            },
            pagination: {
                type: Boolean,
                default: true
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
            pageSizeOptions: {
                type: Array,
                default: function () {
                    return [10, 20, 30, 40, 50];
                }
            },
            // 接口数据结构中各项参数的名称
            responseParamsName: {
                type: Object,
                default: function () {
                    return {}
                }
            },
            //行选择配置
            checkType: {
                type: String,
                validator: function (value) {
                    return value == "checkbox" || value == "radio";
                }
            },
            //距离viewport底部的距离
            bottomGap: {
                type: Number,
                default: 0
            },
            //固定高度
            height: {
                type: Number,
                default: null
            },
            //是否启用树形表格
            treeTable: {
                type: Boolean,
                default: false
            },
            treeTableOption: {
                type: Object,
                default: function () {
                    return {
                        idKey: "id",
                        pidKey: "pid",
                        indent: 4,
                        position: 0,
                        sortKey: null, //启用客户端节点排序，指定排序的字段
                        order: "asc", //排序的顺序,
                        isAsync: false
                    };
                }
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
                borderClass: "ant-table-bordered",
                contentClass: "ant-table-content",
                // 默认加载第一页
                defaultCurrent: 1,
                //加载状态
                loading: false,
                sortParams: {},
//                排序模式:single和multi,单参数和多参数
                sortModel: 'single',
                rowSelectionStates: [],
                tableBodyScrollLeft: 0,
                tableBodyWidth: "100%",
                tableBodyHeight: null,
                pageNumber: this.pageNum,
                pageSizeT: this.pageSize,
                paramsName: {}
            }
        },
        created: function () {
            //初始加载数据
            this.paramsName = Object.assign({}, {
                pageNumber: 'pageNo',
                pageSize: 'pageSize',
                total: 'totalCount',
                results: 'result',
                sortColumns: 'sortColumns'
            }, this.responseParamsName);
            this.getSortParams();
            this.loadData({pageNum: this.pageNumber});
        },
        mounted: function () {
            this.$nextTick(function () {
                var self = this;
                //获取表格实际宽度
                this.calculateSize();

                if (!this.bindResize) {
                    window.addEventListener("resize", function () {
                        self.calculateSize();
                    }, false);
                    self.bindResize = true;
                }
            });
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
                this.$emit('select', msg);
            },
            /**
             * 翻页
             * @param page
             */
            pageChange: function (page) {
                this.pageNumber = page;
                //不直接修改pageNum,传递给loadData,待数据加载成功之后修改pageNum
                this.loadData({pageNum: page});
            },
            /**
             * 修改分页大小
             * @param pageSize
             */
            pageSizeChange: function (current, pageSize) {
//             pageSizeChange改变会同时触发pagenumber改变，为了避免重复loaddata，增加标志位
                this.tempCurrent = current;
                //this.pageNumber = current;
                this.pageSizeT = pageSize;
                this.loadData();
            },
            /**
             * 排序
             * @param pageSize
             */
            sort: function (column, order) {
                if (this.sortModel == "single") {
                    this.setCurrentSort(column, order);
                } else {
                    this.setSortParams(column, order);
                }

                this.loadData();
            },
//            单参数排序模式
            setCurrentSort: function (sortColumn, order) {

                for (var column of this.columns) {
                    if (typeof column.sort == 'string') {
                        column.sort = true;
                    }
                }

                this.currentSort = sortColumn;
                sortColumn.sort = order;
                var sortParams = {};
                sortParams[this.paramsName.sortColumns] = `${sortColumn.field} ${sortColumn.sort} `;
                this.sortParams = sortParams;
            },
            setSortParams: function (sortColumn, order) {
                sortColumn.sort = order;

                var sortStr = "";
                for (var column of this.columns) {
                    if (typeof column.sort == 'string') {
                        sortStr += `${column.field} ${column.sort} `;
                    }
                }
                var sortParams = {};
                sortParams[this.paramsName.sortColumns] = sortStr;
                this.sortParams = sortParams;
            },
            getSortParams: function () {
                var sortStr = "";
                for (var column of this.columns) {
                    if (typeof column.sort == 'string') {
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
                params = Object.assign({}, params);
                var self = this;
                self.loading = true;
                //拼装请求参数
//                const url = this.data;
                const remoteParams = Object.assign({}, this.sortParams);
                remoteParams[this.paramsName.pageNumber] = params.pageNum || self.pageNumber;
                remoteParams[this.paramsName.pageSize] = params.pageSize || this.pageSizeT;

                if(params.pageNum){
                    self.pageNumber = params.pageNum;
                }
                if(params.pageSize){
                    self.pageSizeT = params.pageSize;
                }

                let dataPromise = self.data(remoteParams);

                dataPromise.then((response) => {
                        if(!response) {
                            return;
                        }
                        const data = response;
                        let results = data[self.paramsName.results];

                        //处理treeTable数据
                        if (self.treeTable) {
                            self.dealTreeData(results);
                        } else {
                            self.current = results;
                        }

                        self.total = data[self.paramsName.total] * 1;

                        //重置选择状态
                        self.rowSelectionStates = new Array(self.current.length || 0).fill(false);

                        self.loading = false;
                        //重新计算并设置表格尺寸
                        self.calculateSize();
                    }, (response) => {
                        // error callback
                        self.loading = false;
                    }
                );
            },
            rowSelectionChange: function (index) {
                this.$emit('clickrow', {
                    index: index,
                    checked: this.rowSelectionStates[index],
                    row: this.current[index]
                });
            },
            checkAllChange: function (e) {
                this.rowSelectionStates = new Array(this.current.length || 0).fill(e);
                this.$emit('checkall', e);
            },
            clickRow: function (index) {
                this.$set(this.rowSelectionStates,index,!this.rowSelectionStates[index]);
                this.rowSelectionChange(index);
            },
            //刷新表格数据（使用现有参数）
            refresh(){
                this.loadData();
            },
            //重新加载数据（重置到第一页）
            reload(){
                this.pageNumber = 1;
            },
            //跳转到第几页
            goto(pageNumber){
                if(typeof pageNumber == 'number'){
                    this.pageNumber = pageNumber;
                }else{
                    console.warn("Datatable's goto api using wrong parameters");
                }
            },
            scrollTableBody: function (e) {
                const target = e.target || e.srcElement;
                this.tableBodyScrollLeft = target.scrollLeft;
            },
            //计算并设置表格尺寸
            calculateSize: function () {
                if (!this.$el) {
                    return
                }

                this.$nextTick(function () {
                    var footerHeight = 56;
                    if (this.height) {
                        this.tableBodyHeight = this.height - footerHeight;
                        this.getBodyWidth();
                    } else if (this.bottomGap > 0) {
                        //未设置height属性时，处理bottomGap属性（height属性优先）
                        this.fixGapHeight(footerHeight);
                    }
                });
            },
            getBodyWidth: function () {
                //设置表头表格总宽度
                var tbody = this.$refs.tbody;
                tbody && (this.tableBodyWidth = tbody.offsetWidth + "px");
                //设置表头th宽度
                this.fixHeaderWidth();
            },
            fixHeaderWidth: function () {
                var theader_ths = this.$el.querySelectorAll('div.ant-table-header table>thead>tr>th')
                var tbody_ths = this.$el.querySelectorAll("div.ant-table-body table>thead>tr>th")

                if (theader_ths.length && tbody_ths.length) {
                    for (let [index,el] of theader_ths.entries()) {
                        if (index != theader_ths.length - 1) {
                            el.style.width = tbody_ths[index].offsetWidth + 'px'
                        }
                    }
                } else {
                    this.$nextTick(function () {
                        this.fixHeaderWidth();
                    });
                }
            },
            fixGapHeight: function (footerHeight) {
                var self = this;
                //获取挂载元素在屏幕上的位置
                var rect = self.$el.getBoundingClientRect();
                var winHeight = window.innerHeight;
                var tableBodyHeight = winHeight - this.bottomGap - rect.top - footerHeight;
                //在可见首屏范围内且计算高度至少200时处理，否则不处理
                if (rect.top > 0 && tableBodyHeight >= 200) {
                    this.tableBodyHeight = tableBodyHeight;
                    this.getBodyWidth();
                }
            },
            dealTreeData: function (results) {
                this.originData = results.slice();
                this.newData = [];
                var trData = this.transTreeData(0);
                this.sortTrData(trData);
                this.current = this.newData;
            },
            //处理数据，将一维数组转化为层级结构
            transTreeData: function (pid) {
                var self = this;
                var TreeTableOpt = this.treeTableOption;
                var results = [];
                var children = this.findChildren(pid);
                for (var i = 0; i < children.length; i++) {
                    var obj = children[i];
                    obj['children'] = self.transTreeData(obj[TreeTableOpt.idKey]);
                    obj['level'] = self.getLevel(obj.id);
                    obj.vshow = (obj.level > 1 ? false : true);
                    obj.vopen = (obj.level > 0 ? 'collapsed' : 'expanded');
                    obj.paddingLeft = ((obj.level - 1) * 5 * self.treeTableOption.indent) + "px";
                    results.push(obj);
                }
                TreeTableOpt.sortKey && results.sort(self.sortData);
                return results;
            },
            //输出排序后的一维数组
            sortTrData: function (trData) {
                var self = this;
                for (var i = 0; i < trData.length; i++) {
                    var obj = trData[i];
                    var ch = obj.children;

//                    如果是异步模式，直接使用isparent字段判断是否为父节点；否则使用children长度判断
                    if (!self.treeTableOption.isAsync) {
                        obj.isparent = ch.length ? true : false;
                    }
//                    先插入父节点
                    self.newData.push(obj);
//                     递归插入子节点
                    ch.length && self.sortTrData(ch);
                }
            },
            //对象排序
            sortData: function (a, b) {
                var name = this.treeTableOption.sortKey;
                if (this.treeTableOption.order == "asc") {
                    return a[name] > b[name] ? 1 : -1;
                } else {
                    return a[name] < b[name] ? 1 : -1;
                }
            },
//            查找子节点
            findChildren: function (pid) {
                var self = this;
                var results = [];
                var origindata = this.originData;
                for (var i = 0; i < origindata.length; i++) {
                    if (origindata[i][self.treeTableOption.pidKey] == pid) {
                        results.push(origindata[i]);
                    }
                }
                return results;
            },
//            获取节点层级
            getLevel: function (id) {
                var self = this;
                var origindata = this.originData;
                var TreeTableOpt = this.treeTableOption;
                for (var i = 0; i < origindata.length; i++) {
                    var d = origindata[i];
                    var dataId = d[TreeTableOpt.idKey];
                    var dataPId = d[TreeTableOpt.pidKey];
                    if (d[TreeTableOpt.idKey] == id) {
                        if (id == 0) {
                            return 0;
                        } else if (d[TreeTableOpt.pidKey] == 0) {
                            return 1;
                        } else {
                            return self.getLevel(dataPId) + 1;
                        }
                    }
                }
                return 0;
            },
            /**
             * 折叠或打开节点
             * @param item
             * @param isRecursion 是否递归，关闭节点时需要递归关闭子节点
             */
            toggle: function (item) {
                var self = this;

                if (item.vopen == "collapsed") {
                    this.expand(item);
                } else if (item.vopen == "expanded") {
                    this.collapse(item);
                }

            },
            /**
             * 折叠或打开节点
             * @param item
             */
            expand: function (item) {
                var self = this;

//                if (self.treeTableOption.isAsync && !item.loadChildren) {
//                    self.loadChildren(item);
//                } else {
//                    self.expandChildren(item);
//                }
            },
            collapse: function (item) {
                var self = this;
                item.vopen = "collapsed";
                var vshow = false;

                var children = item.children || [];
                for (var i = 0; i < children.length; i++) {

                    children[i].vshow = vshow;
//                    关闭节点时，所有子孙节点都要关闭
                    self.collapse(children[i]);
                }
                this.calculateSize();
            },
            expandChildren: function (item) {
                var self = this;
                item.vopen = "expanded";
                var vshow = true;

                var children = item.children || [];
                for (var i = 0; i < children.length; i++) {
                    children[i].vshow = vshow;
                }
                this.calculateSize();
            },
            loadChildren: function (item) {
                var self = this;
                self.loading = true;
                //拼装请求参数
                const url = this.data;
                const remoteParams = Object.assign({parentid: item.id}, this.sortParams, this.otherParams);

                this.$http.post(url, remoteParams, {emulateJSON: true}).then((response) => {
                    const data = response.body.data;
                    let results = self.formatter ? self.formatter(data[self.paramsName.results]) : data[self.paramsName.results];

                    if (results.length) {
                        item.loadChildren = true;
                        item.children = self.transAsyncTreeData(results, item.level);
//                        插入到父节点后面
                        var pindex = self.current.findIndex(function (value, index, arr) {
                                    return value.id == item.id;
                                }) + 1;

                        if (pindex == 0) {
                            return false;
                        }

//                    向父节点后面插入子节点数据
                        var newCurrent = self.current.slice(0, pindex).concat(results, self.current.slice(pindex));
                        self.current = newCurrent;

//                    向rowSelectionStates数组中插入子节点数据
                        var newRowSelectionStates = self.rowSelectionStates.slice(0, pindex).concat(new Array(results.length || 0).fill(false), self.rowSelectionStates.slice(pindex));
                        self.rowSelectionStates = newRowSelectionStates;

                        self.expandChildren(item);

                        self.loading = false;
//                    重新计算并设置表格尺寸
                        self.calculateSize();
                    }
                }, (response) => {
                    // error callback
                    self.loading = false;
                });
            },
            transAsyncTreeData: function (results, level) {
                var self = this;
                for (var i = 0; i < results.length; i++) {
                    var obj = results[i];
                    obj['level'] = level + 1;
                    obj.vopen = 'collapsed';
                    obj.vshow = true;
                    obj.paddingLeft = ((obj.level - 1) * 5 * self.treeTableOption.indent) + "px";
                }
                return results;
            }
        },
        computed: {
            sizeClass: function () {
                return this.prefix + "-" + this.size;
            },
            scrollClass: function () {
                if (this.tableBodyHeight) {
                    return this.prefix + "-scroll";
                } else {
                    return "";
                }
            },
            checkIndeterminate:function () {
                if(this.rowSelectionStates.includes(true) && this.rowSelectionStates.includes(false)){
                    return true;
                }else{
                    return false;
                }
            },
            checkAllState: function () {
                // 包含至少一个false
                if(this.rowSelectionStates.includes(false)){
                    // 全部包含false
                    if(!this.rowSelectionStates.includes(true)){
                        return false;
                    }
                }else{
                    return true;
                }
            }
        },
        watch: {
            pageNumber: function () {
                this.$nextTick(() => {
//                    当pagenumber和临时标志位不相等的时候，表示手动触发了pageNumber改变，发送请求
                    (this.tempCurrent != this.pageNumber) && this.refresh();
                });
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