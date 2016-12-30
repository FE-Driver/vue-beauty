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
            <v-tab-pane key="10" tab="选项十">选项卡十</v-tab-pane>
          </v-tabs>
        </code-box>
      </v-Col>
    </v-Row>


    <api-table :apis='apiTabs'>
        <h3>Tabs</h3>
    </api-table>

    <api-table :apis='apiTabPane'>
      <h3>Tabs.TabPane</h3>
    </api-table>

  </div>

</template>

<script>
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apiTabs: [{
          parameter: 'activeKey',
          explain: '当前激活 tab 面板的 key',
          type: 'String',
          default: '无'
        },{
          parameter: 'selectTab',
          explain: 'tab 被点击的回调',
          type: 'Function',
          default: '无'
        }],
        apiTabPane: [{
            parameter: 'key',
            explain: '对应 activeKey',
            type: 'String',
            default: '无'
        },{
            parameter: 'tab',
            explain: '选项卡头显示文字	',
            type: 'String',
            default: '无'
        },{
            parameter: 'icon',
            explain: '选项卡头文字左侧的图标',
            type: 'String',
            default: '无'
        }]
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>
