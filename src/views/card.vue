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

    <v-Row :gutter="16">
      <v-Col span="12">

        <code-box
          title="典型卡片"
          describe="包含标题、内容、操作区域。"
        >
          <v-card title="Card title">
            <a href="/#!/components/card" slot="extra">More</a>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </v-card>
        </code-box>

        <code-box
          title="简洁卡片"
          describe="只包含内容区域。"
        >
          <v-card>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </v-card>
        </code-box>

      </v-col>
      <v-Col span="12">

        <code-box
          title="无边框"
          describe="在灰色背景上使用无边框的卡片。"
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
        >
          <v-card :body-style="{ padding: 0 }" style="width:240px;">
            <div>
              <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png">
            </div>
            <div class="custom-card">
              <h3>Europe Street beat</h3>
              <p>www.instagram.com</p>
            </div>
          </v-card>
          <template slot="css">
              .custom-card {
                padding: 10px 16px;
              }
            </template>
        </code-box>

      </v-col>
      <v-Col>

        <code-box
          title="栅格卡片"
          describe="在系统概览页面常常和栅格进行配合。"
        >
          <v-row display="flex" pack="space-around">

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
          </v-row>

        </code-box>

      </v-col>
    </v-row>

    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

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
          parameter: 'slot::extra',
          explain: '卡片右上角的操作区域',
          type: 'slot node',
          default: '无'
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
    apiTable
  }
}
</script>

<style lang="less">

.custom-card {
    padding: 10px 16px;
}

</style>