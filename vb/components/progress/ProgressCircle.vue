<template>
    <div :class="wrapClasses">
        <div :class="prefixCls + '-inner'"
            :style="{
                'width': width + 'px',
                'height': width + 'px',
                'fontSize': width * 0.16 + 6 + 'px'
            }">

            <svg class="rc-progress-circle" viewBox='0 0 100 100'>
                <path class="rc-progress-circle-trail"
                      :d="pathString" :stroke="trailColor"
                      :stroke-width="trailWidth" fill-opacity='0'/>
                <path class="rc-progress-circle-path"
                      :d="pathString" stroke-linecap='round'
                      :stroke="strokeColor" :stroke-width="strokeWidth" fill-opacity='0' :style="pathStyle"/>
            </svg>

            <span :class="prefixCls + '-text'">
                <template v-if="format"> {{ format }} </template>
                <template v-else>
                    <template v-if="progressStatus === 'exception' || progressStatus === 'success'">
                        <v-icon :type="progressStatusIcon"></v-icon>
                    </template>
                    <template v-else> {{ percent }}% </template>
                </template>
            </span>
        </div>
    </div>
</template>

<script lang="babel">
    import {defaultProps, oneOf} from '../../utils'
    import vIcon from '../iconfont'

    const statusColorMap = {
        'normal': '#369BE9',
        'exception': '#E95471',
        'success': '#16C294'
    }

    export default {
        name: 'v-progress-circle',
        props: defaultProps({
            prefixCls: 'ant-progress',

            status: oneOf(['normal', 'exception', 'success'], 'normal'),
            progressStatus: 'normal',
            width: 132,
            percent: 0,
            format: "",
            trailWidth: 6,
            strokeWidth: 6,
            trailColor: '#e9e9e9'
        }),

        components: {vIcon},

        computed: {
            wrapClasses () {
                return [
                    `${this.prefixCls}`,
                    `${this.prefixCls}-circle`,
                    {[`${this.prefixCls}-status-${this.progressStatus}`]: this.progressStatus},
                    {[`${this.prefixCls}-show-info`]: this.showInfo}
                ]
            },

            strokeColor () {
                return statusColorMap[this.progressStatus]
            },

            radius () {
                return 50 - this.strokeWidth / 2
            },

            pathString () {
                return `M 50,50 m 0,-${this.radius}
              a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
              a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`
            },

            pathStyle () {
                const len = Math.PI * 2 * this.radius
                return {
                    'strokeDasharray': `${len}px ${len}px`,
                    'strokeDashoffset': `${((100 - this.percent) / 100 * len)}px`,
                    'transition': 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease'
                }
            },

            progressStatusIcon () {
                return this.progressStatus === 'exception' ? "cross" : "check";
            }
        },

        compiled () {
            this._handleStatus()
        },

        watch: {
            percent () {
                this._handleStatus()
            }
        },

        methods: {
            _handleStatus () {
                if (parseInt(this.percent, 10) === 100) {
                    this.progressStatus = 'success'
                } else {
                    this.progressStatus = this.status || 'normal';
                }
            }
        }
    }

</script>
