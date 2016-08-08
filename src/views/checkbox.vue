<template lang="html">

  <div>

    <section class="markdown">
      <h1>Checkbox多选框</h1>
      <p>
        多选框。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>在一组可选项中进行多项选择时；</li>
        <li>单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基本用法"
          describe="简单的 checkbox。"
          code="<v-checkbox>checkbox</v-checkbox>"
        >
          <v-checkbox>checkbox</v-checkbox>

        </code-box>

        <code-box
          title="和外部组件通信"
          describe="联动 checkbox。"
          code='onChange: (e) => {
  this.checked = e.checked
},

<v-checkbox
  :checked="checked"
  :disabled="disabled"
  :on-change="onChange">
  <span v-if="!checked">取消</span><span v-if="checked">选中</span>-
  <span v-if="!disabled">可用</span><span v-if="disabled">不可用</span>
</v-checkbox>

<button type="button" class="ant-btn ant-btn-primary ant-btn-sm" @click="this.checked = !this.checked"><span v-if="checked">取 消</span><span v-if="!checked">选 中</span></button>
<button type="button" class="ant-btn ant-btn-primary ant-btn-sm" style="margin-left: 10px;" @click="this.disabled = !this.disabled"><span v-if="disabled">可用</span><span v-if="!disabled">不可用</span></button>'
        >
          <p style="margin-bottom: 16px;">
            <v-checkbox
              :checked="checked"
              :disabled="disabled"
              :on-change="onChange">
              <span v-if="!checked">取消</span><span v-if="checked">选中</span>-
              <span v-if="!disabled">可用</span><span v-if="disabled">不可用</span>
            </v-checkbox>
          </p>
          <p>
            <button type="button" class="ant-btn ant-btn-primary ant-btn-sm" @click="this.checked = !this.checked"><span v-if="checked">取 消</span><span v-if="!checked">选 中</span></button>
            <button type="button" class="ant-btn ant-btn-primary ant-btn-sm" style="margin-left: 10px;" @click="this.disabled = !this.disabled"><span v-if="disabled">可用</span><span v-if="!disabled">不可用</span></button>
          </p>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="不可用"
          describe="checkbox不可用"
          code="<v-checkbox disabled='true'></v-checkbox>
<v-checkbox checked='true' disabled='true'></v-checkbox>"
        >
          <v-checkbox disabled='true'></v-checkbox>
          <v-checkbox checked='true' disabled='true'></v-checkbox>
        </code-box>

        <code-box
          title="Checkbox 组"
          describe="方便的从数组生成 Checkbox 组。"
          code='defaultValue: ["Apple", "Orange"],
options: [
  { label: "苹果", value: "Apple" },
  { label: "梨", value: "Pear" },
  { label: "橘", value: "Orange" },
],
optionsWithDisabled: [
{ label: "苹果", value: "Apple" },
{ label: "梨", value: "Pear" },
{ label: "橘", value: "Orange", disabled； true },
],

<checkbox-group :options="options"
  :default-value.sync="defaultValue">
</checkbox-group>

<checkbox-group
  :options="optionsWithDisabled"
  :on-change="checkGroup">
</checkbox-group>'
        >
          <p style="margin-bottom: 16px;"><checkbox-group :options="options" :default-value.sync="defaultValue"></checkbox-group></p>
          <checkbox-group
            :options="optionsWithDisabled"
            :on-change="checkGroup">
          </checkbox-group>
        </code-box>

      </div>

    </div>


    <api-table
      :apis='apis'
    >
      <h3>Checkbox</h3>
    </api-table>


    <api-table
      :apis='apiGroup'
    >
      <h3>Checkbox Group</h3>
    </api-table>

  </div>

</template>

<script>

import vCheckbox from '../../components/checkbox'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      checked: false,
      disabled: false,
      onChange: (e) => {
        this.checked = e.checked
      },
      checkGroup: (values) => {
        console.log(values);
      },
      defaultValue: ['Apple','Orange'],
      options: [
        { label: '苹果', value: 'Apple' },
        { label: '梨', value: 'Pear' },
        { label: '橘', value: 'Orange' },
      ],
      optionsWithDisabled: [
        { label: '苹果', value: 'Apple' },
        { label: '梨', value: 'Pear' },
        { label: '橘', value: 'Orange', disabled: true },
      ],
      apis: [{
          parameter: 'checked',
          explain: '指定当前是否选中',
          type: 'boolean',
          default: 'false'
        },{
          parameter: 'disabled',
          explain: '只读，无法进行交互',
          type: 'boolean',
          default: 'false'
        },{
          parameter: 'onChange',
          explain: '变化时回调函数',
          type: 'Function',
          default: '无'
        }
      ],
      apiGroup: [{
          parameter: 'defaultValue',
          explain: '默认选中的选项',
          type: 'array',
          default: '无'
        },{
          parameter: 'options[ { label,value,disabled } ]',
          explain: '指定可选项',
          type: 'array',
          default: '无'
        },{
          parameter: 'onChange',
          explain: '变化时回调函数',
          type: 'Function(checkedValue)',
          default: '无'
        }
      ]
    }
  },
  components: {
    codeBox,
    apiTable,
    vCheckbox,
    CheckboxGroup: vCheckbox.Group
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
