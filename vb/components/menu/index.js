import "./style/index.less"
import menu from './menu.vue'
import subMenu from './subMenu.vue'
import menuItemGroup from './menuItemGroup.vue'
import menuItem from './menuItem.vue'

menu.item = menuItem
menu.itemGroup = menuItemGroup
menu.subMenu = subMenu

export default menu