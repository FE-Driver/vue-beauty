<template lang="html">
  <div>
    <menu v-if="data && data.length" :mode="mode" :theme="theme">
      <template v-for="item in data">
        <menu-item v-if="!item.children && !item.groups" v-link="item.link" :disabled="item.disabled" :icon="item.icon">{{item.name}}</menu-item>
        <nav-sub-menu v-else :data="item"></nav-sub-menu>
      </template>
    </menu>
  </div>
</template>

<script>
  import menu from './menu.vue'
  import menuItem from './menuItem.vue'
  import navSubMenu from './navSubMenu.vue'


  export default {
    name: 'navMenu',
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
      navSubMenu,
      menuItem
    }
  }
</script>
