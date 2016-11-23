import vNotification from './notification.vue'
import Vue from 'vue'

vNotification.newInstance = (data) => {
  const div = document.createElement('div')
  div.innerHTML = `<v-notification :top='${data.top}'></v-notification>`
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
