<template>
    <button :type="htmlType" :class="btnClassObj" :disabled="disabled" @click="handleClick">
        <i class="anticon anticon-spin anticon-loading" v-if="loading"></i>
        <i v-bind:class="'anticon anticon-' +icon" v-if="icon"></i>
        <span v-if="$slots && $slots.default"><slot></slot></span>
    </button>
</template>
<script lang="babel">
    export default {
        name: 'Button',
        data: () => ({
            prefixCls: 'ant-btn',
            clicked: false,
            clickTimer: null
        }),
        props: {
            type: String,
            htmlType: {
                type: String,
                default: 'button'
            },
            icon: String,
            shape: String,
            size: String,
            loading: {
                type: Boolean,
                default: false
            },
            ghost: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            btnClassObj() {
                let {prefixCls, type, size, shape, loading, clicked, ghost} = this;
                let btnClass = {};
                let tmpSize = "";
                if (size == "small") {
                    tmpSize = "sm";
                } else if (size == "large") {
                    tmpSize = "lg";
                }
                btnClass[prefixCls] = true;
                btnClass[prefixCls + '-' + type] = type;
                btnClass[prefixCls + '-' + tmpSize] = size;
                btnClass[prefixCls + '-' + shape] = shape;
                btnClass[prefixCls + '-loading'] = loading;
                btnClass[prefixCls + '-background-ghost'] = ghost;
                btnClass[prefixCls + '-clicked'] = clicked;

                return btnClass;
            }

        },
        methods: {
            handleClick(evt) {
                this.clicked = true;
                if (this.clickTimer) clearTimeout(this.clickTimer);
                this.clickTimer = setTimeout(() => this.clicked = false, 500);
                this.$emit('click', evt);
            }
        }
    }
</script>