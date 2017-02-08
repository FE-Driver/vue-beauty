<template>
    <span :class="pickerCls">
        <input type="text" :placeholder="label?'':placeholder" :class="inpCls" value="" readonly="" autocomplete="off" @click.stop="toggleMenu">
        <span class="ant-cascader-picker-label">{{label}}</span>
        <i v-if="allowClear && value.length" class="anticon anticon-cross-circle ant-cascader-picker-clear" @click.stop="clear"></i>
        <i class="anticon anticon-down ant-cascader-picker-arrow"></i>
        <div v-el:menu v-show="open" transition="slide-up" style="max-height: 300px; overflow: auto" :style="style" class="ant-cascader-menus ant-cascader-menus-placement-bottomLeft">
            <div>
                <menu v-for="i in path" :value="i" :data="getMenuData($index)" :key="$index" @change="changeMenuValue" track-by="$index"></menu>
            </div>
        </div>
    </span>
</template>

<script>
    import menu from './menu.vue'
    import {getOffset} from '../_util/_func'

    export default {
        name:'v-cascader',
        data: ()=>({
            prefix: 'ant-cascader',
            style: {},
            container: null,
            open: false,
            label: '',
            path: [-1]
        }),
        props: {
            popupContainer: {
                type: Function,
                default: ()=> document.body
            },
            position: {
                type: String,
                default: 'absolute'
            },
            options: Array,
            value: {
                type: Array,
                default: ()=> []
            },
            placeholder: {
                type: String,
                default: '请选择'
            },
            size: String,
            disabled: {
                type: Boolean,
                default: false
            },
            allowClear: {
                type: Boolean,
                default: true
            }
        },
        ready(){
            this.init();
            this.container = this.popupContainer()
            this.$els.menu.style.position = this.position;
            this.container.appendChild(this.$els.menu);
            
            this.$nextTick(()=>{
                this.setPosition();
            })

            window.addEventListener('resize',()=> {
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(()=> {
                    this.setPosition();
                }, 200)
            })

            this.clickListener = ()=>{
                this.setOpen(false)
            }
            window.addEventListener('click',this.clickListener);
        },
        beforeDestroy(){
            this.container.removeChild(this.$els.menu);
            window.removeEventListener('click',this.clickListener);
        },
        watch: {
            path(val){
                let value = [], label = [], opt = this.options;

                for(let i of val){
                    if(i < 0) break;
                    value.push(opt[i].value);
                    label.push(opt[i].label);
                    opt = opt[i].children;
                }
                this.$set('value', value);
                this.$set('label', label.join(' / '));
            },
            value(val){
                this.$emit('change', val);
            }
        },
        computed: {
            pickerCls(){
                return [
                    `${this.prefix}-picker`,
                    {[`${this.prefix}-picker-disabled`]: this.disabled}
                ]
            },
            inpCls(){
                const size = {large:'lg',small:'sm'}[this.size];

                return [
                    'ant-input', 
                    'ant-cascader-input',
                    {['ant-input-'+size]: size}
                ]
            }
        },
        methods: {
            init(){
                let res = [],opt = this.options;
                for(let val of this.value){
                    for(let [i,item] of opt.entries()){
                        if(item.value == val){
                            res.push(i)
                            opt = opt[i].children;
                            break;
                        }
                    }
                }
                if(opt) res.push(-1)

                this.$set('path', res);
            },
            clear(){
                this.path = [-1];
            },
            setPosition(){
                if(!this.$el){
                    return
                }
                let p = getOffset(this.$el, this.container);

                this.$set('style',{
                    top: p.bottom + 4 + 'px',
                    left: p.left + 'px'
                })
            },
            getMenuData(index){
                let res = this.options;
                for(let i=0;i < index;i++){
                    const s = this.path[i];
                    if(res[s].children){
                        res  = res[s].children;
                    }else{
                        res = null;
                        break;
                    }
                }
                return res;
            },
            setOpen(status){
                this.open = status;
            },
            toggleMenu(){
                if(this.disabled) return;
                this.open = !this.open;
            },
            changeMenuValue(key,i){
                this.path.$set(key, i);
                if(this.getMenuData(key+1)){
                    this.path.$set(key+1, -1);
                    this.path.splice(key+2,this.path.length-1-key-1);
                }else{
                    this.path.splice(key+1,this.path.length-1-key);
                    this.open = false;
                }
            }
        },
        components: {menu}
    }
</script>