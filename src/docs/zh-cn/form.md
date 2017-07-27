<script>
export default {
    data() {
        var checkAge = (rule, value, callback) => {
            var age = parseInt(value, 10);

            setTimeout(() => {
                if (!Number.isInteger(age)) {
                    callback(new Error('请输入数字值'));
                } else {
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
                name: [{
                    required: true,
                    message: '请输入活动名称'
                }],
                region: [{
                    required: true,
                    message: '请选择活动区域'
                }],
                date: [{
                    required: true,
                    message: '请选择日期'
                }],
                type: [{
                    type: 'array',
                    required: true,
                    message: '请至少选择一个活动性质'
                }],
                resource: [{
                    required: true,
                    message: '请选择活动资源'
                }],
                desc: [{
                    required: true,
                    message: '请填写活动形式'
                }]
            },
            checkboxOpt: [{
                label: '美食/餐厅线上活动',
                value: '1'
            },
            {
                label: '地推活动',
                value: '2'
            },
            {
                label: '线下主题活动',
                value: '3'
            },
            {
                label: '单纯品牌曝光',
                value: '4'
            }],
            customForm: {
                pass: '',
                checkPass: '',
                age: ''
            },
            customRules: {
                pass: [{
                        required: true,
                        message: '请输入密码'
                    },
                    {
                        validator: validatePass
                    }
                ],
                checkPass: [{
                        required: true,
                        message: '请再次输入密码'
                    },
                    {
                        validator: validatePass2
                    }
                ],
                age: [{
                        required: true,
                        message: '请填写年龄'
                    },
                    {
                        validator: checkAge
                    }
                ]
            },
            dynamicValidateForm: {
                domains: [{
                    value: ''
                }],
                email: ''
            },
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        } 
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item)
            if (index !== -1) {
            this.dynamicValidateForm.domains.splice(index, 1)
            }
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                value: '',
                key: Date.now()
            });
        }
    }
}
</script>
<style>
.box-demo-show .ant-form-horizontal{
    max-width: 540px;
}
</style>

# Form 表单

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

## 表单
我们为 `form` 提供了以下两种排列方式：
- 水平排列：标签和表单控件水平排列；（默认）
- 垂直排列：标签和表单控件上下垂直排列；
- 行内排列：表单项水平行内排列。

## 表单域
表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。
这里我们封装了表单域 `<Form.Item />` 。

## 组件演示

::: demo
<summary>
  #### 平行排列
  行内排列，常用于登录界面。
</summary>

```html
<v-form>
    <v-form-item label="账户">
        <v-input placeholder="请输入账户名"></v-input>
    </v-form-item>
    <v-form-item label="密码">
        <v-input placeholder="请输入密码"></v-input>
    </v-form-item>
    <v-form-item>
        <v-checkbox>记住我</v-checkbox>
    </v-form-item>
    <v-form-item>
        <v-button type="primary" html-type="submit">登录</v-button>
    </v-form-item>
</v-form>
<br>
<v-form>
    <v-form-item>
        <v-input placeholder="用户名">
            <v-icon type="user" slot="before"></v-icon>      
        </v-input>
    </v-form-item>
    <v-form-item>
        <v-input placeholder="密码" type="password">
            <v-icon type="lock" slot="before"></v-icon>      
        </v-input>
    </v-form-item>
    <v-form-item>
        <v-button type="primary" html-type="submit">登录</v-button>
    </v-form-item>
</v-form>
```

:::

::: demo
<summary>
  #### 垂直排列
  垂直排列布局
</summary>

```html
<v-form direction="vertical">
    <v-form-item label="用户名">
        <v-input type="text" placeholder="用户名" size="large"></v-input>
    </v-form-item>
    <v-form-item label="密码" required>
        <v-input type="password" placeholder="密码" size="large"></v-input>
    </v-form-item>
    <v-form-item style="margin-top:24px">
        <v-button type="primary" html-type="submit">确定</v-button>
    </v-form-item>
</v-form>
```

:::

::: demo
<summary>
  #### 典型排列
  竖直排列的表单。
</summary>

```html
<template>
    <v-form direction="horizontal">
        <v-form-item label="用户名" :label-col="labelCol" :wrapper-col="wrapperCol">
            <span class="ant-form-text" id="userName" name="userName">大眼萌 minion</span>
        </v-form-item>
        <v-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol" required>
            <v-input type="password" placeholder="请输入密码" size="large"></v-input>
        </v-form-item>
        <v-form-item label="您的性别" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-radio-group value="female" :data="[{value: 'male', text: '男的'},{value: 'female', text: '女的'}]"></v-radio-group>
        </v-form-item>
        <v-form-item label="备注" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-input type="textarea" placeholder="随便写"></v-input>
        </v-form-item>
        <v-form-item label="卖身华府" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-checkbox>同意</v-checkbox>
        </v-form-item>
        <v-form-item :wrapper-col="{span:16,offset:6}" style="margin-top:24px">
            <v-button type="primary" html-type="submit">确定</v-button>
        </v-form-item>
    </v-form>
</template>
<script>
export default {
    data:()=> ({
        labelCol: {
            span: 6
        },
        wrapperCol: {
            span: 14
        }
    })
}
</script>
```

