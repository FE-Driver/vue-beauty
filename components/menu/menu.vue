<template lang="html">
  <ul class="ant-menu ant-menu-{{mode}} ant-menu-{{theme}} ant-menu-root">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    theme: {
      type: String,
      default: 'light'
    },
  },
  ready(){
    for(let child of this.$children){
      child.level = 1;
    }
  }
}
</script>
