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
        <v-tag closable>标签一</v-tag>
      </code-box>

      <code-box
        title="动态添加和删除"
        describe="用数组生成一组标签，可以动态添加和删除。"
      >

        <v-tag v-for="tag in tags" :color="tag.color" :closable="tag.closable">{{tag.title}}</v-tag>
        <v-button type="dashed" size="small" @click="_addTag($event)">+ 添加标签</v-button>
      </code-box>


    </v-Col>

    <v-Col span="12">

      <code-box
        title="各种类型"
        describe="四种颜色的标签。"
      >
        <v-tag color="blue" closable>蓝色</v-tag>
        <v-tag color="green" closable>绿色</v-tag>
        <v-tag color="yellow" closable>黄色</v-tag>
        <v-tag color="red" closable>红色</v-tag>
      </code-box>

    </v-Col>
  </v-Row>


  <api-table
    :apis='apis'
  ></api-table>
</template>
<script>
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
            parameter: 'onClose',
            explain: '关闭时的回调',
            type: 'function(event)',
            default: '-'
          }, {
            parameter: 'afterClose',
            explain: '关闭动画完成后的回调',
            type: 'function(event)',
            default: '-'
          }, {
            parameter: 'color',
            explain: '标签的色彩：blue green yellow red',
            type: 'string',
            default: '-'
          }
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
      _addTag(){
        //todo
        let tagTmp = {}
        tagTmp.title = '新标签' + (this.tags.length+1)
        tagTmp.closable = true
        this.tags.push(tagTmp)
      }
    }
  }
</script>
