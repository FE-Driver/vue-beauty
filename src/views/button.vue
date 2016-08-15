<template lang="html">

  <div>

    <section class="markdown">
      <h1>Button 按钮</h1>
      <p>
        按钮用于开始一个即时操作。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="按钮类型"
          describe="按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。通过设置 type 为 primary ghost dashed 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 type 值则为次按钮。不同的样式可以用来区别其重要程度。主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。"
          code="<v-button type='primary'>Primary</v-button>
<v-button>default</v-button>
<v-button type='ghost'>Ghost</v-button>
<v-button type='dashed'>Dashed</v-button>"
        >
          <v-button type='primary'>Primary</v-button>
          <v-button type='success'>success</v-button>
          <v-button type='error'>error</v-button>
          <v-button type='warning'>warning</v-button>
          <v-button>default</v-button>
          <v-button type='ghost'>Ghost</v-button>
          <v-button type='dashed'>Dashed</v-button>
        </code-box>

        <code-box
          title="按钮尺寸"
          describe="按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。"
          code="<v-button type='primary' size='large'>Large</v-button>
<v-button type='primary'>Default</v-button>
<v-button type='primary' size='small'>Small</v-button>"
        >
          <v-button type='primary' size='large'>Large</v-button>
          <v-button type='primary'>Default</v-button>
          <v-button type='primary' size='small'>Small</v-button>
        </code-box>

        <code-box
          title="加载中状态"
          describe="添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。"
          code="<v-button type='primary' loading>Loading</v-button>"
        >
          <v-button type='primary' loading>Loading</v-button>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="图标按钮"
          describe="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。"
          code="<v-button type='primary' shape='circle' icon='search'></v-button>
<v-Button type='primary' icon=search'><span>搜索</span></v-Button>"
        >
          <v-button type='primary' shape="circle" icon="search"></v-button>
          <v-Button type="primary" icon="search"><span>搜索</span></v-Button>
          <br />
          <br />
          <v-Button type="ghost" shape="circle-outline" icon="search" /></v-button>
          <v-Button type="ghost" icon="search"><span>搜索</span></v-Button>
        </code-box>

        <code-box
          title="不可用状态"
          describe="添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。"
          code="<v-button type='primary'>Primary</v-button>
<v-button type='primary' disabled>Primary</v-button>"
        >
          <v-button type='primary'>Primary</v-button>
          <v-button type='primary' disabled>Primary</v-button>
        </code-box>

        <code-box
          title="按钮组合"
          describe="可以将多个 Button 放入 Button.Group 的容器中。通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。"
          code="<v-button-group size='large'>
    <v-button>Large</v-button>
    <v-button>Large</v-button>
</v-button-group>
<v-button-group>
    <v-button>Default</v-button>
    <v-button>Default</v-button>
</v-button-group>
<v-button-group size='small'>
    <v-button>Small</v-button>
    <v-button>Small</v-button>
</v-button-group>"
        >
          <v-button-group size="large">
             <v-button>Large</v-button>
             <v-button>Large</v-button>
          </v-button-group>
          <v-button-group>
             <v-button>Default</v-button>
             <v-button>Default</v-button>
          </v-button-group>
          <v-button-group size="small">
             <v-button>Small</v-button>
             <v-button>Small</v-button>
          </v-button-group>
        </code-box>

      </div>
    </div>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vButton from '../../components/button'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'type',
          explain: '设置按钮类型，可选值为 primary success error warning ghost dashed 或者不设',
          type: 'String',
          default: '无'
        },{
          parameter: 'icon',
          explain: '设置按钮的图标类型',
          type: 'string',
          default: '无'
        },{
          parameter: 'shape',
          explain: '设置按钮形状，可选值为 circle circle-outline 或者不设',
          type: 'String',
          default: '无'
        },{
          parameter: 'size',
          explain: '设置按钮大小，可选值为 small large 或者不设',
          type: 'String',
          default: 'default'
        },{
          parameter: 'description',
          explain: '可选参数，警告提示的辅助性文字介绍',
          type: 'String',
          default: '无'
        },{
          parameter: 'loading',
          explain: '设置按钮载入状态',
          type: 'boolean',
          default: 'false'
        },{
          parameter: 'onClick',
          explain: 'click 事件的 handler',
          type: 'function',
          default: ''
        }
      ]
    }
  },
  components: {
    vButton,
    vButtonGroup: vButton.Group,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
