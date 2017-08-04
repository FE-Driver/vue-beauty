<template>
    <ul :class="wrapClasses">
        <slot></slot>
    </ul>
</template>
<script lang="babel">
    export default {
        name: 'Timeline',
        data: () => ({
            prefixCls: 'ant-timeline',
        }),
        props: {
            pending: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            wrapClasses() {
                return [
                    `${this.prefixCls}`,
                    { [`${this.prefixCls}-pending`]: this.pending },
                ];
            },
        },
    };
</script>
