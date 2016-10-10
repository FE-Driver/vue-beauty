<template>
    <div :class="wrapCls" style="width: 120px;" @click.stop="openDropdown" v-el:input-area>
        <div :class="selectionCls" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="true" tabindex="0">
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
            <span class="ant-select-search__field__placeholder" v-show="!value.length">请选择</span>
            <span v-if="allowClear && value.length" class="ant-select-selection__clear" @click.stop="clearSelected"></span>
            <span class="ant-select-arrow" unselectable="unselectable" style="-webkit-user-select: none;"><b></b></span>
        </div>
    </div>
    <div :class="dropdownCls" style="left: 0; min-width: 100%; max-height: 300px; overflow: auto" transition="slide-up" v-show="open" @click='hide' v-el:dropdown>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import { defaultProps } from '../../../utils'

    export default {
        data:()=>({
            prefix: 'ant-select'
        }),
        props: defaultProps({
            multiple: false,
            allowClear: false,
            open: false,
            onClear(){},
            value: []
        }),
        ready(){
            this.$els.dropdown.style.top = parseInt(getComputedStyle(this.$els.inputArea, false).height) + 4 + 'px';
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