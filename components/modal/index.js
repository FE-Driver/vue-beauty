import Modal from './Modal.vue'
import confirm from './confirm'
import assign from 'object-assign'

Modal.info = function (props) {
  const config = assign({
    type: 'info',
    iconType: 'info-circle',
    okCancel: false,
  }, props)
  return confirm(config)
}

Modal.success = function (props) {
  const config = assign({
    type: 'success',
    iconType: 'check-circle',
    okCancel: false,
  }, props)
  return confirm(config)
}

Modal.error = function (props) {
  const config = assign({
    type: 'error',
    iconType: 'exclamation-circle',
    okCancel: false,
  }, props)
  return confirm(config)
}

Modal.confirm = function (props) {
  const config = assign({
    type: 'confirm',
    okCancel: true,
  }, props)
  return confirm(config)
}

export default Modal
