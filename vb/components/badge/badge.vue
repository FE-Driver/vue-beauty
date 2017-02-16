<template lang="html">
    <span :class="badgeCls">
        <slot></slot>
        <sup v-if="!status && (dot || count)" :class="countCls" :style="countStyle">{{ dot?'':num }}</sup>
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
            }
        }
    }
</script>