<template lang="html">
  <li class="ant-menu-item" :class="{'ant-menu-item-disabled': disabled}" :style="itemSty">
    <slot></slot>
  </li>
</template>

<script>
export default {
  data:()=>({
    level:0
  }),
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    'level' : function(val, oldVal){
      const childVal = ++val;
      for(let child of this.$children){
        child.level = childVal;
      }
    }
  },
  computed:{
    itemSty(){
      return {
        paddingLeft: 24 * this.level + 'px'
      }
    }
  }
}
</script>