<template lang="html">
    <v-popover v-model="innerVisible" :placement="placement" trigger="click">
        <slot></slot>
        <template slot="content">
            <div class="ant-popover-message">
                <i class="anticon anticon-exclamation-circle"></i>
                <div class="ant-popover-message-title">{{ title }}</div>
            </div>
            <div class="ant-popover-buttons">
                <button type="button" class="ant-btn ant-btn-ghost ant-btn-sm" @click="doCancel"><span>{{ localeCancelText }}</span>
                </button>
                <button type="button" class="ant-btn ant-btn-primary ant-btn-sm" @click="doConfirm"><span>{{ localeOkText }}</span>
                </button>
            </div>
        </template>
    </v-popover>
</template>

<script lang="babel">
    import vPopover from '../popover/popover';
    import Locale from '../../mixins/locale';

    export default {
        name: 'Popconfirm',
        mixins: [Locale],
        props: {
            title: {
                type: String,
                default: '',
            },
            okText: {
                type: String,
            },
            cancelText: {
                type: String,
            },
            placement: {
                type: String,
                default: 'top',
            },
            visible: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                innerVisible: this.visible,
            };
        },
        computed: {
            localeOkText() {
                return this.okText || this.t('popconfirm.okText');
            },
            localeCancelText() {
                return this.cancelText || this.t('popconfirm.cancelText');
            },
        },
        watch: {
            visible(value) {
                this.innerVisible = value;
            },
            innerVisible(value) {
                this.$emit('change', value);
            },
        },
        methods: {
            doCancel() {
                if (this.innerVisible) {
                    this.innerVisible = false;
                }
                this.$emit('cancel', this.innerVisible);
            },
            doConfirm() {
                if (this.innerVisible) {
                    this.innerVisible = false;
                }
                this.$emit('confirm', this.innerVisible);
            },
        },
        components: {
            vPopover,
        },
    };
</script>
