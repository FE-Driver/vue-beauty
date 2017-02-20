<template>
    <div :class="[prefixCls, `${prefixCls}-${placement}`]" :style="wrapStyles">
        <span>
            <notice
                v-for="notice in notices"
                :message="notice.message"
                :description="notice.description"
                :duration="notice.duration"
                :type="notice.type"
                :selfKey="notice.selfKey"
                :key="notice.selfKey"
                :on-close="notice.onClose"
                @close="close"
            ></notice>
        </span>
    </div>
</template>

<script lang="babel">
    import notice from './notice'

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
            add (notice) {
                if (!this.notices.filter(v => v.selfKey === notice.selfKey).length) {
                    this.notices.push(notice)
                }
            },
            close (key) {
                for (let i = 0; i < this.notices.length; i++) {
                    if (this.notices[i].selfKey === key) {
                        this.notices.splice(i, 1)
                        break
                    }
                }

            },
        },
        components: {
            notice
        },
    }

</script>
