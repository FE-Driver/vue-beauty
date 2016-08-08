import Message from './message.js'

const defaultDuration = 1.5

let top
let messageInstance
let key = 1

function getMessageInstance () {
  messageInstance = messageInstance || Message.newInstance({
    top: top
  })

  return messageInstance
}

function notice (content, duration = defaultDuration, type) {

  let instance = getMessageInstance()

  instance.notice({
    key: key,
    duration: duration,
    content: content,
    type: type,
    show: true
  })

  return (function () {
    let target = key++

    return function () {
      instance.removeNotice(target)
    }
  })()

}

function noticeMove(){

  let instance = getMessageInstance()
  instance.removeNotice(key - 1)
}

export default {
  info (content, duration) {
    return notice(content, duration, 'info')
  },
  success (content, duration) {
    return notice(content, duration, 'success')
  },
  error (content, duration) {
    return notice(content, duration, 'error')
  },
  warning (content, duration) {
    return notice(content, duration, 'warning')
  },
  loading (content, duration) {
    return notice(content, duration, 'loading')
  },
  loaded () {
    return noticeMove()
  },
  config (options) {
    if (options.top) {
      top = options.top
    }
  }
}
