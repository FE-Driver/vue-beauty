<template>
    <div role="tabpanel" aria-hidden="false" :class="wrapCls">
        <slot></slot>
    </div>
</template>

<script>
    import { defaultProps } from '../../utils'

    export default{
        name: 'v-tab-pane',
        data:()=>({
            prefix: 'ant-tabs-tabpane',
            selected: false
        }),
        props: defaultProps({
            key: String,
            icon: String,
            disabled: false,
            tab: String
        }),
        ready(){
            this.$on('activeKey',(key)=>{
                this.selected = key === this.key;
            })
        },
        computed: {
            wrapCls(){
                return [
                    this.prefix,
                    {[`${this.prefix}-active`]: this.selected},
                    {[`${this.prefix}-inactive`]: !this.selected}
                ]
            }
        }
    }
</script>
