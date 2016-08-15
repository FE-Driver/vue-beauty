import Vue from 'vue'
import Dialog from './modal'
import vIcon from '../iconfont'
import vButton from '../button'
import { getConfirmLocale } from './locale'
import assign from 'object-assign';

export default function (config) {
  const runtimeLocale = getConfirmLocale();
  const props = assign({
    iconType: 'question-circle',
    width: 416,
    visible: false
  }, config || {});

  props.okText = props.okText ||
    (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  props.cancelText = props.cancelText || runtimeLocale.cancelText;

  // 默认为 true，保持向下兼容
  if (!('okCancel' in props)) {
    props.okCancel = true
  }

  let instance;
  function _close () {
    instance.visible = false
    setTimeout(() => {
      instance.$destroy(true)
    }, 350)
  }

  const _Dialog = Vue.extend({
    template: `
      <div>
        <dialog
          title=""
          :wrap-class-name="wrapClasses"
          :visible="visible"
          :closable="false"
          :has-footer="false"
          :modal-width="width">
          <div style="zoom: 1; overflow: hidden">
            <div class="ant-confirm-body">
              <v-icon :type="iconType"></v-icon>
              <span class="ant-confirm-title">{{title}}</span>
              <div class="ant-confirm-content">{{content}}</div>
            </div>
            <span> </span>
            <div class="ant-confirm-btns" v-if="!okCancel">
              <v-button :type="'primary'" :size="'large'" @click="_onOk">{{ okText }}</v-button>
            </div>
            <div class="ant-confirm-btns" v-else>
              <v-button :type="'ghost'" :size="'large'" @click="_onCancel">{{ cancelText }}</v-button>
              <v-button :type="'primary'" :size="'large'" @click="_onOk">{{ okText }}</v-button>
            </div>
          </div>
        </dialog>
      </div>
    `,

    components: { Dialog, vIcon, vButton }
  })

  const div = document.createElement('div')
  document.body.appendChild(div)

  // TODO: avoid new
  new _Dialog({ // eslint-disable-line
    el: div,
    data: props,
    methods: {
      _onOk () {
        let okFn = this.onOk

        if (okFn) {
          let ret = okFn()
          if (ret && ret.then) {
            ret.then(_close)
          } else {
            _close()
          }
        } else {
          _close()
        }
      },

      _onCancel () {
        let cancelFn = this.onCancel

        if (cancelFn) {
          let ret = cancelFn()
          if (ret && ret.then) {
            ret.then(_close)
          } else {
            _close()
          }
        } else {
          _close()
        }
      }
    },
    compiled() {
      instance = this;
      this.visible = true;
    },
    computed: {
      wrapClasses () {
        return `ant-confirm ant-confirm-${this.type}`;
      }
    }
  })

  return {
    destroy: _close,
  };
}
