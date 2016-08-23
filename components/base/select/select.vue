<template>
    <div :class="wrapCls" style="width: 120px;" @click="openDropdown">
        <div class="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="true" tabindex="0">
            <div class="ant-select-selection__rendered">
                <div class="ant-select-selection-selected-value" title="Lucy" style="display: block; opacity: 1;">
                    Lucy
                </div>
            </div>
            <span class="ant-select-arrow" unselectable="unselectable" style="-webkit-user-select: none;"><b></b></span>
        </div>
    </div>
    <div :class="dropdownCls" style="left: 0; top:100%; width: 100%; transform:translate(0,4px)">
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import { defaultProps } from '../../../utils'
    export default {
        data:()=>({
            prefix: 'ant-select',
        }),
        props: defaultProps({
            open: false
        }),
        computed: {
            wrapCls(){
                return [
                    this.prefix,
                    `${this.prefix}-enabled`,
                    {[`${this.prefix}-open`]:this.open}
                ]
            },
            dropdownCls(){
                return [
                    `${this.prefix}-dropdown`,
                    `${this.prefix}-dropdown--single`,
                    `${this.prefix}-dropdown-placement-bottomLeft`,
                    {[`${this.prefix}-dropdown-hidden`]: !this.open}
                ]
            }
        },
        methods: {
            openDropdown(){
                this.open = !this.open;
            }
        }
    }
</script>