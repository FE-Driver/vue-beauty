<template lang="html">

  <div>

    <section class="markdown">
      <h1>Message 全局提示</h1>
      <p>
        全局展示操作反馈信息。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>可提供成功、警告和错误等反馈信息。</li>
        <li>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="普通提示"
          describe="信息提醒反馈。"
          code='openMessage() {
  message.info("这是一条普通的提醒");
},

<button type="button" class="ant-btn ant-btn-primary" @click="openMessage"><span>显示普通提醒</span></button>'
        >

          <button type="button" class="ant-btn ant-btn-primary" @click="openMessage"><span>显示普通提醒</span></button>

        </code-box>

        <code-box
          title="修改延时"
          describe="自定义时长 10s，默认时长为 1.5s"
          code='time(){
  message.success("这是一条成功的提示,并将于10秒后消失", 10);
},

<button type="button" class="ant-btn" @click="time"><span>自定义时长提示</span></button>'
        >
          <button type="button" class="ant-btn" @click="time"><span>自定义时长提示</span></button>

        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="其他提示类型"
          describe="包括成功、失败、警告。"
          code='success() {
  message.success("这是一条成功提示");
},
error() {
  message.error("这是一条失败提示");
},
warning() {
  message.warning("这是一条警告提示");
},

<button type="button" class="ant-btn" @click="success("success")"><span>显示成功信息</span></button>
<button type="button" class="ant-btn" @click="error("error")"><span>显示失败信息</span></button>
<button type="button" class="ant-btn" @click="warning("warning")"><span>显示警告信息</span></button>'
        >
          <button type="button" class="ant-btn" @click="success('success')"><span>显示成功信息</span></button>
          <button type="button" class="ant-btn" @click="error('error')"><span>显示失败信息</span></button>
          <button type="button" class="ant-btn" @click="warning('warning')"><span>显示警告信息</span></button>
        </code-box>

        <code-box
          title="加载中"
          describe="进行全局 loading，异步自行移除。"
          code='loading() {
  const hide = message.loading("正在执行中...", 0);
  setTimeout(hide, 2500);
},

<button type="button" class="ant-btn" @click="loading"><span>显示加载中...</span></button>'
        >
          <button type="button" class="ant-btn" @click="loading"><span>显示加载中...</span></button>
        </code-box>

      </div>

    </div>



    <api-table
      :apis='apis'
    >
      <ul>
        <li><button type="button" class="ant-btn">message.success(content, duration)</button></li>
        <li><button type="button" class="ant-btn">message.error(content, duration)</button></li>
        <li><button type="button" class="ant-btn">message.warning(content, duration)</button></li>
        <li><button type="button" class="ant-btn">message.loading(content, duration)</button></li>
      </ul>
      <p>
        参数如下：
      </p>
    </api-table>

    <api-table
      :apis='config'
    >
      <p>
        还提供了一个全局配置方法，在调用前提前配置，全局一次生效。
      </p>
      <p>
          <button type="button" class="ant-btn">message.config({
            top: 100,
            duration: 3,
          })</button>
      </p>
    </api-table>

  </div>

</template>

<script>

import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'
import message from '../../components/message'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'content',
          explain: '提示内容',
          type: 'Sring',
          default: '无'
        },{
          parameter: 'duration',
          explain: '默认 1.5 秒后自动关闭，配置为 0 则不自动关闭',
          type: 'Number',
          default: '1.5'
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
          default: '1.5'
        }
      ]
    }
  },
  methods: {
    openMessage() {
      message.info("这是一条普通的提醒");
    },
    success() {
      message.success("这是一条成功提示");
    },
    error() {
      message.error("这是一条失败提示");
    },
    warning() {
      message.warning("这是一条警告提示");
    },
    time(){
      message.success("这是一条成功的提示,并将于10秒后消失", 10);
    },
    loading() {
      const hide = message.loading("正在执行中...", 0);
      setTimeout(hide, 2500);
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
