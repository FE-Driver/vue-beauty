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
        mounted() {
            this.mapPropsToChildComponent();
        },
        computed: {
            wrapClasses() {
                return [
                    `${this.prefixCls}`,
                    { [`${this.prefixCls}-pending`]: this.pending },
                ];
            },
        },
        methods: {
            mapPropsToChildComponent() {
                const lastIndex = this.$children.length - (this.pending ? 2 : 1);
                for (const [index, child] of this.$children.entries()){
                    if (index === lastIndex) {
                        child.isLastItem = true;
                        if (this.pending) {
                            this.$children[lastIndex + 1].pending = true;
                        }
                        break;
                    }
                }
            },
        },
    };
</script>
