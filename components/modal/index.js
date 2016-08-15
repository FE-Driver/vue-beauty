import vModal from './modal.vue'
import confirm from './confirm'
import assign from 'object-assign'

vModal.info = function (props) {
  const config = assign({
    type: 'info',
    iconType: 'info-circle',
    okCancel: false,
  }, props)
  return confirm(config)
}

vModal.success = function (props) {
  const config = assign({
    type: 'success',
    iconType: 'check-circle',
    okCancel: false,
  }, props)
  return confirm(config)
}

vModal.error = function (props) {
  const config = assign({
    type: 'error',
    iconType: 'exclamation-circle',
    okCancel: false,
  }, props)
  return confirm(config)
}

vModal.confirm = function (props) {
  const config = assign({
    type: 'confirm',
    okCancel: true,
  }, props)
  return confirm(config)
}

export default vModal
