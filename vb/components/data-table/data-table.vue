<template lang="html">

    <div :class="tableCls" :style="{height:tableBodyHeight+'px'}">

        <div :class="prefix + '-header'" :style="{left:-tableBodyScrollLeft+'px',width:tableBodyWidth}">
            <table ref="theader" :style="{width:tableBodyWidth}">
                <thead :class="prefix + '-thead'">
                <tr>
                    <th v-if="checkType" :class="prefix + '-selection-column'">
                        <v-checkbox v-if="checkType=='checkbox'" :value="checkAllState"
                                    @click="checkAllChange" :indeterminate="checkIndeterminate"></v-checkbox>
                    </th>
                    <template v-for="(column,cindex) in columns">
                        <th :class="column.className" @click="column.sort && sort(column)" :style="{cursor:column.sort?'pointer':'text'}">
                            <slot name="th" :title="column.title" :column="column" :cindex="cindex">
                                {{column.title}}
                            </slot>
                            <template v-if="column.sort">
                                <div :class="prefix + '-column-sorter'">
                                    <span @click.stop="sort(column,'asc')" :class="prefix + '-column-sorter-up ' + (column.sort == 'asc' ? 'on' : 'off')" title="↑"><v-icon type="caret-up"></v-icon></span>
                                    <span @click.stop="sort(column,'desc')" :class="prefix + '-column-sorter-down '+ (column.sort == 'desc' ? 'on' : 'off')" title="↓"><v-icon type="caret-down"></v-icon></span>
                                </div>
                            </template>
                        </th>
                    </template>
                </tr>
                </thead>
            </table>
        </div>

        <div ref="content" :class="[contentClass]" @scroll="scrollTableBody" @mouseout="mouseOutTable">

            <div :class="prefix + '-body'">
                <v-spin :spinning="loading" :style="{minHeight: loading?'200px':'auto'}">
                    <table ref="tbody">

                        <thead :class="prefix + '-thead'">
                        <tr>
                            <th v-if="checkType" :class="prefix + '-selection-column'">
                                <v-checkbox v-if="checkType=='checkbox'" :value="checkAllState" @click="checkAllChange" :indeterminate="checkIndeterminate"></v-checkbox>
                            </th>

                            <template v-for="(column,cindex) in columns">
                                <th :style="{width:column.width,cursor:column.sort?'pointer':'text'}" :class="column.className" @click="column.sort && sort(column)">
                                    <slot name="th" :title="column.title" :column="column" :cindex="cindex">
                                        {{column.title}}
                                    </slot>
                                    <template v-if="column.sort">
                                        <div :class="prefix + '-column-sorter'">
                                            <span @click.stop="sort(column,'asc')"
                                                  :class="prefix + '-column-sorter-up ' + (column.sort == 'asc' ? 'on' : 'off')"
                                                  title="↑"><v-icon type="caret-up"></v-icon></span>
                                            <span @click.stop="sort(column,'desc')"
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
                            <tr v-show="!treeTable || item.vshow" @click="clickRow(index)" @mouseover="hoverRow(index)" :class="getRowClass(index)">
                                <td v-if="checkType" :class="prefix + '-selection-column'">
                                    <v-checkbox v-show="!treeTable || item.level ==1" v-model="item['vb_dt_checked']" @click.native.stop="rowSelectionChange(index)"></v-checkbox>
                                </td>
                                <td v-for="(column,cindex) in columns">
                                    <template v-if="treeTable && cindex==treeTableOption.position">
                                        <span :class="prefix + '-row-indent indent-level-' + item.level" :style="{'padding-left':item.paddingLeft}"></span>
                                        <span v-if="item.isparent" @click="toggle(item,index)" :class="prefix + '-row-expand-icon ' + prefix + '-row-' + (item.vopen ? 'expanded' : 'collapsed')"></span>
                                    </template>

                                    <slot name="td" :content="item[column.field]" :item="item" :column="column" :index="index" :cindex="cindex">
                                        {{item[column.field]}}
                                    </slot>

                                </td>
                            </tr>
                        </template>

                        </tbody>

                        <tbody :class="prefix + '-tbody'" v-if="initFlag && current.length==0">
                        <tr>
                            <td :colspan="checkType ? columns.length+1 : columns.length" style="text-align:center">
                                <slot name="emptytext">
                                    {{emptyText}}
                                </slot>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </v-spin>
            </div>

            <div v-if="fixedLeft && current.length" :class="prefix + '-fixed-left'" :style="{left:tableBodyScrollLeft+'px'}">
                <div :class="prefix + '-body-outer'">
                    <div :class="prefix + '-body-inner'">
                        <table :class="prefix + '-fixed'">

                            <colgroup ref="fixedLeftCols">
                                <col v-if="checkType" />
                                <template v-for="(column,cindex) in columns">
                                    <col v-if="cindex < fixedLeft">
                                </template>
                            </colgroup>

                            <thead :class="prefix + '-thead'">
                            <tr>
                                <th v-if="checkType" :class="prefix + '-selection-column'">
                                    <v-checkbox v-if="checkType=='checkbox'"></v-checkbox>
                                </th>

                                <template v-for="(column,cindex) in columns">
                                    <th v-if="cindex < fixedLeft" :class="column.className">
                                        <slot name="th" :title="column.title" :column="column" :cindex="cindex">
                                            {{column.title}}
                                        </slot>
                                    </th>
                                </template>
                            </tr>
                            </thead>

                            <tbody :class="prefix + '-tbody'" v-show="current.length">
                            <template v-for="(item,index) in current">
                                <tr v-show="!treeTable || item.vshow" @click="clickRow(index)" @mouseover="hoverRow(index)" :class="getRowClass(index)">
                                    <td v-if="checkType" :class="prefix + '-selection-column'">
                                        <v-checkbox v-if="checkType=='checkbox'" v-model="item['vb_dt_checked']" @click.native.stop="rowSelectionChange(index)"></v-checkbox>
                                    </td>
                                    <td v-if="cindex < fixedLeft" v-for="(column,cindex) in columns">
                                        <template v-if="treeTable && cindex==treeTableOption.position">
                                            <span :class="prefix + '-row-indent indent-level-' + item.level" :style="{'padding-left':item.paddingLeft}"></span>
                                            <span v-if="item.isparent" @click="toggle(item,index)" :class="prefix + '-row-expand-icon ' + prefix + '-row-' + (item.vopen ? 'expanded' : 'collapsed')"></span>
                                        </template>

                                        <slot name="td" :content="item[column.field]" :item="item" :column="column"
                                              :index="index" :cindex="cindex">
                                            {{item[column.field]}}
                                        </slot>

                                    </td>
                                </tr>
                            </template>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

            <div v-if="fixedRight && current.length" :class="prefix + '-fixed-right'" :style="{right:-tableBodyScrollLeft+'px'}">
                <div :class="prefix + '-body-outer'">
                    <div :class="prefix + '-body-inner'">
                        <table :class="prefix + '-fixed'">

                            <colgroup ref="fixedRightCols">
                                <template v-for="(column,cindex) in columns">
                                    <col v-if="cindex >= columns.length - fixedRight">
                                </template>
                            </colgroup>

                            <thead :class="prefix + '-thead'">
                            <tr>
                                <template v-for="(column,cindex) in columns">
                                    <th v-if="cindex >= columns.length - fixedRight" :class="column.className">
                                        <slot name="th" :title="column.title" :column="column" :cindex="cindex">
                                            {{column.title}}
                                        </slot>
                                    </th>
                                </template>
                            </tr>
                            </thead>

                            <tbody :class="prefix + '-tbody'" v-show="current.length">
                            <template v-for="(item,index) in current">
                                <tr v-show="!treeTable || item.vshow" @click="clickRow(index)" @mouseover="hoverRow(index)" :class="getRowClass(index)">
                                    <td v-if="cindex >= columns.length - fixedRight" v-for="(column,cindex) in columns">

                                        <slot name="td" :content="item[column.field]" :item="item" :column="column"
                                              :index="index" :cindex="cindex">
                                            {{item[column.field]}}
                                        </slot>

                                    </td>
                                </tr>
                            </template>

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="fixedLeft" :class="prefix + '-fixed-left'">
            <div :class="prefix + '-body-outer'">
                <div :class="prefix + '-body-inner'">
                    <table :class="prefix + '-fixed'" ref="fixedLeftHeader">

                        <thead :class="prefix + '-thead'">
                        <tr>
                            <th style="display:inline-block;overflow:hidden" v-if="checkType" :class="prefix + '-selection-column'">
                                <v-checkbox v-if="checkType=='checkbox'" :value="checkAllState" @click="checkAllChange" :indeterminate="checkIndeterminate"></v-checkbox>
                            </th>

                            <template v-for="(column,cindex) in columns">
                                <th style="display:inline-block;overflow:hidden" v-if="cindex < fixedLeft" :class="column.className" @click="column.sort && sort(column)" :style="{cursor:column.sort?'pointer':'text'}">
                                    <slot name="th" :title="column.title" :column="column" :cindex="cindex">
                                        {{column.title}}
                                    </slot>
                                    <template v-if="column.sort">
                                        <div :class="prefix + '-column-sorter'">
                                            <span @click.stop="sort(column,'asc')"
                                                  :class="prefix + '-column-sorter-up ' + (column.sort == 'asc' ? 'on' : 'off')"
                                                  title="↑"><v-icon type="caret-up"></v-icon></span>
                                            <span @click.stop="sort(column,'desc')"
                                                  :class="prefix + '-column-sorter-down ' + (column.sort == 'desc' ? 'on' : 'off')"
                                                  title="↓"><v-icon type="caret-down"></v-icon></span>
                                        </div>
                                    </template>
                                </th>
                            </template>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

        <div v-if="fixedRight" :class="prefix + '-fixed-right'" :style="{paddingRight:(isFixScrollbar ? scrollbarWidth : 0)+'px'}">
            <div :class="prefix + '-body-outer'">
                <div :class="prefix + '-body-inner'">
                    <table :class="prefix + '-fixed'" ref="fixedRightHeader">

                        <thead :class="prefix + '-thead'">
                        <tr>
                            <template v-for="(column,cindex) in columns">
                                <th style="display:inline-block;overflow:hidden" v-if="cindex >= columns.length - fixedRight" :class="column.className" @click="column.sort && sort(column)"  :style="{cursor:column.sort?'pointer':'text'}">
                                    <slot name="th" :title="column.title" :column="column" :cindex="cindex">
                                        {{column.title}}
                                    </slot>
                                    <template v-if="column.sort">
                                        <div :class="prefix + '-column-sorter'">
                                            <span @click.stop="sort(column,'asc')"
                                                  :class="prefix + '-column-sorter-up ' + (column.sort == 'asc' ? 'on' : 'off')"
                                                  title="↑"><v-icon type="caret-up"></v-icon></span>
                                            <span @click.stop="sort(column,'desc')"
                                                  :class="prefix + '-column-sorter-down ' + (column.sort == 'desc' ? 'on' : 'off')"
                                                  title="↓"><v-icon type="caret-down"></v-icon></span>
                                        </div>
                                    </template>
                                </th>
                            </template>
                        </tr>
                        </thead>
                    </table>
                </div>
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
                        :size="paginationSize"
                ></v-pagination>
            </div>
            <div :class="prefix + '-description pull-left'">
                <slot name="footerinfo" :total="total" pageNumber="pageNumber">
                    共有{{total}}条数据
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
import debounce from 'lodash/debounce';
import vPagination from '../pagination';
import vSpin from '../spin';
import vIcon from '../icon';
import vCheckbox from '../checkbox';
import vRadio from '../radio';

