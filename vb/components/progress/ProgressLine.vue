<template>
    <div :class="wrapClasses">
        <div>
            <div :class="prefixCls + '-outer'">
                <div :class="prefixCls + '-inner'">
                    <div :class="prefixCls + '-bg'" :style="{width: percent + '%', height: strokeWidth + 'px'}"></div>
                </div>
            </div>
            <template v-if="showInfo === true">
                <span :class="prefixCls + '-text'">
                    <template v-if="format"> {{ format }} </template>
                    <template v-else>
                        <template v-if="progressStatus === 'exception' || progressStatus === 'success'">
                            <v-icon :type="progressStatusIcon"></v-icon>
                        </template>
                        <template v-else> {{ percent }}% </template>
                    </template>
                </span>
            </template>
        </div>

    </div>
</template>

<script lang="babel">
    import {defaultProps, oneOf} from '../../utils'
    import vIcon from '../iconfont'

    export default {
        name: 'v-progress-line',
        props: defaultProps({
            prefixCls: 'ant-progress',

            status: oneOf(['normal', 'exception', 'active', 'success'], 'normal'),
            progressStatus: 'normal',
            showInfo: true,
            percent: 0,
            format: "",
            strokeWidth: 10
        }),

        components: {vIcon},

        computed: {
            wrapClasses () {
                return [
                    `${this.prefixCls}`,
                    `${this.prefixCls}-line`,
                    {[`${this.prefixCls}-status-${this.progressStatus}`]: this.progressStatus},
                    {[`${this.prefixCls}-show-info`]: this.showInfo}
                ]
            },

            progressStatusIcon () {
                return this.progressStatus === 'exception' ? "cross-circle" : "check-circle";
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
