<template>
    <div :class="wrapCls" @click.stop="toggleDropdown">
        <div :class="selectionCls" role="combobox" aria-autocomplete="list" aria-haspopup="true"
        aria-expanded="false" tabindex="0">
            <div class="ant-select-selection__rendered">
                <template v-if="label">
                    <ul v-if="multiple">
                        <li v-for="(i,text) in label" unselectable="unselectable" class="ant-select-selection__choice" title="{{text}}" style="user-select: none;">
                            <div class="ant-select-selection__choice__content">{{text}}</div>
                            <span class="ant-select-selection__choice__remove" @click="remove(i,text)"></span>
                        </li>
                        <li v-if="search && multiple" class="ant-select-search ant-select-search--inline">
                            <div class="ant-select-search__field__wrap">
                                <input class="ant-select-search__field" v-model="searchVal" :style="multipleSearchStyle" @focus="isSearchFocus = true" @blur="searchBlur" v-el:search-input>
                                <span class="ant-select-search__field__mirror" v-el:search-mirror>{{searchVal}}</span>
                            </div>
                        </li>
                    </ul>
                    <div v-else class="ant-select-selection-selected-value" title="Lucy" :style="{opacity: isSearchFocus?0.4:1};">{{label}}</div>
                </template>
                <div v-show="((multiple && !label.length) || (!multiple && !label)) && !searchVal" unselectable="unselectable" class="ant-select-selection__placeholder" style="user-select: none;">{{placeholder}}</div>
                <div v-if="search && !multiple" class="ant-select-search ant-select-search--inline">
                    <div class="ant-select-search__field__wrap">
                        <input class="ant-select-search__field" v-model="searchVal" @focus="isSearchFocus = true" @blur="searchBlur" v-el:search-input>
                        <span class="ant-select-search__field__mirror"></span>
                    </div>
                </div>
            </div>
            <span v-if="allowClear && label && !multiple" unselectable="unselectable" class="ant-select-selection__clear" style="-webkit-user-select: none" @click.stop="clear"></span>
            <span v-if="!multiple" class="ant-select-arrow" unselectable="unselectable" style="user-select: none;">
                <b>
                </b>
            </span>
        </div>
        <div v-el:dropdown v-show="show" transition="slide-up" style="overflow: auto" :style="style" :class="dropdownCls">
            <div style="overflow: auto;">
                <ul class="ant-select-dropdown-menu ant-select-dropdown-menu-vertical  ant-select-dropdown-menu-root"
                role="menu" aria-activedescendant="">
                    <li v-if="searchVal && !searchFound" unselectable="unselectable" class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled" role="menuitem" aria-selected="false" style="user-select: none;">{{notFoundContent}}</li>
                    <template v-for="(i,option) in options">
                        <template v-if="option.label">
                            <li v-show="option.show" class=" ant-select-dropdown-menu-item-group">
                                <div class="ant-select-dropdown-menu-item-group-title">
                                    {{option.label}}
                                </div>
                                <ul v-if="option.data && option.data.length" class="ant-select-dropdown-menu-item-group-list">
                                    <li v-show="option.show" v-for="item in option.data" unselectable="unselectable" :class="['ant-select-dropdown-menu-item', {'ant-select-dropdown-menu-item-disabled': item.disabled}, {'ant-select-dropdown-menu-item-selected': item.selected}]" role="menuitem" aria-selected="false" style="user-select: none;" @click="select([i,$index])">
                                        {{item.text}}
                                    </li>
                                </ul>
                            </li>
                        </template>
                        <template v-else>
                            <li v-show="option.show" unselectable="unselectable" :class="['ant-select-dropdown-menu-item', {'ant-select-dropdown-menu-item-disabled': option.disabled}, {'ant-select-dropdown-menu-item-selected': option.selected}]"
                            role="menuitem" aria-selected="false" style="user-select: none;" @click="select(i)">
                                {{option.text}}
                            </li>
                        </template>
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
            searchVal: '',
            multipleSearchStyle: {},
            searchFound: false,
            show: false,
            style: {},
            label: '',
            isSearchFocus: false,
            dropdownHeight: 0,
            container: null
        }),
        props: {
            multiple: {
                type: Boolean,
                default: false
            },
            notFoundContent: {
                type: String,
                default: '没有找到'
            },
            placement: {
                type: String,
                default: 'bottom'
            },
            search: {
                type: Boolean,
                default: false
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
            value: {
                type: [Number, String, Array],
                required: true
            },
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
        watch: {
            searchVal(val){
                if(val){
                    this.searchFound = false;
                    let show = false;
                    this.mapOptions(([type, path, item])=> {
                        const isIncluded = item.text.includes(val);
                        if(isIncluded) this.searchFound = true;

                        if(type == 'item'){
                            this.$set(`options[${path}].show`, isIncluded);
                        }else{
                            this.$set(`options[${path[0]}].data[${path[1]}].show`, isIncluded);
                            if(isIncluded) show = true;
                        }
                    },(i,group)=> {
                        this.$set(`options[${i}].show`, show);
                        show = false;
                    })
                    this.multipleSearchStyle = {width: this.$els.searchMirror.offsetWidth + 'px'}
                }else{
                    this.setOptions({show: true},{show: true});
                    this.multipleSearchStyle = {};
                }
            }
        },
        computed: {
            wrapCls(){
                return [
                    this.prefix,
                    {[`${this.prefix}-disabled`]: this.disabled},
                    {[`${this.prefix}-${this.size}`]: this.size}
                ]
            },
            selectionCls(){
                return [
                    `${this.prefix}-selection`,
                    {[`${this.prefix}-selection--single`]: !this.multiple},
                    {[`${this.prefix}-selection--multiple`]: this.multiple}
                ]
            },
            dropdownCls(){
                return [
                    `${this.prefix}-dropdown`,
                    `${this.prefix}-dropdown-placement-bottomLeft`,
                    {[`${this.prefix}-dropdown--single`]: !this.multiple},
                    {[`${this.prefix}-dropdown--multiple`]: this.multiple}
                ]
            }
        },
        methods: {
            mapOptions(callback,groupCallback){
                for(let [i,opt] of this.options.entries()){
                    if(opt.label){
                        if(opt.data && opt.data.length){
                            for(let [j,item] of opt.data.entries()){
                                const res = callback(['groupItem', [i,j], item])
                                if(res) break;
                            }
                            groupCallback && groupCallback(i,opt);
                        }
                    }else{
                        const res = callback(['item', i, opt])
                        if(res) break;
                    }
                }
            },
            init(){
                this.options = JSON.parse(JSON.stringify(this.options));
                if(this.multiple) this.label = [];

                this.mapOptions(([type, path, item])=> {
                    let selected = false;
                    if(this.multiple && this.value.includes(item.value)){
                        selected = true;
                        this.label.push(item.text);
                    }else if(!this.multiple && this.value === item.value){
                        selected = true;
                        this.label = item.text;
                    }
                    if(type == 'item'){
                        this.$set(`options[${path}].selected`, selected);
                        this.$set(`options[${path}].show`, true);
                    }else{
                        this.$set(`options[${path[0]}].data[${path[1]}].selected`, selected);
                        this.$set(`options[${path[0]}].data[${path[1]}].show`, true);
                    }
                },(i,group)=> {
                    this.$set(`options[${i}].show`, true);
                })
            },
            getDropdownHeight(){
                this.dropdownHeight = parseFloat(getComputedStyle(this.$els.dropdown, null).height);
            },
            setOptions(opt,groupOpt){
               this.mapOptions(([type, path, item])=> {
                    if(type == 'item'){
                        for(let [key,val] of Object.entries(opt)){
                            this.$set(`options[${path}].${key}`, val);
                        }
                    }else{
                        for(let [key,val] of Object.entries(opt)){
                            this.$set(`options[${path[0]}].data[${path[1]}].${key}`, val);
                        }
                    }
                },(i,group)=> {
                    if(groupOpt){
                        for(let [key,val] of Object.entries(groupOpt)){
                            this.$set(`options[${i}].${key}`, val);
                        }
                    }
                }) 
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
                if(this.search){
                    this.show = true;
                    this.$els.searchInput.focus();
                }else{
                    this.show = !this.show
                }
                if(!this.dropdownHeight && this.show){
                    this.$nextTick(()=>{
                        this.getDropdownHeight();
                        this.setPosition();
                    })
                }
            },
            searchBlur(){
                this.isSearchFocus = false
                setTimeout(()=>{
                    this.searchVal = '';
                },300)
            },
            clear(){
                this.value = '';
                this.label = '';
                this.setOptions({selected: false});
            },
            remove(i,text){
                this.label.splice(i,1);
                this.value.splice(i,1);

                this.mapOptions(([type, path, item])=> {
                    if(item.text == text){
                        if(type == 'item'){
                            this.$set(`options[${path}].selected`, false);
                        }else{
                            this.$set(`options[${path[0]}].data[${path[1]}].selected`, false);
                        }
                        return true;
                    }
                })
            },
            select(path){
                let opt;
                if(typeof path == 'number'){
                    opt = this.options[path]
                }else{
                    opt = this.options[path[0]].data[path[1]]
                }
                if(opt.disabled) return;
                this.searchVal = '';
                if(!this.multiple) this.setOptions({selected: false});
                if(this.multiple){
                    if(opt.selected){
                        const j = this.label.indexOf(opt.text);
                        this.label.splice(j,1);
                        this.value.splice(j,1);
                    }else{
                        this.value.push(opt.value);
                        this.label.push(opt.text);
                    }
                    opt.selected = !opt.selected;
                }else{
                    opt.selected = true;
                    this.value = opt.value;
                    this.label = opt.text;
                }
            }
        }
    }
</script>
<style scoped>
    .ant-select-selection__choice__remove{
        top: 0
    }
</style>