<style>
    .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<script>
    export default {
        data () {
            return {
                confirmLoading: false,
                visible: false,
                customFooterVisible: false,
                visible3: false,
                customTextVisible: false,
                customStyleVisible: false,
                customStyleVisible1: false,
                asyncModalVisible: false,
                customFooterLoading: false,
                asyncConfirmLoading: false,
                modalStyle: {
                    top: '20px',
                },
                wrapClassName: 'vertical-center-modal'
            }
        },    
        methods: {
            showModal () {
                this.visible = true;
            },

            handleOk () {
                this.confirmLoading = false;
                this.visible = false;
            },

            handleCancel () {
                this.visible = false;
            },

            showCustomFooter () {
                this.customFooterVisible = true;
            },

            customFooterOk () {
                /* 对话框将在两秒后关闭 */
                this.customFooterLoading = true;
                setTimeout(() => {
                    this.customFooterVisible = false;
                    this.customFooterLoading = false;
                }, 2000);
            },

            customFooterCancel () {
                this.customFooterVisible = false;
            },

            showCustomTextModal () {
                this.customTextVisible = true;
            },

            customTextOk () {
                this.customTextVisible = false;
            },

            customTextCancel () {
                this.customTextVisible = false;
            },

            showCustomStyleModal () {
                this.customStyleVisible = true;
            },

            customStyleOK () {
                this.customStyleVisible = false;
            },

            customStyleCancel () {
                this.customStyleVisible = false;
            },

            showCustomStyleModal1 () {
                this.customStyleVisible1 = true;
            },

            customStyleOK1 () {
                this.customStyleVisible1 = false;
            },

            customStyleCancel1 () {
                this.customStyleVisible1 = false;
            },

            /* Async Modal */
            showAsyncModal () {
                this.asyncModalVisible = true;
            },

            handleAsyncOk () {
                /* 对话框将在两秒后关闭 */
                this.asyncConfirmLoading = true;
                setTimeout(() => {
                    this.asyncModalVisible = false;
                    this.asyncConfirmLoading = false;
                }, 2000);
            },

            handleAsyncCancel () {
                this.asyncModalVisible = false;
            },

            showCustomTextConfirm() {
                this.$modal.confirm({
                    title: 'Confirm',
                    content: 'Bla bla ...',
                    okText: 'OK',
                    cancelText: 'Cancel'
                })
            },

            showConfirm () {
                this.$modal.confirm({
                    title: '您是否确认要删除这项内容',
                    content: '一些解释内容',
                    onOk: function () {
                        console.log('确定')
                    },
                    onCancel: function () {
                    }
                })
            },

            showAsyncConfirm () {
                this.$modal.confirm({
                    title: '您是否确认要删除这项内容',
                    content: '点确认 1 秒后关闭',
                    onOk: async () => {
                        await new Promise(function (resolve) {
                            setTimeout(resolve, 1000);
                        })
                    },
                    onCancel: function () {
                        return new Promise(function (resolve) {
                            setTimeout(resolve, 1000);
                        })
                    }
                })
            },
             
            showCustomStyleConfirm () {
                this.$modal.confirm({
                    iconType: 'frown',
                    title: '确认删除',
                    content: '一些解释内容',
                    okText: '是的',
                    cancelText: '我再想想',
                    width: 300,
                })
            },

            info() {
                this.$modal.info({
                    maskClosable: true,
                    title: '这是一条通知信息',
                    content: '一些附加信息'
                })
            },

            success() {
                this.$modal.success({
                    maskClosable: true,
                    title: '这是一条通知信息',
                    content: '一些附加信息'
                })
            },

            error() {
                this.$modal.error({
                    title: '这是一条通知信息',
                    content: '一些附加信息'
                })
            },

             warning() {
                 this.$modal.warning({
                     title: '这是一条警告信息',
                     content: '一些附加信息'
                 })
             },

            _confirmDestroy() {
                const modal = this.$modal.success({
                    title: '这是一条通知信息',
                    content: '一秒后自动移除'
                });
                setTimeout(() => modal.destroy(), 1000);
            }
        }
    }
</script>

# Modal 对话框

模态对话框。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `Vue.$modal.confirm()` 等方法。

## 代码演示

::: demo
<summary>
  #### 基本
  第一个对话框。
</summary>

```html
<template>
    <v-button type="primary" @click="showModal">显示对话框</v-button>
    <v-modal title="第一个 Modal"
             :visible="visible"
             @ok="handleOk"
             @cancel="handleCancel">
        <p>对话框的内容</p>
        <p>对话框的内容</p>
        <p>对话框的内容</p>
    </v-modal>
</template>

<script >
    export default {
        data () {
            return {
                visible: false
            }
        },

        methods: {
            showModal () {
                this.visible = true;
            },

            handleOk () {
                this.visible = false;
            },

            handleCancel () {
                this.visible = false;
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 异步关闭
  点击确定后异步关闭对话框，例如提交表单。
</summary>

```html
<template>
    <v-button type="primary" @click="showAsyncModal">显示对话框</v-button>
    <v-modal title="异步关闭的 Modal 对话框"
             :visible="asyncModalVisible"
             @ok="handleAsyncOk"
             @cancel="handleAsyncCancel"
             :confirm-loading="asyncConfirmLoading">
        <p>对话框的内容</p>
        <p>对话框的内容</p>
        <p>对话框的内容</p>
    </v-modal>
