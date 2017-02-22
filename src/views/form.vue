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
            <v-button type='primary' html-type="submit">登录</v-button>
          </v-form>
        </code-box>

       <code-box
          title="典型排列"
          describe="竖直排列的表单。"
        >
          <v-form direction="horizontal">
            <v-form-item label="用户名" :label-col="labelCol" :wrapper-col="wrapperCol">
              <p class="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
            </v-form-item>
            <v-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol" required>
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
          <template slot="js">
          export default {
            data: function() {
              return {
                labelCol: { span: 6 },
                wrapperCol: { span: 14 }
              }
            }
          }
          </template>
        </code-box>

        <code-box
          title="校验提示"
          describe="我们为表单控件定义了三种校验状态，为 &lt; FormItem&gt; 定义 validateStatus 属性即可。
validateStatus: 'success', 'warning', 'error', 'validating'。
另外为输入框添加反馈图标，设置 <FormItem> 的 hasFeedback 属性值为 true 即可。
注意: 反馈图标只对 &lt; v-input&gt; 有效。"
        >
          <v-form direction="horizontal">
            <v-form-item label="失败校验" :label-col="labelCol" :wrapper-col="wrapperCol" help="请输入数字和字母的组合" validate-status="error">
              <v-input value="无效选择" size="large"></v-input>
            </v-form-item>
            <v-form-item label="警告校验" :label-col="labelCol" :wrapper-col="wrapperCol" validate-status="warning">
              <v-input value="前方高能预警" size="large"></v-input>
            </v-form-item>
            <v-form-item label="校验中" :label-col="labelCol" :wrapper-col="wrapperCol" help="信息审核中..." :has-feedback="true" validate-status="validating">
              <v-input value="我是被校验的内容" size="large"></v-input>
            </v-form-item>
            <v-form-item label="成功校验" :label-col="labelCol" :wrapper-col="wrapperCol" :has-feedback="true" validate-status="success">
              <v-input value="我是正文" size="large"></v-input>
            </v-form-item>
            <v-form-item label="警告校验" :label-col="labelCol" :wrapper-col="wrapperCol" :has-feedback="true" validate-status="warning">
              <v-input value="前方高能预警" size="large"></v-input>
            </v-form-item>
            <v-form-item label="失败校验" :label-col="labelCol" :wrapper-col="wrapperCol" help="请输入数字和字母的组合" :has-feedback="true" validate-status="error">
              <v-input value="无效选择" size="large"></v-input>
            </v-form-item>
          </v-form>
          <template slot="js">
          export default {
            data: function() {
              return {
                labelCol: { span: 6 },
                wrapperCol: { span: 14 }
              }
            }
          }
          </template>
        </code-box>

         <code-box
          title="表单校验"
          describe="Form 组件提供了表单验证的功能，只需要通过 rule 属性传入约定的验证规则，并将 Form-Item 的 prop 属相设置为需校验的字段名即可。校验规则参见<a href='https://github.com/yiminghe/async-validator' target='_blank'>async-validator</a>"
        >
          <v-form direction="horizontal" :model="ruleForm" :rules="rules" v-ref:rule-form>
            <v-form-item label="活动名称" :label-col="labelCol" :wrapper-col="wrapperCol" prop="name" :has-feedback="true">
              <v-input size="large" :value.sync="ruleForm.name"></v-input>
            </v-form-item>
            <v-form-item label="活动区域" :label-col="labelCol" :wrapper-col="wrapperCol" prop="region">
               <v-Select :value.sync="ruleForm.region" placeholder="请选择活动区域" notfound="无法找到" :options="[{value: '1', text: '区域1'}, {value: '2', text: '区域2'}]"></v-Select>
            </v-form-item>
            <v-form-item label="活动时间" :label-col="labelCol" :wrapper-col="wrapperCol" prop="date">
              <v-datepicker :time.sync="ruleForm.date"></v-datepicker>
            </v-form-item>
            <v-form-item label="即时配送" :label-col="labelCol" :wrapper-col="wrapperCol">
              <v-switch :value.sync="ruleForm.delivery"></v-switch>
            </v-form-item>
            <v-form-item label="活动性质" :label-col="labelCol" :wrapper-col="wrapperCol" prop="type">
              <v-checkbox-group :value.sync="ruleForm.type" :options="checkboxOpt"></v-checkbox-group>
            </v-form-item>
            <v-form-item label="特殊资源" :label-col="labelCol" :wrapper-col="wrapperCol" prop="resource">
              <v-radio-group :value.sync="ruleForm.resource" :radios="[{value: '1', name: '线上品牌商赞助'},{value: '2', name: '线下场地免费'}]"></v-radio-group>
            </v-form-item>
            <v-form-item label="活动形式" :label-col="labelCol" :wrapper-col="wrapperCol" prop="desc">
              <v-input :value.sync="ruleForm.desc" type='textarea'></v-input>
            </v-form-item>
            <v-form-item :wrapper-col="{offset:6, span: 14 }">
              <v-button type="primary" style="margin-right:10px" @click.prevent="handleSubmit">立即创建</v-button><v-button type="ghost" @click.prevent="handleReset">重置</v-button>
            </v-form-item>
          </v-form>
          <template slot="js">
          export default {
            data: function() {
              return {
                ruleForm: {
                  name: '',
                  region: '',
                  date: '',
                  delivery: false,
                  type: [],
                  resource: '',
                  desc: ''
                },
                rules: {
                  name: [
                    { required: true, message: '请输入活动名称'}
                  ],
                  region: [
                    { required: true, message: '请选择活动区域'}
                  ],
                  date: [
                    { required: true, message: '请选择日期'}
                  ],
                  type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质'}
                  ],
                  resource: [
                    { required: true, message: '请选择活动资源'}
                  ],
                  desc: [
                    { required: true, message: '请填写活动形式'}
                  ]
                },
                checkboxOpt: [
                  { label: '美食/餐厅线上活动', value: '1' },
                  { label: '地推活动', value: '2' },
                  { label: '线下主题活动', value: '3' },
                  { label: '单纯品牌曝光', value: '4' }
                ],
                labelCol: { span: 6 },
                wrapperCol: { span: 14 }
              }
            },
            methods: {
              handleSubmit() {
                this.$refs.ruleForm.validate(valid => {
                  if (valid) {
                    alert('submit!');
                  } else {
                    console.log('error submit!!');
                    return false;
                  }
                });
              },
              handleReset() {
                this.$refs.ruleForm.resetFields();
              }
            }
          }
          </template>
        </code-box>

        <code-box
          title="自定义校验规则"
          describe="更加灵活的表单校验。"
        >
          <v-form direction="horizontal" :model="customForm" :rules="customRules" v-ref:custom-rule-form>
            <v-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol" prop="pass" :has-feedback="true">
              <v-input type="password" size="large" :value.sync="customForm.pass"></v-input>
            </v-form-item>
            <v-form-item label="确认密码" :label-col="labelCol" :wrapper-col="wrapperCol" prop="checkPass" :has-feedback="true">
              <v-input type="password" size="large" :value.sync="customForm.checkPass"></v-input>
            </v-form-item>
            <v-form-item label="年龄" :label-col="labelCol" :wrapper-col="wrapperCol" prop="age" :has-feedback="true">
              <v-input size="large" :value.sync="customForm.age"></v-input>
            </v-form-item>
            <v-form-item :wrapper-col="{offset:6, span: 14 }">
              <v-button type="primary" style="margin-right:10px" @click.prevent="handleSubmit2">提交</v-button><v-button type="ghost" @click.prevent="handleReset2">重置</v-button>
            </v-form-item>
          </v-form>
          <template slot="js">
          export default {
            data: function() {

              var checkAge = (rule, value, callback) => {
                var age = parseInt(value, 10);

                setTimeout(() => {
                  if (!Number.isInteger(age)) {
                    callback(new Error('请输入数字值'));
                  } else{
                    if (age < 18) {
                      callback(new Error('必须年满18岁'));
                    } else {
                      callback();
                    }
                  }
                }, 1000);
              };
              var validatePass = (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请输入密码'));
                } else {
                  if (this.customForm.checkPass !== '') {
                    this.$refs.customRuleForm.validateField('checkPass');
                  }
                  callback();
                }
              };
              var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                  callback(new Error('请再次输入密码'));
                } else if (value !== this.customForm.pass) {
                  callback(new Error('两次输入密码不一致!'));
                } else {
                  callback();
                }
              };
              
              return {
                customForm:{
                  pass: '',
                  checkPass: '',
                  age: ''
                },
                customRules:{
                  pass: [
                    { required: true, message: '请输入密码'},
                    { validator: validatePass }
                  ],
                  checkPass: [
                    { required: true, message: '请再次输入密码'},
                    { validator: validatePass2 }
                  ],
                  age: [
                    { required: true, message: '请填写年龄'},
                    { validator: checkAge}
                  ]
                },
                labelCol: { span: 6 },
                wrapperCol: { span: 14 }
              }
            },
            methods: {
              handleReset2() {
                this.$refs.customRuleForm.resetFields();
              },
              handleSubmit2(ev) {
                this.$refs.customRuleForm.validate(valid => {
                  if (valid) {
                    alert('submit!');
                  } else {
                    console.log('error submit!!');
                    return false;
                  }
                });
              }
            }
          }
          </template>
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
      type="methods"
      :content='methodsCont'
    >
      <h3>Form methods</h3>
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

