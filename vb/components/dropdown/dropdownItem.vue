<template lang="html">
    <li v-if="divided" class="ant-dropdown-menu-item-divider"></li>
    <li v-if="option.children" :class="itemCls">
        <div v-el:item class="ant-dropdown-menu-submenu-title" @click="click">
            <slot></slot>
        </div>
        <v-dropdown-menu :options="option.children" :trigger="trigger" type="sub"></v-dropdown-menu>
    </li>
    <li v-else :class="itemCls" @click="handleClick">
        <slot></slot>
    </li>
</template>

<script>
    import vDropdownMenu from './dropdownMenu.vue'

    const Trigger = ['click', 'hover'];
    export default {
        name: 'v-dropdown-item',
        components: {
            vDropdownMenu
        },
        data: function () {
            return {}
        },
        props: {
            trigger: {
                required: false,
                type: String,
                default: 'hover'
            },
            option: {
                type: Object,
                required: true
            },
            disabled: {
                type: Boolean,
                default: false
            },
            divided: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            hasChildren(){
                return !!this.option.children;
            },
            itemCls(){
                if(this.option.children){
                    return [
                        'ant-dropdown-menu-submenu-vertical',
                        'ant-dropdown-menu-submenu'
                    ]
                }else{
                    return [
                        {
                            'ant-dropdown-menu-item-disabled': this.disabled,
                        },
                        'ant-dropdown-menu-item'
                    ]
                }
            },
        },
        ready(){
            if(this.hasChildren){
                let {trigger, mouseEnter, mouseLeave} = this;
                let itemElm = this.$els.item;
                if (trigger === 'hover') {
                    itemElm.addEventListener('mouseenter', mouseEnter);
                    itemElm.addEventListener('mouseleave', mouseLeave);
                }
            }
        },
        methods: {
            mouseEnter(){
                this.$broadcast('showSubmenu', this);
            },
            mouseLeave(){
                this.timeout = setTimeout(() => {
                    this.$broadcast('hideSubmenu', this);
                }, 100);
            },
            click(event){
                event.stopPropagation();
                if(this.trigger === 'click') {
                    this.$broadcast('toggleSubmenu', this);
                }
            },
            handleClick(event){
                this.$dispatch('itemclick',this.option)
            }
        },
        events:{
            showSubmenu(target){
                if(target === this){
                    return;
                }
                clearTimeout(this.timeout);
                this.$dispatch('showSubmenu', this);
            },
            hideSubmenu(target){
                this.$broadcast('hideSubmenu', this);
            },
        }
    }
</script>