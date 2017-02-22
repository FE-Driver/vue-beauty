<template lang="html">

    <div class="markdown global">
        <h1>Grid 栅格</h1>
        <p>24 栅格系统。</p>
        <h2>设计理念</h2>

        <v-row class="demo-row">
            <v-col class="demo-col demo-col-1" span="24">
                100%
            </v-col>
        </v-row>

        <v-row class="demo-row">
            <v-col class="demo-col demo-col-2" span="6">25%</v-col>
            <v-col class="demo-col demo-col-3" span="6">25%</v-col>
            <v-col class="demo-col demo-col-2" span="6">25%</v-col>
            <v-col class="demo-col demo-col-3" span="6">25%</v-col>
        </v-row>

        <v-row class="demo-row">
            <v-col class="demo-col demo-col-4" span="8">33.33%</v-col>
            <v-col class="demo-col demo-col-5" span="8">33.33%</v-col>
            <v-col class="demo-col demo-col-4" span="8">33.33%</v-col>
        </v-row>

        <v-row class="demo-row">
            <v-col class="demo-col demo-col-1" span="12">50%</v-col>
            <v-col class="demo-col demo-col-3" span="12">50%</v-col>
        </v-row>

        <v-row class="demo-row">
            <v-col class="demo-col demo-col-4" span="16">66.66%</v-col>
            <v-col class="demo-col demo-col-5" span="8">33.33%</v-col>
        </v-row>
        <p>在多数业务情况下，vue-beauty需要在设计区域内解决大量信息收纳的问题，因此在12栅格系统的基础上，我们将整个设计建议区域按照24等分的原则进行划分。
            划分之后的信息区块我们称之为“盒子”。
            建议横向排列的盒子数量最多四个，最少一个。“盒子”在整个屏幕上占比见下图。
            设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。
        </p>

        <h2>概述</h2>
        <p>
            布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p>
        <ul>
            <li>通过row在水平方向建立一组column（简写col）</li>
            <li>你的内容应当放置于col内，并且，只有col可以作为row的直接元素</li>
            <li>栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽d的列可以使用.ant-col-8来创建</li>
            <li>如果一个row中的col总和超过24，那么多余的col会作为一个整体另起一行排列</li>
        </ul>

        <h2>组件演示</h2>
        <div class="ant-row">
            <div class="ant-col-11">
                <code-box
                        title="基本布局演示"
                        describe="点击戳开代码">
                    <div class="demo-ant-row-col">
                        <v-row>
                            <v-col span="24">100%</v-col>
                        </v-row>
                        <v-row>
                            <v-col span="6">25%</v-col>
                            <v-col span="6">25%</v-col>
                            <v-col span="6">25%</v-col>
                            <v-col span="6">25%</v-col>
                        </v-row>

                        <v-row>
                            <v-col span="8">33.33%</v-col>
                            <v-col span="8">33.33%</v-col>
                            <v-col span="8">33.33%</v-col>
                        </v-row>

                        <v-row>
                            <v-col span="12">50%</v-col>
                            <v-col span="12">50%</v-col>
                        </v-row>

                        <v-row>
                            <v-col span="16">66.66%</v-col>
                            <v-col span="8">33.33%</v-col>
                        </v-row>

                    </div>
                </code-box>

            </div>

            <div class="ant-col-2">

            </div>

            <div class="ant-col-11">
                <code-box
                        title="可以左右偏移的布局"
                        describe="ant-col-offset-n n为想要margin-left多少个栅格的距离">
                    <div class="demo-ant-row-col">

                        <v-row>
                            <v-col span="8">.ant-col-8</v-col>
                            <v-col span="8" offset="8">.ant-col-8 ant-col-offset-8</v-col>
                        </v-row>

                        <v-row>
                            <v-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</v-col>
                            <v-col span="6" offset="6">.ant-col-6 .ant-col-offset-6</v-col>
                        </v-row>

                        <v-row>
                            <v-col span="12" offset="6">.ant-col-12 .ant-col-offset-6</v-col>
                        </v-row>

                    </div>

                </code-box>
            </div>

        </div>

        <br/>

        <div class="ant-row">
            <div class="ant-col-11">
                <code-box
                        title="布局排序"
                        describe="栅格系统内子元素默认是左浮动，push的作用设置子元素基于自己原来浮动的位置的向右移动的距离，pull的作用设置子元素基于自己原来浮动的位置的向左移动的距离">
                    <div class="demo-ant-row-col">

                        <v-row>
                            <v-col span="18" push="6">.ant-col-18 .ant-col-push-6</v-col>
                            <v-col span="6" pull="18">.ant-col-6 .ant-col-pull-18</v-col>
                        </v-row>

                        <v-row>
                            <v-col span="12" push="12">.ant-col-push-12 .ant-col-12</v-col>
                            <v-col span="12" pull="12">.ant-col-pull-12 .ant-col-12</v-col>
                        </v-row>

                        <v-row>
                            <v-col span="6" push="12">.ant-col-push-12 .ant-col-6 1</v-col>
                            <v-col span="6" push="12">.ant-col-push-6 .ant-col-6 2</v-col>
                            <v-col span="12" pull="12">.ant-col-pull-6 .ant-col-12</v-col>
                        </v-row>
                    </div>
                </code-box>
            </div>
        </div>

        <h2>Flex 布局</h2>
        <p>
            我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order
            来定义元素的排列顺序。
            Flex 布局是基于 24 栅格来定义每一个“盒子”的宽度，但排版则不拘泥于栅格。
        </p>

        <div class="ant-row">
            <div class="ant-col-11">
                <h3>Flex布局</h3>
                <code-box
                        title="Flex布局：排列"
                        describe="点击戳开代码 关键词：start, center, end, space-between, space-around">
                    <div class="demo-ant-row-col">
                        <p>子元素居左排列（默认）.ant-row-flex-start .ant-row-flex .ant-row</p>
                        <v-row display="flex" pack="start">
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                        </v-row>
                        <p>子元素居中排列 .ant-row-flex-center .ant-row-flex .ant-row</p>
                        <v-row display="flex" pack="center">
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                        </v-row>
                        <p>子元素居右排列 .ant-row-flex-end .ant-row-flex .ant-row</p>
                        <v-row display="flex" pack="end">
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                        </v-row>
                        <p>子元素等宽排列 .ant-row-flex-space-between .ant-row-flex .ant-row</p>
                        <v-row display="flex" pack="space-between">
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                        </v-row>
                        <p>子元素分散对齐 .ant-row-flex-space-around .ant-row-flex .ant-row</p>
                        <v-row display="flex" pack="space-around">
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                            <v-col span="4">.ant-col-4</v-col>
                        </v-row>
                    </div>
                </code-box>

                <h3>Flex排序</h3>
                <code-box
                        title="Flex排序"
                        describe="点击戳开代码 关键词：ant-col-order-n n为想要的顺序">
                    <div class="demo-ant-row-col">
                        <v-row display="flex">
                            <v-col order="4" span="6">1 ant-col-order-4</v-col>
                            <v-col order="3" span="6">2 ant-col-order-3</v-col>
                            <v-col order="2" span="6">3 ant-col-order-2</v-col>
                            <v-col order="1" span="6">4 ant-col-order-1</v-col>
                        </v-row>
                    </div>
                </code-box>

            </div>
            <div class="ant-col-2"></div>
            <div class="ant-col-11">
                <h3>Flex对齐</h3>
                <code-box
                        title="Flex对齐：配合排列方式的对齐方式"
                        describe="点击戳开代码 关键词：flex-top, flex-middle, flex-bottom">
                    <div class="demo-ant-row-col">
                        <p>顶部对齐 .ant-row-flex-center .ant-row-flex-top .ant-row-flex .ant-row</p>
                        <v-row pack="center" display="flex" align="top">
                            <v-col span="4"><p style="height: 100px">.ant-col-4</p></v-col>
                            <v-col span="4"><p style="height: 50px">.ant-col-4</p></v-col>
                            <v-col span="4"><p style="height: 120px">.ant-col-4</p></v-col>
                            <v-col span="4"><p style="height: 80px">.ant-col-4</p></v-col>
                        </v-row>

                        <p>居中对齐 .ant-row-flex-space-around .ant-row-flex-middle .ant-row-flex .ant-row</p>
                        <v-row pack="space-around" display="flex" align="middle">
                            <v-col span="4"><p style="height: 100px">.ant-col-4</p></v-col>
                            <v-col span="4"><p style="height: 50px">.ant-col-4</p></v-col>
                            <v-col span="4"><p style="height: 120px">.ant-col-4</p></v-col>
                            <v-col span="4"><p style="height: 80px">.ant-col-4</p></v-col>
                        </v-row>
                        <p>底部对齐 .ant-row-flex-space-between .ant-row-flex-bottom .ant-row-flex .ant-row</p>
                        <v-row pack="space-between" display="flex" align="bottom">
                            <v-col span="4"><p style="height: 100px">.ant-col-4</p></v-col>
                            <v-col span="4"><p style="height: 50px">.ant-col-4</p></v-col>
                            <v-col span="4"><p style="height: 120px">.ant-col-4</p></v-col>
                            <v-col span="4"><p style="height: 80px">.ant-col-4</p></v-col>
                        </v-row>
                    </div>
                </code-box>
            </div>
        </div>

        <h2>响应式布局</h2>

        <div class="ant-row">
            <div class="ant-col-11">
                <h3>响应式布局</h3>
                <code-box
                        title="响应式布局"
                        describe="参照 Bootstrap 的 <a href='http://getbootstrap.com/css/#grid-media-queries'>响应式设计</a>，预设四个响应尺寸：xs sm md lg。">
                    <div class="demo-ant-row-col">
                        <v-row display="flex">
                            <v-col :xs="2" :sm="4" :md="6" :lg="8">col</v-col>
                            <v-col :xs="20" :sm="16" :md="12" :lg="8">col</v-col>
                            <v-col :xs="2" :sm="4" :md="6" :lg="8">col</v-col>
                        </v-row>
                    </div>
                </code-box>
            </div>
            <div class="ant-col-2"></div>
            <div class="ant-col-11">
                <h3>其他属性的响应式</h3>
                <code-box
                        title="其他属性的响应式"
                        describe="span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。其中 xs={6} 相当于 xs={{ span: 6 }}">
                    <div class="demo-ant-row-col">
                        <v-row display="flex">
                            <v-col :xs="{ span: 5, offset: 1 }" :md="{ span: 6, offset: 2 }">col</v-col>
                            <v-col :xs="{ span: 11, offset: 1 }" :md="{ span: 6, offset: 2 }">col</v-col>
                            <v-col :xs="{ span: 5, offset: 1 }" :md="{ span: 6, offset: 2 }">col</v-col>
                        </v-row>
                        <v-row display="flex">
                            <v-col :xs="{ span: 6, order: 1 }" :md="{ span: 8, order: 3 }">col-1</v-col>
                            <v-col :xs="{ span: 12, order: 2 }" :md="{ span: 8, order: 2 }">col-2</v-col>
                            <v-col :xs="{ span: 6, order: 3 }" :md="{ span: 8, order: 1 }">col-3</v-col>
                        </v-row>
                    </div>
                </code-box>
            </div>
        </div>

        <api-table
                title="Row API"
                :apis='rowApis'
        ></api-table>

        <api-table
                title="Col API"
                :apis='colApis'
        ></api-table>

    </div>

