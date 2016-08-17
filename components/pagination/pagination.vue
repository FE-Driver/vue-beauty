<template>
	<div>
		<ul 
			v-if="simple"
			:class="[prefixCls, prefixCls + '-simple']">
	  	<li 
	  		title="上一页" 
	  		@click="_handleChange(current - 1)"
	  		:class="prefixCls + '-prev'">
	  		<a></a>
	  	</li>

	  	<div 
	  		title="{{current}}/{{allPages}}" 
	  		:class="prefixCls + `-simple-pager`">
	  		<input 
	  			type="text" 
	  			v-model="currentForSimple"
	  			@keyup.prevent="_handleKeyUp($event)"
	  			@keydown.down.up.prevent
	  			@change="_handleKeyUp">
	  		<span class="ant-pagination-slash">／</span>
	  		{{allPages}}
	  	</div>

	  	<li 
	  		title="下一页" 
	  		@click="_handleChange(current + 1)"
	  		:class="prefixCls + '-next'">
	  		<a></a>
	  	</li>
	  </ul>

	  <ul 
	  	v-else
	  	:class="[prefixCls, {'mini':!!size}]">
	  	<span :class="prefixCls + '-total-text'">{{totalText}}</span>
	  	<li 
	  		title="上一页" 
	  		@click="_prev"
	  		:class="[
	  			prefixCls + '-prev', 
	  			_hasPrev() ? '' : prefixCls + '-disabled'
	  		]">
	  		<a></a>
	  	</li>

	  	<li 
	  		v-if="showFirstPager" 
	  		title="1" 
	  		@click="_handleChange(1)"
	  		:class="[
	  			prefixCls + '-item', 
	  			prefixCls + '-item-1',
	  			current == 1 ? prefixCls + '-item-active' : ''
	  		]">
	  	  <a>1</a>
	  	</li>

	  	<li 
	  		v-if="showJumpPrev" 
	  		title="向前5页" 
	  		@click="_jumpPrev"
	  		:class="prefixCls + '-jump-prev'">
	  		<a></a></li>
	  	<li 
	  		v-for="index in pageList" 
	  		@click="_handleChange(index)" 
	  		title="{{index}}"  
	  		:class="[
	  			prefixCls + '-item', 
	  			prefixCls + '-item-' + index, 
	  			current == index ? prefixCls + '-item-active' : ''
	  		]">
	  	  <a>{{index}}</a>
	  	</li>

	  	<li 
	  		v-if="showJumpNext" 
	  		title="向后5页" 
	  		@click="_jumpNext"
	  		:class="prefixCls + '-jump-next'">
	  		<a></a>
	  	</li>

	  	<li 
	  		v-if="showLastPager" 
	  		title="{{allPages}}"
	  		@click="_handleChange(allPages)"
	  		:class="[
	  			prefixCls + '-item', 
	  			prefixCls + '-item-' + allPages, 
	  			current == allPages ? prefixCls + '-item-active' : ''
	  		]">
	  	  <a>{{allPages}}</a>
	  	</li>

	  	<li 
	  		title="下一页" 
	  		@click="_next"
	  		:class="[
	  			prefixCls + '-next',
	  			_hasNext() ? '' : prefixCls + '-disabled'
	  		]">
	  		<a></a>
	  	</li>

	  	<div :class="prefixCls + '-options'">
	  		<div 
	  			v-if="showQuickJumper" 
	  			:class="prefixCls + '-options-quick-jumper'">
	  		跳至
	  		<input 
	  			type="text" 
	  			:value="currentForSimple"
	  			@keyup="_handleKeyUp($event)"
	  			@change="_handleKeyUp">
	  		页
	  		</div>
	  		<div 
	  			v-if="showSizeChanger"
	  			:class="prefixCls + '-options-size-changer'">
	  			<select 
	  				v-model="pageSize"
	  				@change="_pageSizeChange">
	  				<option 
	  					v-for="size in pageSizeOptions" 
	  					value="{{size}}">每页{{size}}条</option>
	  			</select>
	  		</div>
	  	</div>
	  </ul>
	</div>
