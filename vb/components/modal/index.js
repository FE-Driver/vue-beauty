import './style/index.less';
import vModal from './modal';
import vConfirm from './confirm';


let modalInstance;

function getModalInstance() {
    modalInstance = modalInstance || vConfirm.newInstance({
        prefixCls: 'ant-confirm',
        okLoading: false,
        cancelLoading: false,
    });

    return modalInstance;
}

function confirm(options) {
    // const render = ('render' in options) ? options.render : undefined;
    const instance = getModalInstance();

    instance.show(options);
}

vModal.confirm = (options) => {
    const config = Object.assign({
        type: 'confirm',
        okCancel: true,
    }, options);
    confirm(config);
};

vModal.info = (options) => {
    const config = Object.assign({
        type: 'info',
        iconType: 'info-circle',
        okCancel: false,
    }, options);
    confirm(config);
};

vModal.success = (options) => {
    const config = Object.assign({
        type: 'success',
        iconType: 'check-circle',
        okCancel: false,
    }, options);
    confirm(config);
};

vModal.error = (options) => {
    const config = Object.assign({
        type: 'error',
        iconType: 'cross-circle',
        okCancel: false,
    }, options);
    confirm(config);
};

vModal.warning = (options) => {
    const config = Object.assign({
        type: 'warning',
        iconType: 'exclamation-circle',
        okCancel: false,
    }, options);
    confirm(config);
};

export default vModal;
