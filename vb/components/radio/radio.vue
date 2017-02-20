<template>
  <label :class="wrapClasses">
    <span :class="radioClasses">
      <span :class="prefixCls + '-inner'"></span>
      <input
              type="radio"
              :value = "label"
              :disabled="isDisabled"
              v-model="model"
              :checked="selected"
              :class="prefixCls + '-input'"
      >
    </span>
    <slot>radio</slot>
  </label>
</template>

<script lang="babel">
export default {
    name: 'Radio',
    data () {
        return {
            prefixCls : 'ant-radio',
            isGroup : false
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
        label:{
            type: [String, Number],
            default: '',
        }
    },

    computed: {
        wrapClasses () {
            return [
                this.className,
                {[`${this.className}-checked`]: this.selected},
                {[`${this.className}-disabled`]: this.isDisabled}
            ]
        },

        radioClasses () {
            return [
                this.prefixCls,
                {[`${this.prefixCls}-checked`]: this.selected},
                {[`${this.prefixCls}-checked-${this.selected ? 1 : 0}`]: !!this.selected},
                {[`${this.prefixCls}-disabled`]: this.isDisabled}
            ]
        },
        model: {
            get() {
                return this.isGroup ? this.$parent.value : this.value;
            },
            set(value) {
                if (this.isGroup) {
                    this.$parent.change(value);
                } else {
                    this.$emit('input', value);
                }
            }
        },
        selected(){
            return this.model == this.label;
        },
        isDisabled(){
            return this.isGroup ? (this.$parent.disabled ? true : this.disabled) : this.disabled
        }
    },

    mounted :function() {
        if(this.type === 'button'){
            this.prefixCls = 'ant-radio-button';
        }
    }
}

</script>