<template>
  <div class="ant-breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  }
}
</script>
