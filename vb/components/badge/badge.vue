<template lang="html">
    <span :class="badgeCls">
        <slot></slot>
        <sup v-if="showDot || dotLeave" :class="countCls" :style="countStyle">
            <span v-if="!dot && Math.floor( count / 100 ) >= 1 && count < overflowCount" class="ant-scroll-number-only"
                  :style="{ transform: 'translateY(-' + ( num % 10 * 100 + 1000) + '%)' }">
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
            </span>
            <span v-if="!dot && Math.floor( count / 10 ) >= 1 && count < overflowCount" class="ant-scroll-number-only"
                  :style="{ transform: 'translateY(-' + ( Math.floor( num / 10) *100 + 1000 ) + '%)' }">
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
                <p v-for="n in 10">{{n-1}}</p>
            </span>
            <span v-if="!dot && count < overflowCount" class="ant-scroll-number-only"
                  :style="{ transform: 'translateY(-' + ( num % 10 * 100 + 1000) + '%)' }">
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
        data: () => ({
            defaultSlot: false,
            dotEnter: false,
            dotLeave: false,
            animationTime: 300,
        }),
        props: {
            count: {
                type: Number,
                default: 0,
            },
            overflowCount: {
                type: Number,
                default: 99,
            },
            dot: {
                type: Boolean,
                default: false,
            },
            status: String,
            text: String,
            countStyle: Object,
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
                    { [`${prefix}-status`]: this.status },
                    { [`${prefix}-not-a-wrapper`]: !this.defaultSlot },
                ];
            },
            statusCls() {
                return [
                    `${prefix}-status-dot`,
                    `${prefix}-status-${this.status}`,
                ];
            },
            countCls() {
                return [
                    'ant-scroll-number',
                    { [`${prefix}-count`]: !this.dot && this.count },
                    { [`${prefix}-dot`]: this.dot || this.dotLeave },
                    { [`${prefix}-zoom-enter`]: this.dotEnter && !this.count },
                    { [`${prefix}-zoom-enter-active`]: this.dotEnter && !this.count },
                    { [`${prefix}-zoom-leave`]: this.dotLeave && !this.count },
                    { [`${prefix}-zoom-leave-active`]: this.dotLeave && !this.count },
                ];
            },
            num() {
                return this.count > this.overflowCount ? `${this.overflowCount}+` : this.count;
            },
            showDot() {
                return !this.status && (this.dot || this.count);
            },
        },
        watch: {
            showDot(value) {
                let action = 'dotEnter';
                if (!value) {
                    action = 'dotLeave';
                }
                /* 控制动画Class */
                this[action] = true;
                setTimeout(() => {
                    this[action] = false;
                }, this.animationTime);
            },
        },
    };
</script>