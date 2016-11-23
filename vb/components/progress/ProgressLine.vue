<template>
<div :class="wrapClasses">
  <span v-if="showInfo === true" >
    <span v-if="progressStatus === 'exception' || progressStatus === 'success'" :class="prefixCls + '-line-text'">
      <v-icon :type="progressStatus === 'exception' ? 'exclamation-circle' : 'check-circle' "></v-icon>
    </span>
    <span v-else :class="prefixCls + '-line-text'">
      {{ percent }}%
    </span>
  </span>

  <div :class="prefixCls + '-line-outer'">
    <div :class="prefixCls + '-line-inner'">
      <div :class="prefixCls + '-line-bg'" :style="{width: percent + '%', height: strokeWidth + 'px'}"></div>
    </div>
  </div>
</div>
</template>

<script>
  import { defaultProps, oneOf } from '../../utils'
  import vIcon from '../iconfont'

export default {
  name: 'v-progress-line',
  props: defaultProps({
    prefixCls: 'ant-progress',

    status: oneOf(['normal', 'exception', 'active', 'success'], 'normal'),
    progressStatus: 'normal',
    showInfo: true,
    percent: 0,
    strokeWidth: 10
  }),

  components: { vIcon },

  computed: {
    wrapClasses () {
      return [
        `${this.prefixCls}-line-wrap`,
        'clearfix',
        {[`status-${this.progressStatus}`]: this.progressStatus},
        {[`${this.prefixCls}-line-wrap-full`]: !this.showInfo}
      ]
    }
  },

  compiled () {
    this._handleStatus()
  },

  watch: {
    percent () {
      this._handleStatus()
    }
  },

  methods: {
    _handleStatus () {
      if (parseInt(this.percent, 10) === 100) {
        this.progressStatus = 'success'
      } else {
        this.progressStatus = this.status || 'normal';
      }
    }
  }
}

</script>