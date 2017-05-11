<template>
    <div :class="wrapClasses">
        <div>
            <div :class="prefixCls + '-outer'">
                <div :class="prefixCls + '-inner'" :style="`background-color:${trailColor}`">
                    <div :class="prefixCls + '-bg'" :style="{width: percent + '%', height: strokeWidth + 'px', backgroundColor: strokeColor}"></div>
                </div>
            </div>
            <span v-if="showInfo" :class="prefixCls + '-text'" :style="`float: right;color:${infoColor || strokeColor}`">
                <template v-if="format"> {{ typeof format === 'function'? format(percent) : format}} </template>
                <i v-else-if="progressStatusIcon" :class="`anticon anticon-${progressStatusIcon}`"></i>
                <template v-else> {{ percent }}% </template>
            </span>
        </div>
    </div>
</template>

<script lang="babel">
    export default {
        name: 'ProgressLine',
        data: () => ({
            prefixCls: 'ant-progress',
        }),
        props: {
            status: {
                type: String,
                default: 'normal',
            },
            showInfo: {
                type: Boolean,
                default: true,
            },
            percent: {
                type: Number,
                default: 0,
                validator(value) {
                    return value >= 0 && value <= 100;
                },
            },
            normalColor: {
                type: String,
                default: '#108ee9',
            },
            activeColor: {
                type: String,
                default: '#108ee9',
            },
            successColor: {
                type: String,
                default: '#00a854',
            },
            exceptionColor: {
                type: String,
                default: '#f04134',
            },
            trailColor: {
                type: String,
                default: '#f7f7f7',
            },
            infoColor: String,
            format: [Function, String],
            strokeWidth: {
                type: Number,
                default: 10,
            },
        },
        computed: {
            progressStatus() {
                if (this.percent === 100) return 'success';

                return this.status || 'normal';
            },
            strokeColor() {
                return this[`${this.progressStatus}Color`];
            },
            wrapClasses() {
                return [
                    `${this.prefixCls}`,
                    `${this.prefixCls}-line`,
                    { [`${this.prefixCls}-status-${this.progressStatus}`]: this.progressStatus },
                    { [`${this.prefixCls}-show-info`]: this.showInfo },
                ];
            },
            progressStatusIcon() {
                let icon = '';
                if (this.progressStatus === 'exception') {
                    icon = 'cross-circle';
                } else if (this.progressStatus === 'success') {
                    icon = 'check-circle';
                }
                return icon;
            },
        },
    };
</script>
