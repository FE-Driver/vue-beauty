<template lang="html">

  <div>

    <section class="markdown">
      <h1>Affix 固钉</h1>
      <p>
        将页面元素钉在可视范围。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。</li>
        <li>页面可视范围过小时，慎用此功能以免遮挡页面内容。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col span="12">

        <code-box
          title="基础"
          describe="最简单的用法。"
        >
          <v-affix>
            <button type="button" class="ant-btn ant-btn-primary"><span>固定在顶部</span></button>
          </v-affix><br>
          <v-affix :offset-bottom="0">
            <button type="button" class="ant-btn ant-btn-primary"><span>固定在底部</span></button>
          </v-affix>
        </code-box>

      </v-Col>

      <v-Col span="12">

        <code-box
          title="固定状态改变的事件"
          describe="可以获得是否固定的状态。"
        >
          <v-affix :offset-top="120" @change='onChange'>
            <button type="button" class="ant-btn"><span>固定在距离顶部 120px 的位置</span></button>
          </v-affix>
          <span></span>
        </code-box>


      </v-Col>
    </v-row>

    <api-table
      :apis='apis'
    ></api-table>
    <api-table
      type="events"
      :content='eventContent'
      title=""
    >
      <h3>Affix Events</h3>
    </api-table>

    <div class="" style="height: 400px">

    </div>

  </div>

</template>

<script>
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'offsetTop',
          explain: '距离窗口顶部达到指定偏移量后触发',
          type: 'Number',
          default: ''
        },{
          parameter: 'offsetBottom',
          explain: '距离窗口底部达到指定偏移量后触发',
          type: 'Number',
          default: ''
        },{
          parameter: 'onChange',
          explain: '固定状态改变时触发的回调函数',
          type: 'Function( Boolean )',
          default: '无'
      }],
      eventContent: [
        [
          'change',
          '固定状态改变时触发',
          'affixed'
        ]
      ],
    }
  },
  methods: {
    onChange: affixed => console.log(affixed),
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>