<template lang="html">
    <div class="ant-collapse" :class="{'ant-collapse-borderless':!bordered}">
        <slot></slot>
    </div>
</template>

<script>
    import item from './item'
    export default {
        name: 'Collapse',
        props: {
            accordion: {
                type: Boolean,
                default: false
            },
            activeIndex: {
                type: Array,
                default: () => []
            },
            bordered:{
                type: Boolean,
                default: true
            },
        },
        model: {
            prop: 'activeIndex',
        },
        data(){
            if(this.accordion){
                return {
                    innerActiveIndex:[JSON.parse( JSON.stringify(this.activeIndex[0]))],
                }
            }else{
                return {
                    innerActiveIndex:JSON.parse( JSON.stringify(this.activeIndex) ),
                }
            }
            
        },
        mounted() {
            this.$on('item.change',(index,status) => {
                if (this.accordion) {
                    for (let item of this.$children) {
                        if (item.index===index) {
                            this.innerActiveIndex = [index];
                        }
                    }
                    status = false;
                }else{
                    if(status){
                        const i  = this.innerActiveIndex.indexOf(index);
                        if( i !== -1) {
                            this.innerActiveIndex.splice(i,1);
                        }
                    }else{
                        if(!this.innerActiveIndex.includes(index)){
                            this.innerActiveIndex.push(index);
                        }
                    }
                }
                this.$emit('change',{index:index,status:!status});
            })
        },
        watch: {
            activeIndex(val){
                this.innerActiveIndex = val;
            },
            innerActiveIndex(value){
                this.$emit('input',value);
            }
        },
        methods: {
            
        }
    }

</script>
<style lang="less" scoped>
.ant-collapse-borderless > .ant-collapse-item{
    border-bottom:0 none;
}
</style>