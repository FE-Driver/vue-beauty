<template>
    <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
        <div :class="[prefixCls + '-rel']" ref="reference">
            <slot></slot>
        </div>
        <transition name="fade" >
            <div :class="[prefixCls + '-popper']" ref="popper" v-show="!disabled && isVisible">
                <div :class="[prefixCls + '-content']">
                    <div :class="[prefixCls + '-arrow']"></div>
                    <div :class="[prefixCls + '-inner']"><slot name="content">{{ content }}</slot></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="babel">
    import Popper from '../../mixins/popper';
    const prefixCls = 'ant-tooltip';
    const placements = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']

    export default {
        name: 'Tooltip',
        mixins: [Popper],
        props: {
            placement: {
                default: 'top',
                validator: function(value) {
                    for (let i = 0; i < placements.length; i++) {
                        if (value === placements[i]) {
                            return true;
                        }
                    }
                    return false;
                }
            },
            content: {
                type: [String, Number],
                default: ''
            },
            delay: {
                type: Number,
                default: 0
            },
            disabled: {
                type: Boolean,
                default: false
            },
            controlled: {    // under this prop,Tooltip will not close when mouseleave
                type: Boolean,
                default: false
            },
            visible: {    // under this prop,Tooltip will not close when mouseleave
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                isVisible: false,
            };
        },
        methods: {
            handleShowPopper() {
                this.timeout = setTimeout(() => {
                    this.isVisible = true;
                }, this.delay);
            },
            handleClosePopper() {
                clearTimeout(this.timeout);
                if (!this.controlled) {
                    this.isVisible = false;
                }
            }
        },
        mounted () {
            this.isVisible = this.visible;
        },
    };
</script>
