import Vue from 'vue'
import vMessage from './message.vue'

vMessage.newInstance = (data) => {
  const div = document.createElement('div')
  div.innerHTML = `<v-message :top='${data.top}' :duration='${data.duration}'></v-message>`
  document.body.appendChild(div)

  const message = new Vue({
    el: div,
    data: {},
    components: { vMessage }
  }).$children[0]

  return {
    notice (noticeProps) {
      message.add(noticeProps)
    },

    removeNotice (key) {
      message.close(key)
    },

    component: message,

    destroy () {
      message.destroy()
    }
  }
}

export default vMessage
