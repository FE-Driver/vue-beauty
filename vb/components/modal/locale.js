const defaultLocale = {
  okText: '确定',
  cancelText: '取消',
  justOkText: '知道了',
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
