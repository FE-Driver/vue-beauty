<template lang="html">

  <div class="ant-message" :style="{ top: top + 'px' }" v-el:content>
    <span>
      <notice
        v-for="notice in notices"
        :content="notice.content"
        :duration="notice.duration"
        :type="notice.type"
        :show.sync="notice.show"
      ><notice>
    </span>
  </div>

</template>

<script>

import notice from './notice'

let seed = 0

export default {
  props: {
    top: ''
  },
  data: function () {
    return {
      notices: []
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {
    add(notice){
      const self = this
      const key = notice.key = notice.key || seed++
      const notices = this.notices

      if (!notices.filter(v => v.key === key).length) {
        let _notice = Object.assign({
          show: true,
          content: '',
          duration: 0.5,
        }, notice)
        this.notices = notices.concat(notice)
      }

    },
    remove (key) {
     this.notices.map(notice => {
       if (notice.key === key) {
         notice.show = false
       }
      })
     }
  },
  components: {
    notice
  }
}
</script>
