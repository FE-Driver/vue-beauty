<template>
  <div>
    <section class="markdown">
      <h1>Modal对话框</h1>
      <p>
        模态对话框。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</li>
        <li>另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 ant.Modal.confirm() 等方法。</li>
      </ul>
      <h2>组件演示</h2>
    </section>
    <div class="ant-col-lg-12 code-boxes-col-2-1">
      <code-box
        title="基本"
        describe="第一个对话框。"
        code=''> 
        <v-button type="primary" @click="_showModal">显示对话框</v-button>
        <v-modal title="第一个 Modal"
          :visible="visible"
          :on-ok="_handleOk"
          :on-cancel="_handleCancel">
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </v-modal>
      </code-box>

      <code-box
        title="自定义页脚"
        describe="更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。"
        code=""> 
        <v-button type="primary" @click="_showModal2">显示对话框</v-button>
        <v-modal title="Modal"
          :visible="visible2"
          :on-cancel="_handleCancel2">
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <div slot="footer">
            <v-button key="cancel" type="ghost" size="large" @click="_handleCancel2">返 回</v-button>
            <v-button key="confirm" type="primary" size="large" :loading="confirmLoading2" @click="_handleOk2">提 交</v-button>
          </div>
        </v-modal>
      </code-box>

      <code-box
        title="自定义页脚"
        describe="更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。"
        code=""> 
        <v-button type="primary" @click="_showModal3">显示对话框</v-button>
        <v-modal title="第一个 Modal"
          :visible="visible3"
          :on-ok="_handleOk3"
          :on-cancel="_handleCancel3">
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </v-modal>
      </code-box>

      <code-box
        title="国际化"
        describe="设置 okText 与 cancelText 以自定义按钮文字。"
        code=""> 
        <v-button type="primary" @click="_showModal4">show Modal</v-button>
        <v-modal title="Modal"
          :visible="visible4"
          :on-ok="_handleOk4"
          :on-cancel="_handleCancel4"
          ok-text="ok"
          cancel-text="Cancel">
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </v-modal>
        <br/>
        <v-button @click="_confirmNation">confirm</v-button>
      </code-box>

      <code-box
        title="自定义位置"
        describe="1.0 之后，Modal 的 align 属性被移除，您可以直接使用 style.top 或配合其他样式来设置对话框位置。"
        code=""> 
        <v-button type="primary" @click="_showModal5">显示距离顶部 20px 的对话框</v-button>
        <v-button type="primary" @click="_showModal51">显示垂直居中的对话框</v-button>
        <v-modal 
          title="Modal"
          :visible="visible5"
          :on-ok="_handleOk5"
          :on-cancel="_handleCancel5"
          :modal-style="modalStyle">
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </v-modal>
        <v-modal 
          title="Modal"
          :visible="visible51"
          :on-ok="_handleOk51"
          :on-cancel="_handleCancel51"
          wrap-class-name="vertical-center-modal">
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </v-modal>
      </code-box>
    </div>
    <div class="ant-col-lg-12 code-boxes-col-2-1">
      <code-box
        title="异步关闭"
        describe="点击确定后异步关闭对话框，例如提交表单。"
        code=""> 
        <v-button type="primary" @click="_showModal6">显示对话框</v-button>
        <v-modal title="第一个 Modal"
          :visible="visible6"
          :on-ok="_handleOk6"
          :on-cancel="_handleCancel6"
          :confirm-loading="confirmLoading6">
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </v-modal>
      </code-box>

      <code-box
        title="自定义页脚"
        describe="更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。"
        code=""> 
        <v-button @click="_showConfirm2">确认对话框</v-button>
      </code-box>

      <code-box
        title="信息提示"
        describe="各种类型的信息提示，只提供一个按钮用于关闭。"
        code=""> 
        <v-button @click="info">信息提示</v-button>
        <v-button @click="success">成功提示</v-button>
        <v-button @click="error">失败提示</v-button>
        <v-button @click="error">警告提示</v-button>
      </code-box>

      <code-box
        title="手动移除"
        describe="手动关闭modal。"
        code=""> 
        <v-button @click="_confirmDestroy">成功提示</v-button>
      </code-box>
    </div>
    <api-table
      :apis='modalApis'
    ></api-table>
    <api-table
      :apis='confirmApis',
      title="Modal.xxx()"
    >
      <p>包括：</p>
      <ul><li><p><code>Modal.info</code></p></li><li><p><code>Modal.success</code></p></li><li><p><code>Modal.error</code></p></li><li><p><code>Modal.warning</code></p></li><li><p><code>Modal.confirm</code></p></li></ul>
      <p>以上均为一个函数，参数为 object，具体属性如下：</p>
    </api-table>
  </div>
</template>
<script>

import vButton from '../../components/button'
import vModal from '../../components/modal'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

const confirm = vModal.confirm
const info = vModal.info
const success = vModal.success
const error = vModal.error