export default {
    name: 'DataTable',
    props: {
        size: {
            type: String,
            default: 'large',
        },
        // 数据加载函数，返回值必须是Promise;
        // 默认情况下必须传递data参数；如果使用本地数据渲染表格，业务代码中将获取本地数据包装为Promise即可。
        // currentData用于向外暴露表格当前渲染的数据，业务开发中也可以直接修改currentData，从而重新渲染表格（仅推荐用于客户端排序、数据过滤等场景）
        data: {
            type: Function,
            required: true,
        },
        // 当前表格数据
        currentData: {
            type: Array,
            default() {
                return [];
            },
        },
        // 表头信息
        columns: {
            type: Array,
            required: true,
        },
        pagination: {
            type: Boolean,
            default: true,
        },
        // 斑马纹
        stripe: {
            type: Boolean,
            default: false,
        },
        // 边框
        bordered: {
            type: Boolean,
            default: false,
        },
        // 分页大小
        pageSize: {
            type: Number,
            default: 10,
        },
        // 当前页数
        pageNum: {
            type: Number,
            default: 1,
        },
        pageSizeOptions: {
            type: Array,
            default() {
                return [10, 20, 30, 40, 50];
            },
        },
        // 接口数据结构中各项参数的名称
        responseParamsName: {
            type: Object,
            default() {
                return {};
            },
        },
        // 行选择配置
        checkType: {
            type: String,
            validator(value) {
                return value === 'checkbox' || value === 'radio';
            },
        },
        // 点击行选中
        rowClickChecked: {
            type: Boolean,
            default: false,
        },
        // 距离viewport底部的距离
        bottomGap: {
            type: Number,
            default: 0,
        },
        // 固定高度
        height: {
            type: Number,
            default: null,
        },
        // 左侧固定列
        fixedLeft: {
            type: Number,
            default: 0,
        },
        // 右侧固定列
        fixedRight: {
            type: Number,
            default: 0,
        },
        // 是否启用树形表格
        treeTable: {
            type: Boolean,
            default: false,
        },
        treeOption: {
            type: Object,
            default() {
                return {};
            },
        },
        emptyText: {
            type: String,
            default: '老板,没有找到你想要的信息......',
        },
    },
    /*
     我们应当使用一个函数作为 data 选项，让这个函数返回一个新对象
     不能直接简单地把一个对象作为组件的data选项,这会导致所有的实例将共享同一个 data 对象！
     */
    data() {
        return {
            // 当前分页数据,默认没有
            current: [],
            initFlag: false,
            // 默认总数
            total: 0,
            // class前缀
            prefix: 'ant-table',
            contentClass: 'ant-table-content',
            // 默认加载第一页
            defaultCurrent: 1,
            // 加载状态
            loading: false,
            sortParams: {},
            //                排序模式:single和multi,单参数和多参数
            sortModel: 'single',
            rowSelectionStates: [],
            tableBodyScrollLeft: 0,
            tableBodyWidth: '100%',
            tableBodyHeight: null,
            pageNumber: this.pageNum,
            pageSizeT: this.pageSize,
            paramsName: {},
            // 是否修正滚动条宽度误差（在fixedRight模式下，右侧固定表头由于定位基点不同，需要修正滚动条宽度误差，仅限于存在竖向滚动条时）
            isFixScrollbar: false,
            // 滚动条宽度
            scrollbarWidth: 15,
            hoverIndex: null,
        };
    },
    created() {
        // 数据请求参数配置
        this.paramsName = Object.assign({}, {
            pageNumber: 'pageNo',
            pageSize: 'pageSize',
            total: 'totalCount',
            results: 'result',
            sortColumns: 'sortColumns',
        }, this.responseParamsName);

        // treetable配置项
        this.treeTableOption = Object.assign({}, {
            idKey: 'id',
            pidKey: 'pid',
            indent: 4,
            position: 0,
            sortKey: null, // 启用客户端节点排序，指定排序的字段
            order: 'asc', // 排序的顺序,
            isAsync: false,
            loadChildren: null,
        }, this.treeOption);

        this.getSortParams();
        this.loadData({ pageNum: this.pageNumber });

        if (this.fixedRight) {
            this.scrollbarWidth = this.getScrollbarWidth();
        }

        if (!this.bindResize) {
            window.addEventListener('resize', this.calculateSize);
            this.bindResize = true;
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.calculateSize();
        });
    },
    updated() {
        this.debounceCalculate();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.calculateSize);
    },
    methods: {
        getScrollbarWidth() {
            const outer = document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.width = '100px';
            outer.style.position = 'fixed';
            document.body.appendChild(outer);
            const widthNoScroll = outer.offsetWidth;
            // force scrollbars
            outer.style.overflow = 'scroll';
            // add innerdiv
            const inner = document.createElement('div');
            inner.style.width = '100%';
            outer.appendChild(inner);
            const widthWithScroll = inner.offsetWidth;
            // remove divs
            outer.parentNode.removeChild(outer);
            return widthNoScroll - widthWithScroll;
        },
        clickCheck(index, event) {
            // 组装消息
            const item = this.items[index];
            const msg = Object.assign({
                index,
                checked: event.target.checked,
            }, item);
            // 派发事件
            this.$emit('select', msg);
        },
        /**
         * 翻页
         * @param page
         */
        pageChange(page) {
            this.pageNumber = page;
            // 不直接修改pageNum,传递给loadData,待数据加载成功之后修改pageNum
            this.loadData({ pageNum: page });
        },
        /**
         * 修改分页大小
         * @param pageSize
         */
        pageSizeChange(current, pageSize) {
            this.pageSizeT = pageSize;
            if (current === this.pageNumber) this.loadData();
        },
        /**
         * 排序
         * @param pageSize
         */
        sort(column, order) {
            if (this.sortModel === 'single') {
                this.setCurrentSort(column, order);
            } else {
                this.setSortParams(column, order);
            }

            this.loadData();
        },
        //            单参数排序模式
        setCurrentSort(sortColumn, order) {
            if (!order) {
                switch (sortColumn.sort) {
                    case 'asc':
                        order = 'desc';
                        break;
                    case 'desc':
                        order = true;
                        break;
                    default:
                        order = 'asc';
                        break;
                }
            }

            for (const column of this.columns) {
                if (typeof column.sort === 'string') {
                    column.sort = true;
                }
            }

            this.currentSort = sortColumn;
            sortColumn.sort = order;
            const sortParams = {};
            if (order === 'asc' || order === 'desc') {
                sortParams[this.paramsName.sortColumns] = `${sortColumn.field} ${sortColumn.sort} `;
            }
            this.sortParams = sortParams;
        },
        setSortParams(sortColumn, order) {
            sortColumn.sort = order;

            let sortStr = '';
            for (const column of this.columns) {
                if (typeof column.sort === 'string') {
                    sortStr += `${column.field} ${column.sort} `;
                }
            }
            const sortParams = {};
            sortParams[this.paramsName.sortColumns] = sortStr;
            this.sortParams = sortParams;
        },
        getSortParams() {
            let sortStr = '';
            for (const column of this.columns) {
                if (typeof column.sort === 'string') {
                    sortStr += `${column.field} ${column.sort} `;
                }
            }
            const sortParams = {};
            sortParams[this.paramsName.sortColumns] = sortStr;
            this.sortParams = sortParams;
            return this.sortParams;
        },
        /**
         * 加载数据
         * @param params
         */
        loadData(params) {
            params = Object.assign({}, params);
            this.loading = true;
            // 拼装请求参数
            const remoteParams = Object.assign({}, this.sortParams);
            remoteParams[this.paramsName.pageNumber] = params.pageNum || this.pageNumber;
            remoteParams[this.paramsName.pageSize] = params.pageSize || this.pageSizeT;

            if (params.pageNum) {
                this.pageNumber = params.pageNum;
            }
            if (params.pageSize) {
                this.pageSizeT = params.pageSize;
            }

            const dataPromise = this.data(remoteParams);

            dataPromise.then((response) => {
                this.initFlag = true;
                if (!response) {
                    this.loading = false;
                    return;
                }
                const results = response[this.paramsName.results];

                // 处理treeTable数据
                if (this.treeTable) {
                    this.dealTreeData(results);
                } else {
                    this.current = results;
                }

                // 将数据更新至父组件
                this.$emit('update:currentData', this.current.slice());
                // 专门发送dataloaded事件
                this.$emit('dataloaded', this.current.slice());

                this.checkType && this.initCheckSatatus();

                this.total = response[this.paramsName.total] * 1;

                this.loading = false;
            }).catch(() => {
                // error callback
                this.loading = false;
            });
        },
        initCheckSatatus() {
            this.rowSelectionStates = [];
            for (const item of this.current) {
                item.vb_dt_checked = !!item.vb_dt_checked;
                this.rowSelectionStates.push(item.vb_dt_checked);
            }

            // 将数据更新至父组件
            this.$emit('update:currentData', this.current.slice());
        },
        /**
         * 补充checked数据
         * @param params
         */
        patchCheckSatatus(value) {
            this.rowSelectionStates = [];
            for (const item of this.current) {
                item.vb_dt_checked = value;
                this.rowSelectionStates.push(value);
            }

            // 将数据更新至父组件
            this.$emit('update:currentData', this.current.slice());
        },
        checkAllChange(e) {
            this.patchCheckSatatus(e);
            this.$emit('checkall', e);
        },
        getCheckedData() {
            const res = [];
            for (const item of this.current) {
                if (item.vb_dt_checked) {
                    res.push({ ...item });
                }
            }
            return res;
        },
        rowSelectionChange(index) {
            // firefox上checkbox对应的值没有立即更新，延时获取
            setTimeout(() => {
                this.$set(this.rowSelectionStates, index, this.current[index].vb_dt_checked);

                this.$emit('clickrow', {
                    index,
                    checked: this.rowSelectionStates[index],
                    row: this.current[index],
                });
                // 将数据更新至父组件
                this.$emit('update:currentData', this.current.slice());
            }, 200);
        },
        clickRow(index) {
            // 点击行后是否选中
            if (this.rowClickChecked) {
                this.current[index].vb_dt_checked = !this.current[index].vb_dt_checked;
            }
            this.rowSelectionChange(index);
        },
        setChecked(index, status = true) {
            this.current[index].vb_dt_checked = status;
            // firefox上checkbox对应的值没有立即更新，延时获取
            setTimeout(() => {
                this.$set(this.rowSelectionStates, index, status);

                // 将数据更新至父组件
                this.$emit('update:currentData', this.current.slice());
            }, 200);
        },
        hoverRow(index) {
            this.hoverIndex = index;
        },
        getRowClass(index) {
            return [
                `${this.prefix}-row`,
                {
                    [`${this.prefix}-row-selected`]: this.rowSelectionStates[index],
                    [`${this.prefix}-row-hover`]: (this.fixedLeft || this.fixedRight) && index === this.hoverIndex,
                },
            ];
        },
        mouseOutTable() {
            this.hoverIndex = null;
        },
        // 刷新表格数据（使用现有参数）
        refresh() {
            this.loadData();
        },
        // 重新加载数据（重置到第一页）
        reload() {
            if (this.pageNumber === 1) {
                this.loadData();
            } else {
                this.pageNumber = 1;
            }
        },
        // 跳转到第几页
        goto(pageNumber) {
            if (typeof pageNumber === 'number') {
                this.pageNumber = pageNumber;
            } else {
                console.warn("Datatable's goto api using wrong parameters");
            }
        },
        scrollTableBody(e) {
            const target = e.target || e.srcElement;
            this.tableBodyScrollLeft = target.scrollLeft;
        },
        // 延时计算尺寸，用于组件内部re-render变化时重新计算
        debounceCalculate: debounce(function () {
            this.calculateSize();
        }, 200),
        // 计算并设置表格尺寸
        calculateSize() {
            if (!this.$el) return;

            if (this.height) {
                this.tableBodyHeight = this.height;
            } else if (this.bottomGap > 0) {
                // 未设置height属性时，处理bottomGap属性（height属性优先）
                this.fixGapHeight();
            }
            this.getBodyWidth();
            this.fixHeaderWidth();
        },
        getBodyWidth() {
            // 设置表头表格总宽度
            const tbody = this.$refs.tbody;
            tbody && (this.tableBodyWidth = `${tbody.offsetWidth}px`);
        },
        // 修正各个表头的宽度
        fixHeaderWidth() {
            const theader = this.$refs.theader;
            const lettheaderThs = theader && theader.querySelectorAll('thead>tr>th');
            const tbody = this.$refs.tbody;
            const tbodyThs = tbody && tbody.querySelectorAll('thead>tr>th');

            let condition = !!(theader && lettheaderThs.length && tbody && tbodyThs.length);
            let fixedLeftThs;
            let fixedLeftCols;
            let fixedRightThs;
            let fixedRightCols;

            for (const [index, el] of lettheaderThs.entries()) {
                if (index !== lettheaderThs.length - 1) {
                    el.style.width = `${tbodyThs[index].offsetWidth}px`;
                }
            }
            if (this.fixedLeft) {
                const fixedLeftHeader = this.$refs.fixedLeftHeader;
                fixedLeftThs = fixedLeftHeader && fixedLeftHeader.querySelectorAll('thead>tr>th');
                const fixedLeftColgroup = this.$refs.fixedLeftCols;
                fixedLeftCols = fixedLeftColgroup && fixedLeftColgroup.querySelectorAll('col');

                condition = condition && !!(fixedLeftHeader && fixedLeftThs.length && fixedLeftColgroup && fixedLeftCols.length);
            }

            if (this.fixedRight) {
                this.isFixScrollbar = this.$refs.content ? this.$refs.content.scrollHeight > this.$refs.content.clientHeight : false;

                const fixedRightHeader = this.$refs.fixedRightHeader;
                fixedRightThs = fixedRightHeader && fixedRightHeader.querySelectorAll('thead>tr>th');
                const fixedRightColgroup = this.$refs.fixedRightCols;
                fixedRightCols = fixedRightColgroup && fixedRightColgroup.querySelectorAll('col');

                condition = condition && !!(fixedRightHeader && fixedRightThs.length && fixedRightColgroup && fixedRightCols.length);
            }

            if (condition) {
                for (const [index, el] of lettheaderThs.entries()) {
                    if (index !== lettheaderThs.length - 1) {
                        el.style.width = `${tbodyThs[index].offsetWidth}px`;
                    }
                }

                if (this.fixedLeft) {
                    if (fixedLeftThs.length) {
                        for (const [index, el] of fixedLeftThs.entries()) {
                            const w = `${tbodyThs[index].offsetWidth}px`;
                            el.style.width = w;
                            fixedLeftCols[index].style.width = w;
                        }
                    }
                }

                if (this.fixedRight) {
                    if (fixedRightThs.length) {
                        for (const [index, el] of fixedRightThs.entries()) {
                            // 从右侧开始计算
                            const i = tbodyThs.length - this.fixedRight + index;
                            const w = `${tbodyThs[i].offsetWidth}px`;
                            el.style.width = w;
                            fixedRightCols[index].style.width = w;
                        }
                    }
                }
            } else {
                setTimeout(() => {
                    this.fixHeaderWidth();
                }, 100);
            }
        },
        fixGapHeight() {
            // 获取挂载元素在屏幕上的位置
            const rect = this.$el.getBoundingClientRect();
            const winHeight = window.innerHeight;
            const tableBodyHeight = winHeight - this.bottomGap - rect.top;
            // 在可见首屏范围内且计算高度至少200时处理，否则不处理
            if (rect.top > 0 && tableBodyHeight >= 200) {
                this.tableBodyHeight = tableBodyHeight;
            }
        },
        dealTreeData(results) {
            this.originData = results.slice();
            this.newData = [];
            const trData = this.transTreeData(0);
            this.sortTrData(trData);
            this.current = this.newData;
        },
        // 处理数据，将一维数组转化为层级结构
        transTreeData(pid) {
            const TreeTableOpt = this.treeTableOption;
            const results = [];
            const children = this.findChildren(pid);
            for (let i = 0; i < children.length; i++) {
                const obj = children[i];
                obj.children = this.transTreeData(obj[TreeTableOpt.idKey]);
                obj.level = this.getLevel(obj.id);
                obj.vshow = !(obj.level > 1);
                obj.vopen = !(obj.level > 0);
                obj.paddingLeft = `${(obj.level - 1) * 12 * this.treeTableOption.indent}px`;
                results.push(obj);
            }
            TreeTableOpt.sortKey && results.sort(this.sortData);
            return results;
        },
        // 输出排序后的一维数组
        sortTrData(trData) {
            for (let i = 0; i < trData.length; i++) {
                const obj = trData[i];
                const ch = obj.children;

                //                    如果是异步模式，直接使用isparent字段判断是否为父节点；否则使用children长度判断
                if (!this.treeTableOption.isAsync) {
                    obj.isparent = !!ch.length;
                }
                //                    先插入父节点
                this.newData.push(obj);
                //                     递归插入子节点
                ch.length && this.sortTrData(ch);
            }
        },
        // 对象排序
        sortData(a, b) {
            const name = this.treeTableOption.sortKey;
            if (this.treeTableOption.order === 'asc') {
                return a[name] > b[name] ? 1 : -1;
            }
            return a[name] < b[name] ? 1 : -1;
        },
        //            查找子节点
        findChildren(pid) {
            const results = [];
            const origindata = this.originData;
            for (let i = 0; i < origindata.length; i++) {
                if (origindata[i][this.treeTableOption.pidKey] === pid) {
                    results.push(origindata[i]);
                }
            }
            return results;
        },
        //            获取节点层级
        getLevel(id) {
            const origindata = this.originData;
            const TreeTableOpt = this.treeTableOption;
            for (let i = 0; i < origindata.length; i++) {
                const d = origindata[i];
                const dataPId = d[TreeTableOpt.pidKey];
                if (d[TreeTableOpt.idKey] === id) {
                    if (id === 0) {
                        return 0;
                    } else if (d[TreeTableOpt.pidKey] === 0) {
                        return 1;
                    }
                    return this.getLevel(dataPId) + 1;
                }
            }
            return 0;
        },
        /**
         * 折叠或打开节点
         * @param item
         * @param isRecursion 是否递归，关闭节点时需要递归关闭子节点
         */
        toggle(item, index) {
            if (item.vopen) {
                this.collapse(item);
            } else {
                this.expand(item, index);
            }
        },
        /**
         * 折叠或打开节点
         * @param item
         */
        expand(item, index) {
            if (this.treeTableOption.isAsync && !item.childrenLoaded) {
                this.loadChildren(item, index);
            } else {
                this.expandChildren(item);
            }
        },
        collapse(item) {
            item.vopen = false;
            const vshow = false;

            const children = item.children || [];
            for (let i = 0; i < children.length; i++) {
                children[i].vshow = vshow;
                //                    关闭节点时，所有子孙节点都要关闭
                this.collapse(children[i]);
            }
            this.calculateSize();
        },
        expandChildren(parent) {
            parent.vopen = true;
            const vshow = true;

            const children = parent.children || [];
            for (let i = 0; i < children.length; i++) {
                children[i].vshow = vshow;
            }
        },
        loadChildren(parent, pIndex) {
            if (!this.treeTableOption.loadChildren) {
                console.error('datatable:treetable need loadChildren function');
                return;
            }
            this.loading = true;
            // 拼装请求参数
            const remoteParams = Object.assign({ parentid: parent.id }, this.sortParams);

            const childrenPromise = this.treeTableOption.loadChildren(remoteParams);
            childrenPromise.then((response) => {
                const results = response[this.paramsName.results];
                if (results.length) {
                    parent.childrenLoaded = true;
                    parent.children = this.transAsyncTreeData(results, parent.level);

                    const pindex = pIndex + 1;

                    // 向父节点后面插入子节点数据
                    const newCurrent = this.current.slice(0, pindex).concat(results, this.current.slice(pindex));
                    this.current = newCurrent;

                    // 向rowSelectionStates数组中插入子节点数据
                    const newRowSelectionStates = this.rowSelectionStates.slice(0, pindex).concat(new Array(results.length || 0).fill(false), this.rowSelectionStates.slice(pindex));
                    this.rowSelectionStates = newRowSelectionStates;

                    this.expandChildren(parent);
                }
                this.loading = false;
            }, () => {
                this.loading = false;
            });
        },
        transAsyncTreeData(results, level) {
            for (let i = 0; i < results.length; i++) {
                const obj = results[i];
                obj.level = level + 1;
                obj.vopen = false;
                obj.vshow = true;
                obj.paddingLeft = `${(obj.level - 1) * 12 * this.treeTableOption.indent}px`;
            }

            this.treeTableOption.sortKey && results.sort(this.sortData);
            return results;
        },
    },
    computed: {
        tableCls() {
            return [
                this.prefix,
                `${this.prefix}-${this.size}`,
                { [`${this.prefix}-bordered`]: this.bordered },
                { [`${this.prefix}-stripe`]: this.stripe },
            ];
        },
        checkIndeterminate() {
            if (this.rowSelectionStates.includes(true) && this.rowSelectionStates.includes(false)) {
                return true;
            }
            return false;
        },
        checkAllState() {
            // 包含至少一个false
            if (this.rowSelectionStates.includes(false)) {
                // 全部包含false
                if (!this.rowSelectionStates.includes(true)) {
                    return false;
                }
            } else {
                return true;
            }
        },
        paginationSize() {
            if (this.size === 'large') return '';
            return 'small';
        },
    },
    watch: {
        pageNumber() {
            this.refresh();
        },
        current() {
            this.$nextTick(() => {
                this.$refs.content.scrollLeft = 0;
                this.calculateSize();
            });
        },
        currentData(val) {
            if (val) {
                this.current = this.currentData;
            }
        },
    },
    components: {
        vPagination,
        vSpin,
        vIcon,
        vCheckbox,
        vRadio,
    },
};
</script>
