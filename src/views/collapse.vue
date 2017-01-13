<template lang="html">

  <div>

    <section class="markdown">
      <h1>Collapse 折叠面板</h1>
      <p>
        可以折叠/展开的内容区域。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>对复杂区域进行分组和隐藏，保持页面的整洁。</li>
        <li>手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col span="12">

        <code-box
          title="折叠面板"
          describe="可以同时展开多个面板，这个例子默认展开了第一个。"
        >
          <v-collapse default-active-key='1'>
            <v-collapse-item header="This is panel header 1" key="1">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-collapse-item>
            <v-collapse-item header="This is panel header 2" key="2">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-collapse-item>
            <v-collapse-item header="This is panel header 3" key="3">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-collapse-item>
          </v-collapse>
        </code-box>

        <code-box
          title="多选"
          describe="默认同时展开多个面板"
        >
          <v-collapse :active-key="['1','2']">
            <v-collapse-item header="This is panel header 1" key="1">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-collapse-item>
            <v-collapse-item header="This is panel header 2" key="2">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-collapse-item>
            <v-collapse-item header="This is panel header 3" key="3">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-collapse-item>
          </v-collapse>
        </code-box>

      </v-col>
      <v-Col span="12">

        <code-box
          title="手风琴"
          describe="手风琴，每次只打开一个tab。默认打开第一个。"
        >
          <v-collapse default-active-key='1' :accordion="true">
            <v-collapse-item header="This is panel header 1" key="1">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-collapse-item>
            <v-collapse-item header="This is panel header 2" key="2">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-collapse-item>
            <v-collapse-item header="This is panel header 3" key="3">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-collapse-item>
          </v-collapse>
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
      show: true,
      num: 5,
      apis: [{
          parameter: 'activeKey',
          explain: '当前激活 tab 面板的 key',
          type: 'Array',
          default: '默认第一个元素'
        },{
          parameter: 'defaultActiveKey',
          explain: '初始化选中面板的 key',
          type: 'String',
          default: '无'
        },{
          parameter: 'accordion',
          explain: '开启手风琴模式',
          type: 'Boolean',
          default: 'false'
        },{
          parameter: 'onChange',
          explain: '切换面板的回调',
          type: 'function',
          default: '无'
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