<template lang="html">

  <div>

    <section class="markdown">
      <h1>Notification通知提醒框</h1>
      <p>
        全局展示通知提醒信息。
      </p>
      <h2>何时使用</h2>
      <p>在系统右上角显示通知提醒信息。经常用于以下情况：</p>
      <ul>
        <li>较为复杂的通知内容。</li>
        <li>带有交互的通知，给出用户下一步的行动点。</li>
        <li>系统主动推送。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基本"
          describe="最简单的用法，4.5 秒后自动关闭。"
          code='openNotification() {
  notification.open({
    message: "这是标题",
    description: "这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案",
  });
},

<button type="button" class="ant-btn ant-btn-primary" @click="openNotification"><span>打开通知提醒框</span></button>'
        >

          <button type="button" class="ant-btn ant-btn-primary" @click="openNotification"><span>打开通知提醒框</span></button>

        </code-box>

        <code-box
          title="带有Icon的通知提醒框"
          describe="通知提醒框左侧有图标。"
          code='openNotificationWithIcon(type) {
  notification[type]({
    message: "这是标题",
    description: "这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案"
  });
}

<button type="button" class="ant-btn" @click="openNotificationWithIcon("success")"><span>成 功</span></button>
<button type="button" class="ant-btn" @click="openNotificationWithIcon("info")"><span>消 息</span></button>
<button type="button" class="ant-btn" @click="openNotificationWithIcon("warning")"><span>警 告</span></button>
<button type="button" class="ant-btn" @click="openNotificationWithIcon("error")"><span>错 误</span></button>
'
        >
          <button type="button" class="ant-btn" @click="openNotificationWithIcon('success')"><span>成 功</span></button>
          <button type="button" class="ant-btn" @click="openNotificationWithIcon('info')"><span>消 息</span></button>
          <button type="button" class="ant-btn" @click="openNotificationWithIcon('warning')"><span>警 告</span></button>
          <button type="button" class="ant-btn" @click="openNotificationWithIcon('error')"><span>错 误</span></button>

        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="自动关闭的延时"
          describe="自定义通知框自动关闭的延时，默认4.5s，取消自动关闭只要将该值设为 0 即可。"
          code='openNotification() {
  notification.open({
    message: "这是标题",
    description: "我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭",
    duration: 0,
  });
}

<button type="button" class="ant-btn ant-btn-primary" @click="openNotification2"><span>打开通知提醒框</span></button>'
        >
          <button type="button" class="ant-btn ant-btn-primary" @click="openNotificationInfinite"><span>打开通知提醒框</span></button>
        </code-box>

        <!-- <code-box
          title="自定义"
          describe="自定义关闭按钮的样式和文字。"
          code=""
        >
          <button type="button" class="ant-btn ant-btn-primary"><span>打开通知提醒框</span></button>
        </code-box> -->

      </div>

    </div>



    <api-table
      :apis='apis'
    >
      <ul>
        <li>notification.success(config)</li>
        <li>notification.error(config)</li>
        <li>notification.info(config)</li>
        <li>notification.warning(config)</li>
      </ul>
      <p>
        config 参数如下：
      </p>
    </api-table>

    <api-table
      :apis='config'
    >
      <p>
        还提供了一个全局配置方法，在调用前提前配置，全局一次生效。
      </p>
      <p>
          notification.config({
            top: 100,
            duration: 3,
          });
      </p>
    </api-table>

  </div>

</template>

<script>

import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'
import notification from '../../components/notification'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'message',
          explain: '通知提醒标题，必选',
          type: 'Sring',
          default: '无'
        },{
          parameter: 'description',
          explain: '通知提醒内容，必选',
          type: 'Sring',
          default: '无'
        },{
          parameter: 'duration',
          explain: '默认 4.5 秒后自动关闭，配置为 0 则不自动关闭',
          type: 'Number',
          default: '4.5'
        }
      ],
      config: [{
          parameter: 'top',
          explain: '消息距离顶部的位置',
          type: 'Number',
          default: '24'
        },{
          parameter: 'duration',
          explain: '默认自动关闭延时，单位秒',
          type: 'Number',
          default: '4.5'
        }
      ]
    }
  },
  methods: {
    openNotification() {
      notification.open({
        message: '这是标题',
        description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
      });
    },
    openNotificationInfinite() {
      notification.open({
        message: '这是标题',
        description: '我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭',
        duration: 0,
      });
    },
    openNotificationWithIcon(type) {
      notification[type]({
        message: '这是标题',
        description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案'
      });
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">



</style>
