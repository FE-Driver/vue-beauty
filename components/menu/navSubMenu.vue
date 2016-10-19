<template>
    <sub-menu v-if="data" :title="data.name" :icon="data.icon" :disabled="data.disabled">
        <template v-if="data.children">
            <template v-for="item in data.children">
                <menu-item v-if="!item.children && !item.groups" v-link="item.link"  :disabled="item.disabled" :icon="item.icon" :title="item.name">{{item.name}}</menu-item>
                <v-nav-sub-menu v-else :data="item"></v-nav-sub-menu>
            </template>
        </template>
        <template v-if="data.groups">
            <menu-item-group v-for="item in data.groups" :title="item.groupName">
                <template v-for="child in item.list">
                    <menu-item v-if="!child.children && !child.groups" v-link="child.link"  :disabled="child.disabled" :icon="child.icon" :title="child.name">{{child.name}}</menu-item>
                    <v-nav-sub-menu v-else :data="child"></v-nav-sub-menu>
                </template>
            </menu-item-group>
        </template>
    </sub-menu>
</template>

<script>
  import subMenu from './subMenu.vue'
  import menuItemGroup from './menuItemGroup.vue'
  import menuItem from './menuItem.vue'

  export default {
    name: 'v-nav-sub-menu',
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    ready(){
        this.$on('modeChange',val=>{
            this.$broadcast('modeChange',val);
        })
        this.$on('cancelSelected',ori=>{
            this.$broadcast('cancelSelected',ori);
        })
    },
    components:{
      subMenu,
      menuItemGroup,
      menuItem
    }
  }
</script>
