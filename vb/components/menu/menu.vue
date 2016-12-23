<template lang="html">
  <ul class="ant-menu ant-menu-{{mode}} ant-menu-{{theme}} ant-menu-root" :title="title">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name:'v-menu',
  props: {
    title: String,
    mode: {
      type: String,
      default: 'vertical'
    },
    theme: {
      type: String,
      default: 'light'
    },
    expand: {
      type: Boolean,
      default: false
    }
  },
  ready(){
    this.$on('nodeSelected',ori=>{
      this.$broadcast('cancelSelected',ori);
    })
  },
  watch: {
    mode(){
      this.expand = false;
      this.$broadcast('modeChange',this.mode);
    },
    expand() {
      this.$broadcast('expandChange',this.expand);
    }
  }
}
</script>
