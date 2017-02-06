<template>
  <label :class="wrapClasses">
    <span :class="radioClasses">
      <span :class="prefixCls + '-inner'"></span>
      <input
        type="radio"
        :value="value"
        :disabled="disabled"
        v-model="selfValue"
        :class="prefixCls + '-input'"
        @click="_click"
      >
    </span>
    <slot>radio</slot>
  </label>
</template>

<script>

export default {
    name: 'vRadio',
    data () {
        return {
            selected: this.value == this.selfValue,
            selfValue: this.groupValue,
            prefixCls : 'ant-radio',
        };
    },
    props: {
        type:{
            type: String,
            default: 'radio',//或者button
        },
        value: {
          type: [String, Number, Boolean],
          default: ''
        },
        groupValue: {
          type: [String, Number, Boolean],
          default: ''
        },
        selectValue: {
          type: [String, Number, Boolean],
          default: ''
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        className: {
            type: String,
            default: '',
        }
    },

    computed: {
        wrapClasses () {
            return [
                this.className,
                {[`${this.className}-checked`]: this.selected},
                {[`${this.className}-disabled`]: this.disabled}
            ]
        },

        radioClasses () {
            return [
                this.prefixCls,
                {[`${this.prefixCls}-checked`]: this.selected},
                {[`${this.prefixCls}-checked-${this.selected ? 1 : 0}`]: !!this.selected},
                {[`${this.prefixCls}-disabled`]: this.disabled}
            ]
        },
    },

    mounted :function() {
        if(this.type === 'button'){
            this.prefixCls = 'ant-radio-button';
        }
        this.selected = this.groupValue == this.value;
    },

    methods: {
        _click(){
            this.$emit('radioChange',this.value);
        }
    },

    watch: {
        //监听 选择值得变化以及radioGroup变化 控制radio选择状态
        selectValue(){
            this.selfValue = this.selectValue;
            this.selected = this.selectValue == this.value;
        },
        groupValue(){
            this.selfValue = this.groupValue;
        },
    }
}

</script>