</template>
<script lang="babel">
    import codeBox from '../components/codeBox'
    import apiTable from '../components/apiTable'

    export default {
        data: function () {
            return {
                rowApis: [{
                    parameter: 'display',
                    explain: '栅格系统（行）区域，规定外层元素应该生成的框的类型，可用值 "flex"',
                    type: 'String',
                    default: "block"
                }, {
                    parameter: 'pack',
                    explain: '栅格系统（行）区域，规定display="flex"类型的外层元素内部元素的排列模式，可选值["start","center","end","space-between","space-around"]，声明该值的时候display="flex"是必须的',
                    type: 'String',
                    default: 'start'
                }, {
                    parameter: 'align',
                    explain: '栅格系统（行）区域，规定display="flex"类型的外层元素内部元素的对齐模式，可选值["top","middle","bottom"]，声明该值的时候display="flex"是必须的',
                    type: 'Array',
                    default: '无'
                }],
                colApis: [{
                    parameter: 'span',
                    explain: '栅格系统（列）元素，row的直接元素，其值1到24来表示其跨越row的范围。例如，三个等宽d的列可以使用.col-8来创建，将一行整分割成3份同样大小的区域',
                    type: 'String,Number',
                    default: '无'
                }, {
                    parameter: 'push',
                    explain: '栅格系统内子元素默认是左浮动，push的作用设置子元素基于自己原来浮动的位置的向右移动的距离',
                    type: 'String,Number',
                    default: '无'
                }, {
                    parameter: 'pull',
                    explain: '栅格系统内子元素默认是左浮动，pull的作用设置子元素基于自己原来浮动的位置的向左移动的距离',
                    type: 'String,Number',
                    default: '无'
                }, {
                    parameter: 'offset',
                    explain: '栅格系统内子元素默认是左浮动，offset的作用设置子元素的margin-left的值',
                    type: 'String,Number',
                    default: '无'
                }, {
                    parameter: 'order',
                    explain: '栅格化系统支持 Flex 布局，支持使用 order 来定义子元素的排列顺序。',
                    type: 'String,Number',
                    default: '无'
                }, {
                    parameter: 'xs',
                    explain: '<768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
                    type: 'Number,Object',
                    default: '无'
                }, {
                    parameter: 'sm',
                    explain: '≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象',
                    type: 'Number,Object',
                    default: '无'
                }, {
                    parameter: 'md',
                    explain: '≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象',
                    type: 'Number,Object',
                    default: '无'
                }, {
                    parameter: 'lg',
                    explain: '≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象',
                    type: 'Number,Object',
                    default: '无'
                }]
            }
        },
        components: {codeBox, apiTable}
    }
