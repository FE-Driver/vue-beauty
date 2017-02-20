<template lang="html">
  <ul :class="`ant-menu ant-menu-${mode} ant-menu-${theme} ant-menu-root`">
    <slot></slot>
  </ul>
</template>

<script lang="babel">
export default {
  name:'Menu',
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    theme: {
      type: String,
      default: 'light'
    },
  }
}
</script>
