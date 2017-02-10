<template lang="html">

  <div class="ant-notification-notice ant-notification-notice-closable" v-if="show" transition="notification">
    <div class="ant-notification-notice-content">
      <div class="ant-notification-notice-content" :class="{'ant-notification-notice-with-icon': type != 'open'}">
        <i :class="warpClass" v-if="type != 'open'"></i>
        <div class="ant-notification-notice-message" v-text="message"></div>
        <div class="ant-notification-notice-description" v-text="description"></div>
      </div>
    </div>
    <a class="ant-notification-notice-close" @click="_close">
      <span class="ant-notification-notice-close-x"></span>
    </a>
  </div>

</template>

<script>
const prefixCls = 'ant-notification-notice';
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    type: {
      type:String,
      default:'info'
    },
    show: {
      type: Boolean,
      twoWay: true
    },
    duration: Number
  },
  data: function () {
    return {
    }
  },
  computed:{
    icon(){
      let iconClass = ({
        'info': 'info-circle-o',
        'success': 'check-circle-o',
        'error': 'cross-circle-o',
        'warning': 'exclamation-circle-o',
      })[this.type]
      return iconClass
    },
    warpClass(){
      return [
          this.prefixCls,
          `${this.prefixCls}-icon`,
          `${this.prefixCls}-icon-${this.type}`,
          `anticon-${this.icon}`
      ]
    }
  },
  compiled () {
    this._clearCloseTimer()
    if (this.duration) {
      this.closeTimer = setTimeout(() => {
        this._close()
      }, this.duration * 1000)
    }
  },
  beforeDestory () {
    this._clearCloseTimer()
  },
  methods: {
    _clearCloseTimer () {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer)
        this.closeTimer = null
      }
    },
    _close () {
      this._clearCloseTimer()
      this.show = false
    }
  }
}
</script>
