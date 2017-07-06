import './style/index.less';
import vModal from './modal';
import confirm from './confirm';
import globalConfig from '../../utils/config';

vModal.install = function (Vue, prefix) {
    prefix = prefix || globalConfig.componentNamePrefix;
    Vue.component(prefix + vModal.name, vModal);
    Vue.$modal = Vue.prototype.$modal = {
        confirm(props) {
            const config = Object.assign({
                type: 'confirm',
                okCancel: true,
            }, props);
            return confirm.call(Vue, config);
        },
        info(props) {
            const config = Object.assign({
                type: 'info',
                iconType: 'info-circle',
                okCancel: false,
            }, props);
            return confirm.call(Vue, config);
        },
        success(props) {
            const config = Object.assign({
                type: 'success',
                iconType: 'check-circle',
                okCancel: false,
            }, props);
            return confirm.call(Vue, config);
        },
        error(props) {
            const config = Object.assign({
                type: 'error',
                iconType: 'cross-circle',
                okCancel: false,
            }, props);
            return confirm.call(Vue, config);
        },
        warning(props) {
            const config = Object.assign({
                type: 'warning',
                iconType: 'exclamation-circle',
                okCancel: false,
            }, props);
            return confirm.call(Vue, config);
        },
    };
};

export default vModal;
