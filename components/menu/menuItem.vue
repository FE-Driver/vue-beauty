<template lang="html">
  <li class="ant-menu-item" :class="{'ant-menu-item-disabled': disabled}">
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="css">
</style>
