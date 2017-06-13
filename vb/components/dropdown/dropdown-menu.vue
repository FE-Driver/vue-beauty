<template lang="html">
    <transition name="fade" enter-class="fade-in-enter" leave-class="fade-out-enter">
        <ul ref="list"
            class="ant-dropdown-menu ant-dropdown-menu-vertical"
            :class="dropdownMenuCls"
            @mouseenter="mouseEnter($event)"
            @mouseleave="mouseLeave($event)">
            <template v-for="(item, index) in data">
                <li v-if="item.divided" class="ant-dropdown-menu-item-divider"></li>
                <li :class="getItemCls(item)" :trigger="trigger" @click="clickMenuItem(item, $event)">
                    <template v-if="item.children && item.children.length">
                        <div ref="submenu"
                             class="ant-dropdown-menu-submenu-title"
                             @mouseenter="toggleOpen(true)"
                             @mouseout="toggleOpen(false)"
                             @click="clickSubmenu(item, $event)">{{item.content}}</div>
                            <v-dropdown-menu :data="item.children" :trigger="trigger" type="sub"></v-dropdown-menu>
                    </template>
                    <template v-else>
                        {{item.content}}
                    </template>
                </li>
            </template>
        </ul>
    </transition>
</template>

<script lang="babel">
    import emitter from '../../mixins/emitter';

    const Trigger = ['click', 'hover'];
    export default {
        name: 'DropdownMenu',
        mixins: [emitter],
        props: {
            type: {
                required: false,
                type: String,
                default: 'root',
            },
            data: {
                required: false,
                type: Array,
            },
            hide: {
                type: Boolean,
                default: true,
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
        },
        computed: {
            dropdownMenuCls() {
                if (this.type === 'root') {
                    return ['ant-dropdown-menu-light', 'ant-dropdown-menu-root'];
                } else if (this.type === 'sub') {
                    return [
                        'ant-dropdown-menu-sub',
                        { 'ant-dropdown-menu-hidden': !this.isOpen },
                    ];
                }
            },
        },
        data: () => ({
            isOpen: false,
        }),
        mounted() {
            if (this.trigger === 'hover') {
                const { mouseEnter, mouseLeave } = this;
                const listElm = this.$refs.list;
                listElm.addEventListener('mouseenter', mouseEnter);
                listElm.addEventListener('mouseleave', mouseLeave);
            }
        },
        created() {
            this.$on('showSubmenu', (source) => {
                if (this === source) {
                    return;
                }
                clearTimeout(this.timeout);
                this.isOpen = true;
                this.dispatch('DropdownMenu', 'showSubmenu', this);
            });
            this.$on('hideSubmenu', (source) => {
                if (source === this) {
                    return;
                }
                this.timeout = setTimeout(() => {
                    this.isOpen = false;
                }, 500);
            });
            this.$on('toggleSubmenu', () => {
                this.isOpen = !this.isOpen;
            });
        },
        methods: {
            mouseEnter() {
                if (this.trigger === 'hover') {
                    this.$nextTick(() => {
                        clearTimeout(this.timeout);
                    });
                }
            },
            mouseLeave() {
                if (this.trigger === 'hover') {
                    this.timeout = setTimeout(() => {
                        this.isOpen = false;
                    }, 500);
                }
            },
            getItemCls(item) {
                if (item.children) {
                    return [
                        'ant-dropdown-menu-submenu-vertical',
                        'ant-dropdown-menu-submenu',
                    ];
                }
                return [
                    {
                        'ant-dropdown-menu-item-disabled': item.disabled,
                    },
                    'ant-dropdown-menu-item',
                ];
            },
            clickMenuItem(item) {
                if (!item.children) {
                    this.dispatch('Dropdown', 'itemClicked', item);
                }
            },
            toggleOpen(value) {
                if (this.trigger === 'hover') {
                    this.broadcast('DropdownMenu', value ? 'showSubmenu' : 'hideSubmenu', this);
                }
            },
            clickSubmenu(item, event) {
                event.stopPropagation();
                this.dispatch('Dropdown', 'itemClicked', item);
                if (this.trigger === 'click') {
                    this.isOpen = !this.isOpen;
                    this.broadcast('DropdownMenu', this.isOpen ? 'showSubmenu' : 'hideSubmenu', this);
                }
            },
        },
    };
</script>
