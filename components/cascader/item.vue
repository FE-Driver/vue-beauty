<template lang="html">
<!-- <li class="ant-cascader-menu-item  ant-cascader-menu-item-active" title="{{data.text}}" @click="click">{{data.text}}</li> -->
	<li class="{{getClass(data.text)}}" title="{{data.text}}">{{data.text}}</li>
</template>
<script>

export default{
	props: {
		data:Object,
		tmp:String
	},
	methods:{
		getClass(text){
			let cn = 'ant-cascader-menu-item';
			if(text == this.tmp){
				cn = 'ant-cascader-menu-item ant-cascader-menu-item-active'
			}
			return cn
		}
	}
}
</script>