export default {
  data () {
    return {
      modalText: '对话框的内容',
      confirmLoading: false,
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false,
      visible5: false,
      visible51: false,
      visible6: false,
      confirmLoading2: false,
      confirmLoading6: false,
      modalStyle: {
        top: '20px'
      },
      wrapClassName: 'vertical-center-modal',
      confirmApis: [{
          "parameter": "title",
          "explain": "标题",
          "type": "React.Element or String",
          "default": "无"
        },
        {
          "parameter": "content",
          "explain": "内容",
          "type": "React.Element or String",
          "default": "无"
        },
        {
          "parameter": "onOk",
          "explain": "点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭",
          "type": "function",
          "default": "无"
        },
        {
          "parameter": "onCancel",
          "explain": "取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭",
          "type": "function",
          "default": "无"
        },
        {
          "parameter": "width",
          "explain": "宽度",
          "type": "String or Number",
          "default": "416"
        },
        {
          "parameter": "iconType",
          "explain": "图标 Icon 类型",
          "type": "String",
          "default": "question-circle"
        },
        {
          "parameter": "okText",
          "explain": "确认按钮文字",
          "type": "String",
          "default": "确定"
        },
        {
          "parameter": "cancelText",
          "explain": "取消按钮文字",
          "type": "String",
          "default": "取消"
        }],
      modalApis: [{
          "parameter": "visible",
          "explain": "对话框是否可见",
          "type": "Boolean",
          "default": "无"
        },
        {
          "parameter": "confirmLoading",
          "explain": "确定按钮 loading",
          "type": "Boolean",
          "default": "无"
        },
        {
          "parameter": "title",
          "explain": "标题",
          "type": "React.Element",
          "default": "无"
        },
        {
          "parameter": "closable",
          "explain": "是否显示右上角的关闭按钮",
          "type": "Boolean",
          "default": "true"
        },
        {
          "parameter": "onOk",
          "explain": "点击确定回调",
          "type": "function",
          "default": "无"
        },
        {
          "parameter": "onCancel",
          "explain": "点击遮罩层或右上角叉或取消按钮的回调",
          "type": "function(e)",
          "default": "无"
        },
        {
          "parameter": "width",
          "explain": "宽度",
          "type": "String or Number",
          "default": "520"
        },
        {
          "parameter": "footer",
          "explain": "底部内容",
          "type": "React.Element",
          "default": "确定取消按钮"
        },
        {
          "parameter": "okText",
          "explain": "确认按钮文字",
          "type": "String",
          "default": "确定"
        },
        {
          "parameter": "cancelText",
          "explain": "取消按钮文字",
          "type": "String",
          "default": "取消"
        },
        {
          "parameter": "maskClosable",
          "explain": "点击蒙层是否允许关闭",
          "type": "Boolean",
          "default": "true"
        },
        {
          "parameter": "style",
          "explain": "可用于设置浮层的样式，调整浮层位置等",
          "type": "Object",
          "default": "-"
        },
        {
          "parameter": "wrapClassName",
          "explain": "对话框外层容器的类名",
          "type": "String",
          "default": "-"
        }]
    }
  },

  components: { vModal, vButton, codeBox, apiTable},

  methods: {
    // modal 1
    _showModal () {
      this.visible = true
    },

    _handleOk () {
      this.confirmLoading = false
      this.visible = false
    },

    _handleCancel () {
      this.visible = false
    },

    // modal 2
    _showModal2 () {
      this.visible2 = true
    },

    _handleOk2 () {
      this.modalText = '对话框将在两秒后关闭'
      this.confirmLoading2 = true
      setTimeout(() => {
        this.visible2 = false
        this.confirmLoading2 = false
      }, 2000)
    },

    _handleCancel2 () {
      this.visible2 = false
    },

    // modal 3
    _showModal3 () {
      this.visible3 = true
    },

    _handleOk3 () {
      this.visible3 = false
    },

    _handleCancel3 () {
      this.visible3 = false
    },

    // modal 4
    _showModal4 () {
      this.visible4 = true
    },

    _handleOk4 () {
      this.modalText = '对话框将在两秒后关闭'
      this.visible4 = false
    },

    _handleCancel4 () {
      this.visible4 = false
    },

    // modal 5
    _showModal5 () {
      this.visible5 = true
    },

    _handleOk5 () {
      this.visible5 = false
    },

    _handleCancel5 () {
      this.visible5 = false
    },

    // modal 5-1
    _showModal51 () {
      this.visible51 = true
    },

    _handleOk51 () {
      this.visible51 = false
    },

    _handleCancel51 () {
      this.visible51 = false
    },

    // modal 6
    _showModal6 () {
      this.visible6 = true
    },

    _handleOk6 () {
      this.modalText = '对话框将在两秒后关闭'
      this.confirmLoading6 = true
      setTimeout(() => {
        this.visible6 = false
        this.confirmLoading6 = false
      }, 2000)
    },

    _handleCancel6 () {
      this.visible6 = false
    },

    _confirmNation() {
      confirm({
        title: 'Confirm',
        content: 'Bla bla ...',
        okText: 'OK',
        cancelText: 'Cancel'
      })
    },

    _showConfirm () {
      confirm({
        title: '您是否确认要删除这项内容',
        content: '一些解释',
        onOk: function() {
          console.log('确定')
        },
        onCancel: function() {}
      })
    },

    _showConfirm2 () {
      confirm({
        title: '您是否确认要删除这项内容',
        content: '点确认 1 秒后关闭',
        onOk: function() {
          return new Promise(function(resolve) {
            setTimeout(resolve, 1000)
          })
        },
        onCancel: function() {}
      })
    },

    info() {
      info({
        title: '这是一条通知信息',
        content: '一些附加信息一些附加信息一些附加信息',
        onOk: function() {}
      })
    },

    success() {
      success({
        title: '这是一条通知信息',
        content: '一些附加信息一些附加信息一些附加信息'
      })
    },

    error() {
      error({
        title: '这是一条通知信息',
        content: '一些附加信息一些附加信息一些附加信息'
      })
    },

    _confirmDestroy() {
      const modal = success({
        title: '这是一条通知信息',
        content: '一秒后自动移除',
      });
      setTimeout(() => modal.destroy(), 1000);
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

  .vertical-center-modal .ant-modal {
    top: 0;
  }
</style>
