<template lang="html">

  <div class="ant-collapse">
    <slot></slot>
  </div>

</template>

<script>
import item from './item'

export default {
  name:'v-collapse',
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    activeKey: Array,
    defaultActiveKey: String,
    onChange: {
      type: Function,
      default: function (key) {
      }
    },
  },
  events: {
    'child-open': function (key) {
      if (this.accordion) {
        for (let item of this.$children) {
          if (item.key===key) {
            item.open = true
          }else {
            item.open = false
          }
        }
      }
      this.onChange(key)
    }
  },
  watch: {
    'activeKey': function () {
    }
  }
}
</script>