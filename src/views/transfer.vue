<template>
	<section class="markdown">
      <h1>Transfer  穿梭框</h1>
      <p>
        双栏穿梭选择框。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>用直观的方式在两栏中移动元素，完成选择行为。</li>
      </ul>
      <h2>组件演示</h2>
  </section>
	<v-Row :gutter="16">
		<v-Col>
    	<code-box
        title="基本用法"
        describe="最基本的用法。"
      > 
        <v-transfer
				 :data-source="dataSource1"
				 :target-keys="targetKeys1"
				 :on-change="handleChange1"
				 :render="render">
				 </v-transfer>
				 <template slot="js">
          export default {
            data: function() {
              return {
                dataSource1: [],
								targetKeys1: [],
              }
            },
						methods: {
							render(recoder) {
								return recoder.title;
							},
							handleChange1(targetKeys, direction, moveKeys) {
								this.targetKeys1 = targetKeys;
							}
						}
          }
          </template>
      </code-box>

      <code-box
        title="带搜索框"
        describe="带搜索框的穿梭框，可以自定义搜索函数。"
      > 
        <v-transfer
				 :data-source="dataSource2"
				 :target-keys="targetKeys2"
				 :on-change="handleChange2"
				 :show-search="true"
				 :filter-option="filterOption"
				 :render="render">
				 </v-transfer>
				 <template slot="js">
          export default {
            data: function() {
              return {
                dataSource2: [],
								targetKeys2: [],
              }
            },
						methods: {
							render(recoder) {
								return recoder.title;
							},
							handleChange2(targetKeys, direction, moveKeys) {
								this.targetKeys2 = targetKeys;
							},
							filterOption(inputValue, option) {
								return option.description.indexOf(inputValue) > -1;
							}
						}
          }
          </template>
      </code-box>

      <code-box
        title="高级用法"
        describe="穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。"
      > 
        <v-transfer
				 :data-source="dataSource3"
				 :target-keys="targetKeys3"
				 :on-change="handleChange3"
				 :list-style="{width: '250px', height: '300px'}"
				 :show-search="true"
				 :operations="['向右操作文案', '向左操作文案']"
				 :filter-option="filterOption"
				 :render="render">
				 	<div :style="{float: 'right', margin: '5px'}">
				 		<v-button 
				 		type="ghost" 
				 		size="small"
				 		@click="getMock"
				 		>刷新</v-button>
				 	</div>
				 </v-transfer>
				 <template slot="js">
          export default {
            data: function() {
              return {
                dataSource3: [],
								targetKeys3: [],
              }
            },
						methods: {
							getMock() {
								for(let num = 0; num < 4; num ++) {
									const targetKeys = [];
									const mockData = [];
									for (let i = 0; i < 20; i++) {
										const data = {
											key: i,
											title: `内容${i + 1}`,
											description: `内容${i + 1}的描述`,
											chosen: Math.random() * 2 > 1,
										};
										if (data.chosen) {
											targetKeys.push(data.key);
										}
										mockData.push(data);
									}
									this[`dataSource${num + 1}`] = mockData;
									this[`targetKeys${num + 1}`] = targetKeys;
								}
							},
							render(recoder) {
								return recoder.title;
							},
							handleChange3(targetKeys, direction, moveKeys) {
								this.targetKeys3 = targetKeys;
							},
							filterOption(inputValue, option) {
								return option.description.indexOf(inputValue) > -1;
							}
						}
          }
          </template>
      </code-box>

      <code-box
        title="自定义渲染行数据"
        describe="自定义渲染每一个 Transfer Item，可用于渲染复杂数据。"
      > 
        <v-transfer
				 :data-source="dataSource4"
				 :target-keys="targetKeys4"
				 :on-change="handleChange4"
				 :list-style="{width: '300px', height: '300px'}"
				 :render="render2">
				 </v-transfer>
				 <template slot="js">
          export default {
            data: function() {
              return {
                dataSource4: [],
								targetKeys4: [],
              }
            },
						methods: {
							render2(recoder) {
								return {
									label: `${recoder.title} - ${recoder.description}`,
									value: recoder.title
								}
							},
							handleChange4(targetKeys, direction, moveKeys) {
								this.targetKeys4 = targetKeys;
							}
						}
          }
          </template>
      </code-box>
  </v-col>
</v-row>
  <api-table :apis="apis"></api-table>
</template>
<script>
	import codeBox from '../components/codeBox'
	import apiTable from '../components/apiTable'

	export default {
		data() {
			return {
				dataSource1: [],
				targetKeys1: [],
				dataSource2: [],
				targetKeys2: [],
				dataSource3: [],
				targetKeys3: [],
				dataSource4: [],
				targetKeys4: [],
				apis: [{"parameter":"dataSource","explain":"数据源","type":"Array","default":"[]"},{"parameter":"render","explain":"每行数据渲染函数","type":"Function(record)","default":""},{"parameter":"targetKeys","explain":"显示在右侧框数据的key集合","type":"Array","default":"[]"},{"parameter":"onChange","explain":"变化时回调函数","type":"Function(targetKeys, direction, moveKeys)","default":""},{"parameter":"listStyle","explain":"两个穿梭框的自定义样式","type":"Object","default":""},{"parameter":"className","explain":"自定义类","type":"String","default":""},{"parameter":"titles","explain":"标题集合,顺序从左至右","type":"Array","default":"['源列表', '目的列表']"},{"parameter":"operations","explain":"操作文案集合,顺序从上至下","type":"Array","default":"[]"},{"parameter":"showSearch","explain":"是否显示搜索框","type":"Boolean","default":"false"},{"parameter":"filterOption","explain":"接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。","type":"Function(inputValue, option)","default":""},{"parameter":"searchPlaceholder","explain":"搜索框的默认值","type":"String","default":"'请输入搜索内容'"},{"parameter":"notFoundContent","explain":"当列表为空时显示的内容","type":"React.node","default":"'列表为空'"},{"parameter":"footer","explain":"组件底部挂载点(例3)","type":"slot","default":""}]
			}
		},
		created() {
			this.getMock()
		},
		methods: {
			getMock() {
				for(let num = 0; num < 4; num ++) {
					const targetKeys = [];
			    const mockData = [];
			    for (let i = 0; i < 20; i++) {
			      const data = {
			        key: i,
			        title: `内容${i + 1}`,
			        description: `内容${i + 1}的描述`,
			        chosen: Math.random() * 2 > 1,
			      };
			      if (data.chosen) {
			        targetKeys.push(data.key);
			      }
			      mockData.push(data);
			    }
			    this[`dataSource${num + 1}`] = mockData;
			    this[`targetKeys${num + 1}`] = targetKeys;
				}
			},
			render(recoder) {
				return recoder.title;
			},
			render2(recoder) {
				return {
					label: `${recoder.title} - ${recoder.description}`,
					value: recoder.title
				}
			},
			handleChange1(targetKeys, direction, moveKeys) {
		    this.targetKeys1 = targetKeys;
			},
			handleChange2(targetKeys, direction, moveKeys) {
		    this.targetKeys2 = targetKeys;
			},
			handleChange3(targetKeys, direction, moveKeys) {
		    this.targetKeys3 = targetKeys;
			},
			handleChange4(targetKeys, direction, moveKeys) {
		    this.targetKeys4 = targetKeys;
			},
			filterOption(inputValue, option) {
				 return option.description.indexOf(inputValue) > -1;
			}
		},
		components: {
			codeBox,
			apiTable
		}
	}
</script>