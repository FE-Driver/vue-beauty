<template>
    <div :style="placeholderStyle">
        <div :class="{[prefix]: isAffix}" :style="affixStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="babel">
    import {getOffset,getScroll} from "../../utils/fn"

    export default {
        name: 'Affix',
        props:{
            offsetTop: Number,
            offsetBottom: Number
        },
        data(){
            return {
                _offsetTop: Number,
                _offsetBottom: Number,
                prefix: 'ant-affix',
                isTop: true,
                isAffix: false
            }

        },
        mounted () {
            this.$nextTick(()=>{
                this._offsetTop = this.offsetTop
                this._offsetBottom = this.offsetBottom
                if(this._offsetTop === undefined){
                    if( this._offsetBottom === undefined){
                        this._offsetTop = 0;
                    }else{
                        this.isTop = false;
                    }
                }
                document.addEventListener('scroll', this.handleScroll);
                document.addEventListener('resize', this.handleScroll);
            })
        },
        beforeDestroy() {
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
                        left: getOffset(this.$el).left + 'px',
                        width: this.$el.offsetWidth + 'px',
                    }
                    if(this.isTop){
                        style.top = this._offsetTop + 'px';
                    }else{
                        style.bottom = this._offsetBottom + 'px';
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
                    if(elemOffset.top < this._offsetTop){
                        isAffix = true;
                    }
                }else{
                    const clientH = document.documentElement.clientHeight;
                    if(clientH - elemOffset.bottom < this._offsetBottom){
                        isAffix = true;
                    }

                }
                this.isAffix  = isAffix;
            }
        }
    }
</script>