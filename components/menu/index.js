import vMenu from './menu.vue'
import vSubMenu from './subMenu.vue'
import vMenuItemGroup from './menuItemGroup.vue'
import vMenuItem from './menuItem.vue'

vMenu.Item = vMenuItem
vMenu.ItemGroup = vMenuItemGroup
vMenu.subMenu = vSubMenu

export default vMenu
