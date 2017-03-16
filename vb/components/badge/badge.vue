<template lang="html">
    <span :class="badgeCls">
        <slot></slot>
        <sup v-if="!status && (dot || count)" :class="countCls" :style="countStyle">
            <span v-if="!dot && count<10 && count>0 && count<overflowCount" class="ant-scroll-number-only" :style="{transform: 'translateY(-'+(num%10*100+1000)+'%)'}">
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
            </span>

            <span v-if="!dot && count>=10 && count<100 && count<overflowCount" class="ant-scroll-number-only" :style="{transform: 'translateY(-'+(Math.floor(num/10)*100+1000)+'%)'}">
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
            </span>
            <span v-if="!dot && count>=10 && count<100 && count<overflowCount" class="ant-scroll-number-only" :style="{transform: 'translateY(-'+(num%10*100+1000)+'%)'}">
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
            </span>

            <span v-if="!dot && count<1000 && count>99 && count<overflowCount" class="ant-scroll-number-only" :style="{transform: 'translateY(-'+(Math.floor(num/100)*100+1000)+'%)'}">
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
            </span>
            <span v-if="!dot && count<1000 && count>99 && count<overflowCount" class="ant-scroll-number-only" :style="{transform: 'translateY(-'+(Math.floor(num/10)*100+1000)+'%)'}">
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
            </span>
            <span v-if="!dot && count<1000 && count>99 && count<overflowCount" class="ant-scroll-number-only" :style="{transform: 'translateY(-'+(num%10*100+1000)+'%)'}">
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
            </span>
            <span v-if="!dot && (count >= overflowCount)">
                {{ num }}
            </span>
        </sup>
        <template v-if="status">
            <span :class="statusCls"></span>
            <span class="ant-badge-status-text">{{text}}</span>
        </template>
    </span>
</template>

<script lang="babel">
    const prefix = 'ant-badge';

    export default {
        name: 'Badge',
        data:()=> ({
            defaultSlot: false
        }),
        props: {
            count: {
                type: Number,
                default: 0
            },
            overflowCount: {
                type: Number,
                default: 99
            },
            dot: {
                type: Boolean,
                default: false
            },
            status: String,
            text: String,
            countStyle: Object
        },
        mounted() {
            if (this.$slots.default) {
                this.defaultSlot = true;
            }
        },
        computed: {
            badgeCls() {
                return [
                    prefix,
                    {[`${prefix}-status`]: this.status},
                    {[`${prefix}-not-a-wrapper`]: !this.defaultSlot}
                ]
            },
            statusCls() {
                return [
                    `${prefix}-status-dot`,
                    `${prefix}-status-${this.status}`
                ]
            },
            countCls() {
                return [
                    'ant-scroll-number',
                    {[`${prefix}-count`]: !this.dot},
                    {[`${prefix}-dot`]: this.dot}
                ]
            },
            num() {
                return this.count > this.overflowCount?this.overflowCount + '+':this.count
            },
        },
        watch: {
            dot(newValue) {
                let dotShow = document.querySelectorAll("sup[class='ant-scroll-number ant-badge-dot']");
                if (newValue === false){
                    dotShow[2].classList.value = "ant-scroll-number ant-badge-dot";
                }else {
                    dotShow[2].classList.value = "ant-scroll-number ant-badge-dot";
                }
                console.log(dotShow)
            },
        },
    }
</script>
<style scoped lang="less">

    /*@keyframes showOrHide{*/
        /*from{*/
            /*visibility: visible;*/
        /*}*/
        /*to{*/
            /*visibility: hidden;*/
        /*}*/
    /*}*/
    .show {
        -webkit-animation: show 1s linear;
    }
    @-webkit-keyframes show {
        from{
            visibility: hidden;
        }
        to{
            visibility: visible;
        }
    }
</style>