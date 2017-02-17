import vModal from './modal'
import vIcon from '../icon'
import vButton from '../button'
import {getConfirmLocale} from './locale'

export default function (config = {}) {
    const runtimeLocale = getConfirmLocale();
    const props = Object.assign({
        iconType: 'question-circle',
        width: 416,
        visible: false,
        maskClosable: false
    }, config, {
        prefixCls: 'ant-confirm',
        okLoading: false,
        cancelLoading: false
    });

    props.okText = props.okText ||
        (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
    props.cancelText = props.cancelText || runtimeLocale.cancelText;

    // 默认为 true，保持向下兼容
    if (!('okCancel' in props)) {
        props.okCancel = true
    }

    let instance;

    function _close() {
        instance.visible = false;
        setTimeout(() => {
            instance.$destroy(true)
        }, 350)
    }

    const _Modal = this.extend({
        template: `
            <div>
                <v-modal
                        title=""
                        :wrap-class-name="wrapClasses"
                        :visible="visible"
                        :closable="false"
                        :mask-closable="maskClosable"
                        :has-footer="false"
                        :width="width"
                        @cancel="_onCancel">
                    <div :class="prefixCls + '-body-wrapper'">
                        <div :class="prefixCls + '-body'">
                            <v-icon :type="iconType"></v-icon>
                            <span :class="prefixCls + '-title'">{{ title }}</span>
                            <div :class="prefixCls + '-content'">{{ content }}</div>
                        </div>
                        <div :class="prefixCls + '-btns'" v-if="!okCancel">
                            <v-button :type="'primary'" :size="'large'" @click="_onOk" :loading="okLoading">{{ okText }}</v-button>
                        </div>
                        <div :class="prefixCls + '-btns'" v-else>
                            <v-button :type="'ghost'" :size="'large'" @click="_onCancel" :loading="cancelLoading">{{ cancelText }}</v-button>
                            <v-button :type="'primary'" :size="'large'" @click="_onOk" :loading="okLoading">{{ okText }}</v-button>
                        </div>
                    </div>
                </v-modal>
            </div>
        `,

        components: {vModal, vIcon, vButton}
    });

    const div = document.createElement('div');
    document.body.appendChild(div);

    // TODO: avoid new
    new _Modal({ // eslint-disable-line
        el: div,
        data: props,
        methods: {
            _onOk () {
                let okFn = this.onOk;

                if (okFn) {
                    let ret = okFn();
                    if (ret && ret.then) {
                        /* It's unnecessary to set loading=false, for the Modal will be unmounted after close. */
                        this.okLoading = true;
                        ret.then(_close)
                    } else {
                        _close()
                    }
                } else {
                    _close()
                }
            },

            _onCancel () {
                let cancelFn = this.onCancel;

                if (cancelFn) {
                    let ret = cancelFn();
                    if (ret && ret.then) {
                        /* It's unnecessary to set loading=false, for the Modal will be unmounted after close. */
                        this.cancelLoading = true;
                        ret.then(_close)
                    } else {
                        _close()
                    }
                } else {
                    _close()
                }
            }
        },
        mounted() {
            instance = this;
            this.visible = true;
        },
        computed: {
            wrapClasses () {
                return `${this.prefixCls} ${this.prefixCls}-${this.type}`;
            }
        }
    });

    return {
        destroy: _close,
    };
}