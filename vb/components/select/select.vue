<template>
    <div :class="wrapCls" @click.stop="toggleDropdown">
        <div :class="selectionCls" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0">
            <div class="ant-select-selection__rendered">
                <template v-if="labels">
                    <ul v-if="multiple">
                        <li v-for="(text,i) in labels" unselectable="unselectable" class="ant-select-selection__choice" :title="text" style="user-select: none;">
                            <div class="ant-select-selection__choice__content">{{text}}</div>
                            <span class="ant-select-selection__choice__remove" @click="remove(i,text)"></span>
                        </li>
                        <li v-if="search && multiple" class="ant-select-search ant-select-search--inline">
                            <div class="ant-select-search__field__wrap">
                                <input class="ant-select-search__field" v-model="searchVal" :style="multipleSearchStyle" @focus="isSearchFocus = true" @blur="searchBlur" ref="searchInput" @keydown.delete="handleInputDelete">
                                <span class="ant-select-search__field__mirror" ref="searchMirror">{{searchVal}}</span>
                            </div>
                        </li>
                    </ul>
                    <div v-else class="ant-select-selection-selected-value" :title="labels" :style="{opacity: isSearchFocus?0.4:1}">{{labels}}</div>
                </template>
                <div v-show="((multiple && !labels.length) || (!multiple && !labels)) && !searchVal" unselectable="unselectable" class="ant-select-selection__placeholder" style="user-select: none;">{{placeholder}}</div>
                <div v-if="search && !multiple" class="ant-select-search ant-select-search--inline">
                    <div class="ant-select-search__field__wrap">
                        <input class="ant-select-search__field" v-model="searchVal" @focus="isSearchFocus = true" @blur="searchBlur" ref="searchInput">
                        <span class="ant-select-search__field__mirror"></span>
                    </div>
                </div>
            </div>
            <span v-if="allowClear && labels && !multiple" unselectable="unselectable" class="ant-select-selection__clear" style="-webkit-user-select: none" @click.stop="clear"></span>
            <span v-if="!multiple" class="ant-select-arrow" unselectable="unselectable" style="user-select: none;">
                <b>
                </b>
            </span>
        </div>
        <transition name="slide-up">
            <div ref="dropdown" v-show="show" style="overflow: auto" :style="style" :class="dropdownCls">
                <div style="overflow: auto;">
                    <ul class="ant-select-dropdown-menu ant-select-dropdown-menu-vertical  ant-select-dropdown-menu-root"
                    role="menu" aria-activedescendant="">
                        <li v-if="loading" unselectable="unselectable" class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled" role="menuitem" aria-selected="false" style="user-select: none;">{{loadingText}}</li>
                        <template v-else>
                            <li v-if="searchVal && remoteMethod && !data.length" unselectable="unselectable" class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled" role="menuitem" aria-selected="false" style="user-select: none;">{{notFoundContent}}</li>
                            <li v-if="searchVal && !remoteMethod && !searchFound" unselectable="unselectable" class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled" role="menuitem" aria-selected="false" style="user-select: none;">{{notFoundContent}}</li>
                            <template v-for="(option,i) in ori_data">
                                <template v-if="option.options">
                                    <li v-show="option.show" class=" ant-select-dropdown-menu-item-group">
                                        <div class="ant-select-dropdown-menu-item-group-title">
                                            {{option[groupLabel]}}
                                        </div>
                                        <ul v-if="option.options.length" class="ant-select-dropdown-menu-item-group-list">
                                            <li v-show="option.show" v-for="(item,index) in option.options" unselectable="unselectable" :class="['ant-select-dropdown-menu-item', {'ant-select-dropdown-menu-item-disabled': item.disabled}, {'ant-select-dropdown-menu-item-selected': item.selected}]" role="menuitem" aria-selected="false" style="user-select: none;" @click="select([i,index])">
                                                <slot :data="option">{{item[label]}}</slot>
                                            </li>
                                        </ul>
                                    </li>
                                </template>
                                <template v-else>
                                    <li v-show="option.show" unselectable="unselectable" :class="['ant-select-dropdown-menu-item', {'ant-select-dropdown-menu-item-disabled': option.disabled}, {'ant-select-dropdown-menu-item-selected': option.selected}]" role="menuitem" aria-selected="false" style="user-select: none;" @click="select(i)">
                                        <slot :data="option">{{option[label]}}</slot>
                                    </li>
                                </template>
                            </template>
                        </template>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>
