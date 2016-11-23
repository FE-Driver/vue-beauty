import Notification from './notification.js'

const defaultDuration = 4.5

let top = 24
let duration = 4.5
let natificationInstance
let key = 1

function getNotificationInstance () {
  natificationInstance = natificationInstance || Notification.newInstance({
    top: top,
    duration: duration
  })

  return natificationInstance
}

function notice (message, description, duration = defaultDuration, type) {

  let instance = getNotificationInstance()

  instance.notice({
    key: key,
    duration: duration,
    message: message,
    description: description,
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


export default {
  info (config) {
    return notice(config.message, config.description, config.duration, 'info')
  },
  success (config) {
    return notice(config.message, config.description, config.duration, 'success')
  },
  error (config) {
    return notice(config.message, config.description, config.duration, 'error')
  },
  warning (config) {
    return notice(config.message, config.description, config.duration, 'warning')
  },
  open (config) {
    return notice(config.message, config.description, config.duration, 'open')
  },
  config (options) {
    if (options.top) {
      top = options.top
    }
    if(options.duration){
      duration = options.duration
    }
  }
}