import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {

    var checkAge = (rule, value, callback) => {
      var age = parseInt(value, 10);

      setTimeout(() => {
        if (!Number.isInteger(age)) {
          callback(new Error('请输入数字值'));
        } else{
          if (age < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.customForm.checkPass !== '') {
          this.$refs.customRuleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.customForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    return {
      content: [
        [
          'model',
          '表单数据对象',
          'object',
          '-'
        ],
        [
          'rules',
          '表单验证规则',
          'object',
          '-'
        ],
        [
          'direction',
          'form 排列布局方式 inline或者horizontal',
          'string',
          'inline'
        ]
      ],
      methodsCont: [
        [
          'validate',
          '对整个表单进行校验的方法',
          'callback(valid)',
          '无'
        ],
        [
          'validateField',
          '对部分表单字段进行校验的方法',
          'prop,callback(valid)',
          '无'
        ],
        [
          'resetFields',
          '对整个表单进行重置，isAll为true将model里所有字段值重置为初始值并移除校验结果，为false则只重置传了prop属性的表单元素',
          'isAll,默认为true',
          '无'
        ]
      ],
      itemCont:[
        [
          'prop',
          '表单域 model 字段',
          '传入 Form 组件的 model 中的字段',
          '-'
        ],
        [
          'help',
          '提示信息，如不设置，则会根据校验规则自动生成',
          'string',
          '无'
        ],
        [
          'hasFeedback',
          '配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用',
          'boolean',
          'false'
        ],
        [
          'validateStatus',
          "校验状态，如不设置，则会根据校验规则自动生成('success' 'warning' 'error' 'validating')",
          'string',
          '无'
        ],
        [
          'required',
          '是否必填，如不设置，则会根据校验规则自动生成',
          'boolean',
          'false'
        ],
        [
          'label',
          'label 标签的文本',
          'string',
          '无'
        ],
        [
          'labelCol',
          'label 标签布局，通 v-col 组件，设置 span offset 值，如 {span: 3, offset: 12}',
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
      ruleForm: {
        name: '',
        region: '',
        date: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称'}
        ],
        region: [
          { required: true, message: '请选择活动区域'}
        ],
        date: [
          { required: true, message: '请选择日期'}
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质'}
        ],
        resource: [
          { required: true, message: '请选择活动资源'}
        ],
        desc: [
          { required: true, message: '请填写活动形式'}
        ]
      },
      customForm:{
        pass: '',
        checkPass: '',
        age: ''
      },
      customRules:{
        pass: [
          { required: true, message: '请输入密码'},
          { validator: validatePass }
        ],
        checkPass: [
          { required: true, message: '请再次输入密码'},
          { validator: validatePass2 }
        ],
        age: [
          { required: true, message: '请填写年龄'},
          { validator: checkAge}
        ]
      },
      checkboxOpt: [
        { label: '美食/餐厅线上活动', value: '1' },
        { label: '地推活动', value: '2' },
        { label: '线下主题活动', value: '3' },
        { label: '单纯品牌曝光', value: '4' }
      ],
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    handleReset() {
      this.$refs.ruleForm.resetFields();
    },
    handleReset2() {
      this.$refs.customRuleForm.resetFields();
    },
    handleSubmit2(ev) {
      this.$refs.customRuleForm.validate(valid => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
  .code-box-demo .ant-form-horizontal{
    max-width: 540px
  }
</style>