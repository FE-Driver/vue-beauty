import Message from './message.vue'
import Vue from 'vue'

Message.newInstance = () => {

  const div = document.createElement('div')
  div.innerHTML = `<message></message>`
  document.body.appendChild(div)

  const message = new Vue({
    el: div,
    data: {},
    components: { Message }
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

export default Message
