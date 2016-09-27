<template lang="html">
	<span class="ant-cascader-picker" @click.stop="showPane">
		<span class="ant-input-wrapper">
			<input type="text" placeholder="{{data.placeholder}}" class="ant-input ant-cascader-input" v-model="result" value="" readonly="">
		</span>
		<span class="ant-cascader-picker-label"></span>
		<i class="ant-cascader-picker-arrow anticon anticon-down"></i>
	</span>
	<div id="{{domid}}" class="ant-cascader-menus" @click.stop="nullfunc" v-show="isshow" transition='zoom-big'>
		<div class="casUlItem">
			<v-panel :data.sync="data.children" @check="childcheck"></v-panel>
		</div>
	</div>
</template>

<script>
import vPanel from './panel'
export default{
	name:'v-cascader',
	props:{
		isshow :Boolean,
		data : Object,
		result : {
			type : String,
			default :''
		},
		domid : String
	},
	ready(){

		var self = this;
		document.body.addEventListener('click',function(e){
			self.isshow = false;
		})

		window.addEventListener('resize',function(){
			self.setPosition();
		})
		this.getDomId()
	},
	methods: {
		showPane(){
			this.isshow = true;
			let _el = document.querySelector('#'+this.domid);

			if(_el){
				this.setPosition();
				if(_el.parentNode.tagName != 'BODY'){
					document.body.appendChild(_el);
				}
			}
		},
		nullfunc(){

		},
		getDomId : function(){
			this.domid = 'cascader' + Math.random().toString(36).substr(2);
		},
		childcheck(val){
			this.result = val;
		},
		setPosition(){
			const getElementViewLeft = (element)=>{
				let actualLeft = element.offsetLeft;
				let current = element.offsetParent;
				while (current !== null){
					actualLeft += current.offsetLeft;
					current = current.offsetParent;
				}

				// let elementScrollLeft = document.documentElement.scrollLeft == 0 ? document.body.scrollLeft : document.documentElement.scrollLeft;

				return actualLeft;
			}
			const getElementViewTop = (element)=>{
				let actualTop = element.offsetTop;
				let current = element.offsetParent;
				while (current !== null){
					actualTop += current. offsetTop;
					current = current.offsetParent;
				}

				// let elementScrollTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop; 

				return actualTop;
			}

			let _input = this.$el.nextElementSibling;
			let _el = document.querySelector('#'+this.domid);

			let iptWidth = _input.offsetWidth;
			let iptHeight = _input.offsetHeight;
			let iptLeft = getElementViewLeft(_input);
			let iptTop = getElementViewTop(_input);


			let w_Height = document.body.clientHeight;//窗口可见区高度
			let _scrollTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop; //滚动条高度

			let _left = '',_top = '';

			let flag = w_Height - (iptTop - _scrollTop) - iptHeight - 180;

			if (flag > 0) {
				_left = iptLeft + "px";
				_top = iptTop + iptHeight + "px";
			}else{
				_left = iptLeft + "px";
				_top = iptTop + "px";
				_el.className = _el.className + ' ant-cascader-menus-top';
			}

			_el.style.left = _left;
			_el.style.top = _top;
		}
	},
	components:{
		vPanel
	}
}
</script>