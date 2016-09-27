<template>
  <li :class="itemClassName">
    <div :class="prefixCls + '-item-tail'"></div>
    <div :class="dotClassName" :style="{ borderColor: 'blue|red|green'.indexOf(color) > -1 ? null : color }">{{{ compile(dot) }}}</div>
    <div class="ant-timeline-item-content">
      <slot></slot>
    </div>
  </li>
</template>
<script>
  import { defaultProps, oneOfType } from '../../utils'
  import Vue from 'vue'
  import cx from 'classnames'

  export default {
    name: 'v-timeline-item',
    props: defaultProps({
      prefixCls: 'ant-timeline',
      color: 'blue',
      last: false,
      pending: Boolean,
      dot: String
    }),
    computed: {
      itemClassName () {
        return cx({
          [`${this.prefixCls}-item`]: true,
          [`${this.prefixCls}-item-last`]: this.last,
          [`${this.prefixCls}-item-pending`]: this.pending
        })
      },
      dotClassName () {
        return cx({
          [`${this.prefixCls}-item-head`]: true,
          [`${this.prefixCls}-item-head-custom`]: this.dot,
          [`${this.prefixCls}-item-head-${this.color}`]: true,
        })
      }
    },
    methods: {
      compile (elem){
        if(elem){
//          todo this.$compile(dom)
//          const _Dot = Vue.extend({
//            template: elem
//          })
//          return new _Dot().$mount().outerHTML
          return elem
        }

      }
    }
  }
</script>
