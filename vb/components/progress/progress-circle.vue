<template>
    <div :class="wrapClasses">
        <div :class="prefixCls + '-inner'"
            :style="{
                'width': width + 'px',
                'height': width + 'px',
                'fontSize': width * 0.16 + 6 + 'px'
            }">

            <svg class="ant-progress-circle" viewBox='0 0 100 100'>
                <path class="ant-progress-circle-trail"
                      :d="pathString" :stroke-width="strokeWidth" fill-opacity='0':style="trailPathStyle"/>
                <path class="ant-progress-circle-path"
                      :d="pathString" stroke-linecap='round' :stroke-width="strokeWidth" fill-opacity='0' :style="strokePathStyle"/>
            </svg>

            <span v-if="showInfo" :class="prefixCls + '-text'" :style="`color:${infoColor || strokeColor}`">
                <template v-if="format"> {{ typeof format === 'function'? format(percent) : format}} </template>
                <template v-else>
                    <template v-if="progressStatus === 'exception' || progressStatus === 'success'">
                        <i :class='`anticon anticon-${progressStatusIcon}`'></i>
                    </template>
                    <template v-else> {{ percent }}% </template>
                </template>
            </span>
        </div>
    </div>
</template>

<script lang="babel">

    export default {
        name: 'ProgressCircle',
        data: () => ({
            prefixCls: 'ant-progress',
            progressStatus: 'normal',
        }),
        props: {
            showInfo: {
                type: Boolean,
                default: true,
            },
            status: {
                type: String,
                default: 'normal',
                validator(value) {
                    return ['normal', 'exception', 'success'].includes(value);
                },
            },
            width: {
                type: Number,
                default: 132,
            },
            percent: {
                type: Number,
                default: 0,
            },
            format: [Function, String],
            strokeWidth: {
                type: Number,
                default: 6,
            },
            infoColor: String,
            normalColor: {
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
            dashboard: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            wrapClasses() {
                return [
                    `${this.prefixCls}`,
                    `${this.prefixCls}-circle`,
                    { [`${this.prefixCls}-status-${this.progressStatus}`]: this.progressStatus },
                    { [`${this.prefixCls}-show-info`]: this.showInfo },
                ];
            },
            strokeColor() {
                return this[`${this.progressStatus}Color`];
            },
            radius() {
                return 50 - this.strokeWidth / 2;
            },
            pathString() {
                return `M 50,50 m 0,${this.dashboard ? '' : '-'}${this.radius}
              a ${this.radius},${this.radius} 0 1 1 0,${this.dashboard ? '-' : ''}${2 * this.radius}
              a ${this.radius},${this.radius} 0 1 1 0,${this.dashboard ? '' : '-'}${2 * this.radius}`;
            },
            trailPathStyle() {
                const len = Math.PI * 2 * this.radius;
                const gapDegree = this.dashboard ? 75 : 0;

                return {
                    stroke: this.trailColor,
                    strokeDasharray: `${len - gapDegree}px ${len}px`,
                    strokeDashoffset: `-${gapDegree / 2}px`,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s',
                };
            },
            strokePathStyle() {
                const len = Math.PI * 2 * this.radius;
                const gapDegree = this.dashboard ? 75 : 0;

                return {
                    stroke: this.strokeColor,
                    strokeDasharray: `${this.percent / 100 * (len - gapDegree)}px ${len}px`,
                    strokeDashoffset: `-${gapDegree / 2}px`,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s',
                };
            },
            progressStatusIcon() {
                return this.progressStatus === 'exception' ? 'cross' : 'check';
            },
        },
        mounted() {
            this.handleStatus();
        },
        watch: {
            percent() {
                this.handleStatus();
            },
        },
        methods: {
            handleStatus() {
                if (parseInt(this.percent, 10) === 100) {
                    this.progressStatus = 'success';
                } else {
                    this.progressStatus = this.status || 'normal';
                }
            },
        },
    };
</script>
