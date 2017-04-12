<template lang="html">
    <v-popover v-model="innerVisible" :placement="placement" trigger="click">
        <slot></slot>
        <template slot="content">
            <div class="ant-popover-message">
                <i class="anticon anticon-exclamation-circle"></i>
                <div class="ant-popover-message-title">{{ title }}</div>
            </div>
            <div class="ant-popover-buttons">
                <button type="button" class="ant-btn ant-btn-ghost ant-btn-sm" @click="doCancel"><span>{{ cancelText }}</span>
                </button>
                <button type="button" class="ant-btn ant-btn-primary ant-btn-sm" @click="doConfirm"><span>{{ okText }}</span>
                </button>
            </div>
        </template>
    </v-popover>
</template>

<script lang="babel">
    import vPopover from '../popover/popover.vue';

    export default {
        name: 'Popconfirm',
        props: {
            title: {
                type: String,
                default: ''
            },
            okText: {
                type: String,
                default: '确 定'
            },
            cancelText: {
                type: String,
                default: '取 消'
            },
            placement: {
                type: String,
                default: 'top'
            },
            visible: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                innerVisible: this.visible
            }
        },
        watch: {
            visible(value) {
                this.innerVisible = value;
            },
            innerVisible(value) {
                this.$emit("change", value);
            }
        },
        methods: {
            doCancel: function () {
                if (this.innerVisible) {
                    this.innerVisible = false;
                }
                this.$emit("cancel", this.innerVisible);
            },
            doConfirm: function () {
                if (this.innerVisible) {
                    this.innerVisible = false;
                }
                this.$emit("confirm", this.innerVisible);
            }
        },
        components: {
            vPopover
        }
    }
</script>
