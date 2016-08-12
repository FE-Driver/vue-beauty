import vMessage from './message.vue'
import Vue from 'vue'

vMessage.newInstance = () => {

  const div = document.createElement('div')
  div.innerHTML = `<v-message></v-message>`
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
      message.remove(key)
    },

    component: message,

    destory () {
      document.body.removeChild(div)
    }
  }
}

export default vMessage