</script>
<style lang="less">
    .global {
        .code-box:hover {
            box-shadow: none;
        }
        .highlight pre code {
            background: #f7f7f7;
        }
        .ant-row .paragraph-14px {
            font-size: 14px;
        }
        .ant-row .paragraph-12px {
            font-size: 12px;
        }

        .demo-row {
            margin-bottom: 20px;
        }
        .demo-ant-row-col .ant-row,
        .demo-row {
            background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
            overflow: hidden;
        }
        .row-flex {
            background: #F5F5F5;
        }
        .demo-ant-row-col .ant-row div,
        .demo-row div,
        .row-flex div {
            padding: 5px 0;
            background: rgba(24, 115, 216, 0.7);
            text-align: center;
            min-height: 28px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            margin-top: 10px;
            margin-bottom: 10px;
            color: #fff;
        }
        .demo-row .demo-col {
            text-align: center;
            padding: 40px 0;
            color: #fff;
            font-size: 18px;
            border: none;
            margin-top: 0;
            margin-bottom: 0;
        }
        .demo-row .demo-col-1 {
            background: rgba(24, 115, 216, 0.7);
        }
        .demo-row .demo-col-2 {
            background: rgba(24, 115, 216, 0.5);
        }
        .demo-row .demo-col-3 {
            background: rgba(255, 255, 255, 0.2);
            color: #999;
        }
        .demo-row .demo-col-4 {
            background: rgba(24, 115, 216, 0.6);
        }
        .demo-row .demo-col-5 {
            background: rgba(255, 255, 255, 0.5);
            color: #999;
        }
        .hight-100 {
            height: 100px;
        }
        .hight-50 {
            height: 50px;
        }
        .hight-120 {
            height: 120px;
        }
        .hight-80 {
            height: 80px;
        }
        .testRowClassName {
            background: #f0f0f0;
        }
        div.testColClassName {
            background: rgba(24, 115, 216, 0.9);
        }
    }
</style>