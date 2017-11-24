<template>
	<div :class="[prefixCls, className ? className : '', hasFooter ? prefixCls + '-with-footer' : '']">
		<div :class="prefixCls + '-header'">
			<v-checkbox @click="selectAll" v-model="checkAll" :disabled="disabled" :indeterminate="checkPart"></v-checkbox>
			<span :class="prefixCls + '-header-selected'">
				<span>{{(checkedKeys.length > 0 ? `${checkedKeys.length}/` : '') + dataSource.length + '条'}}</span>
				<span :class="prefixCls + '-header-title'">{{titleText}}</span>
			</span>
		</div>
		<div :class="[prefixCls + '-body', {'ant-transfer-list-body-with-search': showSearch}]">
			<div v-if="showSearch" :class="prefixCls + '-body-search-wrapper'">
				<v-search :prefix-cls="prefixCls + '-search'" :value="filter" @change="handleFilter" :search-placeholder="searchPlaceholder" :handle-clear="handleClear"></v-search>
			</div>
			<ul class="ant-transfer-list-content">
				<li v-for="item in showItems" :key="item.key" :class="[prefixCls+'-content-item', {[`${prefixCls}-content-item-disabled`]: item.disabled}]" @click="select(item)">
					<v-checkbox :value="isCheck(item)" :disabled="item.disabled"></v-checkbox>
					<span>{{ showLabel(item) }}</span>
				</li>
			</ul>
			<div :class="prefixCls + '-body-not-found'">{{notFoundContent || '列表为空'}}</div>
		</div>
		<div v-if="hasFooter" :class="prefixCls + '-footer'">
			<slot></slot>
		</div>
	</div>
</template>
<script>
import vCheckbox from '../checkbox';
import vSearch from './search';

function noop() { }
export default {
    components: {
        vCheckbox,
        vSearch,
    },
    props: {
        prefixCls: String,
        dataSource: {
            type: Array,
            default: () => [],
        },
        handleSelect: {
            type: Function,
            default: noop,
        },
        handleSelectAll: {
            type: Function,
            default: noop,
        },
        checkedKeys: {
            type: Array,
            default: () => [],
        },
        label: {
            type: Function,
            default: noop,
        },
        filter: {
            type: String,
            default: '',
        },
        titleText: {
            type: String,
            default: '',
        },
        handleFilter: {
            type: Function,
            default: noop,
        },
        handleClear: {
            type: Function,
            default: noop,
        },
        className: {
            type: String,
            default: '',
        },
        showSearch: {
            type: Boolean,
            default: false,
        },
        filterOption: Function,
        searchPlaceholder: {
            type: String,
            default: '',
        },
        notFoundContent: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            hasFooter: false,
            checkAll: false,
            checkPart: false,
            disabled: false,
            filteredDataSource: [],
            showItems: [],
        };
    },
    created() {
        this.setFilteredDataSource();
    },
    mounted() {
        this.hasFooter = !!this.$slots && !!this.$slots.default;
    },
    watch: {
        checkedKeys() {
            const checkStatus = this.getCheckStatus(this.filteredDataSource);
            this.checkAll = checkStatus === 'all';
            this.checkPart = checkStatus === 'part';
        },
        dataSource() {
            this.setFilteredDataSource();
        },
        filter() {
            this.setFilteredDataSource();
        },
    },
    methods: {
        showLabel(item) {
            const result = this.label(item);
            return result.label ? result.label : result;
        },
        setFilteredDataSource() {
            this.filteredDataSource = [];
            this.showItems = this.dataSource.map((item) => {
                const renderResult = this.label(item);
                let renderedText;
                if (renderResult.value) {
                    renderedText = renderResult.value;
                } else {
                    renderedText = renderResult;
                }
                if (
                    this.filter &&
                    this.filter.trim() &&
                    !this.matchFilter(item, renderedText, this.filter)
                ) {
                    return null;
                }
                if (!item.disabled) this.filteredDataSource.push(item);
                return item;
            }).filter(item => !!item);
        },
        isCheck(item) {
            return this.checkedKeys.some(key => key === item.key);
        },
        select(selectedItem) {
            if (selectedItem.disabled) return;
            const result = this.checkedKeys
                .some(key => key === selectedItem.key);
            this.handleSelect(selectedItem, !result);
        },
        selectAll() {
            // 点击的时候checkAll还未发生变化
            this.handleSelectAll(this.filteredDataSource, !this.checkAll);
        },
        getCheckStatus(filteredDataSource) {
            if (this.checkedKeys.length === 0) {
                return 'none';
            } else if (filteredDataSource
                .every(item => this.checkedKeys
                    .indexOf(item.key) >= 0)) {
                return 'all';
            }
            return 'part';
        },
        matchFilter(result, text, filterText) {
            if (this.filterOption) {
                return this.filterOption(filterText, result);
            }
            return text.indexOf(filterText) >= 0;
        },
    },
};
</script>