import Vue from 'vue'
import vNotification from './notification.vue'

vNotification.newInstance = (data) => {
  const div = document.createElement('div')
  div.innerHTML = `<v-notification :top='${data.top}' :bottom='${data.bottom}' placement='${data.placement}' :duration='${data.duration}'></v-notification>`
  document.body.appendChild(div)

  const notification = new Vue({
    el: div,
    data: {},
    components: { vNotification }
  }).$children[0]

  return {
    notice (noticeProps) {
      notification.add(noticeProps)
    },

    removeNotice (key) {
      notification.remove(key)
    },

    component: notification,

    destory () {
      document.body.removeChild(div)
    }
  }
}

export default vNotification
