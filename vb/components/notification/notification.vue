<template lang="html">
    <div :class="[prefixCls, `${prefixCls}-${placement}`]" :style="wrapStyles">
        <span>
            <notice
                v-for="notice in notices"
                :message="notice.message"
                :description="notice.description"
                :duration="notice.duration"
                :type="notice.type"
                :vkey="notice.vkey"
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
            },
            bottom: {
                type: Number
            },
            duration: {
                type: Number
            },
            placement: {
                type: String,
                validator: function (value) {
                    return ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].includes(value)
                }
            }
        },
        data: function () {
            return {
                prefixCls: 'ant-notification',
                notices: []
            }
        },
        computed: {
            wrapStyles() {
                switch (this.placement) {
                    case 'topLeft':
                        return {
                            left: 0,
                            top: this.top + 'px',
                            bottom: 'auto'
                        }
                    case 'bottomLeft':
                        return {
                            left: 0,
                            top: 'auto',
                            bottom: this.bottom + 'px'
                        }
                    case 'bottomRight':
                        return {
                            right: 0,
                            top: 'auto',
                            bottom: this.bottom + 'px'
                        }
                    default:
                        return {
                            right: 0,
                            top: this.top + 'px',
                            bottom: 'auto'
                        }
                }
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
            close(key) {
                const notices = this.notices;
                for (let i = 0; i < notices.length; i++) {
                    if (notices[i].vkey === key) {
                        this.notices.splice(i, 1)
                        break
                    }
                }
            }
        },
        components: {
            notice
        }
    }

</script>
