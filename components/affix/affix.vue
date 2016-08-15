<template lang="html">

    <div :style="placeholderStyle">
        <div class="ant-affix" :style="affixStyle" @click='setAffixStyle'>
            <slot></slot>
        </div>
    </div>

</template>

<script lang="babel">

    export default {
        props:{
            offsetTop:Number,
            offsetBottom: Number,
            onChange: {
                type: Function,
                default: () => {}
            }
        },
        data:function () {
            return {
                placeholderStyle: null,
                affixStyle: null
            };
        },
        computed: {

        },
        ready: function () {
            document.addEventListener('scroll', this.handleScroll);
            document.addEventListener('resize', this.handleScroll);
        },
        beforeDestroy: function () {
            document.removeEventListener('scroll', this.handleScroll);
            document.removeEventListener('resize', this.handleScroll);
        },
        methods: {
            setAffixStyle(){},
            getScroll(w, top){
                let ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
                let method = 'scroll' + (top ? 'Top' : 'Left');
                if (typeof ret !== 'number') {
                    let d = w.document;
                    //ie6,7,8 standard mode
                    ret = d.documentElement[method]
                    if (typeof ret !== 'number') {
                        //quirks mode
                        ret = d.body[method]
                    }
                }
                return ret;
            },
            getOffset(element){
                const rect = element.getBoundingClientRect();
                const body = document.body;
                const clientTop = element.clientTop || body.clientTop || 0;
                const clientLeft = element.clientLeft || body.clientLeft || 0;
                const scrollTop = this.getScroll(window, true);
                const scrollLeft = this.getScroll(window);

                return {
                    top: rect.top + scrollTop - clientTop,
                    left: rect.left + scrollLeft - clientLeft,
                };
            },
            handleScroll(){
                let offsetTop = this.offsetTop
                let offsetBottom = this.offsetBottom
                const scrollTop = this.getScroll(window, true)
                const affixNode = this.$el
                const fixedNode = this.$el.children[0]
                const elemOffset = this.getOffset(affixNode);
                const offsetMode = {
                    top: this.offsetTop,
                    bottom: this.offsetBottom
                }

                if (scrollTop > elemOffset.top - offsetTop && (offsetMode.top || offsetMode.top == 0)) {
                    this.affixStyle = {
                        position: 'fixed',
                        top: offsetTop + 'px',
                        left: elemOffset.left + 'px',
                        width: affixNode.offsetWidth + 'px',
                    }
                    this.placeholderStyle = {
                        width: affixNode.offsetWidth + 'px',
                        height: affixNode.offsetHeight + 'px',
                    }
                    this.onChange(true)
                } else if (scrollTop < elemOffset.top + fixedNode.offsetHeight + offsetBottom - window.innerHeight && offsetMode.bottom) {
                    this.affixStyle = {
                        position: 'fixed',
                        bottom: offsetBottom + 'px',
                        left: elemOffset.left + 'px',
                        width: affixNode.offsetWidth + 'px',
                    }
                    this.placeholderStyle = {
                        width: affixNode.offsetWidth + 'px',
                        height: affixNode.offsetHeight + 'px',
                    }
                    this.onChange(true)
                } else {
                    this.affixStyle = null,
                            this.placeholderStyle = null
                    this.onChange(false)
                }
            },
        },
        components: {

        }
    }
</script>

<style lang="css">

    .ant-affix {
        z-index: 10
    }

</style>
