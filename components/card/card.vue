<template lang="html">

  <div class="ant-card" :class="{'ant-card-bordered': bordered}">
    <div class="ant-card-head" v-if="title"><h3 class="ant-card-head-title">{{title}}</h3></div>
    <div class="ant-card-extra" v-if="extra">{{{extra}}}</div>
    <div class="ant-card-body" :style="bodyStyle"><slot></slot></div>
  </div>

</template>

<script>
export default {
  props: {
    title: String,
    bordered: {
      type: Boolean,
      default: true
    },
    extra: String,
    bodyStyle: Object,
  }
}
</script>
