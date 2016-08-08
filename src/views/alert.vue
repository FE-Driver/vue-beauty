<template lang="html">

  <div>

    <section class="markdown">
      <h1>Alert 警告提示</h1>
      <p>
        警告提示，展现需要关注的信息。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>当某个页面需要向用户显示警告的信息时。</li>
        <li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基础"
          describe="最简单的用法，适用于简短的警告提示。"
          code='<v-alert type="success" message="成功提示的文案"></v-alert>'
        >
          <v-alert type="success" message="成功提示的文案"></v-alert>
        </code-box>

        <code-box
          title="可关闭的警告提示"
          describe="显示关闭按钮，点击可关闭警告提示。"
          code='<v-alert type="warning" message="警告提示的文案"></v-alert>
<v-alert type="error" message="错误提示的文案"
description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
closable></v-alert>'
        >
          <v-alert type="warning" message="警告提示的文案"></v-alert>
          <v-alert
            type="error"
            message="错误提示的文案"
            description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
            closable></v-alert>
        </code-box>

        <code-box
          title="图标"
          describe="可口的图标让信息类型更加醒目。"
          code='<v-alert type="success" message="成功提示的文案" show-icon></v-alert>
<v-alert type="info" message="消息提示的文案" show-icon></v-alert>
<v-alert type="warning" message="警告提示的文案" show-icon></v-alert>
<v-alert type="error" message="错误提示的文案" show-icon></v-alert>
<v-alert type="success" message="成功提示的文案" show-icon
  description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
></v-alert>
<v-alert type="info" message="消息提示的文案" show-icon
  description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
></v-alert>
<v-alert
  type="warning" message="警告提示的文案" show-icon
  description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"
></v-alert>
<v-alert
  type="error" message="错误提示的文案" show-icon
  description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
></v-alert>'
        >
          <v-alert type="success" message="成功提示的文案" show-icon></v-alert>
          <v-alert type="info" message="消息提示的文案" show-icon></v-alert>
          <v-alert type="warning" message="警告提示的文案" show-icon></v-alert>
          <v-alert type="error" message="错误提示的文案" show-icon></v-alert>
          <v-alert type="success" message="成功提示的文案" show-icon
            description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
          ></v-alert>
          <v-alert type="info" message="消息提示的文案" show-icon
            description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
          ></v-alert>
          <v-alert
            type="warning" message="警告提示的文案" show-icon
            description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"
          ></v-alert>
          <v-alert
            type="error" message="错误提示的文案" show-icon
            description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
          ></v-alert>
        </code-box>

      </div>
      <div class="ant-col-lg-12 code-boxes-col-2-1">
        <code-box
          title="四种样式"
          describe="共有四种样式 success、info、warning、error。"
          code='<v-alert type="success" message="成功提示的文案"></v-alert>
<v-alert type="info" message="消息提示的文案"></v-alert>
<v-alert type="warning" message="警告提示的文案"></v-alert>
<v-alert type="error" message="错误提示的文案"></v-alert>'
        >
          <v-alert type="success" message="成功提示的文案"></v-alert>
          <v-alert type="info" message="消息提示的文案"></v-alert>
          <v-alert type="warning" message="警告提示的文案"></v-alert>
          <v-alert type="error" message="错误提示的文案"></v-alert>
        </code-box>

        <code-box
          title="含有辅助性文字介绍"
          describe="含有辅助性文字介绍的警告提示。"
          code='<v-alert type="success" message="成功提示的文案"
  description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
></v-alert>
<v-alert type="info" message="消息提示的文案"
  description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
></v-alert>
<v-alert
  type="warning" message="警告提示的文案"
  description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"
></v-alert>
<v-alert
  type="error" message="错误提示的文案"
  description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
></v-alert>'
        >
          <v-alert type="success" message="成功提示的文案"
            description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"
          ></v-alert>
          <v-alert type="info" message="消息提示的文案"
            description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
          ></v-alert>
          <v-alert
            type="warning" message="警告提示的文案"
            description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"
          ></v-alert>
          <v-alert
            type="error" message="错误提示的文案"
            description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
          ></v-alert>
        </code-box>

        <code-box
          title="自定义关闭"
          describe="可以自定义关闭，自定义的文字会替换原先的关闭 Icon。"
          code='<v-alert type="info" message="消息提示的文案" close-text="不再提醒"  closable :on-close="onClose" ></v-alert>'
        >
          <v-alert type="info" message="消息提示的文案" close-text="不再提醒"  closable
            :on-close="onClose"
          ></v-alert>
        </code-box>

      </div>
    </div>

    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vAlert from '../../components/alert'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      onClose: function() {
          console.log(this);
      },
      apis: [{
          parameter: 'type',
          explain: '必选参数，指定警告提示的样式，有四种选择 success、info、warning、error',
          type: 'String',
          default: 'info'
        },{
          parameter: 'closable',
          explain: '可选参数，默认不显示关闭按钮',
          type: 'Boolean',
          default: 'false'
        },{
          parameter: 'closeText',
          explain: '可选参数，自定义关闭按钮',
          type: 'String',
          default: '无'
        },{
          parameter: 'message',
          explain: '必选参数，警告提示内容',
          type: 'String',
          default: '无'
        },{
          parameter: 'description',
          explain: '可选参数，警告提示的辅助性文字介绍',
          type: 'String',
          default: '无'
        },{
          parameter: 'onClose',
          explain: '可选参数，关闭时触发的回调函数',
          type: 'Function',
          default: '无'
        },{
          parameter: 'showIcon',
          explain: '可选参数，是否显示辅助图标',
          type: 'Boolean',
          default: 'false'
        },{
          parameter: 'closed',
          explain: '可选参数，控制组件隐藏显示，默认显示',
          type: 'Boolean',
          default: 'false'
        }
      ]
    }
  },
  components: {
    vAlert,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
