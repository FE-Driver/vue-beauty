<template lang="html">
  <div>
    <menu v-if="data && data.length" :mode="mode" :theme="theme">
      <template v-for="item in data">
        <menu-item v-if="!item.children && !item.groups" v-link="item.link" :link="aTag?item.link:''" :disabled="item.disabled" :icon="item.icon" :title="item.name">{{item.name}}</menu-item>
        <nav-sub-menu v-else :data="item" :a-tag="aTag"></nav-sub-menu>
      </template>
    </menu>
  </div>
</template>

<script>
  import menu from './menu.vue'
  import menuItem from './menuItem.vue'
  import navSubMenu from './navSubMenu.vue'


  export default {
    name: 'v-nav-menu',
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
      },
      aTag:  {
        type: Boolean,
        default: false
      }
    },
    components:{
      menu,
      navSubMenu,
      menuItem
    }
  }
</script>
