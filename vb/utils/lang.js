export function camelcaseToHyphen (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

const camelizeRE = /-(\w)/g
const toUpper = function (_, c) {
  return c ? c.toUpperCase() : ''
}

export function camelize (str) {
  return str.replace(camelizeRE, toUpper)
}

export function strToObj (str) {
  const strArr = str.split(' ')
  const obj = {}
  strArr.forEach(item => {
    obj[item] = 1
  })
  return obj
}

// 节流函数
export function throttle (func, wait, options) {
  let context, args, result
  let timeout = null
  let previous = 0
  if (!options) options = {}
  var later = function () {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }
  return function () {
    var now = Date.now()
    if (!previous && options.leading === false) previous = now
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
}
