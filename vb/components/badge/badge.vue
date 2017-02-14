<template lang="html">
    <span>
        <span v-if="statusDot?true:false" class="ant-badge" :class="{'ant-badge-not-a-wrapper':!slot}">
            <slot></slot>
            <sup :class="[ (!dot) ? 'ant-badge-count ant-scroll-number': ((showDot)?'ant-badge-dot':'')]"
                 :style="styles" v-if="count> 0" transition="badge">
                {{ num }}
            </sup>
        </span>
        <span v-if="!statusDot ? true : false" class="ant-badge ant-badge-status ant-badge-not-a-wrapper">
            <span :class="dotClass"></span>
            <span class="ant-badge-status-text">{{text}}</span>
        </span>
    </span>
</template>

<script lang="babel">
    /**
     * Badge 警告提示
     * @param count 展示的数字，大于 overflowCount 时显示为 {{overflowCount}}+，为 0 时隐藏
     * @param overflowCount 展示封顶的数字值
     * @param dot 不展示数字，只有一个小红点
     * @param showDot 动态展示变化是否有小圆点，当dot为true时有效
     * @param text 设置状态点的文本
     * @param status 设置 Badge 为状态点
     */

    export default {
        name: 'v-badge',
        props: {
            count: {
                type: Number,
                default: 1
            },
            overflowCount: {
                type: Number,
                default: 99
            },
            dot: {
                type: Boolean,
                default: false
            },
            status: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            showDot: {
                type: Boolean,
                default: true
            },
            styles: Object
        },
        data: () => ({
            slot: true
        }),
        mounted(){
            if (!(this.$slots && this.$slots.default)) {
                this.slot = false
            }
        },
        computed: {
            //显示的数字
            num: function () {
                if (this.status !== '') {
                    return null;
                }
                let num;
                if (this.count > this.overflowCount) {
                    num = this.overflowCount + '+'
                } else if (!this.dot) {
                    num = this.count
                }
                return num;
            },
            //小圆点的样式
            dotClass: function () {
                let dotClassAll = ['ant-badge-status-dot'];
                switch (this.status) {
                    case 'success':
                        dotClassAll.push('ant-badge-status-success');
                        break;
                    case 'processing':
                        dotClassAll.push('ant-badge-status-processing');
                        break;
                    case 'default':
                        dotClassAll.push('ant-badge-status-default');
                        break;
                    case 'error':
                        dotClassAll.push('ant-badge-status-error');
                        break;
                    case 'warning':
                        dotClassAll.push('ant-badge-status-warning');
                        break;
                }
                return dotClassAll;
            },
            //是否应用表示状态的小圆点
            statusDot: function () {
                return this.text === '' && this.status === '';
            }
        }
    }
</script>
