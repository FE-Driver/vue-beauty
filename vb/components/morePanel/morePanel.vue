<template>
    <div :class="prefix">
        <div :class="prefix+'-body'" :style="{height:height}">
            <div :class="prefix+'-form'" v-el:panel-form :style="{paddingRight: panelPR}">
                <slot name="form"></slot>
                <div :class="prefix+'-control'" :style="controlStyle" v-el:panel-control>
                    <slot name="control"></slot>
                </div>
            </div>
        </div>
        <slot></slot>
        <div href="javascript:;" :class="prefix+'-btn'" @click="click" v-show="showBtn">
            <span class="anticon" :class="'anticon-'+btnIcon"></span>
        </div>
    </div>
</template>
<script lang="babel">
    import card from '../card'
    export default{
        name: 'v-more-panel',
        data: ()=>({
            prefix: 'ant-more-panel',
            collapse: true,
            bindResize: false,
            showBtn: false,
            panelPR: 0
        }),
        props: {
            originalHeight:{
                type: [Number,String],
                default: 34
            },
            controlStyle:{
                type:Object,
                default: ()=>({})
            },
            is_collapse:{
                type: Boolean,
                default: true,
            }
        },
        watch:{
            showBtn(){
                this.panelPR = this.$els.panelControl.offsetWidth + 'px'
            }
        },
        computed: {
            height(){
                return this.collapse?this.originalHeight + 'px':'auto'
            },
            btnIcon(){
                return this.collapse?'down':'up'
            }
        },
        ready(){
            this.collapse = this.is_collapse;
            this.panelPR = this.$els.panelControl.offsetWidth + 'px'
            this.ifShowBtn();

            if(!this.bindResize){
                window.addEventListener("resize",()=> {
                    this.ifShowBtn();
                },false);
                this.bindResize = true;
            }
        },
        methods: {
            ifShowBtn(){
                if(!this.$el) return;

                this.$nextTick(()=> {
                    this.showBtn = this.$els.panelForm.offsetHeight > this.originalHeight;
                });
            },
            click(){
                this.collapse = !this.collapse;
            }
        },
        components: {card}
    }
</script>