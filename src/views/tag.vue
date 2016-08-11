<template>

  <section class="markdown">
    <h1>Tag标签</h1>
    <p>
      进行标记和分类的小标签。
    </p>
    <h2>何时使用#</h2>
    <ul>
      <p>
        用于标记事物的属性和维度。
      </p>
      <p>
        进行分类。
      </p>
    </ul>
    <h2>组件演示</h2>
  </section>

  <div class="ant-row">
    <div class="ant-col-lg-12 code-boxes-col-2-1">

      <code-box
        title="基本"
        describe="简单的标签展示，添加 closable 表示可关闭。"
        code='<v-tag title="标签一"></v-tag>
<v-tag title="标签二"></v-tag>
<v-tag title="标签三" closable></v-tag>'
      >
        <v-tag v-for="tag in tags1" :color="tag.color" :title="tag.title" :closable="tag.closable"></v-tag>
      </code-box>

      <code-box
        title="动态添加和删除"
        describe="用数组生成一组标签，可以动态添加和删除。"
        code='<v-tag v-for="tag in tags2" :color="tag.color" :title="tag.title" :closable="tag.closable"
:on-close="tag.onClose" :after-close="tag.afterClose"></v-tag>
<button type="button" class="ant-btn ant-btn-dashed ant-btn-sm" @click="_addTag()">
  <span>+ 添加标签</span>
</button>



export default{
  data: function () {
    return {
      tags2: [
        {
        color: "default",
        title: "不可移除",
        closable: false,
        },
        {
        color: "default",
        title: "标签一",
        closable: true,
        },
        {
        color: "default",
        title: "标签二",
        closable: true,
        }
      ]
    }
  },
  methods: {
    _addTag(){
      //todo
      let tagTmp = {}
      tagTmp.color = "default"
      tagTmp.title = "标签" + this.tags2.length
      tagTmp.closable = true
      tagTmp.onClose = function () {
        console.log("1")
      }
      tagTmp.afterClose = function () {
        console.log("2")
      }
      this.tags2.push(tagTmp)
    }
  }
}
'
      >

        <v-tag v-for="tag in tags2" :color="tag.color" :title="tag.title" :closable="tag.closable"
               :on-close="tag.onClose" :after-close="tag.afterClose"></v-tag>
        <button type="button" class="ant-btn ant-btn-dashed ant-btn-sm" @click="_addTag($event)">
          <span>+ 添加标签</span>
        </button>
      </code-box>


    </div>

    <div class="ant-col-lg-12 code-boxes-col-2-1">

      <code-box
        title="各种类型"
        describe="四种颜色的标签。"
        code='<v-tag color="blue" title="标签一" closable></v-tag>
<v-tag color="green" title="标签二" closable></v-tag>
<v-tag color="yellow" title="标签三" closable></v-tag>
<v-tag color="red" title="标签四" closable></v-tag>'
      >
        <v-tag v-for="tag in tags3" :color="tag.color" :title="tag.title" :closable="tag.closable"></v-tag>
      </code-box>

    </div>
  </div>


  <api-table
    :apis='apis'
  ></api-table>
</template>
<script>
  import vTag from '../../components/tag'
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
        tags1: [
          {
            color: 'default',
            title: '标签一',
            closable: false
          },
          {
            color: 'default',
            title: '标签二',
            closable: false
          },
          {
            color: 'default',
            title: '标签三',
            closable: true
          }
        ],
        tags2: [
          {
            color: 'default',
            title: '不可移除',
            closable: false,
          },
          {
            color: 'default',
            title: '标签一',
            closable: true,
          },
          {
            color: 'default',
            title: '标签二',
            closable: true,
          }
        ],
        tags3: [
          {
            color: 'blue',
            title: '标签一',
            closable: true
          },
          {
            color: 'green',
            title: '标签二',
            closable: true
          },
          {
            color: 'yellow',
            title: '标签三',
            closable: true
          },
          {
            color: 'red',
            title: '标签四',
            closable: true
          }
        ]
      }
    },
    components: {
      vTag,
      codeBox,
      apiTable
    },
    methods: {
      _addTag(){
        //todo
        let tagTmp = {}
        tagTmp.color = 'default'
        tagTmp.title = '标签' + this.tags2.length
        tagTmp.closable = true
        tagTmp.onClose = function () {
          console.log('1')
        }
        tagTmp.afterClose = function () {
          console.log('2')
        }
        this.tags2.push(tagTmp)
      }
    }
  }
</script>
