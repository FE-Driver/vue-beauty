<template lang="html">

  <div>

    <section class="markdown">
      <h1>MorePanel 更多条件面板</h1>
      <p>
        响应式地显示筛选条件。
      </p>
      <h2>何时使用</h2>
      <p>
        筛选条件太多需要隐藏时。
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col>

        <code-box
          title="基础"
          describe="最简单的用法，试着缩放窗口大小。">
            <v-more-panel>
              <v-form slot="form">
                  <v-form-item label="用户名">
                      <v-input placeholder="请输入用户名"></v-input>
                  </v-form-item>
                  <v-form-item label="密码">
                      <v-input type="password" placeholder="请输入密码"></v-input>
                  </v-form-item>
                  <v-form-item label="机构编码">
                      <v-input placeholder="请输入机构编码"></v-input>
                  </v-form-item>
                  <v-form-item label="年龄">
                      <v-input placeholder="请输入年龄"></v-input>
                  </v-form-item>
                  <v-form-item label="手机">
                      <v-input placeholder="请输入手机号码"></v-input>
                  </v-form-item>
              </v-form>
              <v-button slot="control" type="primary" html-type="button" icon="search">查询</v-button>
          </v-more-panel>
        </code-box>

      </v-Col>
    </v-Row>

    <api-table
      :content='content'
    ></api-table>

  </div>

</template>

<script>
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      content: [
        [
          'originalHeight',
          '收起时morepanel的高度',
          'Number,String',
          '34'   
        ],
        [
          'controlStyle',
          '控制control slot包裹div的样式',
          'Object',
          '无'   
        ],
        [
          'slot:default',
          '默认的slot会位于面板的右侧',
          'slot node',
          '无'   
        ],
        [
          'slot:form',
          'form slot会位于面板的左侧，一般是搜索的表单区域',
          'slot node',
          '无'   
        ],
        [
          'slot:control',
          'control slot会跟在form slot后面，一般可以放置一些按钮，比如查询之类',
          'slot node',
          '无'   
        ]
      ]
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>