<script lang="babel">
    import {t} from '../../locale'
    import {getOffset} from '../../utils/fn'
    import emitter from '../../mixins/emitter';
    
    export default {
        name: 'Select',
        mixins: [emitter],
        data() {
            return {
                prefix: 'ant-select',
                innerValue: this.multiple && !this.value ? [] : this.value,
                searchVal: '',
                multipleSearchStyle: {},
                searchFound: false,
                show: false,
                style: {},
                labels: this.multiple ? [] : '',
                ori_data: JSON.parse(JSON.stringify(this.data)),
                isSearchFocus: false,
                dropdownHeight: 0,
                container: null,
            }
        },
        props: {
            keyFiled: {
                type: String,
                default: 'value'
            },
            label: {
                type: String,
                default: 'label'
            },
            groupLabel: {
                type: String,
                default: 'label'
            },
            multiple: {
                type: Boolean,
                default: false
            },
            notFoundContent: {
                type: String,
                default: ()=>t('select.notFoundContent')
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
                default: ''
            },
            placeholder: {
                type: String,
                default: ()=>t('select.placeholder')
            },
            data: {
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
            loading: {
                type: Boolean,
                default: false
            },
            loadingText: {
                type: String,
                default: ()=>t('select.loadingText')
            },
            remoteMethod: Function
        },
        mounted() {
            this.initVal();
            this.container = this.popupContainer()

            this.$refs.dropdown.style.position = this.position;
            this.container.appendChild(this.$refs.dropdown);

            window.addEventListener('resize',()=> {
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(()=> {
                    this.setPosition();
                }, 200)
            })
            window.addEventListener('click',this.closeDropdown);
        },
        beforeDestroy(){
            this.container.removeChild(this.$refs.dropdown);
            window.removeEventListener('click',this.closeDropdown);
        },
        watch: {
            innerValue(val){
                this.$emit('change',val);
                this.$emit('input',val);
                this.dispatch('FormItem', 'form.change', [val]);
            },
            value(val){
                if(this.innerValue !== val){
                    this.labels = this.multiple?[]:'';
                    this.innerValue = val;
                    this.$nextTick(() => {
                        this.initVal();
                    })
                }
            },
            searchVal(val){
                if(this.multiple){
                    this.$nextTick(()=>{this.multipleSearchStyle = val?{width: this.$refs.searchMirror.offsetWidth + 2+'px'}:{}});
                }
                if(this.remoteMethod) return this.remoteMethod(val);
                if(val){
                    this.searchFound = false;
                    let show = false;
                    this.mapData(([type, path, item])=> {
                        const isIncluded = item[this.label].includes(val);
                        if(isIncluded) this.searchFound = true;

                        if(type == 'item'){
                            this.$set(this.ori_data[path],'show',isIncluded);
                        }else{
                            this.$set(this.ori_data[path[0]].options[path[1]],'show',isIncluded);
                            if(isIncluded) show = true;
                        }
                    },(i,group)=> {
                        this.$set(this.ori_data[i],'show',show);
                        show = false;
                    })
                }else{
                    this.setData({show: true},{show: true});
                }
            },
            data: {
                handler(val){
                    this.ori_data = JSON.parse(JSON.stringify(val));
                    this.mapData(([type, path, item])=> {
                        let selected = false;
                        if(this.multiple && this.innerValue.includes(item[this.keyFiled])){
                            selected = true;
                        }else if(!this.multiple && this.innerValue === item[this.keyFiled]){
                            selected = true;
                        }
                        if(type == 'item'){
                            this.$set(this.ori_data[path],'selected',selected);
                            this.$set(this.ori_data[path],'show',true);
                        }else{
                            this.$set(this.ori_data[path[0]].options[path[1]],'selected',selected);
                            this.$set(this.ori_data[path[0]].options[path[1]],'show',true);
                        }
                    },(i,group)=> {
                        this.$set(this.ori_data[i],'show',true);
                    })
                },
                deep: true
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
            mapData(callback,groupCallback){
                for(let [i,opt] of this.ori_data.entries()){
                    if(opt.options){
                        if(opt.options.length){
                            for(let [j,item] of opt.options.entries()){
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
            initVal(){
                this.mapData(([type, path, item])=> {
                    let selected = false;
                    if(this.multiple && this.innerValue.includes(item[this.keyFiled])){
                        selected = true;
                        this.labels.push(item[this.label]);
                    }else if(!this.multiple && this.innerValue === item[this.keyFiled]){
                        selected = true;
                        this.labels = item[this.label];
                    }
                    if(type == 'item'){
                        this.$set(this.ori_data[path],'selected',selected);
                        this.$set(this.ori_data[path],'show',true);
                    }else{
                        this.$set(this.ori_data[path[0]].options[path[1]],'selected',selected);
                        this.$set(this.ori_data[path[0]].options[path[1]],'show',true);
                    }
                },(i,group)=> {
                    this.$set(this.ori_data[i],'show',true);
                })
            },
            getDropdownHeight(){
                this.dropdownHeight = parseFloat(getComputedStyle(this.$refs.dropdown, null).height);
            },
            setData(opt,groupOpt){
                this.mapData(([type, path, item])=> {
                    if(type == 'item'){
                        for(let [key,val] of Object.entries(opt)){
                            this.$set(this.ori_data[path],key,val);
                        }
                    }else{
                        for(let [key,val] of Object.entries(opt)){
                            this.$set(this.ori_data[path[0]].options[path[1]],key,val);
                        }
                    }
                },(i,group)=> {
                    if(groupOpt){
                        for(let [key,val] of Object.entries(groupOpt)){
                            this.$set(this.ori_data[i],key,val);
                        }
                    }
                }) 
            },
            setPosition(){
                if(!this.$el) return;
                let p = getOffset(this.$el, this.container);

                this.style = {
                    top: (this.placement == 'top'? p.top-this.dropdownHeight - 4 : p.bottom + 4) + 'px',
                    left: p.left + 'px',
                    width: p.right - p.left + 'px',
                    maxHeight: this.maxHeight + 'px'
                }
            },
            closeDropdown(){
                this.show = false;
            },
            toggleDropdown(){
                if(this.disabled) return;
                if(this.search){
                    this.show = true;
                    this.$refs.searchInput.focus();
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
                this.innerValue = '';
                this.labels = '';
                this.setData({selected: false});
            },
            handleInputDelete () {
                if (this.multiple && this.innerValue.length && this.searchVal === '') {
                    this.remove(this.innerValue.length - 1,this.labels[this.innerValue.length-1]);
                }
            },
            remove(i,text){
                this.labels.splice(i,1);
                this.innerValue.splice(i,1);

                this.mapData(([type, path, item])=> {
                    if(item[this.label] == text){
                        if(type == 'item'){
                            this.$set(this.ori_data[path],'selected',false);
                        }else{
                            this.$set(this.ori_data[path[0]].options[path[1]],'selected',false);
                        }
                        return true;
                    }
                })
            },
            select(path){
                let opt;
                if(typeof path == 'number'){
                    opt = this.ori_data[path]
                }else{
                    opt = this.ori_data[path[0]].options[path[1]]
                }
                if(opt.disabled) return;
                this.searchVal = '';
                if(!this.multiple) this.setData({selected: false});
                if(this.multiple){
                    if(opt.selected){
                        const j = this.labels.indexOf(opt[this.label]);
                        this.labels.splice(j,1);
                        this.innerValue.splice(j,1);
                    }else{
                        this.innerValue.push(opt[this.keyFiled]);
                        this.labels.push(opt[this.label]);
                    }
                    opt.selected = !opt.selected;
                }else{
                    opt.selected = true;
                    this.innerValue = opt[this.keyFiled];
                    this.labels = opt[this.label];
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