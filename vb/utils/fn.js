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
export function getOffset(element, container = document.body) {
  const el_rect = element.getBoundingClientRect();
  const container_rect = container.getBoundingClientRect();
  const clientTop = element.clientTop || container.clientTop || 0;
  const clientLeft = element.clientLeft || container.clientLeft || 0;
  let top, left;

  if(container === document.body){
    top = getScroll(true);
    left = getScroll();
  }else{
    top = container.scrollTop - container_rect.top;
    left = container.scrollLeft - container_rect.left;
  }
  
  return {
    top: el_rect.top + top - clientTop,
    left: el_rect.left + left - clientLeft,
    right: el_rect.right + left - clientLeft,
    bottom: el_rect.bottom + top - clientTop
  }
}
