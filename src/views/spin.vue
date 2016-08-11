<template lang="html">

  <div>

    <section class="markdown">
      <h1>Spin 加载中</h1>
      <p>
        用于页面和区块的加载中状态。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基本用法"
          describe="一个简单的 loading 状态。"
          code="<v-spin></v-spin>"
        >
          <v-spin></v-spin>
        </code-box>

        <code-box
          title="自定义描述文案"
          describe="自定义描述文案，指定的 tip 文案会直接代替 ...。"
          code="<v-spin :has-slot='true' tip='正在读取数据.'>
  <v-alert type='info' message='消息提示的文案'
    description='消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍'
  ></v-alert>
</v-spin>"
        >
          <v-spin :has-slot="true" tip="正在读取数据.">
            <v-alert type="info" message="消息提示的文案"
              description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
            ></v-alert>
          </v-spin>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="各种大小"
          describe="小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。"
          code="<v-spin size='small'></v-spin>
<v-spin></v-spin>
<v-spin size='large'></v-spin>"
        >
          <v-spin size="small"></v-spin>
          <v-spin></v-spin>
          <v-spin size="large"></v-spin>
        </code-box>

        <code-box
          title="卡片加载中"
          describe="可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。"
          code="<v-spin :has-slot='true' :spinning='spinning'>
  <v-alert type='info' message='消息提示的文案'
    description='消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍'
  ></v-alert>
</v-spin>"
        >
          <v-spin :has-slot="true" :spinning="spinning">
            <v-alert type="info" message="消息提示的文案"
              description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
            ></v-alert>
          </v-spin>
          切换加载状态：<v-switch @click="_toogle"></v-switch>
        </code-box>

      </div>
    </div>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vSpin from '../../components/spin'
import vAlert from '../../components/alert'
import vSwitch from '../../components/switch'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'size',
          explain: 'spin组件中点的大小，可选值为 small default large',
          type: 'string',
          default: 'default'
        },{
          parameter: 'spinning',
          explain: '用于内嵌其他组件的模式，可以关闭 loading 效果',
          type: 'boolean',
          default: 'true'
        },{
          parameter: 'tip',
          explain: '自定义描述文案',
          type: 'string',
          default: '无'
        },{
          parameter: 'hasSlot',
          explain: '当使用slot的时候需要设置为true',
          type: 'Boolean',
          default: 'false'
        }
      ],
      spinning: false
    }
  },
  components: {
    vSpin,
    vAlert,
    vSwitch,
    codeBox,
    apiTable
  },
   methods:{
    _toogle(){
      this.spinning = !this.spinning
    }
  }
}
</script>
