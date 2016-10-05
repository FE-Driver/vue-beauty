import vModal from './modal.vue'
import confirm from './confirm'

vModal.install = function(Vue){
  Vue.component(vModal.name, vModal);
  Vue.$modal = Vue.prototype.$modal = {
    confirm(props) {
      const config = {
        type: 'confirm',
        okCancel: true, 
        ...props
      }
      return confirm.call(Vue,config)
    },
    info(props) {
      const config = {
        type: 'info',
        iconType: 'info-circle',
        okCancel: false,
        ...props
      }
      return confirm.call(Vue,config);
    },
    success(props) {
      const config = {
        type: 'success',
        iconType: 'check-circle',
        okCancel: false,
        ...props
      }
      return confirm.call(Vue,config)
    },
    error(props) {
      const config = {
        type: 'error',
        iconType: 'exclamation-circle',
        okCancel: false,
        ...props
      }
      return confirm.call(Vue,config)
    }
  }
}

export default vModal
