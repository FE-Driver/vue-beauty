<template lang="html">

    <div class="main-wrapper page-container">
        <div class="ant-row">
            <div class="aside-container ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
                <v-menu mode="inline" :data="menuData" :expand="true">
                    <template scope="{data}">
                        <a v-if="data.href" :href="data.href" style="display:inline" :target="data.target">{{data.name}}</a>
                        <router-link v-else :to="data.link" style="display:inline" :target="data.target">{{data.name}}</router-link>
                    </template>
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
    data: () => ({
        menuData: [{
            name: '开发指南',
            children: [{
                name: '起步',
                link: { name: 'start' },
            }, {
                name: '全局CSS样式',
                link: { name: 'css' },
            }, {
                name: 'Polyfill',
                link: { name: 'polyfill' },
            }, {
                name: '参与贡献',
                link: { name: 'contribute' },
            }],
        }, {
            name: '更新日志',
            href: 'https://github.com/FE-Driver/vue-beauty/releases',
            target: '_blank',

        }, {
            name: 'Components',
            groups: [{
                groupName: 'General',
                list: [{
                    name: 'Button 按钮',
                    link: { name: 'button' },
                }, {
                    name: 'Icon 图标',
                    link: { name: 'icon' },
                }],
            }, {
                groupName: 'Layout',
                list: [{
                    name: 'Grid 栅格',
                    link: { name: 'grid' },
                }, {
                    name: 'Layout 布局',
                    link: { name: 'layout' },
                }, {
                    name: 'MorePanel 更多条件',
                    link: { name: 'morePanel' },
                }],
            }, {
                groupName: 'Navigation',
                list: [{
                    name: 'Affix 固钉',
                    link: { name: 'affix' },
                }, {
                    name: 'Breadcrumb 面包屑',
                    link: { name: 'breadcrumb' },
                }, {
                    name: 'BackTop 回到顶部',
                    link: { name: 'backTop' },
                }, {
                    name: 'Menu 导航菜单',
                    link: { name: 'menu' },
                }, {
                    name: 'Dropdown 下拉菜单',
                    link: { name:'dropdown'}
                },{
                    name: 'Pagination 分页',
                    link: { name: 'pagination' },
                }, {
                    name: 'Steps 步骤条',
                    link: { name: 'steps' },
                }, {
                    name: 'Tabs 标签页',
                    link: { name: 'tabs' },
                }],
            }, {
                groupName: 'Data Entry',
                list: [{
                    name: 'Cascader 级联选择',
                    link: { name: 'cascader' },
                }, {
                    name: 'DatePicker 日期选择框',
                    link: { name: 'datePicker' },
                }, {
                    name: 'Form 表单',
                    link: { name: 'form' },
                }, {
                    name: 'InputNumber 数字输入框',
                    link: { name: 'inputNumber' },
                }, {
                    name: 'Input 输入框',
                    link: { name: 'input' },
                }, {
                    name: 'Rate 评分',
                    link: { name: 'rate' },
                }, {
                    name: 'Radio 单选框',
                    link: { name: 'radio' },
                }, {
                    name: 'Checkbox 多选框',
                    link: { name: 'checkbox' },
                }, {
                    name: 'Select 选择器',
                    link: { name: 'select' },
                }, {
                    name: 'Slider 滑动输入条',
                    link: { name: 'slider' },
                }, {
                    name: 'Switch 开关',
                    link: { name: 'switch' },
                }, {
                    name: 'TreeSelect 树选择',
                    link: { name: 'treeSelect' },
                }, {
                    name: 'TimePicker 时间选择框',
                    link: { name: 'timePicker' },
                }, {
                    name: 'Transfer 穿梭框',
                    link: { name: 'transfer' },
                }, {
                    name: 'Upload 上传',
                    link: { name: 'upload' },
                }],
            }, {
                groupName: 'Data display',
                list: [{
                    name: 'Badge 徽标数',
                    link: { name: 'badge' },
                }, {
                    name: 'Card 卡片',
                    link: { name: 'card' },
                }, {
                    name: 'Carousel 走马灯',
                    link: { name: 'carousel' },
                }, {
                    name: 'Collapse 折叠面板',
                    link: { name: 'collapse' },
                }, {
                    name: 'Popover 气泡卡片',
                    link: { name: 'popover' },
                }, {
                    name: 'Tooltip 文字提示',
                    link: { name: 'tooltip' },
                }, {
                    name: 'DataTable 数据表格',
                    link: { name: 'dataTable' },
                }, {
                    name: 'Tag 标签',
                    link: { name: 'tag' },
                }, {
                    name: 'Timeline 时间轴',
                    link: { name: 'timeline' },
                }, {
                    name: 'Tree 树形控件',
                    link: { name: 'tree' },
                }],
            }, {
                groupName: 'Feedback',
                list: [{
                    name: 'Alert 警告提示',
                    link: { name: 'alert' },
                }, {
                    name: 'Message 全局提示',
                    link: { name: 'message' },
                }, {
                    name: 'Modal 对话框',
                    link: { name: 'modal' },
                }, {
                    name: 'Notification 通知提醒框',
                    link: { name: 'notification' },
                }, {
                    name: 'Progress 进度条',
                    link: { name: 'progress' },
                }, {
                    name: 'Popconfirm 气泡确认框',
                    link: { name: 'popconfirm' },
                }, {
                    name: 'Spin加载中',
                    link: { name: 'spin' },
                }],
            }, {
                groupName: 'Other',
            }],
        }, {
            name: 'Directives',
            children: [{
                name: 'Tooltip 文字提示',
                link: { name: 'tooltipd' },
            }],
        }],
    }),
};

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

    .aside-container .ant-menu-item a, .aside-container .ant-menu-submenu-name span, .aside-container > .ant-menu-item {
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
