<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script lang="babel">
    export default{
        name: 'Layout',
        data() {
            return {
                prefixCls: 'ant-layout',
                hasSider: false,
            }
        },
        mounted() {
            this.mountedSider();
        },
        updated() {
            this.mountedSider();
        },
        computed: {
            classes() {
                let prefixCls = this.prefixCls;
                return [prefixCls, {[`${prefixCls}-has-sider`]: this.hasSider}]
            }
        },
        methods: {
            mountedSider() {
                let children = this.$children;
                for(let i = 0; i < children.length; i++) {
                    if (children[i].$options.name == 'Sider') {
                        this.hasSider = true;
                    }
                }
            }
        }
    }
</script>
