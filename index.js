import './style/index.less'
import meta from './package.json'

import vAlert from './components/alert'
import vBadge from './components/badge'
import vCard from './components/card'
import vCollapse from './components/collapse'

var antDesign = {
  vAlert,
  vBadge,
  vCard,
  vCollapse
}

antDesign.version = meta.version

export default antDesign
