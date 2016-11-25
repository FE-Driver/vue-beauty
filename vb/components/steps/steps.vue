<template lang="html">

  <div :class="wrapClasses">
     <slot></slot>
  </div>

</template>

<script>

export default {
  name: 'v-steps',
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
      return [
        'ant-steps',
        {['ant-steps-small']: this.size === 'small'},
        {['ant-steps-vertical']: this.direction === 'vertical'}
      ]
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
      if(len <0 ) return;
      let width = this.$children[len].$el.offsetWidth

      this.$children.forEach((child, index) => {

        if (index == len) {
          child.tailWidth = 'auto'
        }else{
          child.tailWidth = Math.floor(( dom.offsetWidth - width -1 ) / len) + 'px'
        }
      })
    }
  }
}
</script>
