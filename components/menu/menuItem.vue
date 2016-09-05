<template lang="html">
  <li class="ant-menu-item" :class="{'ant-menu-item-disabled': disabled}" :style="itemSty">
    <slot></slot>
  </li>
</template>

<script>
export default {
  data:()=>({
    level:0,
    mode: 'vertical'
  }),
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  ready(){
    this.$on('modeChage',(mode)=>{
      this.mode = mode;
    })

    this.$on('setLevel',(level)=>{
      this.level = level;
    })
  },
  computed:{
    itemSty(){
      return this.mode == 'inline'?{
          paddingLeft: 24 * this.level + 'px'
        }: '';
    }
  }
}
</script>