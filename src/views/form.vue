<template lang="html">

  <div>

    <section class="markdown">
      <h1>Form 表单</h1>
      <p>
        具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。
      </p>
      <h2>表单</h2>
      <ul>
        <p>
          我们为 form 提供了以下两种排列方式：
        </p>
        <li>水平排列：可以实现 label 标签和表单控件的水平排列；</li>
        <li>行内排列：使其表现为 inline-block 级别的控件。</li>
      </ul>
      <h2>表单域</h2>
      <ul>
        <p>
          表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。<br>这里我们封装了表单域 <code>&lt;Form.Item /&gt;</code 。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-row>

      <v-col>

        <code-box
          title="平行排列"
          describe="行内排列，常用于登录界面。"
        >
          <v-form>
            <v-form-item label="账户">
              <v-input value="请输入账户名"></v-input>
            </v-form-item>
            <v-form-item label="密码">
              <v-input value="请输入密码"></v-input>
            </v-form-item>
            <v-form-item>
              <v-checkbox>记住我</v-checkbox>
            </v-form-item>
            <v-button type='primary' html-type="submit">登陆</v-button>
          </v-form>
        </code-box>

       <code-box
          title="典型排列"
          describe="竖直排列的表单。"
        >
          <v-form direction="horizontal">
            <v-form-item label="用户名" :label-col="labelCol" :wrapper-col="wrapperCol">
              <p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
            </v-form-item>
            <v-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol">
              <v-input type="password" placeholder="请输入密码" size="large"></v-input>
            </v-form-item>
            <v-form-item label="您的性别" :label-col="labelCol" :wrapper-col="wrapperCol">
              <v-radio-group
                default-value='female'
                :radios="[{value: 'male', name: '男的'},{value: 'female', name: '女的'}]">
              </v-radio-group>
            </v-form-item>
            <v-form-item label="备注" :label-col="labelCol" :wrapper-col="wrapperCol">
              <v-input type='textarea' placeholder="随便写"></v-input>
            </v-form-item>
            <v-form-item label="卖身华府" :label-col="labelCol" :wrapper-col="wrapperCol">
              <v-checkbox>同意</v-checkbox>
            </v-form-item>
            <v-form-item :wrapper-col="{span:16,offset:6}" style="margin-top:24px">
              <v-button type='primary' html-type="submit">确定</v-button>
            </v-form-item>
          </v-form>
        </code-box>

        <code-box
          title="校验提示"
          describe="我们为表单控件定义了三种校验状态，为 <FormItem> 定义 validateStatus 属性即可。
validateStatus: 'success', 'warning', 'error', 'validating'。
另外为输入框添加反馈图标，设置 <FormItem> 的 hasFeedback 属性值为 true 即可。
注意: 反馈图标只对 <Input /> 有效。"
        >
          <v-form direction="horizontal">
            <v-form-item label="失败校验" :label-col="labelCol" :wrapper-col="wrapperCol" help="请输入数字和字母的组合" validate-status="error">
              <v-input value="无效选择" size="large"></v-input>
            </v-form-item>
            <v-form-item label="警告校验" :label-col="labelCol" :wrapper-col="wrapperCol" validate-status="warning">
              <v-input value="前方高能预警" size="large"></v-input>
            </v-form-item>
            <v-form-item label="校验中" :label-col="labelCol" :wrapper-col="wrapperCol" help="信息审核中..." has-feedback validate-status="validating">
              <v-input value="我是被校验的内容" size="large"></v-input>
            </v-form-item>
            <v-form-item label="成功校验" :label-col="labelCol" :wrapper-col="wrapperCol" has-feedback validate-status="success">
              <v-input value="我是正文" size="large"></v-input>
            </v-form-item>
            <v-form-item label="警告校验" :label-col="labelCol" :wrapper-col="wrapperCol" has-feedback validate-status="warning">
              <v-input value="前方高能预警" size="large"></v-input>
            </v-form-item>
            <v-form-item label="失败校验" :label-col="labelCol" :wrapper-col="wrapperCol" help="请输入数字和字母的组合" has-feedback validate-status="error">
              <v-input value="无效选择" size="large"></v-input>
            </v-form-item>
          </v-form>
        </code-box>

      </v-col>
      
    </v-row>


    <api-table
      :content='content'
    >
      <h3>Form</h3>
    </api-table>

    <api-table
      title=""
      :content='itemCont'
    >
      <h3>Form.Item</h3>
    </api-table>

  </div>

</template>

<script>

import vForm from '../../components/form'
import vInput from '../../components/input'
import vRadio from '../../components/radio'
import vCheckbox from '../../components/checkbox'
import vButton from '../../components/button'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'
import {vRow, vCol} from '../../components/layout'
let vFormItem = vForm.Item
let vRadioGroup = vRadio.Group

export default {
  data: function () {
    return {
      content: [
        [
          'direction',
          'form 排列布局方式 inline或者horizontal',
          'string',
          'inline'
        ]
      ],
      itemCont:[
        [
          'label',
          'label 标签的文本',
          'string',
          '无'
        ],
        [
          'labelCol',
          'label 标签布局，通 <Col> 组件，设置 span offset 值，如 {span: 3, offset: 12}',
          'object',
          '无'
        ],
        [
          'wrapperCol',
          '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
          'object',
          '无'
        ]
      ],
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
  },
  components: {
    vForm,
    vRadio,
    vRadioGroup,
    vFormItem,
    vInput,
    vCheckbox,
    vButton,
    codeBox,
    apiTable,
    vRow,
    vCol
  }
}
</script>

<style lang="less">
  .code-box-demo .ant-form-horizontal{
    max-width: 540px
  }
</style>
