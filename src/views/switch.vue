<template lang="html">

  <div>

    <section class="markdown">
      <h1>Switch开关</h1>
      <p>
        开关选择器。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          需要表示开关状态/两种状态之间的切换时；
        </p>
        <p>
          和 checkbox的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col span="12">

        <code-box
          title="简单"
          describe="最简单的用法。"
        >
          <v-switch :on-change="_change"></v-switch>
          <template slot="js">
          export default {
            methods:{
              _change(val){
                console.log('current value:'+val)
              }
            }
          }
          </template>
        </code-box>

        <code-box
          title="文字和图标"
          describe="带有文字和图标。"
        >
          <v-switch>
            <span slot="checkedChildren">开</span>
            <span slot="unCheckedChildren">关</span>
          </v-switch>
          <br>
          <br>
          <v-switch>
            <span slot="checkedChildren">
              <i class="anticon anticon-check"></i>
            </span>
            <span slot="unCheckedChildren">
              <i class="anticon anticon-cross"></i>
            </span>
          </v-switch>
        </code-box>
      </v-col>
      <v-Col span="12">

        <code-box
          title="不可用"
          describe="Switch 失效状态。"
        >
          <v-switch :disabled="disabled"></v-switch>
          <br>
          <br>
          <v-button type="primary" @click="_toogle">Toggle disabled</v-button>
          <template slot="js">
          export default {
            methods:{
              _toogle(){
                this.disabled = !this.disabled
              }
            }
          }
          </template>
        </code-box>

        <code-box
          title="两种大小"
          describe="size='small' 表示小号开关。"
        >
          <v-switch></v-switch>
          <br>
          <v-switch size="small"></v-switch>
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
          parameter: 'checked',
          explain: '指定当前是否选中',
          type: 'boolean',
          default: 'false'
        },{
          parameter: 'disabeled',
          explain: '指定当前是否被禁用',
          type: 'boolean',
          default: 'false'
        },{
          parameter: 'onChange',
          explain: '变化时回调函数',
          type: 'Function(checked:boolean)',
          default: '无'
        },{
          parameter: 'slot::checkedChildren',
          explain: '选中时的内容',
          type: 'slot node',
          default: '无'
        },{
          parameter: 'slot::unCheckedChildren',
          explain: '非选中时的内容',
          type: 'slot node',
          default: '无'
        },{
          parameter: 'size',
          explain: '开关大小（"default" or "small"）',
          type: 'string',
          default: 'default'
        }
      ],
      disabled: true
    }
  },
  components: {
    codeBox,
    apiTable
  },
  methods:{
    _change(val){
      console.log('current value:'+val)
    },
    _toogle(){
      this.disabled = !this.disabled
    }
  }
}
</script>