<template>
    <transition name="fade">
    <div class="ant-notification-notice" transition="notification">
        <div class="ant-notification-notice-content">
            <div :class="type ? `${prefixCls}-with-icon`: ''">
                <i v-if="type" :class="`${prefixCls}-icon ${prefixCls}-icon-${type} anticon anticon-${iconType}`"></i>
                <div class="ant-notification-notice-message" v-text="message"></div>
                <div class="ant-notification-notice-description" v-text="description"></div>
            </div>
        </div>
        <a class="ant-notification-notice-close" @click="_close">
            <span class="ant-notification-notice-close-x"></span>
        </a>
    </div>
    </transition>
</template>

<script lang="babel">
    export default {
        props: {
            message: {
                type: String,
                required: true
            },
            description: {
                type: String,
            },
            type: {
                type:String,
                default: 'info'
            },
            selfKey: {
                type: String,
                required: true
            },
            onClose: {
                type: Function,
                default: function () {}
            },
            duration: {
                type : Number,
                default : 4.5
            }
        },
        data() {
            return {
              prefixCls: 'ant-notification-notice',
              closeTimer:null
            }
        },
        computed: {
            iconType () {
                let iconClass = ({
                    'info': 'info-circle-o',
                    'success': 'check-circle-o',
                    'error': 'cross-circle-o',
                    'warning': 'exclamation-circle-o',
                })[this.type] || 'info-circle'

                return iconClass
            }
        },
        mounted() {
            if (this.duration && !this.closeTimer) {
                this.closeTimer = setTimeout(() => {
                    this._close()
                }, this.duration * 1000)
            }
        },
        methods: {
            _clearCloseTimer() {
                if (this.closeTimer) {
                    clearTimeout(this.closeTimer)
                    this.closeTimer = null
                }
            },
            _close() {
                this._clearCloseTimer()
                this.onClose()
                this.$emit('close', this.selfKey)
            }
        },
    }
</script>
