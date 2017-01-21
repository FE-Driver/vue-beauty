<template>
  <div class="ant-breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'vBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  }
}
</script>
