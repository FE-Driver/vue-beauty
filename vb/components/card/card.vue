<template>

  <div class="ant-card" :class="{'ant-card-bordered': bordered}">
    <div class="ant-card-head" v-if="title">
      <h3 class="ant-card-head-title">{{title}}</h3>
    </div>
    <template v-if="$slots.extra || extra">
      <div class="ant-card-extra">
        <slot name="extra"></slot>
      </div>
    </template>
    <div class="ant-card-body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: 'vCard',
  data:()=>({
      prefix: 'ant-card',
      extra: false,
  }),
  props: {
    title: String,
    bordered: {
      type: Boolean,
      default: true
    },
    bodyStyle: Object,
  },
}
</script>