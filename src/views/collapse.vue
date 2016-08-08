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

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="折叠面板"
          describe="可以同时展开多个面板，这个例子默认展开了第一个。"
          code=""
        >
          <v-collapse default-active-key='1'>
            <v-panel header="This is panel header 1" key="1">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-panel>
            <v-panel header="This is panel header 2" key="2">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-panel>
            <v-panel header="This is panel header 3" key="3">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-panel>
          </v-collapse>
        </code-box>

        <code-box
          title="多选"
          describe="默认同时展开多个面板"
          code="<v-collapse :active-key='[1,2]'>"
        >
          <v-collapse :active-key="['1','2']">
            <v-panel header="This is panel header 1" key="1">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-panel>
            <v-panel header="This is panel header 2" key="2">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-panel>
            <v-panel header="This is panel header 3" key="3">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-panel>
          </v-collapse>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="手风琴"
          describe="手风琴，每次只打开一个tab。默认打开第一个。"
          code=""
        >
          <v-collapse default-active-key='1' accordion>
            <v-panel header="This is panel header 1" key="1">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-panel>
            <v-panel header="This is panel header 2" key="2">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-panel>
            <v-panel header="This is panel header 3" key="3">
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
            </v-panel>
          </v-collapse>
        </code-box>

      </div>

    </div>

    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vCollapse from '../../components/collapse/collapse'
import vPanel from '../../components/collapse/panel'
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
    apiTable,
    vCollapse,
    vPanel
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
