<template lang="html">

  <div>

    <section class="markdown">
      <h1>Input 输入框</h1>
      <p>
        通过鼠标或键盘输入内容，是最基础的表单域的包装。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          需要用户输入表单域内容时。
        </p>
         <p>
          提供组合型输入框，带搜索的输入框，还可以进行大小选择。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基本使用"
          describe="基本使用。"
          code="<v-input placeholder='基本使用'></v-input>"
        >
          <v-input placeholder="基本使用"></v-input>
        </code-box>

        <code-box
          title="文本域"
          describe="用于多行输入，指定 type 为一个特殊的 textarea。"
          code="<v-input type='textarea'></v-input>"
        >
         <v-input type="textarea" value="这是一个textarea"></v-input>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="三种大小"
          describe="我们为 <Input /> 输入框定义了三种尺寸（大、默认、小），高度分别为 32px、28px 和 22px。"
          code="<v-input size='large' placeholder='大尺寸' style='width:200px;display:inline-block' disabled></v-input>
<v-input placeholder='基本尺寸' style='width:200px;display:inline-block'></v-input>
<v-input size='small' placeholder='小尺寸' style='width:200px;display:inline-block'></v-input>"
        >
          <v-input size="large" placeholder="大尺寸" style="width:200px;display:inline-block" disabled></v-input>
          <v-input placeholder="基本尺寸" style="width:200px;display:inline-block"></v-input>
          <v-input size="small" placeholder="小尺寸" style="width:200px;display:inline-block"></v-input>
        </code-box>

      </div>
    </div>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vInput from '../../components/input'
import vButton from '../../components/button'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'type',
          explain: '【必须】声明 input 类型，同原生 input 标签的 type 属性。另外提供 type="textarea"。',
          type: 'String',
          default: 'text'
        },{
          parameter: 'value',
          explain: 'value 值',
          type: 'any',
          default: '无'
        },{
          parameter: 'size',
          explain: '控件大小，默认值为 default 。{"large","default","small"}注：标准表单内的输入框大小限制为 large。',
          type: 'String',
          default: 'default'
        },{
          parameter: 'disabled',
          explain: '是否禁用状态，默认为 false',
          type: 'Bool',
          default: 'false'
        }
      ],
      disabled: true
    }
  },
  components: {
    vInput,
    vButton,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
