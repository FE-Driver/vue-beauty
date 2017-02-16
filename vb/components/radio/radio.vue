<template>
  <label :class="wrapClasses">
    <span :class="radioClasses">
      <span :class="prefixCls + '-inner'"></span>
      <input
              type="radio"
              :disabled="disabled"
              :checked="selected"
              :class="prefixCls + '-input'"
              @click="_click"
      >
    </span>
    <slot>radio</slot>
  </label>
</template>

<script>
export default {
    name: 'Radio',
    data () {
        return {
            selected : false,
            prefixCls : 'ant-radio'
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
        disabled: {
            type: Boolean,
            default: false,
        },
        className: {
            type: String,
            default: 'ant-radio-wrapper',
        },
        checked:{
            type: Boolean,
            default: false,
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
        this.selected = this.checked;
    },

    methods: {
        _click(){
            if(this.disabled){
                return false;
            }
            if(this.isGroup){
                this.$parent.change(this.value);
            }else{
                this.selected = true;
                this.$emit('change',this.value);
                this.$emit('input',this.value);
            }
        }
    },

    watch: {
        //监听 选择值得变化以及radioGroup变化 控制radio选择状态
        value(){
            this.$parent.updateModel();
        }

    }
}

</script>