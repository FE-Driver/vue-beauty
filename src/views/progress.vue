<template lang="html">
    <div>
        <section class="markdown">
            <h1>Progress 进度条</h1>
            <p>
                进度条，展示操作的当前进度。
            </p>
            <h2>何时使用</h2>
            <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>
            <ul>
                <li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；</li>
                <li>当需要显示一个操作完成的百分比时。</li>
            </ul>
            <h2>组件演示</h2>
        </section>

        <v-Row :gutter="16">
            <v-Col span="12">
                <code-box title="进度条"
                          describe="有normal、exception、active、success四个样式的进度条,默认为normal值,当进度为100时自动设置为success">
                    <v-progress-line :percent="30"></v-progress-line>
                    <v-progress-line :percent="50" status="active"></v-progress-line>
                    <v-progress-line :percent="70" status="exception"></v-progress-line>
                    <v-progress-line :percent="100"></v-progress-line>
                    <v-progress-line :percent="50" :show-info="false"></v-progress-line>
                </code-box>

                <code-box title="小型进度条" describe="通过设置strokeWidth,可以更灵活地使用进度条">
                    <v-progress-line :percent="30" :stroke-width="5"></v-progress-line>
                    <v-progress-line :percent="50" :stroke-width="5" status="active"></v-progress-line>
                    <v-progress-line :percent="70" :stroke-width="5" status="exception"></v-progress-line>
                    <v-progress-line :percent="100" :stroke-width="5"></v-progress-line>
                </code-box>

                <code-box title="自定义文本格式" describe="通过设置format，可以更灵活地定义文本格式">
                    <v-progress-line :percent="75" format="75 天"></v-progress-line>
                    <v-progress-line :percent="100" format="完成"></v-progress-line>
                </code-box>

                <code-box title="动态展示" describe="通过动态的改变进度,可以让进度条更有趣">
                    <v-progress-line :percent="percentLine" :format="percentLine == 100 ? '完成' : percentLine + '%'"></v-progress-line>
                    <v-button-group size="small">
                        <v-button icon="minus" @click="_declineLine"></v-button>
                        <v-button icon="plus" @click="_increaseLine"></v-button>
                    </v-button-group>
                    <template slot="js">
                        export default {
                            data () {
                                return {
                                    percentLine: 10,
                                }
                            },

                            methods: {
                                _declineLine () {
                                    let percent = this.percentLine - 10;
                                    if (percent < 0) {
                                        percent = 0;
                                    }
                                    this.percentLine = percent
                                },

                                _increaseLine () {
                                    let percent = this.percentLine + 10;
                                    if (percent > 100) {
                                        percent = 100;
                                    }
                                    this.percentLine = percent
                                }
                            }
                        }
                    </template>
                </code-box>

            </v-col>
            <v-Col span="12">

                <code-box title="进度圈" describe="有normal、exception、success三个样式的进度条,默认为normal值,当进度为100时自动设置为success">
                    <v-progress-circle :percent="30"></v-progress-circle>
                    <v-progress-circle :percent="70" status="exception"></v-progress-circle>
                    <v-progress-circle :percent="100"></v-progress-circle>
                </code-box>

                <code-box title="小型进度圈" describe="通过设置width,可以更灵活地使用进度圈">
                    <v-progress-circle :percent="30" :width="80"></v-progress-circle>
                    <v-progress-circle :percent="70" :width="80" status="exception"></v-progress-circle>
                    <v-progress-circle :percent="100" :width="80"></v-progress-circle>
                </code-box>

                <code-box title="自定义文本格式" describe="通过设置format，可以更灵活地定义文本格式">
                    <v-progress-circle :percent="75" format="75 天"></v-progress-circle>
                    <v-progress-circle :percent="100" format="完成"></v-progress-circle>
                </code-box>

                <code-box title="进度圈动态展示" describe="通过动态的改变进度,可以让进度圈更有趣">
                    <v-progress-circle :percent="percentCircle" :format="percentCircle == 100 ? '完成' : percentCircle + '%'"></v-progress-circle>
                    <v-button-group size="small">
                        <v-button icon="minus" @click="_declineCircle"></v-button>
                        <v-button icon="plus" @click="_increaseCircle"></v-button>
                    </v-button-group>
                    <template slot="js">
                        export default {
                            data () {
                                return {
                                    percentCircle: 10
                                }
                            },

                            methods: {
                                _declineCircle () {
                                    let percent = this.percentCircle - 10;
                                    if (percent < 0) {
                                        percent = 0;
                                    }
                                    this.percentCircle = percent
                                },

                                _increaseCircle () {
                                    let percent = this.percentCircle + 10;
                                    if (percent > 100) {
                                        percent = 100;
                                    }
                                    this.percentCircle = percent
                                }
                            }
                        }
                    </template>
                </code-box>

            </v-col>
        </v-row>

        <api-table
                title="Progress Bar API"
                :apis='progressBarApis'
        ></api-table>

        <api-table
                title="Progress Circle API"
                :apis='progressCircleApis'
        ></api-table>
    </div>
</template>

<script lang="babel">
    import codeBox from '../components/codeBox'
    import apiTable from '../components/apiTable'

    export default {
        data () {
            return {
                percentLine: 10,
                percentCircle: 10,
                progressBarApis: [{
                    parameter: 'percent',
                    explain: '百分比',
                    type: 'Number',
                    default: 0
                },{
                    parameter: 'format',
                    explain: '自定义文本格式，showInfo为true时有效',
                    type: 'String',
                    default: "空字符串"
                }, {
                    parameter: 'status',
                    explain: '状态，有normal、exception、active、success四个状态值',
                    type: 'String',
                    default: 'normal'
                }, {
                    parameter: 'strokeWidth',
                    explain: '进度条线的宽度，单位是px',
                    type: 'Number',
                    default: 1
                }, {
                    parameter: 'showInfo',
                    explain: '是否显示进度数值和状态图标',
                    type: 'Boolean',
                    default: true
                }],
                progressCircleApis: [{
                    parameter: 'percent',
                    explain: '百分比',
                    type: 'Number',
                    default: 0
                },{
                    parameter: 'format',
                    explain: '自定义文本格式',
                    type: 'String',
                    default: "空字符串"
                }, {
                    parameter: 'status',
                    explain: '状态，有normal、exception、success三个状态值',
                    type: 'String',
                    default: 'normal'
                }, {
                    parameter: 'strokeWidth',
                    explain: '进度圈线的宽度，单位是进度圈画布宽度的百分比',
                    type: 'Number',
                    default: 1
                }, {
                    parameter: 'width',
                    explain: '必填，进度圈画布宽度，单位px。这里没有提供height属性设置，Line型高度就是strokeWidth，Circle型高度等于width',
                    type: 'Number',
                    default: 'null'
                }]
            }
        },

        components: {
            codeBox,
            apiTable
        },

        methods: {
            _declineLine () {
                let percent = this.percentLine - 10;
                if (percent < 0) {
                    percent = 0;
                }
                this.percentLine = percent;
            },

            _increaseLine () {
                let percent = this.percentLine + 10;
                if (percent > 100) {
                    percent = 100;
                }
                this.percentLine = percent;
            },

            _declineCircle () {
                let percent = this.percentCircle - 10;
                if (percent < 0) {
                    percent = 0;
                }
                this.percentCircle = percent;
            },

            _increaseCircle () {
                let percent = this.percentCircle + 10;
                if (percent > 100) {
                    percent = 100;
                }
                this.percentCircle = percent;
            }
        }
    }
</script>

<style lang="less">
.ant-progress-circle,
.ant-progress-line {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
