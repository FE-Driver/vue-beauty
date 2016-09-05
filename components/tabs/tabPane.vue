<template>
    <div role="tabpanel" aria-hidden="false" :class="wrapCls">
        <slot></slot>
    </div>
</template>

<script>
    import { defaultProps } from '../../utils'

    export default{
        data:()=>({
            prefix: 'ant-tabs-tabpane',
            selected: false
        }),
        props: defaultProps({
            key: String,
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
                    {[`${this.prefix}-hidden`]: !this.selected}
                ]
            }
        }
    }
</script>