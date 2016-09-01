<template lang="html">

  <li class="ant-menu-submenu-inline ant-menu-submenu" :class="{'ant-menu-submenu-open': open}">
    <div class="ant-menu-submenu-title" @click="open = !open" :style="titleSty">
      <span><span>{{title}}</span></span>
    </div>
    <ul :class="itemCls">
      <slot></slot>
    </ul>
  </li>

</template>

<script>
export default {
  props: {
    title: String
  },
  data:()=>({
    open: false,
    level:0
  }),
  watch: {
    'level' : function(val, oldVal){
      const childVal = ++val;
      for(let child of this.$children){
        child.level = childVal;
      }
    }
  },
  computed:{
    itemCls(){
      return [
        'ant-menu', 
        'ant-menu-inline', 
        'ant-menu-sub',
        {['ant-menu-hidden']:!this.open}
      ]
    },
    titleSty(){
      return {
        paddingLeft: 24 * this.level + 'px'
      }
    }
  }
}
</script>

<style lang="less">

.ant-menu-inline{
  overflow: hidden;
}
</style>
