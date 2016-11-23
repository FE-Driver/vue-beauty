<template lang="html">
	<ul v-if="data && data.length" class="ant-cascader-menu">
		<v-item v-for="item in data" :data.sync="item" :tmp.sync="tmp" @click="getChildren(item)"></v-item>
	</ul>
	<caspanel v-if="sublist && sublist.length" @check="childcheck" @store="storevalue" :data.sync="sublist"></caspanel>
</template>
<script>
import vItem from './item'
export default{
	name: 'caspanel',
	props: {
		data:Array,
		sublist:[],
		result:{
			type : String,
			default :''
		},
		tmp:{
			type : String,
			default :''
		}
	},
	ready(){
		for(let i of this.data){
			if(i.select){
				this.tmp = i.text;
				this.sublist = i.children;
				this.$emit('check',this.tmp);
			}
		}
	},
	methods: {
		getChildren(item){
			if(item.children && item.children.length > 0){
				this.sublist = item.children;
			}else{
				this.sublist = [];
			}

			//值回填
			this.tmp = item.text;
			this.$emit('check',this.tmp);
		},
		childcheck(val){
			this.result = this.tmp + ' / ' + val;
			this.$emit('check',this.result);
		}
	},
	watch:{
		'data':function(val, oldVal){
			this.sublist = [];
			this.result = ''
		}
	},
	components:{
		vItem
	}
}
</script>