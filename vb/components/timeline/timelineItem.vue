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
  import { defaultProps } from '../../utils'

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
        return [
          `${this.prefixCls}-item`,
          {[`${this.prefixCls}-item-last`]: this.last},
          {[`${this.prefixCls}-item-pending`]: this.pending}
        ]
      },
      dotClassName () {
        return [
          `${this.prefixCls}-item-head`,
          `${this.prefixCls}-item-head-${this.color}`,
          {[`${this.prefixCls}-item-head-custom`]: this.dot}
        ]
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