<template lang="html">
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>

<script lang="babel">
    export default {
        name: 'ButtonGroup',
        data: () => ({
            prefixCls: 'ant-btn-group',
        }),
        props: {
            size: String
        },
        computed: {
            wrapClasses () {
                const size = {small: 'sm', large: 'lg'}[this.size];

                return [
                    this.prefixCls,
                    {[`${this.prefixCls}-${size}`]: size}
                ]
            }
        },
    }
</script>