<template lang="html">

    <div :style="placeholderStyle">
        <div :class="{[prefix]: isAffix}" :style="affixStyle">
            <slot></slot>
        </div>
    </div>

</template>

<script lang="babel">
    import {getOffset,getScroll} from "../_util/_func.js"

    export default {
        name: 'v-affix',
        props:{
            offsetTop:Number,
            offsetBottom: Number
        },
        data: ()=> ({
            prefix: 'ant-affix',
            isTop: true,
            isAffix: false
        }),
        ready: function () {
            if(this.offsetTop === undefined){
                if( this.offsetBottom === undefined){
                    this.offsetTop = 0;
                }else{
                    this.isTop = false;
                }
            }
            document.addEventListener('scroll', this.handleScroll);
            document.addEventListener('resize', this.handleScroll);
        },
        beforeDestroy: function () {
            document.removeEventListener('scroll', this.handleScroll);
            document.removeEventListener('resize', this.handleScroll);
        },
        computed: {
            placeholderStyle(){
                return this.isAffix ? {
                    width: this.$el.offsetWidth + 'px',
                    height: this.$el.offsetHeight + 'px'
                } : null
            },
            affixStyle(){
                let style = null;
                if(this.isAffix ){
                    style = {
                        position: 'fixed',
                        left: getOffset(this.$el).left + 'px',
                        width: this.$el.offsetWidth + 'px',
                    }
                    if(this.isTop){
                        style.top = this.offsetTop + 'px';
                    }else{
                        style.bottom = this.offsetBottom + 'px';
                    }
                }
                return style;
            }
        },
        watch: {
            isAffix(val){
                this.$emit('change', val);
            }
        },
        methods: {
            handleScroll(){
                let isAffix = false;
                const scrollTop = getScroll(true);
                const fixedNode = this.$el.children[0];
                const elemOffset = this.$el.getBoundingClientRect();

                if(this.isTop){
                    if(elemOffset.top < this.offsetTop){
                        isAffix = true;
                    }
                }else{
                    const clientH = document.documentElement.clientHeight;
                    if(clientH - elemOffset.bottom < this.offsetBottom){
                        isAffix = true;
                    }

                }
                this.isAffix  = isAffix;
            }
        }
    }
</script>