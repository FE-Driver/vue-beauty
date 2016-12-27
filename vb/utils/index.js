import * as _dom from './dom'
import * as _props from './props'
import * as _event from './event'
import * as _guid from './guid'

import cx from 'classnames'
import KeyCode from './KeyCode'
import slotMixin from './slotMixin'

function getPlainObject (vueObject) {
  return JSON.parse(JSON.stringify(vueObject))
}
//object用export default会将到处这样的形式{default: object} 导致外面解构失败
module.exports = {
  ..._dom,
  ..._props,
  ..._event,
  ..._guid,
  cx,
  KeyCode,
  slotMixin,
  getPlainObject
}