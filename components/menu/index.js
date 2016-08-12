import vMenu from './menu.vue'
import vMenuItem from './menuItem.vue'
import vSubMenu from './subMenu.vue'

vMenu.Item = vMenuItem
vMenu.subMenu = vSubMenu

export default vMenu
