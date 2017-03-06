<template lang="html">
  <span :class="wrapClasses" @click="_toggle">
    <span :class="prefix + '-inner'">
      <slot v-if="checkStatus" name="checkedChildren"></slot>
      <slot v-if="!checkStatus" name="unCheckedChildren"></slot>
    </span>
  </span>
</template>

<script lang="babel">
import emitter from '../../mixins/emitter';
export default {
    name: 'Switch',
    mixins: [emitter],
    data() {
        return {
            prefix: 'ant-switch',
            defaultValue: this.value
        }
    },
    props:{
        size: {
            type: String
        },
        value: {
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        trueValue:{
            default : true
        },
        falseValue:{
            default : false
        }
    },
    computed: {
        wrapClasses () {
            let size = ['small'].indexOf(this.size) !== -1?this.size:'';

            return [
                this.prefix,
                {[`${this.prefix}-checked`]: this.checkStatus},
                {[`${this.prefix}-disabled`]: this.disabled},
                {[`${this.prefix}-${size}`]: size}
            ]
        },
        checkStatus(){
            return this.defaultValue === this.trueValue;
        }
    },
    watch: {
        value(val) {
            this.defaultValue = val;
        }
    },
    methods: {
        _toggle () {
            if (this.disabled) return;
            this.defaultValue = this.checkStatus ? this.falseValue : this.trueValue;
            this.$emit('input', this.defaultValue);
            this.dispatch('FormItem', 'form.change', [this.defaultValue]);
        }
    }
}

</script>