<template lang="html">

  <div style="height:2000px">

    <section class="markdown">
      <h1>BackTop 回到顶部</h1>
      <p>
        返回页面顶部的操作按钮。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          当页面内容区域比较长时；
        </p>
        <p>
          当用户需要频繁返回顶部查看相关内容时。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基本"
          describe="最简单的用法。"
          code="<v-back-top></v-back-top>"
        >
          向下滚动后，见右下角灰色按钮
         <v-back-top></v-back-top>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="自定义样式"
          describe="可以自定义回到顶部按钮的样式，限制宽高：40px * 40px。"
          code="<v-back-top style='bottom: 100px;' :visibility-height='500'  :on-click='handler'>
  <div :style='styleObject'>UP</div>
</v-back-top>"
        >
        向下滚动后，见右下角蓝色按钮
        <v-back-top style="bottom: 100px;" :visibility-height="500"  :on-click="handler">
          <div :style="styleObject">UP</div>
        </v-back-top>
        </code-box>

      </div>
    </div>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vBackTop from '../../components/backTop'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'visibilityHeight',
          explain: '滚动高度达到此参数值才出现 BackTop',
          type: 'Number',
          default: '400'
        },{
          parameter: 'onClick',
          explain: '	点击按钮的回调函数',
          type: 'Function',
          default: '无'
        }
      ],
      styleObject:{
        height: '40px',
        width: '40px',
        lineHeight: '40px',
        borderRadius: '4px',
        color: 'rgb(255, 255, 255)',
        textAlign: 'center',
        fontSize: '20px',
        backgroundColor: 'rgb(87, 197, 247)'
      }
    }
  },
  methods:{
    handler(){
      console.log('噢');
    }
  },
  components: {
    vBackTop,
    codeBox,
    apiTable
  }
}
</script>
