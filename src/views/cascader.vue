<template lang="html">
<div>
	<section class="markdown">
      <h1>Cascader 级联选择</h1>
      <p>
        级联选择控件。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>展示多级嵌套的父子关系数据，例如省市区，各级机构等。</p>
      </ul>
      <h2>组件演示</h2>
    </section>

	<div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
		<div class="ant-col-lg-12 code-boxes-col-2-1">
			<code-box title="典型级联" describe="只包含级联数据。" code="">
				<v-cascader :data='data1'></v-cascader>
			</code-box>
		</div>
		<div class="ant-col-lg-12 code-boxes-col-2-1">
			<code-box title="带placeholder级联" describe="级联、placehoder。" code="">
				<v-cascader :data='data2'></v-cascader>
			</code-box>
		</div>
	</div>
	<div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
		<div class="ant-col-lg-12 code-boxes-col-2-1">
			<code-box title="带默认值的级联" describe="级联、placehoder、默认值。" code="">
				<v-cascader :data='data3'></v-cascader>
			</code-box>
		</div>
		<div class="ant-col-lg-12 code-boxes-col-2-1">
			<code-box title="带placeholder级联" describe="级联、placehoder。" code="">
				<v-cascader :data='data4'></v-cascader>
			</code-box>
		</div>
	</div>

	<api-table
      :apis='apis'
    ></api-table>
</div>
</template>

<script>
import data from '../data/cascader.js'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default{
	data:function(){
		return{
			data1:data.data1,
			data2:data.data2,
			data3:data.data3,
			data4:data.data4,
			apis: [{
				parameter: 'data',
				explain: '数据',
				type: 'Json',
				default: ''
			}]
		}
	},
	components:{
		codeBox,
    	apiTable
	}
}
</script>