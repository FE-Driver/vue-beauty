<template>
    <div>
        <transition name="fade">
            <div v-if="visible" :class="prefixCls + '-mask'"></div>
        </transition>
        <transition name="zoom" @before-enter="beforeEnter" @after-leave="afterLeave">
            <div ref="dialog" :class="[prefixCls + '-wrap', wrapClassName]"
                 role="dialog" :aria-labelledby="titleId" v-if="visible"
                 tabindex="-1" @click="_onMaskClick" @keydown="_onKeyDown">
                <div role="document" :style="[modalStyle, {width: width +'px'}]"
                     :class="prefixCls" @click="innerClick">
                    <div :class="prefixCls + '-content'">
                        <button v-if="closable" aria-label="Close"
                                :class="prefixCls + '-close'" @click="_close">
                            <span :class="prefixCls + '-close-x'"></span>
                        </button>
                        <div v-if="title" :class="prefixCls + '-header'">
                            <div :class="prefixCls + '-title'" :id="titleId">{{ title }}</div>
                        </div>
                        <div :class="prefixCls + '-body'">
                            <slot></slot>
                        </div>
                        <div v-if="hasFooter" :class="prefixCls + '-footer'">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                    <div tabIndex="0" ref="sentinel" :style="{width: 0, height: 0, overflow: 'hidden'}">
                        sentinel
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script lang="babel">
    import KeyCode from '../../utils/key-code'
    let uuid = 0;
    export default {
        name: 'Dialog',
        data: () => ({
            fromInner: false,
            titleId: 'vDialogTitle' + uuid++,
            lastOutSideFocusNode: document.activeElement
        }),
        props: {
            prefixCls: {
                type: String,
                default: 'vc-dialog'
            },
            modalStyle: {
                type: Object,
                default() {
                    return {};
                }
            },
            wrapClassName: {
                type: String,
            },
            width: Number,
            mask: {
                type: Boolean,
                default: true
            },
            title: String,
            closable: {
                type: Boolean,
                default: true,
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            hasFooter: {
                type: Boolean,
                default: true
            },
            visible: Boolean,
            zIndex: Number,
            mousePosition: Object
        },
        methods: {
            beforeEnter: function (el) {
                var that = this;
                this.lastOutSideFocusNode = document.activeElement;
                if (this.visible) {
                    /* 不使用事件排队， that.$el.querySelector查询不到子元素儿抛错，可能系visible渲染是异步的*/
                    setTimeout(function () {
                        that.$refs.dialog.focus();
                        that._startAnimation(that.$el.querySelector('.' + that.prefixCls + '-wrap'));
                        that._setScrollbar();
                    }, 0)
                }
            },

            afterLeave: function (el) {
                this._resetScrollbar();
            },

            _onMaskClick () {
                if (this.fromInner) {
                    return this.fromInner = false;
                }
                if (this.maskClosable) {
                    this._close()
                }
                this.$refs.dialog.focus()
            },

            _onKeyDown (e) {
                if (e.keyCode === KeyCode.ESC) {
                    this.lastOutSideFocusNode.focus();
                    this._close()
                }
                if (this.visible) {
                    if (e.keyCode === KeyCode.TAB) {
                        const activeElement = document.activeElement;
                        const dialogRoot = this.$refs.dialog;
                        const sentinel = this.$refs.sentinel;
                        if (e.shiftKey) {
                            if (activeElement === dialogRoot) {
                                sentinel.focus()
                            }
                        } else if (activeElement === sentinel) {
                            dialogRoot.focus()
                        }
                    }
                }
            },

            _startAnimation (dialogNode) {
                const mousePosition = this.mousePosition;
                if (this.visible) {
                    if (mousePosition) {
                        let scroll = getScroll(this.$el);
                        setTransformOrigin(dialogNode, `${mousePosition.x - scroll.x}px ${mousePosition.y - scroll.y}px`);
                    } else {
                        setTransformOrigin(dialogNode, '');
                    }
                }
            },

            _setScrollbar () {
                document.body.style.paddingRight = getScrollbarWidth() + 'px';
                document.body.style.overflow = 'hidden';
            },

            _resetScrollbar() {
                document.body.style.paddingRight = '';
                document.body.style.overflow = '';
            },
            innerClick() {
                this.fromInner = true;
            },
            _close () {
                this.$emit("close");
            }
        }
    }

    let scrollbarWidth;
    let scrollbarMeasure = {
        position: 'absolute',
        top: '-9999px',
        width: '50px',
        height: '50px',
        overflow: 'scroll'
    };

    function getScroll(el) {
        const doc = el.ownerDocument;
        const w = doc.defaultView || doc.parentWindow;
        let ret = {
            x: w.pageXOffset,
            y: w.pageYOffset
        };
        return ret
    }

    function getScrollbarWidth() {
        if (!hasScrollbar()) return;

        if (scrollbarWidth !== undefined) {
            return scrollbarWidth;
        }
        let scrollDiv = document.createElement('div');
        for (let scrollProp in scrollbarMeasure) {
            if (scrollbarMeasure.hasOwnProperty(scrollProp)) {
                scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
            }
        }
        document.body.appendChild(scrollDiv);
        let _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        scrollbarWidth = _scrollbarWidth;
        return scrollbarWidth;
    }

    function hasScrollbar() {
        return document.body.clientHeight < document.body.scrollHeight;
    }

    function setTransformOrigin(node, value) {
        const style = node.style;
        ['Webkit', 'Moz', 'Ms', 'ms'].forEach((prefix) => {
            style[`${prefix}TransformOrigin`] = value
        });
        style[`transformOrigin`] = value
    }

</script>
