<template lang="html">

  <div :class="wrapClasses">
     <slot></slot>
  </div>

</template>

<script>
import cx from 'classnames'

export default {
  props: {
    current: {
      type: Number,
      default: 0
    },
    status: String,
    size: {
      type: String,
      default: 'process'
    },
    direction: String,
  },
  data: function () {
    return {
      prefixCls: 'ant-steps',
      maxDescriptionWidth: '100px'
    }
  },
  computed: {
    wrapClasses () {
      return cx({
        ['ant-steps']: 1,
        ['ant-steps-small']: this.size === 'small',
        ['ant-steps-vertical']: this.direction === 'vertical'
      })
    }
  },
  watch: {
    current () {
      this.handStatus()
    }
  },
  ready: function () {
    if (this.direction === 'vertical') {
      this.maxDescriptionWidth = 'auto'
    }
    this.handStatus(true)
    this.handleTailWidth()

  },
  attached: function () {},
  methods: {
    handStatus(isInit) {
      const len = this.$children.length - 1
      this.$children.forEach((child, index) => {
        child.maxDescriptionWidth = this.maxDescriptionWidth
        child.stepNumber = (index + 1).toString()
        child.stepLast = index === len

        if (isInit && child.status) {
          return
        }

        if (this.status) {
          if (index === this.current) {
            this.$children[index - 1].rootStatus = this.status
            child.status = this.status
          } else if (index < this.current) {
            child.status = 'finish'
          } else {
            child.status = 'wait'
          }
        }else{
          if (index === this.current) {
            child.status = 'process'
          } else if (index < this.current) {
            child.status = 'finish'
          } else {
            child.status = 'wait'
          }
        }

      })
    },
    handleTailWidth() {
      if (this.direction === 'vertical') {
        return
      }
      const dom = this.$el
      const len = this.$el.children.length - 1
      let width = 0
      for (let children of this.$children[len].$el.children) {
        width = width + children.clientWidth
      }
      this.$children.forEach((child, index) => {

        if (index == len) {
          child.tailWidth = 'auto'
        }else{
          child.tailWidth = ( dom.clientWidth - width ) / len + 'px'
        }
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
