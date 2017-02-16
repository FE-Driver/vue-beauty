<template>
    <div :class="siderCls" :style="siderStyle">
        <slot></slot>
        <div :class="prefixCls + '-trigger'" v-if="collapsible && trigger" @click="toggle">
            <i class="anticon" :class="{'anticon-left': !currentCollapsed, 'anticon-right': currentCollapsed}"></i>
        </div>
    </div>
</template>
<script lang="babel">
    export default{
        name: 'Sider',
        data(){
            return{
                prefixCls: 'ant-layout-sider',
                currentCollapsed: this.collapsed
            }
        },
        props: {
            collapsible: {
                type: Boolean,
                default: false
            },
            collapsed: {
                type: Boolean,
                default: false
            },
            trigger: {
                type: Boolean,
                default: true
            },
            width: {
                type: Number,
                default: 200
            },
            collapsedWidth: {
                type: Number,
                default: 64
            }
        },
        computed: {
            siderCls() {
                let prefixCls = this.prefixCls;
                return [prefixCls, {
                    [`${prefixCls}-collapsed`]: this.currentCollapsed,
                    [`${prefixCls}-has-trigger`]: this.collapsible && this.trigger,
                }];
            },
            siderStyle() {
                return {flex: `0 0 ${this.currentCollapsed ? this.collapsedWidth : this.width}px`};
            }
        },
        watch: {
            collapsed(value) {
                this.currentCollapsed = value;
            },
            currentCollapsed(value) {
                this.$emit("collapse", value);
            }
        },
        methods: {
            toggle() {
                this.currentCollapsed = !this.currentCollapsed;
            }
        }
    }
</script>
