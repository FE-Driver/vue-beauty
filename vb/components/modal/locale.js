import Locale from '../../mixins/locale'
const _t = Locale.methods.t;

const defaultLocale = {
    okText: _t('modal.okText'),
    cancelText: _t('modal.cancelText'),
    justOkText: _t('modal.justOkText'),
};

let runtimeLocale = Object.assign({}, defaultLocale);

export function changeConfirmLocale(newLocale) {
    if (newLocale) {
        runtimeLocale = Object.assign({}, runtimeLocale, newLocale);
    } else {
        runtimeLocale = Object.assign({}, defaultLocale);
    }
}

export function getConfirmLocale() {
    return runtimeLocale;
}
