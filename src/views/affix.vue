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

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基础"
          describe="最简单的用法。"
          code='<v-affix :offset-top="0">
  <button type="button" class="ant-btn ant-btn-primary"><span>固定在顶部</span></button>
</v-affix>'
        >
          <v-affix :offset-top="0">
            <button type="button" class="ant-btn ant-btn-primary"><span>固定在顶部</span></button>
          </v-affix>
        </code-box>

        <code-box
          title="下方固定"
          describe="固定在屏幕下方"
          code='<v-affix :offset-bottom="200">
  <button type="button" class="ant-btn ant-btn-primary"><span>固定在距离底部 200px 的位置</span></button>
</v-affix>'
        >
          <v-affix :offset-bottom="200">
            <button type="button" class="ant-btn ant-btn-primary"><span>固定在距离底部 200px 的位置</span></button>
          </v-affix>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="偏移"
          describe="达到一定的偏移量才触发。"
          code='<v-affix :offset-top="75">
  <button type="button" class="ant-btn ant-btn-primary"><span>固定在距离顶部 75px 的位置</span></button>
</v-affix>'
        >
          <v-affix :offset-top="75">
            <button type="button" class="ant-btn ant-btn-primary"><span>固定在距离顶部 75px 的位置</span></button>
          </v-affix>
        </code-box>

        <code-box
          title="固定状态改变的回调"
          describe="可以获得是否固定的状态。"
          code='onChange: affixed => console.log(affixed)

<v-affix :offset-top="120" :on-change="onChange">
  <button type="button" class="ant-btn"><span>固定在距离顶部 120px 的位置</span></button>
</v-affix>'
        >
          <v-affix :offset-top="120" :on-change='onChange'>
            <button type="button" class="ant-btn"><span>固定在距离顶部 120px 的位置</span></button>
          </v-affix>
        </code-box>


      </div>
    </div>

    <api-table
      :apis='apis'
    ></api-table>

    <div class="" style="height: 400px">

    </div>

  </div>

</template>

<script>

import vAffix from '../../components/affix'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      onChange: affixed => console.log(affixed),
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
        }
      ]
    }
  },
  components: {
    vAffix,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
