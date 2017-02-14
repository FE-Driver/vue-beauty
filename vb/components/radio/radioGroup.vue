<template>
    <div :class="wrapClasses">
        <v-radio v-for="(radio,index) in data" :type="type" :class-name="radioClasses" :index="index" :disabled="radio.disabled" :value="radio.value" v-on:radioChange="_handleChange" :key="radio.value" :select-value="selectValue" :group-value="value">
          <span>{{radio.text}}</span>
        </v-radio>
    </div>
</template>

<script>
import vRadio from './radio.vue'

export default {
    name: 'vRadioGroup',
    data:function(){
        return {
            selectValue :''
        }
    },
    props:{
        prefixCls: {
            type: String,
            default: 'ant-radio-group',
        },
        type:{
            type: String,
            default: 'radio',
        },
        value: {
            type: [String, Number, Boolean],
            default: ''
        },
        data: {
            type: Array,
            default: []//[{value:'',text:'',disabled:true/false}]
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
            let size = ['small','large'].indexOf(this.size) !== -1?this.size:'';

            return [
              this.prefixCls,
              {[`${this.prefixCls}-${size}`]: size}
            ]
        },
        radioClasses () {
            return this.type === 'button'?'ant-radio-button-wrapper':'ant-radio-wrapper';
        }
    },

    created () {
        if (this.value == null) {
            this.value = this.defaultValue;
        }
        if(this.disabled){
            for(let radio of this.data){
                if(radio.hasOwnProperty('disabled') && radio.disabled === false) continue;
                radio.disabled = true;
            }
        }
    },
    methods: {
      _handleChange(selectValue){
            this.selectValue = selectValue;
            this.$emit('change',this.selectValue);
            this.$emit('input',this.selectValue);
      }
    },
    watch:{
        value(){
            this.selectValue = this.value;
        },
    }
}

</script>
