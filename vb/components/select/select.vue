<template>
    <div :class="wrapCls" @click.stop="toggleDropdown">
        <div class="ant-select-selection
        ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true"
        aria-expanded="false" tabindex="0">
            <div class="ant-select-selection__rendered">
                <div class="ant-select-selection-selected-value" title="Lucy" style="opacity: 1;" v-show="label">
                    {{label}}
                </div>
                <div v-else unselectable="unselectable" class="ant-select-selection__placeholder" style="user-select: none;">{{placeholder}}</div>
            </div>
            <span v-if="allowClear && label" unselectable="unselectable" class="ant-select-selection__clear" style="-webkit-user-select: none" @click.stop="clear"></span>
            <span class="ant-select-arrow" unselectable="unselectable" style="user-select: none;">
                <b>
                </b>
            </span>
        </div>
        <div v-el:dropdown v-show="show" transition="slide-up" style="overflow: auto" :style="style" class="ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft">
            <div style="overflow: auto;">
                <ul class="ant-select-dropdown-menu ant-select-dropdown-menu-vertical  ant-select-dropdown-menu-root"
                role="menu" aria-activedescendant="">
                    <template v-for="(i,option) in options">
                        <li v-if="option.label" class=" ant-select-dropdown-menu-item-group">
                            <div class="ant-select-dropdown-menu-item-group-title">
                                {{option.label}}
                            </div>
                            <ul v-if="option.data && option.data.length" class="ant-select-dropdown-menu-item-group-list">
                                <li v-for="item in option.data" unselectable="unselectable" :class="['ant-select-dropdown-menu-item', {'ant-select-dropdown-menu-item-disabled': option.disabled}]" role="menuitem" aria-selected="false" style="user-select: none;" @click="groupItemselect(i,$index)">
                                    {{item.text}}
                                </li>
                            </ul>
                        </li>
                        <li v-else unselectable="unselectable" :class="['ant-select-dropdown-menu-item', {'ant-select-dropdown-menu-item-disabled': option.disabled}, {'ant-select-dropdown-menu-item-selected': option.selected}]"
                        role="menuitem" aria-selected="false" style="user-select: none;" @click="itemSelect(i)">
                            {{option.text}}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {getOffset} from '../_util/_func'
    
    export default {
        name: 'v-select',
        data: ()=>({
            prefix: 'ant-select',
            show: false,
            style: {},
            label: '',
            dropdownHeight: 0,
            container: null
        }),
        props: {
            placement: {
                type: String,
                default: 'bottom'
            },
            maxHeight: {
                type: Number,
                default: 300
            },
            disabled: {
                type: Boolean,
                default: false
            },
            allowClear: {
                type: Boolean,
                default: true
            },
            value: [Number, String],
            placeholder: {
                type: String,
                default: '请选择'
            },
            options: {
                type: Array,
                default: ()=> []
            },
            popupContainer: {
                type: Function,
                default: ()=> document.body
            },
            size: String,
            position: {
                type: String, 
                default: 'absolute'
            },
        },
        ready() {
            this.init();
            this.container = this.popupContainer()

            this.$els.dropdown.style.position = this.position;
            this.container.appendChild(this.$els.dropdown);

            window.addEventListener('resize',()=> {
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(()=> {
                    this.setPosition();
                }, 200)
            })
            window.addEventListener('click',this.closeDropdown);
        },
        beforeDestroy(){
            window.removeEventListener('click',this.closeDropdown);
        },
        computed: {
            wrapCls(){
                return [
                    this.prefix,
                    {[`${this.prefix}-disabled`]: this.disabled},
                    {[`${this.prefix}-${this.size}`]: this.size}
                ]
            }
        },
        methods: {
            init(){
                for(let [i,opt] of this.options.entries()){
                    if(opt.label){
                        if(opt.data && opt.data.length){
                            for(let [j,d] of opt.data.entries()){
                                if(d.value == this.value){
                                    this.$set(`options[${i}].data[${j}].selected`, true);
                                    this.label = opt.text;
                                }else{
                                    this.$set(`options[${i}].data[${j}].selected`, false);
                                }
                            }
                        }
                    }else{
                        if(opt.value == this.value){
                            this.$set(`options[${i}].selected`, true);
                            this.label = opt.text;
                        }else{
                            this.$set(`options[${i}].selected`, false);
                        }
                    }
                }
            },
            getDropdownHeight(){
                this.dropdownHeight = parseFloat(getComputedStyle(this.$els.dropdown, null).height);
            },
            resetSelected(){
                for(let [i,opt] of this.options.entries()){
                    if(opt.label){
                        if(opt.data && opt.data.length){
                            for(let [j,d] of opt.data.entries()){
                                this.$set(`options[${i}].data[${j}].selected`, false);
                            }
                        }
                    }else{
                        this.$set(`options[${i}].selected`, false);
                    }
                }
            },
            setPosition(){
                if(!this.$el) return;
                let p = getOffset(this.$el, this.container);

                this.$set('style',{
                    top: (this.placement == 'top'? p.top-this.dropdownHeight - 4 : p.bottom + 4) + 'px',
                    left: p.left + 'px',
                    width: p.right - p.left + 'px',
                    maxHeight: this.maxHeight + 'px'
                })
            },
            closeDropdown(){
                this.show = false;
            },
            toggleDropdown(){
                if(this.disabled) return;
                this.show = !this.show
                if(!this.dropdownHeight && this.show){
                    this.$nextTick(()=>{
                        this.getDropdownHeight();
                        this.setPosition();
                    })
                }
            },
            clear(){
                this.value = '';
                this.label = '';
                this.resetSelected();
            },
            itemSelect(i){
                if(this.options[i].disabled) return;
                this.resetSelected();
                this.options[i].selected = true;
                this.value = this.options[i].value;
                this.label = this.options[i].text;
            }
        }
    }
</script>