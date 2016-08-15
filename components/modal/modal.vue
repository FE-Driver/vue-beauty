<template>
  <dialog
    :visible="visible"
    :title="title"
    :closable="closable"
    :mask-closable="maskClosable"
    :on-close="_handleCancel"
    :modal-width="modalWidth"
    :prefix-cls="prefixCls"
    :modal-style="modalStyle"
    :has-footer="hasFooter"
    :wrap-class-name="wrapClassName"
    :mouse-position="mousePosition">
    <slot></slot>
    <div slot="footer">
      <slot name="footer">
          <v-button key="cancel" type="ghost" size="large"
          @click="_handleCancel">
          {{cancelText}}
        </v-button>
        <v-button key="confirm" type="primary" size="large" :loading="confirmLoading"
          @click="_handleOk">
          {{okText}}
        </v-button>
      </slot>
    </div>
  </dialog>
</template>
<script lang="babel">
import { defaultProps, KeyCode } from '../../utils'
import Dialog from './dialog'
import vButton from '../button'

let mousePosition;
let mousePositionEventBinded;

document.addEventListener('click', (e) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }
  setTimeout(() => mousePosition = null, 20)
}, true)

export default {
  props: defaultProps({
    visible: false,
    confirmLoading: false,
    title: String,
    closable: true,
    onOk: () => {},
    onCancel: () => {},
    modalWidth: 520,
    okText: '确 定',
    cancelText: '取 消',
    maskClosable: true,
    prefixCls: 'ant-modal',
    modalStyle: {},
    hasFooter: true,
    wrapClassName: String
  }),

  data() {
    return {
      mousePosition: {}
    }
  },

  watch: {
    visible() {
      this.mousePosition = mousePosition;
    }
  },

  methods: {
    _handleCancel () {
      this.onCancel()
    },

    _handleOk () {
      this.onOk()
    }
  },

  components: { Dialog, vButton },
}
</script>
