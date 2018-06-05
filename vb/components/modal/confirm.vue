<template>
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
                    <div :class="prefixCls + '-content'" v-html="content"></div>
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
</template>
<script>
import vModal from './modal';
import vIcon from '../icon';
import vButton from '../button';
import Locale from '../../mixins/locale';

export default {
    name: 'Confirm',
    mixins: [Locale],
    component: {
        vModal,
        vIcon,
        vButton,
    },
    data: () => ({
        okLoading: false,
        cancelLoading: false,
        visible: false,
        iconType: 'question-circle',
        width: 416,
        maskClosable: false,
        modalStyle: {},
        prefixCls: 'ant-confirm',
        okText: '',
        cancelText: '',
        title: '',
        content: '',
        okCancel: true,
        type: '',
    }),
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
    methods: {
        _onOk() {
            const okFn = this.onOk;

            if (okFn) {
                const ret = okFn();
                if (ret && ret.then) {
                    /* It's unnecessary to set loading=false, for the Modal will be unmounted after close. */
                    this.okLoading = true;
                    ret.then(this._close).catch(() => {
                        this.okLoading = false;
                    });
                } else {
                    this._close();
                }
            } else {
                this._close();
            }
        },

        _onCancel() {
            const cancelFn = this.onCancel;

            if (cancelFn) {
                const ret = cancelFn();
                if (ret && ret.then) {
                    /* It's unnecessary to set loading=false, for the Modal will be unmounted after close. */
                    this.cancelLoading = true;
                    ret.then(this._close);
                } else {
                    this._close();
                }
            } else {
                this._close();
            }
        },
        _close() {
            this._remove();
        },
        _remove() {
            this.visible = false;
            this.okLoading = false;
            this.cancelLoading = false;
            // this._destroy();
        },
        _destroy() {
            // this.$destroy(true);
            // document.body.removeChild(this.$el);
        },
    },
};
</script>
