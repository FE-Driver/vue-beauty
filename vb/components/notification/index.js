import './style/index.less'
import Notification from './notification.js'

const defaultDuration = 4.5

let top = 24
let bottom = 24
let duration = defaultDuration
let placement = 'topRight'
let notificationInstance
let key = 1

function getNotificationInstance () {
  notificationInstance = notificationInstance || Notification.newInstance({
    top: top,
    bottom: bottom,
    duration: duration,
    placement: placement
  })

  return notificationInstance
}

function notice (message, description, duration = defaultDuration, onClose, selfKey, type) {
  let instance = getNotificationInstance()

  instance.notice({
    selfKey: selfKey || key + '',
    duration: duration,
    message: message,
    description: description,
    type: type,
    onClose: onClose
  })

  key++
}

function close (selfKey) {
  let instance = getNotificationInstance()
  instance.removeNotice(selfKey)
}

export default {
  info (config) {
    return notice(config.message, config.description, config.duration, config.onClose, config.selfKey, 'info')
  },
  success (config) {
    return notice(config.message, config.description, config.duration, config.onClose, config.selfKey, 'success')
  },
  error (config) {
    return notice(config.message, config.description, config.duration, config.onClose, config.selfKey, 'error')
  },
  warning (config) {
    return notice(config.message, config.description, config.duration, config.onClose, config.selfKey, 'warning')
  },
  open (config) {
    return notice(config.message, config.description, config.duration, config.onClose, config.selfKey, '')
  },
  close (selfKey) {
    close(selfKey)
  },
  config (options) {
    if (options.top) {
      top = options.top
    }
    if (options.bottom) {
      bottom = options.bottom
    }
    if (options.duration) {
      duration = options.duration
    }
    if (options.placement) {
      placement = options.placement
    }
    // delete notificationInstance
    if (placement !== undefined || bottom !== undefined || top !== undefined) {
      notificationInstance = null
    }
  }
}
