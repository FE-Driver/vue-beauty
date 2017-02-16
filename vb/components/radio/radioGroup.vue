<template>
    <div :class="wrapClasses">
        <slot></slot>
        <template v-if="!hasSlot">
            <v-radio v-for="(radio,index) in data" :type="type" :class-name="radioClasses" :disabled="radio.disabled" v-model="radio.value" v-on:change="change" :key="radio.value" >
                <span>{{radio.text}}</span>
            </v-radio>
        </template>
    </div>
</template>

<script>
import vRadio from './radio.vue'

export default {
    name: 'RadioGroup',
    data:function(){
        return {
            prefixCls : 'ant-radio-group',
            hasSlot : false,
            selectValue : ''
        }
    },
    props:{
        type:{
            type: String,
            default: 'radio',
        },
        value: {
            type: [String, Number, Boolean],
            default: ''
        },
        data: {
            type: Array,//[{value:'',text:'',disabled:true/false}]
            default: function(){
                return [];
            }
        },
        disabled: {
            type: Boolean,
            default:false
        },
        size: {
            type: String,
            default: '',
        },
    },

    components: { vRadio },

    computed: {
        wrapClasses () {
            let size = ['small','large'].indexOf(this.size) !== -1? this.size:'';
            return [
              this.prefixCls,
              {[`${this.prefixCls}-${size}`]: size}
            ]
        },
        radioClasses () {
            return this.type === 'button'?'ant-radio-button-wrapper':'ant-radio-wrapper';
        }
    },

    mounted(){
        if(this.$slots && this.$slots.default){
            this.hasSlot = true;
        }
        this.selectValue = this.value;
        this.updateModel();
    },

    created () {
        if(this.disabled){
            for(let radio of this.data){
                if(radio.hasOwnProperty('disabled') && radio.disabled === false) continue;
                radio.disabled = true;
            }
        }
    },
    methods: {
        change(value){
            this.selectValue = value;
            this.updateModel();
            this.$emit('change',this.selectValue);
            this.$emit('input',this.selectValue);
        },
        updateModel(){
            this.$children.forEach((child)=>{
                child.selected = this.selectValue == child.value;
                child.isGroup = true;
            });
        }
    },
    watch:{
        value(){
            this.selectValue = this.value;
            this.updateModel();
        },
    }
}

</script>
