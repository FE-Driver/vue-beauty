<template lang="html">
    <ul v-el:list
        v-if="options"
        class="ant-dropdown-menu ant-dropdown-menu-vertical"
        :class="dropdownMenuCls"
        transition="slide-up">
        <v-dropdown-item v-for="item in options"
                         :trigger="trigger"
                         :option="item"
                         :disabled="item.disabled"
                         :divided="item.divided">
            {{ item.content }}
        </v-dropdown-item>
    </ul>
</template>

<script>
    import vDropdownItem from './dropdownItem.vue'

    export default {
        name: 'v-dropdown-menu',
        components: {
           vDropdownItem
        },
        props: {
            type: {
                required: false,
                type: String,
                default: 'root'
            },
            trigger: {
                required: false,
                type: String,
                default: 'hover'
            },
            options: {
                required: false,
                type: Array
            }
        },
        computed: {
            dropdownMenuCls(){
                if(this.type == 'root'){
                    return ['ant-dropdown-menu-light','ant-dropdown-menu-root' ];
                }else if(this.type == 'sub'){
                    return [
                        'ant-dropdown-menu-sub',
                        {'ant-dropdown-menu-hidden': !this.isOpen}
                    ]
                }
            }
        },
        data: function () {
            return {
                isOpen: false
            }
        },
        ready(){
            let dropdownElm = this.$els.list;
            if (this.trigger === 'hover') {
                let { mouseEnter, mouseLeave } = this;
                let dropdownElm = this.$els.list;
                dropdownElm.addEventListener('mouseenter', mouseEnter);
                dropdownElm.addEventListener('mouseleave', mouseLeave);
            }
        },

        methods: {
            mouseEnter(){
                this.$dispatch('showSubmenu', this);
            },
            mouseLeave(){
                this.timeout = setTimeout(() => {
                    this.$broadcast('hideSubmenu', this);
                }, 100);
            }
        },

        events: {
            //收到消息父组件消息
            showSubmenu(target){
                this.isOpen = true;
                clearTimeout(this.timeout);
            },
            hideSubmenu(target){
                this.isOpen = false;
                this.$broadcast('hideSubmenu', this);
            },
            toggleSubmenu(target){
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>