<template>
    <span :class="wrapClasses">
        <slot></slot>
    </span>
</template>
<script>
    export default {
        name: 'InputGroup',
        props: {
            size: {
                type: String,
                default: 'process',
            },
            compact: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            wrapClasses() {
                return [
                    'ant-input-group',
                    { 'ant-input-group-sm': this.size === 'small' },
                    { 'ant-input-group-lg': this.size === 'large' },
                    { 'ant-input-group-compact': this.compact === true },
                ];
            },
        },
    };
</script>
