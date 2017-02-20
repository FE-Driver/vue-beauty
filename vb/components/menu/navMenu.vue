<template lang="html">
  <div>
    <menu v-if="data && data.length" :mode="mode" :theme="theme">
      <template v-for="item in data">
        <menu-item v-if="!item.children && !item.groups" v-link="item.link" :disabled="item.disabled" :icon="item.icon">{{item.name}}</menu-item>
        <nav-submenu v-else :data="item"></nav-submenu>
      </template>
    </menu>
  </div>
</template>

<script lang="babel">
  import menu from './menu.vue'
  import menuItem from './menuItem.vue'
  import navSubmenu from './navSubMenu.vue'

  export default {
    name: 'vNavmenu',
    props: {
      data: {
        type: Array,
        required: true
      },
      mode: {
        type: String,
        default: 'vertical'
      },
      theme: {
        type: String,
        default: 'light'
      }
    },
    components:{
      menu,
      navSubmenu,
      menuItem
    }
  }
</script>
