<template>
    <div :class="siderCls" :style="siderStyle">
        <slot></slot>
        <template v-if="(collapsible || (below && zeroWidthTrigger)) && trigger">
            <span v-if="zeroWidthTrigger" @click="toggle" :class="{[`${prefixCls}-zero-width-trigger`]: true}">
                <i class="anticon anticon-bars"></i>
            </span>
            <div v-else :class="prefixCls + '-trigger'" @click="toggle">
                <i class="anticon" :class="{'anticon-left': !innerCollapsed, 'anticon-right': innerCollapsed}"></i>
            </div>
        </template>
    </div>
</template>
<script lang="babel">
    const dimensionMap = {
        xs: '480px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1600px',
    };

    export default{
        name: 'Sider',
        data() {
            return {
                prefixCls: 'ant-layout-sider',
                innerCollapsed: this.collapsed,
                below: false,
                mql: null,
            };
        },
        props: {
            collapsible: {
                type: Boolean,
                default: false,
            },
            collapsed: {
                type: Boolean,
                default: false,
            },
            trigger: {
                type: Boolean,
                default: true,
            },
            width: {
                type: Number,
                default: 200,
            },
            collapsedWidth: {
                type: Number,
                default: 64,
            },
            breakpoint: {
                type: String,
            },
        },
        model: {
            prop: 'collapsed',
            event: 'collapse',
        },
        created() {
            let matchMedia;
            if (typeof window !== 'undefined') {
                matchMedia = window.matchMedia;
            }
            if (matchMedia && this.breakpoint && this.breakpoint in dimensionMap) {
                this.mql = matchMedia(`(max-width: ${dimensionMap[this.breakpoint]})`);
            }
        },
        mounted() {
            if (this.mql) {
                this.mql.addListener(this.responsiveHandler);
                this.responsiveHandler(this.mql);
            }
        },
        beforeDestroy() {
            if (this.mql) {
                this.mql.removeListener(this.responsiveHandler);
            }
        },
        computed: {
            siderCls() {
                const prefixCls = this.prefixCls;
                const siderWidth = this.innerCollapsed ? this.collapsedWidth : this.width;
                return [prefixCls, {
                    [`${prefixCls}-collapsed`]: this.innerCollapsed,
                    [`${prefixCls}-has-trigger`]: this.collapsible && this.trigger,
                    [`${prefixCls}-below`]: !!this.below,
                    [`${prefixCls}-zero-width`]: siderWidth === 0 || siderWidth === '0',
                }];
            },
            siderStyle() {
                const siderWidth = this.innerCollapsed ? this.collapsedWidth : this.width;
                return {
                    flex: `0 0 ${siderWidth}px`,
                    width: `${siderWidth}px`,
                };
            },
            zeroWidthTrigger() {
                return this.collapsedWidth === 0 || this.collapsedWidth === '0';
            },
        },
        watch: {
            collapsed(value) {
                this.innerCollapsed = value;
            },
            innerCollapsed(value) {
                this.$emit('collapse', value);
            },
        },
        methods: {
            toggle() {
                this.innerCollapsed = !this.innerCollapsed;
            },
            responsiveHandler() {
                this.below = this.mql.matches;
                if (this.innerCollapsed !== this.mql.matches) {
                    this.innerCollapsed = this.mql.matches;
                }
            },
        },
    };
</script>
