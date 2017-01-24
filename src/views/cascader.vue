<template lang="html">
<div>
	<section class="markdown">
      <h1>Cascader 级联选择</h1>
      <p>
        级联选择框。
      </p>
      <h2>何时使用</h2>
      <ul>
	  	<li>需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。</li>
		<li>从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。</li>
		<li>比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

	<v-Row :gutter="16">
		<v-Col span="12">
			<code-box title="基本" describe="省市区级联。">
				<v-cascader :options="options" @change="onchange"></v-cascader>
				<template slot="js">
				export default {
					data: function() {
						return {
							options: [{
								value: 'sc',
								label: '四川',
								children: [{
									value: 'cd',
									label: '成都',
									children: [{
										value: 'jyq',
										label: '九眼桥'
									},{
										value: 'cxl',
										label: '春熙路'
									}],
								},{
									value: 'nc',
									label: '南充',
									children: [{
										value: 'nbx',
										label: '南部县'
									}]
								}],
								}, {
								value: 'cq',
								label: '重庆',
								children: [{
									value: 'lp',
									label: '梁平',
									children: [{
										value: 'sgt',
										label: '双桂堂'
									}],
								}],
							}]
						}
					},
					methods: {
						onchange(val){
							console.log(val)
						}
					}
				}
				</template>
			</code-box>
			<code-box title="大小" describe="不同大小的级联选择器。">
				<v-cascader size="large" :options="options"></v-cascader><br><br>
				<v-cascader :options="options"></v-cascader><br><br>
				<v-cascader size="small" :options="options"></v-cascader>
				<template slot="js">
				export default {
					data: function() {
						return {
							options: [{
								value: 'sc',
								label: '四川',
								children: [{
									value: 'cd',
									label: '成都',
									children: [{
										value: 'jyq',
										label: '九眼桥'
									},{
										value: 'cxl',
										label: '春熙路'
									}],
								},{
									value: 'nc',
									label: '南充',
									children: [{
										value: 'nbx',
										label: '南部县'
									}]
								}],
								}, {
								value: 'cq',
								label: '重庆',
								children: [{
									value: 'lp',
									label: '梁平',
									children: [{
										value: 'sgt',
										label: '双桂堂'
									}],
								}],
							}]
						}
					}
				}
				</template>
			</code-box>
		</v-Col>

		<v-Col span="12">
			<code-box title="默认值" describe="默认值通过数组的方式指定。">
				<v-cascader :value="['cq','lp','sgt']" :options="options"></v-cascader>
				<template slot="js">
				export default {
					data: function() {
						return {
							options: [{
								value: 'sc',
								label: '四川',
								children: [{
									value: 'cd',
									label: '成都',
									children: [{
										value: 'jyq',
										label: '九眼桥'
									},{
										value: 'cxl',
										label: '春熙路'
									}],
								},{
									value: 'nc',
									label: '南充',
									children: [{
										value: 'nbx',
										label: '南部县'
									}]
								}],
								}, {
								value: 'cq',
								label: '重庆',
								children: [{
									value: 'lp',
									label: '梁平',
									children: [{
										value: 'sgt',
										label: '双桂堂'
									}],
								}],
							}]
						}
					}
				}
				</template>
			</code-box>
			<code-box title="禁用选项" describe="通过指定 options 里的 disabled 字段。">
				<v-cascader :options="options2"></v-cascader>
				<template slot="js">
				export default {
					data: function() {
						return {
							options2: [{
								value: 'sc',
								label: '四川',
								disabled: 'true',
								children: [{
									value: 'cd',
									label: '成都',
									children: [{
										value: 'jyq',
										label: '九眼桥'
									},{
										value: 'cxl',
										label: '春熙路'
									}],
								},{
									value: 'nc',
									label: '南充',
									children: [{
										value: 'nbx',
										label: '南部县'
									}]
								}],
								}, {
								value: 'cq',
								label: '重庆',
								children: [{
									value: 'lp',
									label: '梁平',
									children: [{
										value: 'sgt',
										label: '双桂堂'
									}],
								}],
							}]
						}
					}
				}
				</template>
			</code-box>
			<code-box title="禁用" describe="禁用整个控件">
				<v-cascader :disabled="true"></v-cascader>
			</code-box>
		</v-Col>
	</v-row>

	<api-table
      :content='content'
    ></api-table>
    <api-table
      type="events"
      :content='eventContent'
      title=""
    >
</div>
</template>

<script>
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default{
	data: ()=>({
		options: [{
			value: 'sc',
			label: '四川',
			children: [{
				value: 'cd',
				label: '成都',
				children: [{
					value: 'jyq',
					label: '九眼桥'
				},{
					value: 'cxl',
					label: '春熙路'
				}],
			},{
				value: 'nc',
				label: '南充',
				children: [{
					value: 'nbx',
					label: '南部县'
				}]
			}],
			}, {
			value: 'cq',
			label: '重庆',
			children: [{
				value: 'lp',
				label: '梁平',
				children: [{
					value: 'sgt',
					label: '双桂堂'
				}],
			}],
		}],
		options2: [],
		content: [
			[
				'options',
				'可选项数据源',
				'Array',
				'-'
			],
			[
				'value',
				'指定选中项',
				'Array',
				'-'
			],
			[
				'placeholder',
				'输入框占位文本',
				'String',
				'请选择'
			],
			[
				'size',
				'输入框大小，可选 large default small',
				'String',
				'default'
			],
			[
				'disabled',
				'禁用',
				'Boolean',
				'false'
			],
			[
				'allowClear',
				'是否支持清除',
				'Boolean',
				'true'
			],
			[
				'position',
				'下拉框的定位方式（absolute,fixed）',
				'String',
				'absolute'
			],
			[
			'popupContainer',
			'下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
			'Function',
			'() => document.body'   
			]			
		],
		eventContent: [
			[
				'change',
				'value改变时触发',
				'value'
			]
		],
	}),
	ready(){
		let opt = JSON.parse(JSON.stringify(this.options))
		opt[0].disabled = true;
		this.options2 = opt;
	},
	methods: {
		onchange(val){
			console.log(val)
		}
	},
	components:{
		codeBox,
    	apiTable
	}
}
</script>