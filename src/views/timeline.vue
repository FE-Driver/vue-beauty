<template lang="html">

    <div>

        <section class="markdown">
            <h1>Timeline 时间轴</h1>
            <p>
                垂直展示的时间流信息
            </p>
            <h2>何时使用</h2>
            <ul>
                <li><p>当有一系列信息需要从上至下按时间排列时；</p></li>
                <li><p>需要有一条时间轴进行视觉上的串联时；</p></li>
            </ul>
        </section>

        <v-Row :gutter="16">
            <v-Col span="12">

                <code-box
                    title="基本用法"
                    describe="基本的时间轴。。"
                >
                    <v-timeline>
                        <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
                        <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
                        <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
                        <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
                    </v-timeline>
                </code-box>

                <code-box
                    title="最后一个"
                    describe="在最后位置添加一个幽灵节点，表示时间轴未完成，还在记录过程中。可以指定 pending={true} 或者 pending={一个 Vue 元素}。"
                >
                    <v-timeline pending="<a href='#'>查看更多</a>">
                        <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
                        <v-timeline-item>初步排除网络异常 2015-09-01</v-timeline-item>
                        <v-timeline-item>技术测试异常 2015-09-01</v-timeline-item>
                    </v-timeline>
                </code-box>

            </v-col>
            <v-Col span="12">

                <code-box
                    title="圆圈颜色"
                    describe="圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。"
                >
                    <v-timeline>
                        <v-timeline-item color="green">创建服务现场 2015-09-01</v-timeline-item>
                        <v-timeline-item color="green">创建服务现场 2015-09-01</v-timeline-item>
                        <v-timeline-item color="red">
                            <p>初步排除网络异常1</p>
                            <p>初步排除网络异常2</p>
                            <p>初步排除网络异常3 2015-09-01</p>
                        </v-timeline-item>
                        <v-timeline-item>
                            <p>技术测试异常1</p>
                            <p>技术测试异常2</p>
                            <p>技术测试异常3 2015-09-01</p>
                        </v-timeline-item>
                    </v-timeline>
                </code-box>

                <code-box
                    title="自定义时间轴点"
                    describe="可以设置为图标或其他自定义元素。"
                >

                    <v-timeline>
                        <v-timeline-item>创建服务现场 2015-09-01</v-timeline-item>
                        <v-timeline-item>初步排除网络异常 2015-09-01</v-timeline-item>
                        <v-timeline-item dot="<i class='anticon anticon-clock-circle-o' style='font-size: 16px;'></i>"
                                         color="red">
                            技术测试异常 2015-09-01
                        </v-timeline-item>
                        <v-timeline-item>网络异常正在修复 2015-09-01</v-timeline-item>
                    </v-timeline>
                </code-box>

            </v-col>
        </v-row>


        <api-table title="Timeline API" :content='content'></api-table>

        <api-table title="TimelineItem API" :content='itemcontent'></api-table>

    </div>

</template>

<script lang="babel">
    import codeBox from '../components/codeBox'
    import apiTable from '../components/apiTable'

    export default {
        data: function () {
            return {
                content: [
                    [
                        'pending',
                        '指定最后一个幽灵节点是否存在或内容',
                        'boolean or Vue.Element', //todo
                        'false'
                    ]
                ],
                itemcontent: [
                    [
                        'color',
                        '指定圆圈颜色<code>blue, red, green</code>，或自定义的色值',
                        'string',
                        'blue'
                    ],
                    [
                        'dot',
                        '自定义时间轴点',
                        'Vue.Element',
                        '无'
                    ]
                ]
            }
        },
        components: {
            codeBox,
            apiTable
        }
    }
</script>