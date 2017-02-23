<template lang="html">

    <div class="main-wrapper page-container">
        <div class="ant-row">
            <div class="aside-container ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
                <v-menu mode="inline">
                    <v-submenu title="General">
                        <v-menu-item>
                            <router-link :to="{ name:'button'}">Button 按钮</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'icon'}">Icon 图标</router-link>
                        </v-menu-item>
                    </v-submenu>
                    <v-submenu title="Layout">
                        <v-menu-item>
                            <router-link :to="{ name:'grid'}">Grid 栅格</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'layout'}">Layout 布局</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'morePanel'}">MorePanel 更多条件</router-link>
                        </v-menu-item>
                    </v-submenu>
                    <v-submenu title="Navigation">
                        <v-menu-item>
                            <router-link :to="{ name:'affix'}">Affix 固钉</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'breadcrumb'}">Breadcrumb 面包屑</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'pagination'}">Pagination 分页</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'steps'}">Steps 步骤条</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'tabs'}">Tabs 标签页</router-link>
                        </v-menu-item>
                    </v-submenu>
                    <v-submenu title="Data Entry">
                        <v-menu-item>
                            <router-link :to="{ name:'cascader'}">Cascader 级联选择</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'datePicker'}">DatePicker 日期选择框</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'form'}">Form 表单</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'input'}">Input 输入框</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'inputNumber'}">InputNumber 数字输入框</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'rate'}">Rate 评分</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'radio'}">Radio 单选框</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'checkbox'}">Checkbox 多选框</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'select'}">Select 选择器</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'switch'}">Switch 开关</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'timePicker'}">TimePicker 时间选择框</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'upload'}">Upload 上传</router-link>
                        </v-menu-item>
                    </v-submenu>
                    <v-submenu title="Data display">
                        <v-menu-item>
                            <router-link :to="{ name:'badge'}">Badge 徽标数</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'card'}">Card 卡片</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'tag'}">Tag 标签</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'tooltip'}">Tooltip 文字提示</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'datatable'}">Datatable</router-link>
                        </v-menu-item>
                    </v-submenu>
                    <v-submenu title="Feedback">
                        <v-menu-item>
                            <router-link :to="{ name:'alert'}">Alert 警告提示</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'message'}">Message 全局提示</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'modal'}">Modal 对话框</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'notification'}">Notification 通知提醒框</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'spin'}">Spin加载中</router-link>
                        </v-menu-item>
                    </v-submenu>
                    <v-submenu title="Other">
                    </v-submenu>
                    <v-submenu title="Directive">
                        <v-menu-item>
                            <router-link :to="{ name:'tooltipd'}">Tooltip 文字提示</router-link>
                        </v-menu-item>
                    </v-submenu>
                </v-menu>
            </div>
            <div class="main-container ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-20">
                <router-view keep-alive class="markdown"></router-view>
            </div>
        </div>
    </div>

</template>

<script>

export default {

}

</script>

<style lang="less">

    .main-wrapper {
        background: #fff;
        width: 92%;
        margin: 0 auto;
        border-radius: 4px;
        overflow: hidden;
        padding: 24px 0 0;
        margin-bottom: 24px;
        position: relative;
    }

    .main-container {
        padding: 0 6% 120px 4% !important;
        margin-left: -1px;
        min-height: 500px;
        border-left: 1px solid #e9e9e9;
    }

    .page-container {
        /*color: #666;*/
        font-size: 14px;
        line-height: 1.5;

        h1 {
            color: #404040;
            font-weight: 500;
            line-height: 40px;
            margin-bottom: 24px;
            margin-top: 8px;
            font-size: 28px;
            font-family: lato, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
        }

        & > h2 {
            font-size: 24px;
        }

        hr {
            border-radius: 10px;
            height: 3px;
            border: 0;
            background: #eee;
            margin: 20px 0;
        }

        code, kbd, pre, samp {
            font-family: Consolas, monospace;
        }

        code {
            margin: 0 3px;
        }

        & > ul li {
            list-style: circle;
            margin-left: 20px;
        }

        & > ol li {
            list-style: decimal;
            margin-left: 20px;
            padding-left: 8px;
        }

        .table {
            font-size: 13px;
            border-collapse: collapse;
            border-spacing: 0px;
            empty-cells: show;
            border: 1px solid #e9e9e9;
            width: 100%;
            margin: 16px 0;

            th{
                background: #F7F7F7;
                white-space: nowrap;
                color: #5C6B77;
                font-weight: 600;
            }
            td:first-child {
                background: #fcfcfc;
                font-weight: 500;
                width: 20%;
                font-family: "Lucida Console", Consolas, Menlo, Courier, monospace;
            }
            th,td{
                border: 1px solid #e9e9e9;
                padding: 8px 16px;
                text-align: left;
            }
        }
    }

    .main-container > section > h3 {
        color: #404040;
        font-family: lato, Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
        margin: 1.6em 0 .6em;
        font-weight: 500;
        clear: both;
    }

    .code-boxes-col-2-1 {
        display: inline-block;
        vertical-align: top;
        padding: 0 8px;
    }

    .aside-container {
        padding-bottom: 50px;
    }

    .aside-container .ant-menu-item a, .aside-container .ant-menu-submenu-title span, .aside-container > .ant-menu-item {
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .header-anchor {
        margin-left: -18px;
    }

    .markdown {
        & > ul{
            margin-top: 1rem;
            margin-bottom: 1rem;
            & > li {
                list-style: circle;
                margin-left: 1rem;
            }
        }
        h1, h2, h3{
            a{
                font-size: .8em;
                opacity: 0;
                font-weight: normal;
                transition: opacity .2s ease-in-out;
            }

            &:hover a {
                opacity: 1;
            }
        }
        blockquote {
            font-size: 90%;
            color: #999;
            border-left: 4px solid #e9e9e9;
            padding-left: 0.8em;
            margin: 1em 0;
        }
        code{
            margin: 0 1px;
            background: #f7f7f7;
            padding: .2em .4em;
            border-radius: 3px;
            font-size: .9em;
            border: 1px solid #eee;
        }

        & > p, & > pre {
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }
</style>
