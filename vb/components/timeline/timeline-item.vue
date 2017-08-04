<template>
  <li :class="itemClassName">
    <div :class="prefixCls + '-item-tail'"></div>
    <div :class="dotClassName" :style="{ borderColor: ['blue','red','green'].includes(color) ? null : color }">
      <slot name="dot"></slot>
    </div>
    <div class="ant-timeline-item-content">
      <slot></slot>
    </div>
  </li>
</template>
<script>
  export default {
      name: 'TimelineItem',
      data: () => ({
          prefixCls: 'ant-timeline',
          dot: false,
      }),
      props: {
          color: {
              type: String,
              default: 'blue',
          },
      },
      computed: {
          itemClassName() {
              return `${this.prefixCls}-item`;
          },
          dotClassName() {
              return [
                  `${this.prefixCls}-item-head`,
                  `${this.prefixCls}-item-head-${this.color}`,
                  { [`${this.prefixCls}-item-head-custom`]: this.dot },
              ];
          },
      },
      mounted() {
          this.dot = !!this.$slots && !!this.$slots.dot;
      },
  };
</script>
