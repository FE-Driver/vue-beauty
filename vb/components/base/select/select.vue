<template>
    <div :class="wrapCls" style="width: 120px;" @click.stop="openDropdown" v-el:input-area>
        <span :class="selectionCls" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="true" tabindex="0">
            <ul v-if="multiple" class="ant-select-selection__rendered">
                <li v-for="item in value" unselectable="unselectable" class="ant-select-selection__choice" title="{{item.text}}" style="-webkit-user-select: none;">
                    <span class="ant-select-selection__choice__remove" @click="clearSingle($index)"></span>
                    <span class="ant-select-selection__choice__content" v-text="item.text"></span>
                </li>
                <li class="ant-select-search ant-select-search--inline">
                    <span class="ant-select-search__field__wrap">
                        <input value="" class="ant-select-search__field" role="textbox">
                    </span>
                </li>
            </ul>
            <div v-else class="ant-select-selection__rendered">
                <span v-show="value.length" v-text="value.length?value[0].text:''"></span>
            </div>
            <span class="ant-select-search__field__placeholder" v-show="!value.length" style="padding-left:8px">请选择</span>
            <span v-if="allowClear && value.length" class="ant-select-selection__clear" @click.stop="clearSelected"></span>
            <span class="ant-select-arrow" unselectable="unselectable" style="-webkit-user-select: none;"><b></b></span>
        </span>
        <div :class="dropdownCls" style="max-height: 300px; overflow: auto" :style="style" transition="slide-up" v-show="open" @click='hide' v-el:dropdown>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import { defaultProps } from '../../../utils'
    import {getOffset} from '../../_util/_func'

    export default {
        data:()=>({
            prefix: 'ant-select',
            style: {},
            container: null
        }),
        props: defaultProps({
            popupContainer: ()=> document.body,
            position: 'absolute',
            multiple: false,
            allowClear: false,
            open: false,
            onClear(){},
            value: []
        }),
        ready(){
            this.container = this.popupContainer()
            this.$els.dropdown.style.position = this.position;
            this.container.appendChild(this.$els.dropdown);
            
            this.$nextTick(()=>{
                this.setPosition();
            })

            window.addEventListener('resize',()=> {
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(()=> {
                    this.setPosition();
                }, 200)
            })
        },
        beforeDestroy(){
            this.container.removeChild(this.$els.dropdown);
        },
        computed: {
            wrapCls(){
                return [
                    this.prefix,
                    `${this.prefix}-enabled`,
                    {[`${this.prefix}-open`]:this.open}
                ]
            },
            selectionCls(){
                let multiple = this.multiple?'multiple':'single';

                return [
                    `${this.prefix}-selection`,
                    `${this.prefix}-selection--${multiple}`
                ]
            },
            placeholderCls(){
                return [
                    {[`${this.prefix}-selection__placeholder`]:!this.value.length}
                ]
            },
            dropdownCls(){
                let multiple = this.multiple?'multiple':'single';

                return [
                    `${this.prefix}-dropdown`,
                    `${this.prefix}-dropdown--${multiple}`,
                    `${this.prefix}-dropdown-placement-bottomLeft`
                ]
            }
        },
        methods: {
            setPosition(){
                if(!this.$el){
                    return
                }
                let p = getOffset(this.$els.inputArea, this.container);

                this.$set('style',{
                    top: p.bottom + 4 + 'px',
                    left: p.left + 'px',
                    minWidth: p.right - p.left + 'px'
                })
            },
            openDropdown(){
                this.open = !this.open;
            },
            clearSelected(){
                this.onClear(this.value);
                this.value = [];
            },
            clearSingle(index){
                let deleteEle = this.value.splice(index,1);
                this.onClear(deleteEle);
            },
            hide(event){
                event.stopPropagation();
            }
        }
    }
</script>