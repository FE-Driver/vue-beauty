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
                    <v-submenu title="Navigation">
                        <v-menu-item>
                            <router-link :to="{ name:'breadcrumb'}">Breadcrumb 面包屑</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'cascader'}">Cascader 面包屑</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'test'}">Switch test</router-link>
                        </v-menu-item>
                    </v-submenu>
                    <v-submenu title="feedback">
                        <v-menu-item>
                            <router-link :to="{ name:'alert'}">Alert 警告提示</router-link>
                        </v-menu-item>
                        <v-menu-item>
                            <router-link :to="{ name:'tag'}">Tag 标签</router-link>
                        </v-menu-item>
                    </v-submenu>
                    <v-submenu title="Data Entry">
                        <v-menu-item>
                            <router-link :to="{ name:'rate'}">Rate 评分</router-link>
                        </v-menu-item>
                    </v-submenu>
                    <v-submenu title="Data display">
                        <v-menu-item>
                            <router-link :to="{ name:'card'}">Card 卡片</router-link>
                        </v-menu-item>
                    </v-submenu>
                    <v-submenu title="other">
                        <v-menu-item>
                            <router-link :to="{ name:'spin'}">spin加载中</router-link>
                        </v-menu-item>
                    </v-submenu>
                </v-menu>
            </div>
            <div class="main-container ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-20">
                <router-view keep-alive></router-view>
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
        line-height: 1.8;

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

        /*& > h3 {
          font-size: 22px;
        }*/

        hr {
            border-radius: 10px;
            height: 3px;
            border: 0;
            background: #eee;
            margin: 20px 0;
        }

        p, pre {
            margin: 1em 0;
        }

        pre {
            padding: 1em;
            background-color: #F3f3f3;
            border-radius: 6px;
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
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            color: #5e6d82;
            font-size: 14px;
            margin-bottom: 45px;

            strong {
                font-weight: normal;
            }
            th {
                text-align: left;
                border-top: 1px solid #eaeefb;
                background-color: #EFF2F7;
            }
            td, th {
                border-bottom: 1px solid #eaeefb;
                padding: 10px 0;
            }
            th:first-child, td:first-child {
                padding-left: 10px;
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

</style>
