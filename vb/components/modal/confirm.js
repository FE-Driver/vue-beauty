import vModal from './modal';
import vIcon from '../icon';
import vButton from '../button';
import Locale from '../../mixins/locale';

export default function (config = {}) {
    const props = Object.assign({
        iconType: 'question-circle',
        width: 416,
        visible: false,
        maskClosable: false,
        modalStyle: {},
    }, config, {
        prefixCls: 'ant-confirm',
        okLoading: false,
        cancelLoading: false,
    });

    // 默认为 true，保持向下兼容
    if (!('okCancel' in props)) {
        props.okCancel = true;
    }

    let instance;

    function _close() {
        instance.visible = false;
        setTimeout(() => {
            instance.$destroy(true);
        }, 350);
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
                        :modal-style = "modalStyle"
                        @cancel="_onCancel">
                    <div :class="prefixCls + '-body-wrapper'">
                        <div :class="prefixCls + '-body'">
                            <v-icon :type="iconType"></v-icon>
                            <span :class="prefixCls + '-title'">{{ title }}</span>
                            <div :class="prefixCls + '-content'">{{ content }}</div>
                        </div>
                        <div :class="prefixCls + '-btns'" v-if="!okCancel">
                            <v-button :type="'primary'" :size="'large'" @click="_onOk" :loading="okLoading">{{ localeOkText }}</v-button>
                        </div>
                        <div :class="prefixCls + '-btns'" v-else>
                            <v-button :type="'ghost'" :size="'large'" @click="_onCancel" :loading="cancelLoading">{{ localeCancelText }}</v-button>
                            <v-button :type="'primary'" :size="'large'" @click="_onOk" :loading="okLoading">{{ localeOkText }}</v-button>
                        </div>
                    </div>
                </v-modal>
            </div>
        `,

        components: { vModal, vIcon, vButton },
    });

    const div = document.createElement('div');
    document.body.appendChild(div);

    // TODO: avoid new
    new _Modal({ // eslint-disable-line
        el: div,
        mixins: [Locale],
        data: props,
        methods: {
            _onOk() {
                const okFn = this.onOk;

                if (okFn) {
                    const ret = okFn();
                    if (ret && ret.then) {
                        /* It's unnecessary to set loading=false, for the Modal will be unmounted after close. */
                        this.okLoading = true;
                        ret.then(_close).catch(() => {
                            this.okLoading = false;
                        });
                    } else {
                        _close();
                    }
                } else {
                    _close();
                }
            },

            _onCancel() {
                const cancelFn = this.onCancel;

                if (cancelFn) {
                    const ret = cancelFn();
                    if (ret && ret.then) {
                        /* It's unnecessary to set loading=false, for the Modal will be unmounted after close. */
                        this.cancelLoading = true;
                        ret.then(_close);
                    } else {
                        _close();
                    }
                } else {
                    _close();
                }
            },
        },
        mounted() {
            instance = this;
            this.visible = true;
        },
        computed: {
            localeOkText() {
                return this.okText || (this.okCancel ? this.t('modal.okText') : this.t('modal.justOkText'));
            },
            localeCancelText() {
                return this.cancelText || this.t('modal.cancelText');
            },
            wrapClasses() {
                return `${this.prefixCls} ${this.prefixCls}-${this.type}`;
            },
        },
    });

    return {
        destroy: _close,
    };
}