:::

::: demo
<summary>
  #### 校验提示
  我们为表单控件定义了三种校验状态，为 定义 `validateStatus` 属性即可。 validateStatus: 'success', 'warning', 'error', 'validating'。 另外为输入框添加反馈图标，设置 `<FormItem>` 的 hasFeedback 属性值为 true 即可。 注意: 反馈图标只对 `<v-input>` 有效。
</summary>

```html
<template>
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
</template>
<script>
export default {
    data:()=> ({
        labelCol: {
            span: 6
        },
        wrapperCol: {
            span: 14
        }
    })
}
</script>
```

:::

::: demo
<summary>
  #### 表单校验
  Form 组件提供了表单验证的功能，只需要通过 `rule` 属性传入约定的验证规则，并将 `<FormItem>` 的 `prop` 属相设置为需校验的字段名即可。校验规则参见[async-validator](https://github.com/yiminghe/async-validator)
</summary>

```html
<template>
    <v-form direction="horizontal" :model="ruleForm" :rules="rules" ref="ruleForm">
        <v-form-item label="活动名称" :label-col="labelCol" :wrapper-col="wrapperCol" prop="name" has-feedback>
            <v-input size="large" v-model="ruleForm.name"></v-input>
        </v-form-item>
        <v-form-item label="活动区域" :label-col="labelCol" :wrapper-col="wrapperCol" prop="region">
            <v-select v-model="ruleForm.region" placeholder="请选择活动区域" notfound="无法找到" :data="[{value: '1', label: '区域1'}, {value: '2', label: '区域2'}]"></v-select>
        </v-form-item>
        <v-form-item label="活动时间" :label-col="labelCol" :wrapper-col="wrapperCol" prop="date">
            <v-date-picker v-model="ruleForm.date"></v-date-picker>
        </v-form-item>
        <v-form-item label="即时配送" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-switch v-model="ruleForm.delivery"></v-switch>
        </v-form-item>
        <v-form-item label="活动性质" :label-col="labelCol" :wrapper-col="wrapperCol" prop="type">
            <v-checkbox-group v-model="ruleForm.type" :data="checkboxOpt"></v-checkbox-group>
        </v-form-item>
        <v-form-item label="特殊资源" :label-col="labelCol" :wrapper-col="wrapperCol" prop="resource">
            <v-radio-group v-model="ruleForm.resource" :data="[{value: '1', text: '线上品牌商赞助'},{value: '2', text: '线下场地免费'}]"></v-radio-group>
        </v-form-item>
        <v-form-item label="活动形式" :label-col="labelCol" :wrapper-col="wrapperCol" prop="desc">
            <v-input v-model="ruleForm.desc" type="textarea"></v-input>
        </v-form-item>
        <v-form-item :wrapper-col="{offset:6, span: 14 }">
            <v-button type="primary" style="margin-right:10px" @click.prevent="submitForm('ruleForm')">立即创建</v-button>
            <v-button type="ghost" @click.prevent="resetForm('ruleForm')">重置</v-button>
        </v-form-item>
    </v-form>
</template>
<script>
export default {
    data: ()=> ({
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
            name: [{
                required: true,
                message: '请输入活动名称'
            }],
            region: [{
                required: true,
                message: '请选择活动区域'
            }],
            date: [{
                required: true,
                message: '请选择日期'
            }],
            type: [{
                type: 'array',
                required: true,
                message: '请至少选择一个活动性质'
            }],
            resource: [{
                required: true,
                message: '请选择活动资源'
            }],
            desc: [{
                required: true,
                message: '请填写活动形式'
            }]
        },
        checkboxOpt: [{
                label: '美食/餐厅线上活动',
                value: '1'
            },
            {
                label: '地推活动',
                value: '2'
            },
            {
                label: '线下主题活动',
                value: '3'
            },
            {
                label: '单纯品牌曝光',
                value: '4'
            }
        ],
        labelCol: {
            span: 6
        },
        wrapperCol: {
            span: 14
        }
    }),
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
```

:::

::: demo
<summary>
  #### 自定义校验规则
  更加灵活的表单校验。
</summary>

```html
<template>
    <v-form direction="horizontal" :model="customForm" :rules="customRules" ref="customRuleForm">
        <v-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol" prop="pass" has-feedback>
            <v-input type="password" size="large" v-model="customForm.pass"></v-input>
        </v-form-item>
        <v-form-item label="确认密码" :label-col="labelCol" :wrapper-col="wrapperCol" prop="checkPass" has-feedback>
            <v-input type="password" size="large" v-model="customForm.checkPass"></v-input>
        </v-form-item>
        <v-form-item label="年龄" :label-col="labelCol" :wrapper-col="wrapperCol" prop="age" has-feedback>
            <v-input size="large" v-model="customForm.age"></v-input>
        </v-form-item>
        <v-form-item :wrapper-col="{offset:6, span: 14 }">
            <v-button type="primary" style="margin-right:10px" @click.prevent="submitForm('customRuleForm')">提交</v-button>
            <v-button type="ghost" @click.prevent="resetForm('customRuleForm')">重置</v-button>
        </v-form-item>
    </v-form>
</template>
<script>
export default {
    data() {
        var checkAge = (rule, value, callback) => {
            var age = parseInt(value, 10);

            setTimeout(() => {
                if (!Number.isInteger(age)) {
                    callback(new Error('请输入数字值'));
                } else {
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
            customForm: {
                pass: '',
                checkPass: '',
                age: ''
            },
            customRules: {
                pass: [{
                        required: true,
                        message: '请输入密码'
                    },
                    {
                        validator: validatePass
                    }
                ],
                checkPass: [{
                        required: true,
                        message: '请再次输入密码'
                    },
                    {
                        validator: validatePass2
                    }
                ],
                age: [{
                        required: true,
                        message: '请填写年龄'
                    },
                    {
                        validator: checkAge
                    }
                ]
            },
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        } 
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>
```

:::

::: demo
<summary>
  #### 动态增减表单项
  除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则
</summary>

```html
<template>
    <v-form direction="horizontal" :model="dynamicValidateForm" ref="dynamicValidateForm">
        <v-form-item label="邮箱" :label-col="labelCol" :wrapper-col="wrapperCol" prop="email"
            :rules="[
                { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
            ]"
        >
            <v-input size="large" v-model="dynamicValidateForm.email"></v-input>
        </v-form-item>
        <v-form-item :label-col="labelCol" :wrapper-col="wrapperCol"
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'域名' + index"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
            :rules="{
                required: true, message: '域名不能为空', trigger: 'blur'
            }"
        >
            <v-input size="large" v-model="domain.value" style="width:78%;margin-right:10px"></v-input><v-button @click.prevent="removeDomain(domain)">删除</v-button>
        </v-form-item>
        <v-form-item :wrapper-col="{offset:6, span: 14 }">
            <v-button type="primary" style="margin-right:10px" @click.prevent="submitForm('dynamicValidateForm')">提交</v-button>
            <v-button @click="addDomain">新增域名</v-button>
            <v-button @click="resetForm('dynamicValidateForm')">重置</v-button>
        </v-form-item>
    </v-form>
</template>
<script>
export default {
    data() {
        return {
            dynamicValidateForm: {
                domains: [{
                    value: ''
                }],
                email: ''
            },
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        } 
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item)
            if (index !== -1) {
            this.dynamicValidateForm.domains.splice(index, 1)
            }
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                value: '',
                key: Date.now()
            });
        }
    }
}
</script>
```

:::

## API
### Form Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| model  | 表单数据对象 | object | - |
| rules | 表单验证规则 | object | - |
| direction | form 排列布局方式 inline、vertical或者horizontal | string | inline |
| showMessage | 是否显示校验错误信息 | boolean | true |

### Form Methods
| 方法名        | 说明           | 参数               | 返回值       |
|------------|----------------|-------------------|-------------|
| validate  | 对整个表单进行校验的方法 | callback(boolean) | - |
| validateField | validateField | prop: string,callback: function(errorMessage: string) | - |
| resetFields | 对整个表单进行重置，将所有字段值重置为空并移除校验结果 | - | - |

### Form Item Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| prop  | 表单域 model 字段 | 传入 Form 组件的 model 中的字段 | - |
| help | 提示信息，如不设置，则会根据校验规则自动生成 | string | - |
| hasFeedback | 配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用 | boolean | false |
| validateStatus  | 校验状态，如不设置，则会根据校验规则自动生成('success' 'warning' 'error' 'validating') | string | - |
| required  | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | false |
| label  | label 标签的文本 | string | - |
| labelCol  | label 标签布局，通 v-col 组件，设置 span offset 值，如 {span: 3, offset: 12} | object | - |
| wrapperCol  | 需要为输入控件设置布局样式时，使用该属性，用法同 labelCol | object | - |
| rules  | 	表单验证规则 | object | - |
| showMessage | 是否显示校验错误信息 | boolean | true |
