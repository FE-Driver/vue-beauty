<template lang="html">
    <div class="ant-message" :style="{ top: top + 'px' }">
        <span>
          <notice
            v-for="notice in notices"
            :content="notice.content"
            :duration="notice.duration"
            :type="notice.type"
            :on-close="notice.onClose"
          ><notice>
        </span>
    </div>
</template>
<script>
    import notice from './notice'

    let seed = 0

    export default {
        props: {
            top: {
                type: Number
            }
        },
        data: function () {
            return {
                notices: []
            }
        },
        methods: {
            add(notice) {
                const self = this
                const key = notice.key = notice.key || seed++
                    const notices = this.notices

                if (!notices.filter(v => v.key === key).length) {
                    let _notice = Object.assign({
                        content: '',
                        duration: 0.5,
                    }, notice)
                    this.notices = notices.concat(notice)
                }
            },
            remove (key) {
                const notices = this.notices;
                for (let i = 0; i < notices.length; i++) {
                    if (notices[i].key === key) {
                        this.notices.splice(i, 1)
                        break
                    }
                }
            },
            destroy () {
              this.$destroy(true)
              this.$el.parentNode.removeChild(this.$el)
            }
        },
        components: {
            notice
        }
    }

</script>
