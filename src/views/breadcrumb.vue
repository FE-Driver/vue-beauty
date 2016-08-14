<template lang="html">
    <div>
        <section class="markdown">
            <h1>Breadcrumb 面包屑</h1>

            <p>
                显示当前页面在系统层级结构中的位置，并能向上返回。
            </p>

            <h2>何时使用</h2>
            <ul>
                <li>当系统拥有超过两级以上的层级结构时；</li>
                <li>当需要告知用户『你在哪里』时；</li>
                <li>当需要向上导航的功能时。</li>
            </ul>
            <h2>组件演示</h2>
        </section>

        <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
            <div class="ant-col-lg-12 code-boxes-col-2-1">
                <code-box
                        title="基本"
                        describe="最简单的用法。"
                        code='import vBreadcrumbs from "../../components/breadcrumb"
<v-breadcrumbs>
    <v-breadcrumb name="Home"></v-breadcrumb>
    <v-breadcrumb name="Application Center" href=""></v-breadcrumb>
    <v-breadcrumb name="Application List" href=""></v-breadcrumb>
    <v-breadcrumb name="An Application"></v-breadcrumb>
</v-breadcrumbs>'
                        >

                    <v-breadcrumbs>
                        <v-breadcrumb name="Home"></v-breadcrumb>
                        <v-breadcrumb name="Application Center" href=""></v-breadcrumb>
                        <v-breadcrumb name="Application List" href=""></v-breadcrumb>
                        <v-breadcrumb name="An Application"></v-breadcrumb>
                    </v-breadcrumbs>

                </code-box>
                <code-box
                        title="路由"
                        describe="和 vue-router 进行结合使用。"
                        code='import vBreadcrumbs from "../../components/breadcrumb"
还没想好'
                        >

                    <v-breadcrumbs>
                        <v-breadcrumb name="Home" href=""></v-breadcrumb>
                        <v-breadcrumb name="Application List" href=""></v-breadcrumb>
                    </v-breadcrumbs>

                </code-box>
            </div>
            <div class="ant-col-lg-12 code-boxes-col-2-1">
                <code-box
                        title="带有图标的"
                        describe="图标放在文字前面。"
                        code='import vBreadcrumbs from "../../components/breadcrumb"
<v-breadcrumbs>
    <v-breadcrumb name="Home" icon="home"></v-breadcrumb>
    <v-breadcrumb name="Application List" href="" icon="user"></v-breadcrumb>
    <v-breadcrumb name="Application"></v-breadcrumb>
</v-breadcrumbs>'
                        >

                    <v-breadcrumbs>
                        <v-breadcrumb name="Home" icon="home"></v-breadcrumb>
                        <v-breadcrumb name="Application List" href="" icon="user"></v-breadcrumb>
                        <v-breadcrumb name="Application"></v-breadcrumb>
                    </v-breadcrumbs>

                </code-box>
                <code-box
                        title="分隔符"
                        describe='使用 separator=">" 可以自定义分隔符。'
                        code='import vBreadcrumbs from "../../components/breadcrumb"
<v-breadcrumbs>
    <v-breadcrumb name="Home" separator=">"></v-breadcrumb>
    <v-breadcrumb name="Application Center" href="" separator=">"></v-breadcrumb>
    <v-breadcrumb name="Application List" href="" separator=">"></v-breadcrumb>
    <v-breadcrumb name="An Application" separator="/"></v-breadcrumb>
</v-breadcrumbs>'
                        >

                    <v-breadcrumbs>
                        <v-breadcrumb name="Home" separator=">"></v-breadcrumb>
                        <v-breadcrumb name="Application Center" href="" separator=">"></v-breadcrumb>
                        <v-breadcrumb name="Application List" href="" separator=">"></v-breadcrumb>
                        <v-breadcrumb name="An Application" separator="/"></v-breadcrumb>
                    </v-breadcrumbs>

                </code-box>
            </div>
        </div>

        <api-table
                :apis='apis'
                >
        </api-table>
    </div>
</template>
<script>
    import vBreadcrumbs from '../../components/breadcrumb'
    import codeBox from '../components/codeBox'
    import apiTable from '../components/apiTable'

    const vBreadcrumb = vBreadcrumbs.Breadcrumb;

    export default {
        data: function (){
            return {
                apis: [{
                    parameter: 'name',
                    explain: '名称',
                    type: 'String',
                    default: ''
                },{
                    parameter: 'href',
                    explain: '跳转地址',
                    type: 'String',
                    default: ''
                },{
                    parameter: 'separator',
                    explain: '分隔符自定义',
                    type: 'String',
                    default: '/'
                },{
                    parameter: 'icon',
                    explain: '图标',
                    type: 'String',
                    default: ''
                }]
            }
        },
        components: {
            vBreadcrumbs,
            vBreadcrumb,
            codeBox,
            apiTable
        }
    }
</script>
