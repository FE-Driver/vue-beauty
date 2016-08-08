<template lang="html">

  <div>

    <section class="markdown">
      <h1>Card 卡片</h1>
      <p>
        通用卡片容器。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="典型卡片"
          describe="包含标题、内容、操作区域。"
          code=""
        >
          <v-card title="Card title" extra='<a href="/#!/components/card">More</a>' >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </v-card>
        </code-box>

        <code-box
          title="简洁卡片"
          describe="只包含内容区域。"
          code=""
        >
          <v-card>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </v-card>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="无边框"
          describe="在灰色背景上使用无边框的卡片。"
          code=""
        >
          <v-card title="Card title" :bordered="false">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </v-card>
        </code-box>

        <code-box
          title="更灵活的内容展示"
          describe="可以调整默认边距，设定宽度。"
          code=""
        >
          <v-card :body-style="{ padding: 0 }" style="width:240px;">
            <div class="custom-image">
              <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png">
            </div>
            <div class="custom-card">
              <h3>Europe Street beat</h3>
              <p>www.instagram.com</p>
            </div>
          </v-card>
        </code-box>

      </div>

      <div class="ant-col-lg-24 code-boxes-col-2-1">

        <code-box
          title="栅格卡片"
          describe="在系统概览页面常常和栅格进行配合。"
          code=""
        >
          <div class="ant-row-flex ant-row-flex-space-around">

            <v-card title="Card title" style="width:240px">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </v-card>

            <v-card title="Card title" style="width:240px">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </v-card>

            <v-card title="Card title" style="width:240px">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </v-card>

          </div>

        </code-box>

      </div>

    </div>

    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vCard from '../../components/card'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      onClose: function() {
          console.log(this);
      },
      show: true,
      num: 5,
      apis: [{
          parameter: 'title',
          explain: '卡片标题',
          type: 'Sring',
          default: ''
        },{
          parameter: 'extra',
          explain: '卡片右上角的操作区域',
          type: 'Sring',
          default: ''
        },{
          parameter: 'bordered',
          explain: '是否有边框',
          type: 'boolean',
          default: 'true'
        },{
          parameter: 'bodyStyle',
          explain: '内容区域自定义样式',
          type: 'Object',
          default: ''
        }
      ]
    }
  },
  components: {
    codeBox,
    apiTable,
    vCard
  }
}
</script>

<style lang="less">

.head-example{
  width: 42px;
  height: 42px;
  border-radius: 6px;
  background: #eee;
  display: inline-block;
}

.anticon-notification {
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
}

.ant-badge {
    margin-right: 16px;
}

.custom-card {
    padding: 10px 16px;
}

</style>
