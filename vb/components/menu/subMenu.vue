<template lang="html">

    <li :class="subMenuCls" @mouseover="mouseTriggerOpen(true)" @mouseout="mouseTriggerOpen(false)">
        <div :class="titleCls" @click="clickTriggerOpen" :style="titleSty">
      <span>
        <i v-if="icon" :class="`anticon anticon-${icon}`"></i>
        <span>{{title}}</span>
      </span>
        </div>
        <ul :class="itemCls">
            <slot></slot>
        </ul>
    </li>

</template>

<script lang="babel">
    export default {
        name: 'Submenu',
        props: {
            title: String,
            icon: String,
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            open: true,
            level: 0,
            mode: 'vertical',
            timer: null
        }),
        created(){
            this.setLevelAndMode();
        },
        computed: {
            subMenuCls(){
                return [
                    'ant-menu-submenu',
                    `ant-menu-submenu-${this.mode}`,
                    {'ant-menu-submenu-open': this.open}
                ]
            },
            titleCls(){
                return [
                    'ant-menu-submenu-title',
                    {'ant-menu-submenu-disabled': this.disabled}
                ]
            },
            itemCls(){
                return [
                    'ant-menu',
                    `ant-menu-${this.mode}`,
                    'ant-menu-sub',
                    {['ant-menu-hidden']: !this.open}
                ]
            },
            titleSty(){
                return this.mode == 'inline' ? {
                        paddingLeft: 24 * this.level + 'px'
                    } : '';
            }
        },
        methods: {
            setLevelAndMode(){
                let index = 1;
                let parent = this.$parent;

                while (parent.$options.name !== 'Menu') {
                    if (parent.$options.name == 'Submenu') index++;
                    parent = parent.$parent;
                }
                console.log(parent.mode)
                this.mode = parent.mode;
                this.level = index;
            },
            clickTriggerOpen(){
                if (!this.disabled && this.mode == 'inline') {
                    this.setOpen(!this.open);
                }
            },
            mouseTriggerOpen(status){
                if (!this.disabled && this.mode != 'inline') {
                    if (this.timer) clearTimeout(this.timer);
                    this.timer = setTimeout(() => this.setOpen(status), 300);
                }
            },
            setOpen(status){
                this.open = status;
            }
        }
    }
</script>
