<template lang="html">

  <div class="ant-message-notice" v-if="show" transition="message">
    <div class="ant-message-notice-content">
      <div class="ant-message-custom-content ant-message-{{type}}">
        <i class="anticon anticon-{{icon}}"></i>
        <span v-text="content"></span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    content: '',
    duration: '',
    type: String,
    show: {
      type: Boolean,
      twoWay: true
    }
  },
  data: function () {
    return {
    }
  },
  computed:{
    icon(){
      let iconClass = ({
        'info': 'info-circle',
        'success': 'check-circle',
        'warning': 'exclamation-circle',
        'error': 'exclamation-circle',
        'loading': 'loading',
      })[this.type]
      return iconClass
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
