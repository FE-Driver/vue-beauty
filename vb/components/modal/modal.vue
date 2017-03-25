<template>
    <v-dialog
            :visible="visible"
            :title="title"
            :closable="closable"
            :mask-closable="maskClosable"
            @close="_handleCancel"
            :width="width"
            :prefix-cls="prefixCls"
            :modal-style="modalStyle"
            :has-footer="hasFooter"
            :wrap-class-name="wrapClassName"
            :mouse-position="mousePosition">
        <slot></slot>
        <template slot="footer">
            <slot name="footer">
                <v-button key="cancel" type="ghost" size="large" @click="_handleCancel">
                    {{cancelText}}
                </v-button>
                <v-button key="confirm" type="primary" size="large" :loading="confirmLoading" @click="_handleOk">
                    {{okText}}
                </v-button>
            </slot>
        </template>
    </v-dialog>
</template>
<script lang="babel">
    import  KeyCode from '../../utils/key-code'
    import vDialog from './dialog'
    import vButton from '../button'

    let mousePosition;

    document.addEventListener('click', (e) => {
        mousePosition = {
            x: e.pageX,
            y: e.pageY
        };
        setTimeout(() => mousePosition = null, 20)
    }, true);

    export default {
        name: 'Modal',
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            confirmLoading: {
                type: Boolean,
                default: false
            },
            title: String,
            closable: {
                type: Boolean,
                default: true
            },
            width: {
                type: Number,
                default: 520
            },
            okText: {
                type: String,
                default: '确 定'
            },
            cancelText: {
                type: String,
                default: '取 消'
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            prefixCls: {
                type: String,
                default: 'ant-modal'
            },
            modalStyle: {
                type: Object,
                default() {
                    return {};
                }
            },
            hasFooter: {
                type: Boolean,
                default: true
            },
            wrapClassName: String
        },

        data() {
            return {
                mousePosition: {}
            }
        },

        watch: {
            visible() {
                this.mousePosition = mousePosition;
            }
        },

        methods: {
            _handleCancel () {
                this.$emit("cancel")
            },

            _handleOk () {
                this.$emit("ok")
            }
        },

        components: {vDialog, vButton},
    }
</script>
