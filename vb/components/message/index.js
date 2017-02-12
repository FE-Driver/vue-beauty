import './style/index.less'
import Message from './message.js'

let defaultDuration = 1.5
let top = 24
let messageInstance
let key = 1

function getMessageInstance () {
  messageInstance = messageInstance || Message.newInstance({
    top: top
  })

  return messageInstance
}

function notice (content, duration = defaultDuration, onClose, type) {
  let instance = getMessageInstance()

  instance.notice({
    key: key,
    duration: duration,
    content: content,
    type: type,
    onClose: onClose
  })

  return (function () {
    let target = key++
    return function () {
      instance.removeNotice(target)
    }
  })()
}

export default {
  info (content, duration, onClose) {
    return notice(content, duration, onClose, 'info')
  },
  success (content, duration, onClose) {
    return notice(content, duration, onClose, 'success')
  },
  error (content, duration, onClose) {
    return notice(content, duration, onClose, 'error')
  },
  warning (content, duration, onClose) {
    return notice(content, duration, onClose, 'warning')
  },
  loading (content, duration, onClose) {
    return notice(content, duration, onClose, 'loading')
  },
  config (options) {
    if (options.top) {
      top = options.top
      // delete messageInstance for new defaultTop
      messageInstance = null
    }
    if (options.duration) {
      defaultDuration = options.duration
    }
  },
  destroy () {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null
    }
  }
}