</template>
<script>
import { defaultProps, KeyCode } from '../../utils'
export default {
  props: defaultProps({
  	prefixCls: 'ant-pagination',
    current: {
      type: Number, 
      twoWay: true,
      default: 0
    },
    defaultCurrent: 1,
    total: 0,
    defaultPageSize: 10,
    pageSize: Number,
    onChange: () => {},
    showSizeChanger: false,
    pageSizeOptions: ['10', '20', '30', '40'],
    onShowSizeChange: () => {},
    showQuickJumper: false,
    size: '',
    simple: false,
    showTotal: Function
  }),
  data() {
  	return {
  		currentForSimple: 1,
  		totalText: '',
  		pageList: [],
  	  allPages: 0,
  	  showJumpPrev: false,
  	  showJumpNext: false,
  	  showFirstPager: false,
  	  showLastPager: false,
  	  pageLeft: 0,
  	  pageRight: 0
  	}
  },
  watch: {
  	current() {
  		this.onChange(this.current);
  	},
  	pageSize() {
  		let current = this.current;
      let newCurrent = this.allPages;
      current = current > newCurrent ? newCurrent : current;
      this.current = this.currentForSimple = current;
      this.onShowSizeChange(current, Number(this.pageSize));
  	}
  },
  created() {
  	this.pageSize = this.pageSize || this.defaultPageSize;
  	this.current = this.current || this.defaultCurrent;
  	this.totalText = this.showTotal && this.showTotal(this.allPages);
  },
  computed: {
  	allPages() {
  		return Math.floor((this.total - 1) / this.pageSize) + 1;
  	},
  	pageList() {
  		let biger = this.allPages <= 9;
  		let pageList = [];
  		let start = biger ? 1 : this.pageLeft;
  		let end = biger ? this.allPages : this.pageRight;
  		for(let i = start; i <= end; i++) {
  			pageList.push(i);
  		}
  		return pageList;
  	},
  	showJumpPrev() {
  		return this.allPages > 9 && this.current - 1 >= 4;
  	},
  	showJumpNext() {
  		return this.allPages > 9 && this.allPages - this.current >= 4;
  	},
  	showFirstPager() {
  		return this.allPages > 9 && this.pageLeft !== 1;
  	},
  	showLastPager() {
  		return this.allPages > 9 && this.pageRight !== this.allPages;
  	},
  	pageLeft() {
  		let left = Math.max(1, this.current - 2);
  		if (this.allPages - this.current <= 2) {
        left = this.allPages - 4;
      }
      return left;
  	},
  	pageRight() {
  		let right = Math.min(this.current + 2, this.allPages);
      if (this.current - 1 <= 2) {
        right = 1 + 4;
      }
      return right;
  	}
  },
  methods: {
  	_handleChange(page) {
  	  if(this._isValid(page)) {
		    if(page > this.allPages) {
				  page = this.allPages;
		    }
		    this.current = page;
		    this.currentForSimple = page;
  	  }
  	},
  	_prev() {
  		if(this._hasPrev()) {
  			this._handleChange(this.current - 1);
  		}
  	},
  	_next() {
  		if(this._hasNext()) {
  			this._handleChange(this.current + 1);
  		}
  	},
  	_jumpPrev() {
  		this._handleChange(Math.max(1, this.current - 5));
  	},
  	_jumpNext() {
  		this._handleChange(Math.max(this.allPages, this.current + 5))
  	},
  	_hasPrev() {
  		return this.current > 1;
  	},
  	_hasNext() {
  		return this.current < this.allPages;
  	},
  	_isValid(page) {
  	  return typeof page === 'number' && page >= 1 && page !== this.current;
  	},
		_handleKeyUp(e) {
			let _val = e.target.value;
      let val = undefined;

      if (_val === '') {
        val = _val;
      } else if (isNaN(Number(_val))) {
        val = this.currentForSimple;
      } else {
        val = Number(_val);
      }
      this.currentForSimple = val;
      if (e.keyCode === 13) {
        this._handleChange(val);
      } else if (e.keyCode === 38) {
        this._handleChange(val - 1);
      } else if (e.keyCode === 40) {
        this._handleChange(val + 1);
      }
		},
		_go(e) {
			let _val = e.target.value;
      if (_val === '') {
        return;
      }
      let val = Number(this.state._current);
      if (isNaN(val)) {
        val = this.state.current;
      }
      if (e.keyCode === KEYCODE.ENTER) {
        let c = this.props.quickGo(val);
        this.setState({
          _current: c,
          current: c
        });
      }
		},
		_pageSizeChange() {

		}
  }
}
</script>

<style>
</style>