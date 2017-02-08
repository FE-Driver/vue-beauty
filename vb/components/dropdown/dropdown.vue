<template lang="html">
    <div v-el:dropdown style="display:inline-block;">
        <slot></slot>
        <div v-el:content
             :style="style"
             class="ant-dropdown ant-dropdown-placement-bottomLeft"
             v-show="isOpen"
             transition="slide-up">
            <v-dropdown-menu :options="options" :trigger="trigger"></v-dropdown-menu>
        </div>
    </div>
</template>

<script>
    import vDropdownMenu from './dropdownMenu.vue'
    import {getOffset} from '../_util/_func'
    const Trigger = ['click', 'hover'];

    export default {
        name: 'v-dropdown',
        components: {
            vDropdownMenu
        },
        props: {
            popupContainer: {
                type: Function,
                default: ()=> document.body
            },
            position: {
                type: String,
                default: 'absolute'
            },
            options: {
                required: false,
                type: Array
            },
            trigger: {
                validator: function(value){
                    return Trigger.indexOf(value) != -1;
                },
                default: 'hover'
            }
        },
        data: ()=> ({
            style: {},
            container: null,
            isOpen: false
        }),
        ready(){
            this.container = this.popupContainer()
            this.$els.content.style.position = this.position;
            this.container.appendChild(this.$els.content);

            this.$nextTick(()=>{
                this.setPosition();
            })

            window.addEventListener('resize',()=> {
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(()=> {
                    this.setPosition();
                }, 200)
            })
            this.initEvent();
        },
        beforeDestroy(){
            this.container.removeChild(this.$els.content);
            document.removeEventListener('click', this.close);
        },
        methods: {
            setPosition(){
                if(!this.$el){
                    return;
                }
                let p = getOffset(this.$el, this.container);
                this.$set('style',{
                    top: p.bottom + 'px',
                    left: p.left + 'px',
                })
            },
            initEvent(){
                let { trigger, mouseEnter, mouseLeave, click } = this;
                let dropdownElm = this.$els.dropdown;
                let contentElm = this.$els.content;
                if (trigger === 'hover') {
                    dropdownElm.addEventListener('mouseenter', mouseEnter);
                    dropdownElm.addEventListener('mouseleave', this.hidden);
                    contentElm.addEventListener('mouseenter', mouseEnter);
                    contentElm.addEventListener('mouseleave', mouseLeave);
                } else if (trigger === 'click') {
                    dropdownElm.addEventListener('click', click);
                }
                document.addEventListener('click', this.close);
            },
            click(event){
                event.stopPropagation();
                this.isOpen = !this.isOpen;
            },
            mouseEnter(){
                this.isOpen = true;
            },
            hidden(event){
                this.isOpen = false;
            },
            mouseLeave(){
                this.timeout = setTimeout(() => {
                    this.isOpen = false;
                }, 100);
            },
            close(event){
                event.stopPropagation();
                if(this.isOpen){
                    this.isOpen = false;
                    this.$broadcast('hideSubmenu', this);
                }
            }
        },
        events: {
            //收到子组件消息
            showSubmenu(target){
                clearTimeout(this.timeout);
            }
        }
    }
</script>