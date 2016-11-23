<template>
<div 
	:class="[
		prefixCls, 
		className ? className : '',
		hasFooter ? prefixCls + '-with-footer' : ''
	]"
	:style="style">
	<div 
	  :class="prefixCls + '-header'">
	  <span 
	  	:class="[
	  		'ant-transfer-checkbox',
	  		{'ant-transfer-checkbox-indeterminate': checkPart},
	  		{'ant-transfer-checkbox-checked': checkAll},
	  		{'ant-transfer-checkbox-disabled': disabled}
	  	]" 
	  	@click="selectAll">
      <span class="ant-transfer-checkbox-inner"></span>
      <input type="checkbox" class="ant-checkbox-input">
    </span>
	  <span 
	    :class="prefixCls + '-header-selected'">
	    <span>
	    {{(checkedKeys.length > 0 ? `${checkedKeys.length}/` : '') + dataSource.length + '条'}}
	    </span>
	  	<span :class="prefixCls + '-header-title'">{{titleText}}</span>
	  </span>
	</div>
	<div 
	  :class="[
	  	prefixCls + '-body',
	  	{'ant-transfer-list-body-with-search': showSearch}
	  ]">
	  <div
	  	v-if="showSearch"
	  	:class="prefixCls + '-body-search-wrapper'">
	  	<v-search
		  	:prefix-cls="prefixCls + '-search'"
		  	:value.sync="filter"
		  	:on-change="handleFilter"
		  	:search-placeholder="searchPlaceholder"
		  	:handle-clear="handleClear"
	    ></v-search>
	  </div>
	  <ul class="ant-transfer-list-content" v-if="showItems.length">
	  	<li 
	  		v-for="item in showItems" track-by="key"
				class="ant-transfer-list-content-item"
	  		:transition="prefixCls + '-highlight'"
	  		@click="select(item)">
	  		<v-checkbox :checked="isCheck(item)"></v-checkbox>
	  		<span>{{ showLabel(item) }}</span>
	  	</li>
	  </ul>
	  <div 
	  	v-else
	  	:class="prefixCls + '-body-not-found'"
	  	>{{notFoundContent || '列表为空'}}</div>
	</div>
	<div 
		v-if="hasFooter"
	  :class="prefixCls + '-footer'">
	  <slot></slot>
	</div>
</div>
</template>
<script>
	import { defaultProps } from '../../utils'
	import vCheckbox from '../checkbox'
	import vSearch from './search'
	function noop() {}
	export default {
		props: defaultProps({
			prefixCls: '',
			dataSource: [],
			handleSelect: noop,
			handleSelectAll: noop,
			checkedKeys: [],
			render: noop,
			filter: '',
			titleText: '',
			handleFilter: noop,
			handleClear: noop,
			style: Object,
			className: '',
			showSearch: false,
			searchPlaceholder: '',
			notFoundContent: '',
			filterOption: Function,
			hasFooter: false
		}),
		data() {
			return {
				checkAll: false,
				checkPart: false,
				disabled: false,
				filteredDataSource: [],
				showItems: []
			};
		},
		created() {
			this.setFilteredDataSource();
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
			}
		},
		methods: {
			showLabel(item) {
				const result = this.render(item);
				return result.label ? result.label : result;
			},
			setFilteredDataSource() {
				this.filteredDataSource = [];
				this.showItems = this.dataSource.map(item => {
					const renderResult = this.render(item);
		      let renderedText;
		      let renderedEl;
		      if (renderResult.value) {
		        renderedText = renderResult.value;
		        renderedEl = renderResult.label;
		      } else {
		        renderedText = renderResult;
		        renderedEl = renderResult;
		      }
		      if (
		      	this.filter && 
		      	this.filter.trim() && 
		      	!this.matchFilter(item, renderedText, this.filter)
		      ) {
		        return null;
		      }
		      this.filteredDataSource.push(item);
		      return item;
				}).filter(item => !!item);
			},
			isCheck(item) {
				return this.checkedKeys.some(key => key === item.key)
			},
			select(selectedItem) {
				const result = this.checkedKeys
					.some((key) => key === selectedItem.key);
				this.handleSelect(selectedItem, !result);
			},
			selectAll() {
				this.handleSelectAll(this.filteredDataSource, this.checkAll);
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
				if(this.filterOption) {
					return this.filterOption(filterText, result);
				}
		    return text.indexOf(filterText) >= 0;
		  }
		},
		components: {
			vCheckbox,
			vSearch
		}
	}
</script>