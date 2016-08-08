/**
 * EVENT_NAME_MAP is used to determine which event fired when a
 * transition/animation ends, based on the style property used to
 * define that event.
 */
const EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
}

let endEvents = []

const detectEvents = function () {
  const testEl = document.createElement('div')
  const style = testEl.style

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are useable, and if not remove them
  // from the map
  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition
  }

  for (const baseEventName in EVENT_NAME_MAP) {
    const baseEvents = EVENT_NAME_MAP[baseEventName]
    for (const styleName in baseEvents) {
      if (styleName in style) {
        endEvents.push(baseEvents[styleName])
        break
      }
    }
  }
}

if (typeof window !== 'undefined') {
  detectEvents()
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.
export function addEventListener (target, eventName, eventListener) {
  if (target.addEventListener) {
    target.addEventListener(eventName, eventListener, false)
    return {
      remove () {
        target.removeEventListener(eventName, eventListener, false)
      }
    }
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventName, eventListener)
    return {
      remove () {
        target.detachEvent('on' + eventName, eventListener)
      }
    }
  }
}

const removeEventListener = function (node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false)
}

export function addEndEventListener (node, eventListener) {
  if (endEvents.length === 0) {
    // If CSS transitions are not supported, trigger an "end animation"
    // event immediately.
    window.setTimeout(eventListener, 0)
    return
  }
  endEvents.forEach(endEvent => {
    addEventListener(node, endEvent, eventListener)
  })
}

export function removeEndEventListener (node, eventListener) {
  if (endEvents.length === 0) {
    return
  }
  endEvents.forEach(endEvent => {
    removeEventListener(node, endEvent, eventListener)
  })
}
