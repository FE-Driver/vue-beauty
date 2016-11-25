//返回当前页面相对于窗口显示区左上角的 X ，Y 的位置
export function getScroll(top) {
  var ret = window['page' + (top ? 'Y' : 'X') + 'Offset']
  var method = 'scroll' + (top ? 'Top' : 'Left')
  if (typeof ret !== 'number') {
    var d = window.document
    // ie6,7,8 standard mode
    ret = d.documentElement[method]
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method]
    }
  }
  return ret
}

//获取元素top,left,right,bottom的绝对位置
export function getOffset(element) {
  var rect = element.getBoundingClientRect()
  var body = document.body
  var clientTop = element.clientTop || body.clientTop || 0
  var clientLeft = element.clientLeft || body.clientLeft || 0
  var scrollTop = getScroll(true)
  var scrollLeft = getScroll()
  
  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft,
    right: rect.right + scrollLeft - clientLeft,
    bottom: rect.bottom + scrollTop - clientTop
  }
}


let closest = function (elem, fn) {
  return elem && elem !== document && (fn(elem) ? true : closest(elem.parentNode, fn))
}
//判断是否点击了目标元素elem 可以是一个元素数组
export function closeByElement(target, elem) {
  if (!(elem instanceof Array)) {
    elem = [elem]
  }
  return closest(target, el => {
    return elem.some(d => {
      return el === d
    })
  })
}