<template>
	<div :class="prefixCls">
		<list
		  :filter="leftFilter"
		  :handle-filter = "handleLeftFilter"
		  :handle-clear="handleLeftClear"
		  :prefix-cls="prefixCls + '-list'"
		  :data-source="leftDataSource"
		  :handle-select="handleLeftSelect"
		  :handle-select-all="handleLeftSelectAll"
		  :checked-keys="leftCheckedKeys"
		  :label="label"
		  :title-text="titles[0]"
		  :style="listStyle"
		  :class-name="className"
		  :show-search="showSearch"
		  :search-placeholder="searchPlaceholder"
		  :not-found-content="notFoundContent"
		  :filter-option="filterOption"
		 >
		 	<slot name="leftFooter"></slot>
		 </list>
		<operation
		  :prefix-cls="prefixCls"
		  :operations="operations"
		  :left-active="leftActive"
		  :right-active="rightActive"
		  :move-to-left = "moveToLeft"
		  :move-to-right = "moveToRight"
		 ></operation>
		<list
		  :filter="rightFilter"
		  :handle-filter = "handleRightFilter"
		  :handle-clear="handleRightClear"
		  :prefix-cls="prefixCls + '-list'"
		  :data-source="rightDataSource"
		  :handle-select="handleRightSelect"
		  :handle-select-all="handleRightSelectAll"
		  :checked-keys="rightCheckedKeys"
		  :label="label"
		  :title-text="titles[1]"
		  :style="listStyle"
		  :class-name="className"
		  :show-search="showSearch"
		  :search-placeholder="searchPlaceholder"
		  :not-found-content="notFoundContent"
		  :filter-option="filterOption"
		 >
		 	<slot name="rightFooter"></slot>
		 </list>
	</div>
</template>
<script>
import { t } from '../../locale';
import list from './list';
import operation from './operation';

function noop() { }
export default {
    name: 'Transfer',
    components: {
        list,
        operation,
    },
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        label: {
            type: Function,
            default: noop,
        },
        targetKeys: {
            type: Array,
            default: () => [],
        },
        listStyle: Object,
        className: String,
        titles: {
            type: Array,
            default: () => ['', ''],
        },
        operations: {
            type: Array,
            default: () => [],
        },
        showSearch: {
            type: Boolean,
            default: false,
        },
        filterOption: Function,
        searchPlaceholder: {
            type: String,
            default: () => t('transfer.searchPlaceholder'),
        },
        notFoundContent: {
            type: String,
            default: () => t('transfer.notFoundContent'),
        },
    },
    data() {
        return {
            prefixCls: 'ant-transfer',
            leftCheckedKeys: [],
            rightCheckedKeys: [],
            leftDataSource: [],
            rightDataSource: [],
            leftActive: false,
            rightActive: false,
            leftFilter: '',
            rightFilter: '',
        };
    },
    watch: {
        leftCheckedKeys() {
            this.leftActive = this.leftCheckedKeys.length > 0;
        },
        rightCheckedKeys() {
            this.rightActive = this.rightCheckedKeys.length > 0;
        },
        targetKeys() {
            this.splitDataSource();
        },
    },
    created() {
        this.leftCheckedKeys = this.leftCheckedKeys
            .filter(data => this.data
                .filter(item => item.key === data).length)
            .filter(data => this.targetKeys
                .filter(key => key === data).length === 0);
        this.rightCheckedKeys = this.rightCheckedKeys
            .filter(data => this.data
                .filter(item => item.key === data).length)
            .filter(data => this.targetKeys
                .filter(key => key === data).length > 0);
        this.splitDataSource();
    },
    methods: {
        splitDataSource() {
            this.leftDataSource = [...this.data];
            this.rightDataSource = [];
            if (this.targetKeys.length > 0) {
                this.targetKeys.forEach((targetKey) => {
                    this.rightDataSource.push(this.leftDataSource.filter((data, index) => {
                        if (data.key === targetKey) {
                            this.leftDataSource.splice(index, 1);
                            return true;
                        }
                        return false;
                    })[0]);
                });
            }
        },
        handleLeftSelect(selectedItem, checked) {
            this.handleSelect('left', selectedItem, checked);
        },
        handleRightSelect(selectedItem, checked) {
            this.handleSelect('right', selectedItem, checked);
        },
        handleSelect(direction, selectedItem, checked) {
            const leftCheckedKeys = this.leftCheckedKeys;
            const rightCheckedKeys = this.rightCheckedKeys;
            const holder = direction === 'left' ? [...leftCheckedKeys] : [...rightCheckedKeys];
            let index;
            holder.forEach((key, i) => {
                if (key === selectedItem.key) {
                    index = i;
                }
            });
            if (index > -1) {
                holder.splice(index, 1);
            }
            if (checked) {
                holder.push(selectedItem.key);
            }
            this[`${direction}CheckedKeys`] = holder;
        },
        handleSelectAll(direction, filteredDataSource, checkAll) {
            const holder = checkAll ? filteredDataSource
                .map(item => item.key) : [];
            this[`${direction}CheckedKeys`] = holder;
        },
        handleLeftSelectAll(...args) {
            this.handleSelectAll('left', ...args);
        },
        handleRightSelectAll(...args) {
            this.handleSelectAll('right', ...args);
        },
        moveTo(direction) {
            const targetKeys = this.targetKeys;
            const key = direction === 'right' ? 'leftCheckedKeys' : 'rightCheckedKeys';
            const moveKeys = this[key];
            const newTargetKeys = direction === 'right' ? moveKeys.concat(targetKeys) : targetKeys.filter(targetKey => !moveKeys.some(checkedKey => targetKey === checkedKey));
            this[key] = [];
            this.$emit('change', newTargetKeys, direction, moveKeys);
        },
        moveToLeft() {
            this.moveTo('left');
        },
        moveToRight() {
            this.moveTo('right');
        },
        handleLeftClear() {
            this.leftFilter = '';
        },
        handleRightClear() {
            this.rightFilter = '';
        },
        handleLeftFilter(value) {
            this.leftFilter = value;
        },
        handleRightFilter(value) {
            this.rightFilter = value;
        },
    },
};
</script>
