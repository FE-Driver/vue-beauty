<template lang="html">
    <div :class="prefixCls">
        <v-checkbox v-for="item in data" :true-value="item[keyField]" :key="item[keyField]" :disabled="item.disabled">{{item[label]}}</v-checkbox>
        <slot></slot>
    </div>
</template>

<script>
    import vCheckbox from './checkbox';
    import emitter from '../../mixins/emitter';

    export default {
        name: 'CheckboxGroup',
        mixins: [emitter],
        components: {
            vCheckbox
        },
        props: {
            data: Array,
            keyField: {
                type: String,
                default: 'value'
            },
            label: {
                type: String,
                default: 'label'
            },
            value: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                prefixCls: 'ant-checkbox-group'
            }
        },
        mounted() {
            this.setChecked();
            this.$on('checkbox.change',(checked,value) => {
                if(checked){
                    if(!this.innerValue.includes(value)){
                        this.innerValue.push(value);
                    }
                }else{
                    const i  = this.innerValue.indexOf(value);
                    if( i !== -1) {
                        this.innerValue.splice(i,1);
                    }
                }
            })
        },
        computed: {
            innerValue() {
                return this.value;
            }
        },
        watch: {
            value(val){
                this.setChecked();
            },
            innerValue(value){
                this.$emit('change',value);
                this.$emit('input',value);
                this.dispatch('FormItem', 'form.change', [value]);
            }
        },
        methods: {
            setChecked() {
                for(const child of this.$children){
                    if(child.$options.name === 'Checkbox'){
                        if(this.innerValue.includes(child.trueValue)){
                            child.innerValue = child.trueValue;
                        }else{
                             child.innerValue = child.falseValue;
                        }
                    }
                }
            }
        }
    }
</script>