</template>

<script>
    export default {
        data () {
            return {
                asyncModalVisible: false,
                asyncConfirmLoading: false
            }
        },

        methods: {
            showAsyncModal () {
                this.asyncModalVisible = true;
            },

            handleAsyncOk () {
                /* 对话框将在两秒后关闭 */
                this.asyncConfirmLoading = true;
                setTimeout(() => {
                    this.asyncModalVisible = false;
                    this.asyncConfirmLoading = false;
                }, 2000);
            },

            handleAsyncCancel () {
                this.asyncModalVisible = false;
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 自定义页脚
  更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。
</summary>

```html
<template>
    <v-button type="primary" @click="showCustomFooter">显示对话框</v-button>
    <v-modal title="自定义页脚的 Modal 对话框"
             :visible="customFooterVisible"
             @cancel="customFooterCancel">
        <p>对话框的内容</p>
        <p>对话框的内容</p>
        <p>对话框的内容</p>
        <div slot="footer">
            <v-button key="cancel" type="ghost" size="large" @click="customFooterCancel">
                返 回
            </v-button>
            <v-button key="confirm" type="primary" size="large" :loading="customFooterLoading" @click="customFooterOk">
                提 交
            </v-button>
        </div>
    </v-modal>
</template>

<script>
    export default {
        data () {
            return {
                customFooterVisible: false,
                customFooterLoading: false
            }
        },

        methods: {
            customFooterOk () {
                /* 对话框将在两秒后关闭 */
                this.customFooterLoading = true;
                setTimeout(() => {
                    this.customFooterVisible = false;
                    this.customFooterLoading = false;
                }, 2000);
            },

            customFooterCancel () {
                this.customFooterVisible = false;
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 确认对话框
  使用 `Vue.$modal.confirm()` 可以快捷地弹出确认框。
</summary>

```html
<template>
    <v-button @click="showConfirm">显示确认对话框</v-button>
</template>

<script>
    export default {
        data () {
            return {}
        },

        methods: {
            showConfirm () {
                this.$modal.confirm({
                    title: '您是否确认要删除这项内容',
                    content: '一些解释内容',
                    onOk: function () {
                        console.log('确定')
                    },
                    onCancel: function () {}
                })
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 异步关闭
  使用 `Vue.$modal.confirm()` 可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭
</summary>

```html
<template>
    <v-button @click="showAsyncConfirm">显示确认对话框</v-button>
</template>

<script>
    export default {
        data () {
            return {}
        },

        methods: {
            showAsyncConfirm () {
                this.$modal.confirm({
                    title: '您是否确认要删除这项内容',
                    content: '点确认 1 秒后关闭',
                    onOk: async () => {
                        await new Promise(function (resolve) {
                            setTimeout(resolve, 1000);
                        })
                    },
                    onCancel: function () {
                        return new Promise(function (resolve) {
                            setTimeout(resolve, 1000);
                        })
                    }
                })
            },
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 信息提示
  各种类型的信息提示，只提供一个按钮用于关闭。
</summary>

```html
<template>
    <v-button @click="info">信息提示</v-button>
    <v-button @click="success">成功提示</v-button>
    <v-button @click="error">失败提示</v-button>
    <v-button @click="warning">警告提示</v-button>
</template>

<script>
    export default {
        data () {
            return {}
        },

        methods: {
            info() {
                this.$modal.info({
                    maskClosable: true,
                    title: '这是一条通知信息',
                    content: '一些附加信息',
                    onOk: function () {
                    }
                })
            },

            success() {
                this.$modal.success({
                    maskClosable: true,
                    title: '这是一条成功信息',
                    content: '一些附加信息'
                })
            },

            error() {
                this.$modal.error({
                    title: '这是一条失败信息',
                    content: '一些附加信息'
                })
            },

            warning() {
                this.$modal.warning({
                    title: '这是一条警告信息',
                    content: '一些附加信息'
                })
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 国际化
  设置 `okText` 与 `cancelText` 以自定义按钮文字。
</summary>

```html
<template>
    <v-button type="primary" @click="showCustomTextModal">显示对话框</v-button>
    <v-modal title="Modal"
             :visible="customTextVisible"
             @ok="customTextOk"
             @cancel="customTextCancel"
             ok-text="ok"
             cancel-text="Cancel">
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
    </v-modal>
    <br/>
    <v-button @click="showCustomTextConfirm">显示确认对话框</v-button>
</template>

<script>
    export default {
        data () {
            return {
                customTextVisible: false
            }
        },

        methods: {
            showCustomTextModal () {
                this.customTextVisible = true;
            },

            customTextOk () {
                this.customTextVisible = false;
            },

            customTextCancel () {
                this.customTextVisible = false;
            },

            showCustomTextConfirm() {
                this.$modal.confirm({
                    title: 'Confirm',
                    content: 'Bla bla ...',
                    okText: 'OK',
                    cancelText: 'Cancel'
                })
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 自定义样式
  `1.0` 之后，Modal 的 `align` 属性被移除，您可以直接使用 `style.top` 或配合其他样式来设置对话框位置。
</summary>

```html
<template>
    <v-button type="primary" @click="showCustomStyleModal">显示距离顶部 20px 的对话框</v-button>
    <v-button type="primary" @click="showCustomStyleModal1">显示垂直居中的对话框</v-button>
    <v-button @click="showCustomStyleConfirm">显示自定义确认对话框</v-button>
    <v-modal
            title="对话框"
            :width="300"
            :visible="customStyleVisible"
            @ok="customStyleOK"
            @cancel="customStyleCancel"
            :modal-style="modalStyle">
        <p>对话框的内容</p>
        <p>对话框的内容</p>
        <p>对话框的内容</p>
    </v-modal>
    <v-modal
            title="对话框"
            :visible="customStyleVisible1"
            @ok="customStyleOK1"
            @cancel="customStyleCancel1"
            wrap-class-name="vertical-center-modal">
        <p>对话框的内容</p>
        <p>对话框的内容</p>
        <p>对话框的内容</p>
    </v-modal>

</template>

<script>
    export default {
        data () {
            return {
                modalStyle: {
                    top: '20px'
                },
                customStyleVisible: false,
                customStyleVisible1: false
            }
        },

        methods: {
            showCustomStyleModal () {
                this.customStyleVisible = true;
            },

            customStyleOK () {
                this.customStyleVisible = false;
            },

            customStyleCancel () {
                this.customStyleVisible = false;
            },

            showCustomStyleModal1 () {
                this.customStyleVisible1 = true;
            },

            customStyleOK1 () {
                this.customStyleVisible1 = false;
            },

            customStyleCancel1 () {
                this.customStyleVisible1 = false;
            },

            showCustomStyleConfirm () {
                this.$modal.confirm({
                    iconType: 'frown',
                    title: '确认删除',
                    content: '一些解释内容',
                    okText: '是的',
                    cancelText: '我再想想',
                    width: 300
                })
            }
        }
    }
</script>

<style>
    .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
```
:::

::: demo
<summary>
  #### 手动移除
  手动关闭modal。
</summary>

```html
<template>
    <v-button @click="_confirmDestroy">显示成功提示</v-button>
</template>

<script>
    export default {
        data () {
            return {}
        },

        methods: {
            _confirmDestroy() {
                const modal = this.$modal.success({
                    title: '这是一条通知信息',
                    content: '一秒后自动移除'
                });
                setTimeout(() => modal.destroy(), 1000);
            }
        }
    }
</script>
```
:::


## API

### Modal Props
| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| visible    | 对话框是否可见 | boolean          | false  |
| title      | 标题           | string | -   |
| closable   | 是否显示右上角的关闭按钮 | boolean    | true   |
| hasMask | 是否显示蒙层 | boolean   | true  |
| maskClosable | 点击蒙层是否允许关闭 | boolean   | true   |
| confirmLoading | 确定按钮 loading | boolean    | false  |
| okText     | 确认按钮文字    | string           | `确定`      |
| cancelText | 取消按钮文字    | string           | `取消`       |
| slot:footer     | 底部内容       | string | 确定取消按钮 |
| wrapClassName | 对话框外层容器的类名 | string   | - |
| width      | 宽度           | number | 520           |
| modalStyle | 可用于设置浮层的样式，调整浮层位置等 | object   | - |

### Modal Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| ok       | 点击确定时触发       | -   |
| cancel   | 点击遮罩层或右上角叉或取消按钮时触发  | -  |

### Vue.$modal.xxx()

包括：

- `Modal.info`
- `Modal.success`
- `Modal.error`
- `Modal.warning`
- `Modal.confirm`

以上均为一个函数，参数为 object，具体属性如下：

| 参数       | 说明           | 类型             | 默认值       |
|------------|----------------|------------------|--------------|
| iconType   | 图标 Icon 类型    | string | question-circle |
| title      | 标题           | string | -  |
| content    | 内容           | string | -  |
| width      | 宽度           | number | 416           |
| okText     | 确认按钮文字    | string           | 确定(只有确定按钮时为`知道了`)       |
| cancelText | 取消按钮文字    | string           | 取消       |
| onOk       | 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭      | function         | -  |
| onCancel   | 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭       | function         | -   |
| maskClosable | 点击蒙层是否允许关闭 | boolean   | false   |
| modalStyle | 可用于设置浮层的样式，调整浮层位置等 | object   | - |
