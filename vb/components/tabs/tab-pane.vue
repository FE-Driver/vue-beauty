<template>
    <div role="tabpanel" aria-hidden="false" :class="wrapCls">
        <slot></slot>
    </div>
</template>

<script lang="babel">
    import emitter from '../../mixins/emitter';

    export default {
        name: 'TabPane',
        mixins: [emitter],
        data: () => ({
            prefix: 'ant-tabs-tabpane',
            selected: false
        }),
        props: {
            tabKey: String,
            icon: String,
            disabled: {
                type: Boolean,
                default: false
            },
            tab: String
        },
        mounted() {
            this.$on('tabPane.activeTabKey', (tabKey) => {
                this.selected = tabKey === this.tabKey;
            });

            /* 派发事件给parent */
            if (this.disabled) {
                this.dispatch('Tabs', 'tabs.disabledItem', {tabKey: this.tabKey, disabled: this.disabled});
            }
        },
        computed: {
            wrapCls() {
                return [
                    this.prefix,
                    {[`${this.prefix}-active`]: this.selected},
                    {[`${this.prefix}-inactive`]: !this.selected}
                ]
            }
        },
        watch: {
            disabled(value) {
                if (value) {
                    this.dispatch('Tabs', 'tabs.disabledItem', {tabKey: this.tabKey, disabled: value});
                }
            }
        }
    }
</script>
