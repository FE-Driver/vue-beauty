<template lang="html">

  <div>

    <section class="markdown">
      <h1>Radio 单选框</h1>
      <p>
        单选框
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          用于在多个备选项中选中单个状态。
        </p>
        <p>
          和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基本"
          describe="最简单的用法。"
          code="<v-radio><span>Radio</span></v-radio>"
        >
          <v-radio><span>Radio</span></v-radio>
        </code-box>

        <code-box
          title="按钮尺寸"
          describe="RadioGroup组合"
          code="<v-radio-group
  :on-change=‘_onGroupChange’
  :value='groupValue''
  :radios='[{value: 'a', name: 'A'},{value: 'b', name: 'B'},{value: 'c', name: 'C'},{value: 'd', name: 'D'}]'>
</v-radio-group>"
        >
          <v-radio-group
            :on-change="_onGroupChange"
            :value="groupValue"
            :radios="[{value: 'a', name: 'A'},{value: 'b', name: 'B'},{value: 'c', name: 'C'},{value: 'd', name: 'D'}]">
          </v-radio-group>
        </code-box>

        <code-box
          title="按钮样式"
          describe="按钮样式的单选组合。"
          code=" <v-radio-group
  type='button'
  :on-change='_onCityChange'
  default-value='hangzhou'
  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>
</v-radio-group>
<v-radio-group
  type='button'
  :on-change='_onCityChange'
  default-value='hangzhou'
  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海',disabled:true},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>
</v-radio-group>
<v-radio-group
  type='button'
  :on-change='_onCityChange'
  default-value='hangzhou'
  disabled
  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海',disabled:false},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>
</v-radio-group>"
        >
          <v-radio-group
            type="button"
            :on-change="_onCityChange"
            default-value="hangzhou"
            :radios="[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]">
          </v-radio-group>
          <br><br>
          <v-radio-group
            type="button"
            :on-change="_onCityChange"
            default-value="hangzhou"
            :radios="[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海',disabled:true},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]">
          </v-radio-group>
           <br><br>
          <v-radio-group
            type="button"
            :on-change="_onCityChange"
            default-value="hangzhou"
            disabled
            :radios="[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海',disabled:false},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]">
          </v-radio-group>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="不可用"
          describe="Radio 不可用。"
          code="<v-radio :default-checked='false' :disabled='disabled'><span>不可用</span></v-radio>
<v-radio :default-checked='true' :disabled='disabled'><span>不可用</span></v-radio>
<v-button :type='primary' @click='_toggleDisabled'>Toggle disabled</v-button>"
        >
          <v-radio :default-checked="false" :disabled="disabled"><span>不可用</span></v-radio>
          <br>
          <v-radio :default-checked="true" :disabled="disabled"><span>不可用</span></v-radio>
          <br>
          <br>
          <v-button :type="primary" @click="_toggleDisabled">Toggle disabled</v-button>
        </code-box>

        <code-box
          title="大小"
          describe="大中小三种组合，可以和表单输入框进行对应配合。"
          code="<v-radio-group
  size='large'
  type='button'
  :on-change='_onCityChange'
  default-value='hangzhou'
  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>
</v-radio-group>
<br><br>
<v-radio-group
  type='button'
  :on-change='_onCityChange'
  default-value='hangzhou'
  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>
</v-radio-group>
<br><br>
<v-radio-group
  size='small'
  type='button'
  :on-change='_onCityChange'
  default-value='hangzhou'
  :radios='[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]'>
</v-radio-group>"
        >
          <v-radio-group
            size="large"
            type="button"
            :on-change="_onCityChange"
            default-value="hangzhou"
            :radios="[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]">
          </v-radio-group>
          <br><br>
          <v-radio-group
            type="button"
            :on-change="_onCityChange"
            default-value="hangzhou"
            :radios="[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]">
          </v-radio-group>
          <br><br>
          <v-radio-group
            size="small"
            type="button"
            :on-change="_onCityChange"
            default-value="hangzhou"
            :radios="[{value: 'hangzhou', name: '杭州'},{value: 'shanghai', name: '上海'},{value: 'beijing', name: '北京'},{value: 'chengdu', name: '成都'}]">
          </v-radio-group>
        </code-box>

      </div>
    </div>


    <api-table
      :apis='apis'
    >
      <h3>Radio</h3>
    </api-table>

    <api-table
      :apis='apiGroup'
    >
      <h3>RadioGroup</h3>
    </api-table>

  </div>

</template>

<script>

import vRadio from '../../components/radio'
import vButton from '../../components/button'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'disabled',
          explain: '禁用',
          type: 'Boolean',
          default: 'false'
        },{
          parameter: 'onChange',
          explain: '选项变化时的回调函数',
          type: 'Function(e:Event)',
          default: '无'
        },{
          parameter: 'value',
          explain: '根据 value 进行比较，判断是否选中',
          type: 'String',
          default: '无'
        },{
          parameter: 'defaultChecked',
          explain: '初始是否选中',
          type: 'Boolean',
          default: 'false'
        },{
          parameter: 'checked',
          explain: '指定当前是否选中',
          type: 'Boolean',
          default: 'false'
        }
      ],
      apiGroup: [{
          parameter: 'onChange',
          explain: '选项变化时的回调函数',
          type: 'Function(e:Event)',
          default: '无'
        },{
          parameter: 'value',
          explain: '用于设置当前选中的值',
          type: 'String',
          default: '无'
        },{
          parameter: 'defaultValue',
          explain: '默认选中的值',
          type: 'String',
          default: '无'
        },{
          parameter: 'size',
          explain: '大小，只对按钮样式生效large default small',
          type: 'String',
          default: 'default'
        },{
          parameter: 'type',
          explain: '外观radio or button',
          type: 'String',
          default: 'radio'
        },{
          parameter: 'radios[ { name,value,disabled } ]',
          explain: '指定可选项',
          type: 'array',
          default: '无'
        },{
          parameter: 'disabled',
          explain: '禁用',
          type: 'Boolean',
          default: 'false'
        }
      ],
      disabled: true, 
    }
  },
  methods: {
    _toggleDisabled () {
      this.disabled = !this.disabled
    },

    _onGroupChange (e) {
      console.log('radio checked:' + e.target.value)
      this.groupValue = e.target.value
    },

    _onCityChange (e) {
      console.log('当前城市: ' + e.target.name)
      this.cityName = e.target.name
    }
  },
  components: {
    vRadio,
    vRadioGroup:vRadio.vRadioGroup,
    vButton,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
