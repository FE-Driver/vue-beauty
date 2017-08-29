<template>
    <div class="ant-popover-wrapper" style="display:inline-block" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" v-clickoutside="handleClose">
        <div @click="handleClick" style="display:inline-block" ref="reference" @mousedown="handleFocus(false)" @mouseup="handleBlur(false)">
            <slot></slot>
        </div>
        <transition name="fade">
            <div ref="popper" :class="`ant-popover ant-popover-placement-${placement}`" v-show="visible" :style="overlayStyle">
                <div class="ant-popover-content">
                    <div class="ant-popover-arrow"></div>
                    <div class="ant-popover-inner">
                        <div>
                            <div class="ant-popover-title" v-if="this.$slots.title || title"><slot name="title">{{title}}</slot></div>
                            <div class="ant-popover-inner-content"><slot name="content"></slot></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import Popper from '../../mixins/popper';
    import clickoutside from '../../directives/clickoutside';

    const placements = ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom'];

    export default {
        name: 'Popover',
        mixins: [Popper],
        directives: { clickoutside },
        data: () => ({
            prefixCls: 'ant-popover',
            isInput: false,
            visible: false,
        }),
        props: {
            title: String,
            overlayStyle: [Object, String],
            placement: {
                validator(value) {
                    return placements.includes(value);
                },
                default: 'top',
            },
            trigger: {
                default: 'hover',
                validator(value) {
                    return ['click', 'focus', 'hover'].includes(value);
                },
            },
            controlled: {
                type: Boolean,
                default: false,
            },
            initVisible: {
                type: Boolean,
                default: false,
            },
        },
        watch: {
            visible(val) {
                this.$emit('input', val);
                this.$emit('change', val);
            },
            initVisible(val) {
                this.visible = val;
            },
        },
        methods: {
            handleClick() {
                if (this.trigger !== 'click' || (this.controlled && this.visible)) {
                    return false;
                }
                this.visible = !this.visible;
            },
            handleClose() {
                if (this.trigger !== 'click' || this.controlled) {
                    return false;
                }
                this.visible = false;
            },
            handleMouseenter() {
                if (this.trigger !== 'hover') {
                    return false;
                }
                this.visible = true;
            },
            handleMouseleave() {
                if (this.trigger !== 'hover' || this.controlled) {
                    return false;
                }
                this.visible = false;
            },
            handleFocus(fromInput = true) {
                if (this.trigger !== 'focus' || (this.isInput && !fromInput)) {
                    return false;
                }
                this.visible = true;
            },
            handleBlur(fromInput = true) {
                if (this.trigger !== 'focus' || (this.isInput && !fromInput) || this.controlled) {
                    return false;
                }
                this.visible = false;
            },
            getInputChildren() {
                const $input = this.$refs.reference.querySelectorAll('input');
                const $textarea = this.$refs.reference.querySelectorAll('textarea');
                let $children = null;

                if ($input.length) {
                    $children = $input[0];
                } else if ($textarea.length) {
                    $children = $textarea[0];
                }

                return $children;
            },
        },
        mounted() {
            // if trigger and children is input or textarea,listen focus & blur event
            if (this.trigger === 'focus') {
                const $children = this.getInputChildren();
                if ($children) {
                    $children.addEventListener('focus', this.handleFocus, false);
                    $children.addEventListener('blur', this.handleBlur, false);
                    this.isInput = true;
                }
            }
            this.visible = this.initVisible;
        },
        beforeDestroy() {
            const $children = this.getInputChildren();
            if ($children) {
                $children.removeEventListener('focus', this.handleFocus, false);
                $children.removeEventListener('blur', this.handleBlur, false);
            }
        },
    };
</script>
