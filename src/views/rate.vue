<template lang="html">

  <div>

    <section class="markdown">
      <h1>Rate 评分</h1>
      <p>
        评分组件。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          对评价进行展示。
        </p>
        <p>
          对事物进行快速的评级操作。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col span="12">

        <code-box
          title="基本"
          describe="最简单的用法。"
        >
          <v-rate :on-change="_change"></v-rate>
          <template slot="js">
          export default {
            methods: {
              _change(val){
                console.log('current value:'+val)
              }
            }
          }
          </template>
        </code-box>

        <code-box
          title="文案展现"
          describe="给评分组件加上文案展示。"
        >
          <v-rate :default-value.sync="value"></v-rate>
          <span class="ant-rate-text">{{value}}星</span>
          <template slot="js">
          export default {
            data: function() {
              return {
                value: 3
              }
            }
          }
          </template>
        </code-box>

      </v-col>
      <v-Col span="12">

        <code-box
          title="半星"
          describe="支持选中半星。"
        >
          <v-rate :allow-half="true" :default-value="2.5"></v-rate>
        </code-box>

        <code-box
          title="只读"
          describe="只读，无法进行鼠标交互。"
        >
          <v-rate :disabled="true" :default-value="2"></v-rate>
        </code-box>

      </v-col>
    </v-row>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'count',
          explain: 'star 总数',
          type: 'Number',
          default: '5'
        },{
          parameter: 'defaultValue',
          explain: '默认值',
          type: 'Number',
          default: '0'
        },{
          parameter: 'onChange(value: Number)',
          explain: '回调',
          type: 'Function',
          default: '无'
        },{
          parameter: 'allowHalf',
          explain: '是否允许半选',
          type: 'Boolean',
          default: 'false'
        },{
          parameter: 'disabled',
          explain: '只读，无法进行交互',
          type: 'Boolean',
          default: 'false'
        }
      ],
      value:3
    }
  },
  components: {
    codeBox,
    apiTable
  },
   methods:{
    _change(val){
      console.log('current value:'+val)
    }
  }
}
</script>