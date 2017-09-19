<template lang="html">
    <div ref="dropdown" style="display:inline-block;">
        <slot></slot>
        <transition name="slide-up">
            <div ref="content"
                 :class="`ant-dropdown ant-dropdown-placement-${placement}`"
                 :style="style"
                 v-show="isOpen">
                <dropdown-menu :data="data" :trigger="trigger"></dropdown-menu>
            </div>
        </transition>
    </div>
</template>

<script lang="babel">
    import dropdownMenu from './dropdown-menu';
    import { getOffset } from '../../utils/fn';
    import emitter from '../../mixins/emitter';

    const Trigger = ['click', 'hover'];
    export default {
        name: 'Dropdown',
        mixins: [emitter],
        components: {
            dropdownMenu,
        },
        data: () => ({
            style: {},
            container: null,
            isOpen: false,
        }),
        props: {
            popupContainer: {
                type: Function,
                default: () => document.body,
            },
            position: {
                type: String,
                default: 'absolute',
            },
            placement: {
                required: false,
                type: String,
                default: 'bottomLeft',
            },
            trigger: {
                required: false,
                type: String,
                default: 'hover',
                validator: (value) => {
                    const find = Trigger.indexOf(value) !== -1;
                    return find;
                },
            },
            data: {
                required: false,
                type: Array,
            },
        },
        mounted() {
            this.container = this.popupContainer();
            this.$refs.content.style.position = this.position;
            this.container.appendChild(this.$refs.content);
            this.$nextTick(() => {
                this.setPosition();
            });
            window.addEventListener('resize', () => {
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(() => {
                    this.setPosition();
                }, 200);
            });
            this.initEvent();
        },
        created() {
            this.$on('showSubmenu', () => {
                clearTimeout(this.timeout);
            });
            this.$on('itemClicked', (item) => {
                this.$emit('item-click', item);
            });
        },
        beforeDestroy() {
            this.container.removeChild(this.$refs.content);
            document.removeEventListener('click', this.close);
        },
        methods: {
            setPosition() {
                if (!this.$el) {
                    return;
                }
                const p = getOffset(this.$el, this.container);
                this.style = {
                    top: `${p.bottom}px`,
                    left: `${p.left}px`,
                };
            },
            initEvent() {
                const { trigger, titleMouseEnter, titleMouseLeave,
                    mouseEnter, mouseLeave, click } = this;
                const dropdownElm = this.$refs.dropdown;
                const contentElm = this.$refs.content;
                if (trigger === 'hover') {
                    dropdownElm.addEventListener('mouseenter', titleMouseEnter, false);
                    dropdownElm.addEventListener('mouseleave', titleMouseLeave, false);
                    contentElm.addEventListener('mouseenter', mouseEnter, false);
                    contentElm.addEventListener('mouseleave', mouseLeave, false);
                } else if (trigger === 'click') {
                    dropdownElm.addEventListener('click', click);
                }
                document.addEventListener('click', this.close);
            },
            click(event) {
                event.stopPropagation();
                this.isOpen = !this.isOpen;
            },
            mouseEnter() {
                clearTimeout(this.timeout);
                this.isOpen = true;
            },
            mouseLeave() {
                this.timeout = setTimeout(() => {
                    this.isOpen = false;
                }, 200);
            },
            titleMouseEnter() {
                clearTimeout(this.timeout);
                this.isOpen = true;
            },
            titleMouseLeave() {
                this.timeout = setTimeout(() => {
                    this.isOpen = false;
                }, 200);
            },
            close() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this.broadcast('DropdownMenu', 'hideSubmenu', this);
                }
            },
        },
    };
</script>
