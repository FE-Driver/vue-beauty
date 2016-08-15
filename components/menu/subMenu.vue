<template lang="html">

  <li class="ant-menu-submenu-inline ant-menu-submenu" :class="{'ant-menu-submenu-open': open}">
    <div class="ant-menu-submenu-title" @click="open=!open" transition="badge">
      <span><span>{{title}}</span></span>
    </div>
    <ul class="ant-menu ant-menu-inline ant-menu-sub" :style="{'height': 42 * count + 'px'}" >
      <slot></slot>
    </ul>
  </li>

</template>

<script>
export default {
  props: {
    title: String
  },
  data(){
    return {
      open: false,
      count: 0
    }
  },
  watch: {
    open: function () {
      if (this.open) {
        this.count = this._slotContents.default.childElementCount
      }else{
        this.count = 0
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
