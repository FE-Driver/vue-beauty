<template>
    <submenu v-if="data" :title="data.name" :icon="data.icon" :disabled="data.disabled">
        <template v-if="data.children">
            <template v-for="item in data.children">
                <menu-item v-if="!item.children && !item.groups" v-link="item.link"  :disabled="item.disabled" :icon="item.icon">{{item.name}}</menu-item>
                <v-nav-submenu v-else :data="item"></v-nav-submenu>
            </template>
        </template>
        <template v-if="data.groups">
            <menu-item-group v-for="item in data.groups" :title="item.groupName">
                <template v-for="child in item.list">
                    <menu-item v-if="!child.children && !child.groups" v-link="child.link"  :disabled="child.disabled" :icon="child.icon">{{child.name}}</menu-item>
                    <v-nav-submenu v-else :data="child"></v-nav-submenu>
                </template>
            </menu-item-group>
        </template>
    </submenu>
</template>

<script lang="babel">
  import submenu from './subMenu.vue'
  import menuItemGroup from './menuItemGroup.vue'
  import menuItem from './menuItem.vue'

  export default {
    name: 'vNavSubmenu',
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    components:{
      submenu,
      menuItemGroup,
      menuItem
    }
  }
</script>
