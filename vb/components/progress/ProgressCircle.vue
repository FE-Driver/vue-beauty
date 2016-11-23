<template>
<div :class="prefixCls + '-circle-wrap status-' + progressStatus" >
  <div
    :class="prefixCls + '-circle-inner'"
    :style="{
      'width': width + 'px',
      'height': width + 'px',
      'fontSize': width * 0.16 + 6 + 'px'
    }">

    <svg viewBox='0 0 100 100'>
      <path :d="pathString" :stroke="trailColor"
        :stroke-width="trailWidth" fill-opacity='0'/>
      <path :d="pathString" stroke-linecap='round'
        :stroke="strokeColor" :stroke-width="strokeWidth" fill-opacity='0' :style="pathStyle" />
    </svg>

    <span v-if="progressStatus === 'exception'" :class="prefixCls + '-circle-text'"><v-icon type="exclamation"></v-icon></span>
    <span v-if="progressStatus === 'success'" :class="prefixCls + '-circle-text'"><v-icon type="check"></v-icon></span>
    <span v-if="progressStatus !== 'exception' && progressStatus !== 'success'" :class="prefixCls + '-circle-text'">{{ percent }}%</span>
  </div>
</div>
</template>

<script>
  import { defaultProps, oneOf } from '../../utils'
  import vIcon from '../iconfont'

const statusColorMap = {
  'normal': '#2db7f5',
  'exception': '#ff6600',
  'success': '#87d068'
}

export default {
  name: 'v-progress-circle',
  props: defaultProps({
    prefixCls: 'ant-progress',

    status: oneOf(['normal', 'exception', 'success'], 'normal'),
    progressStatus: 'normal',
    width: 132,
    percent: 0,
    trailWidth: 6,
    strokeWidth: 6,
    trailColor: '#e9e9e9'
  }),

  components: { vIcon },

  computed: {
    strokeColor () {
      return statusColorMap[this.progressStatus]
    },

    radius () {
      return 50 - this.strokeWidth / 2
    },

    pathString () {
      return `M 50,50 m 0,-${this.radius}
              a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
              a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`
    },

    pathStyle () {
      const len = Math.PI * 2 * this.radius
      return {
        'strokeDasharray': `${len}px ${len}px`,
        'strokeDashoffset': `${((100 - this.percent) / 100 * len)}px`,
        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      }
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
