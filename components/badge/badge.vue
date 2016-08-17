<template lang="html">

  <span class="ant-badge" :class="{'ant-badge-not-a-wrapper':!slot}">
    <slot></slot>
    <sup class="ant-scroll-number" :class="[ dot ? 'ant-badge-dot':'ant-badge-count']" :style="styles" v-if="show && count> 0" transition="badge">{{num}}</sup>
  </span>

</template>

<script>

/**
 * Badge 警告提示
 * @param count 展示的数字，大于 overflowCount 时显示为 {{overflowCount}}+，为 0 时隐藏
 * @param overflowCount 展示封顶的数字值
 * @param dot 不展示数字，只有一个小红点
 * @param show 是否显示
 */

export default {
  props:{
    count: {
      type: Number,
      default: 1
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    },
    styles: Object
  },
  ready(){
    if (!this._slotContents) {
      this.slot = false
    }
  },
  computed: {
    num: function () {
      let num
      if (this.count > this.overflowCount) {
        num = this.overflowCount + '+'
      }else if(!this.dot){
        num = this.count
      }
      return num
    }
  },
  data: function () {
    return {
      slot: true
    }
  }
}
</script>
