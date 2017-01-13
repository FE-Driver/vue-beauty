<template>
<div>
		<section class="markdown">
      <h1>Pagination 分页</h1>
      <p>
        采用分页的形式分隔长列表，每次只加载一个页面。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>当加载/渲染所有数据将花费很多时间时；</li>
        <li>可切换页码浏览数据。</li>
      </ul>
      <h2>组件演示</h2>
    </section>
  <v-Row :gutter="16">
    <v-Col span="12">
    	<code-box
        title="基本"
        describe="基础分页。"
      > 
        <v-pagination 
			  	:total="50">
				</v-pagination>
      </code-box>

      <code-box
        title="改变"
        describe="改变每页显示条目数。"
      > 
        <v-pagination 
			  	:show-size-changer="true"
			  	:on-show-size-change="pageSizeChange"
			  	:total="50">
				</v-pagination>
				<template slot="js">
				export default {
					methods: {
						pageSizeChange(current, size){
							console.log(current, size);
						}
					}
				}
			</template>
      </code-box>

      <code-box
        title="小尺寸"
        describe="小尺寸分页。"
       > 
        <v-pagination 
	        size="small"
			  	:total="50">
				</v-pagination>
			  <br>
        <v-pagination 
			  	:current.sync="current"
			  	:total="100"
			  	:default-page-size="5"
			  	:page-size="10"
			  	:on-change="loadPage"
			  	:show-size-changer="true"
			  	:on-show-size-change="pageSizeChange"
			  	:show-quick-jumper="true"
			  	size="small"
			  	:simple="false"></v-pagination>
			  <br>
		  	<v-pagination 
			  	:current.sync="current"
			  	:total="50"
			  	:default-page-size="5"
			  	:page-size="10"
			  	:on-change="loadPage"
			  	size="small"
			  	:simple="false"
			  	:show-total="showTotal"></v-pagination>
			  <template slot="js">
				  export default {
						data(){
							return {
								current: 1
							}
						},
					  methods: {
							showTotal(total) {
								return `全部 ${total} 条`;
							}
					}
				  }
			  </template>
      </code-box>

      <code-box
        title="受控"
        describe="受控制的页码。"
      > 
        <v-pagination 
			  	:current="3"
			  	:total="50">
				</v-pagination>
      </code-box>
    </v-col>
    <v-Col span="12">
    	<code-box
        title="更多"
        describe="更多分页"
      > 
        <v-pagination
			  	:total="500">
				</v-pagination>
      </code-box>

      <code-box
        title="跳至"
        describe="快速跳转分页"
      > 
        <v-pagination
			  	:show-quick-jumper="true"
			  	:total="500">
				</v-pagination>
      </code-box>

      <code-box
        title="简单"
        describe="简单分页"
      > 
        <v-pagination
			  	:simple="true"
			  	:total="500">
				</v-pagination>
      </code-box>

      <code-box
        title="总数"
        describe="通过设置 showTotal 展示总共有多少数据。"
      > 
        <v-pagination
			  	:show-total="showTotal"
			  	:total="50">
				</v-pagination>
				<br>
				<v-pagination
			  	:show-total="showTotal2"
			  	:total="50">
				</v-pagination>
				<template slot="js">
					export default {
						methods: {
							showTotal(total) {
								return `全部 ${total} 条`;
							},
							showTotal2(total,pages) {
								return `1-${pages} 全部 ${total} 条`;
							}
						}
					}
				</template>
      </code-box>
    </v-col>
  </v-row>
	  <api-table :apis="apis"></api-table>
</div>
</template>
<script>
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data() {
  	return {
  		current: 1,
  		apis: [{
				"parameter": "current",
				"explain": "当前页数",
				"type": "Number",
				"default": "1"
			}, {
				"parameter": "total",
				"explain": "数据总数",
				"type": "Number",
				"default": "0"
			}, {
				"parameter": "defaultPageSize",
				"explain": "初始的每页条数",
				"type": "Number",
				"default": "10"
			}, {
				"parameter": "pageSize",
				"explain": "每页条数",
				"type": "Number",
				"default": ""
			}, {
				"parameter": "onChange",
				"explain": "页码改变的回调，参数是改变后的页码",
				"type": "Function",
				"default": "noop"
			}, {
				"parameter": "showSizeChanger",
				"explain": "是否可以改变 pageSize",
				"type": "Bool",
				"default": "false"
			}, {
				"parameter": "pageSizeOptions",
				"explain": "指定每页可以显示多少条",
				"type": "Array",
				"default": "[10, 20, 30, 40]"
			}, {
				"parameter": "onShowSizeChange",
				"explain": "pageSize 变化的回调",
				"type": "Function",
				"default": "noop"
			}, {
				"parameter": "showQuickJumper",
				"explain": "是否可以快速跳转至某页",
				"type": "Bool",
				"default": "false"
			}, {
				"parameter": "size",
				"explain": "当为「small」时，是小尺寸分页",
				"type": "String",
				"default": "无"
			}, {
				"parameter": "simple",
				"explain": "当添加该属性时，显示为简单分页",
				"type": "Object",
				"default": "无"
			}, {
				"parameter": "showTotal",
				"explain": "用于显示总共有多少条数据",
				"type": "Function",
				"default": "无"
			}]
  	}
  },
  watch: {
  	current() {
  		console.log(this.current);
  	}
  },
  methods: {
  	loadPage(i) {
  		console.log('cb' + i);
  	},
  	showTotal(total) {
  		return `全部 ${total} 条`;
  	},
		showTotal2(total,pages) {
  		return `1-${pages} 全部 ${total} 条`;
  	},
  	pageSizeChange(current, size){
  		console.log(current, size);
  	}
  },
  components: {
  	codeBox,
  	apiTable
  }
}
</script>