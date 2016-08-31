<template lang="html">

  <li class="ant-menu-submenu-inline ant-menu-submenu" :class="{'ant-menu-submenu-open': open}">
    <div class="ant-menu-submenu-title" @click="open = !open">
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
    count: 0
  }),
  computed:{
    itemCls(){
      return [
        'ant-menu', 
        'ant-menu-inline', 
        'ant-menu-sub',
        {['ant-menu-hidden']:!this.open}
      ]
    }
  }
}
</script>

<style lang="less">

.ant-menu-inline{
  overflow: hidden;
}
</style>
