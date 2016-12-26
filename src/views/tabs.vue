<template lang="html">

  <div>

    <section class="markdown">
      <h1>Tabs 标签页</h1>
      <p>
          选项卡切换组件。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
            提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col span="12">

        <code-box
          title="基本"
          describe="默认选中第一项"
        >
          <v-tabs active-key="1">
            <v-tab-pane key="1" tab="选项卡一">选项卡一内容</v-tab-pane>
            <v-tab-pane key="2" tab="选项卡二">选项卡二内容</v-tab-pane>
            <v-tab-pane key="3" tab="选项卡三">选项卡三内容</v-tab-pane>
          </v-tabs>
        </code-box>

      </v-Col>

      <v-Col span="12">

        <code-box
          title="禁用"
          describe="禁用某一项。"
        >
          <v-tabs active-key="1">
            <v-tab-pane key="1" tab="选项卡一">选项卡一</v-tab-pane>
            <v-tab-pane key="2" disabled tab="选项卡二">选项卡二</v-tab-pane>
            <v-tab-pane key="3" tab="选项卡三">选项卡三</v-tab-pane>
          </v-tabs>
        </code-box>
      </v-Col>

      <v-Col span="12">
        <code-box
            title="图标"
            describe="有图标的标签。"
        >
            <v-tabs active-key="1">
                <v-tab-pane key="1" tab="选项卡一" icon="apple">选项卡一内容</v-tab-pane>
                <v-tab-pane key="2" tab="选项卡二" icon="android">选项卡二内容</v-tab-pane>
            </v-tabs>
        </code-box>
      </v-Col>

      <v-Col span="12">
        <code-box
          title="滑动"
          describe="可以左右滑动, 容纳更多标签"
        >
          <v-tabs active-key="1">
            <v-tab-pane key="1" tab="选项一">选项一</v-tab-pane>
            <v-tab-pane key="2" tab="选项二">选项卡二</v-tab-pane>
            <v-tab-pane key="3" tab="选项三">选项卡三</v-tab-pane>
            <v-tab-pane key="4" tab="选项四">选项卡四</v-tab-pane>
            <v-tab-pane key="5" tab="选项五">选项卡五</v-tab-pane>
            <v-tab-pane key="6" tab="选项六">选项卡六</v-tab-pane>
            <v-tab-pane key="7" tab="选项七">选项卡七</v-tab-pane>
            <v-tab-pane key="8" tab="选项八">选项卡八</v-tab-pane>
            <v-tab-pane key="9" tab="选项九">选项卡九</v-tab-pane>
            <!--<v-tab-pane key="10" tab="选项十">选项卡十</v-tab-pane>-->
          </v-tabs>
        </code-box>
      </v-Col>
    </v-Row>


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
          parameter: 'type',
          explain: '设置按钮类型，可选值为 primary success error warning ghost dashed 或者不设',
          type: 'String',
          default: '无'
        },{
          parameter: 'htmlType',
          explain: '设置 button 原生的 type 值，可选值请参考 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type" target="_blank">HTML 标准<a/>',
          type: 'string',
          default: 'button'
        },{
          parameter: 'icon',
          explain: '设置按钮的图标类型',
          type: 'string',
          default: '无'
        },{
          parameter: 'shape',
          explain: '设置按钮形状，可选值为 circle circle-outline 或者不设',
          type: 'String',
          default: '无'
        },{
          parameter: 'size',
          explain: '设置按钮大小，可选值为 small large 或者不设',
          type: 'String',
          default: 'default'
        },{
          parameter: 'description',
          explain: '可选参数，警告提示的辅助性文字介绍',
          type: 'String',
          default: '无'
        },{
          parameter: 'loading',
          explain: '设置按钮载入状态',
          type: 'boolean',
          default: 'false'
        },{
          parameter: 'onClick',
          explain: 'click 事件的 handler',
          type: 'function',
          default: ''
        }
      ]
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>
