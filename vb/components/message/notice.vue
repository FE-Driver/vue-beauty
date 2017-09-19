<template>
    <div class="ant-message-notice" transition="message">
        <div class="ant-message-notice-content">
            <div :class="[`${prefixCls}-custom-content ${prefixCls}-${type}`]">
                <icon v-if="type" :type="iconType"></icon>
                <span v-text="content"></span>
            </div>
        </div>
    </div>
</template>
<script>
import icon from '../icon';

export default {
    props: {
        content: {
            type: String,
        },
        duration: {
            type: Number,
        },
        type: {
            type: String,
        },
        selfKey: {
            type: String,
            required: true,
        },
        onClose: {
            type: Function,
            default() { },
        },
    },
    data() {
        return {
            prefixCls: 'ant-message',
        };
    },
    computed: {
        iconType() {
            return ({
                info: 'info-circle',
                success: 'check-circle',
                warning: 'exclamation-circle',
                error: 'exclamation-circle',
                loading: 'loading',
            })[this.type];
        },
    },
    mounted() {
        this._clearCloseTimer();
        if (this.duration) {
            this.closeTimer = setTimeout(() => {
                this._close();
            }, this.duration * 1000);
        }
    },
    beforeDestory() {
        this._clearCloseTimer();
    },
    methods: {
        _clearCloseTimer() {
            if (this.closeTimer) {
                clearTimeout(this.closeTimer);
                this.closeTimer = null;
            }
        },
        _close() {
            this._clearCloseTimer();
            this.onClose();
            this.$emit('close', this.selfKey);
        },
    },
    components: {
        icon,
    },
};
</script>
