<template>

    <section class="markdown">
        <h1>Tag标签</h1>
        <p>
            进行标记和分类的小标签。
        </p>
        <h2>何时使用#</h2>
        <ul>
            <li>
                <p>
                    用于标记事物的属性和维度。
                </p>
            </li>
            <li>
                <p>
                    进行分类。
                </p>
            </li>
        </ul>
        <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
        <v-Col span="12">

            <code-box
                    title="基本"
                    describe="简单的标签展示，添加 closable 表示可关闭。"
            >
                <v-tag>标签一</v-tag>
                <v-tag>标签一</v-tag>
            </code-box>

            <code-box
                    title="动态添加和删除"
                    describe="用数组生成一组标签，可以动态添加和删除。"
            >

                <v-tag v-for="tag in tags" :color="tag.color" :closable="tag.closable"> {{ tag.title }} </v-tag>
                <v-button type="dashed" size="small" @click="_addTag($event)">+ 添加标签</v-button>
                <template slot="js">
                    export default{
                        data: function () {
                            return {
                                tags: [
                                    {
                                        title: '不可移除',
                                        closable: false,
                                    },
                                    {
                                        title: '标签一',
                                        closable: true,
                                    },
                                    {
                                        title: '标签二',
                                        closable: true,
                                    }
                                ],
                            }
                        },
                        methods: {
                            _addTag(){
                                let tagTmp = {}
                                tagTmp.title = '新标签' + (this.tags.length + 1)
                                tagTmp.closable = true
                                this.tags.push(tagTmp)
                            }
                        }
                    }
                </template>
            </code-box>


        </v-Col>

        <v-Col span="12">

            <code-box
                    title="各种类型"
                    describe="四种颜色的标签。"
            >
                <v-tag color="blue" :closable="true" @close="close(1)">蓝色</v-tag>
                <v-tag color="green" :closable="true" @close="close(2)">绿色</v-tag>
                <v-tag color="yellow" :closable="true" @close="close(3)">黄色</v-tag>
                <v-tag color="red" :closable="true" @close="close(4)">红色</v-tag>
                <template slot="js">
                    export default{
                        data: function () {
                            return {}
                        },
                        methods: {
                            close(i){
                                console.log(i)
                            }
                        }
                    }
                </template>
            </code-box>
        </v-Col>
    </v-Row>


    <api-table :apis='apis'></api-table>
    <api-table type="events" :content='eventsApi'></api-table>
</template>
<script lang="babel">
    import codeBox from '../components/codeBox'
    import apiTable from '../components/apiTable'

    export default{
        data: function () {
            return {
                apis: [
                    {
                        parameter: 'closable',
                        explain: '标签是否可以关闭',
                        type: 'boolean',
                        default: 'false'
                    }, {
                        parameter: 'color',
                        explain: '标签的色彩：blue green yellow red',
                        type: 'string',
                        default: '-'
                    }
                ],
                eventsApi: [
                    [
                        'close',
                        '移除标签的时候触发',
                        '无'
                    ]
                ],
                tags: [
                    {
                        title: '不可移除',
                        closable: false,
                    },
                    {
                        title: '标签一',
                        closable: true,
                    },
                    {
                        title: '标签二',
                        closable: true,
                    }
                ],
            }
        },
        components: {
            codeBox,
            apiTable
        },
        methods: {
            close(i){
                console.log(i)
            },
            _addTag(){
                let tagTmp = {}
                tagTmp.title = '新标签' + (this.tags.length + 1)
                tagTmp.closable = true
                this.tags.push(tagTmp)
            }
        }
    }
</script>