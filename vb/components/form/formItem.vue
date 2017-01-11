<template>
<div :class="itemCls">
    <v-col :class="labelCls" v-if="label" :span="labelCol.span" :offset="labelCol.offset">
        <label for="userName" :class="[{'ant-form-item-required':required}]" v-text="label"></label>
    </v-col>
    <v-col :span="wrapperCol.span" :offset="wrapperCol.offset">
        <div :class="controlCls">
			<slot></slot>
            <div v-if="help" v-text="help" class="{{this.prefixCls}}-explain"></div>
		</div>
    </v-col>
</div>
</template>

<script>
import AsyncValidator from 'async-validator'
import {vRow, vCol} from '../grid'
import { defaultProps, oneOfType } from '../../utils'

export default {
  name:'v-form-item',
  data:()=>({
    prefix: 'ant-form-item',
    valid: true,
    validateDisabled: false,
    initialValue: null
  }),
  props: defaultProps({
      prefixCls:'ant-form',
      prop: String,
      test: oneOfType([String, Number, Boolean,Object, Array]),
      label: String,
      labelCol: {},
      wrapperCol: {},
      help: String,
      validateStatus: String,
      hasFeedback: false,
      required: false,
      rules: oneOfType([Object, Array])
  }),
  watch: {
      fieldValue(){
        if(!this.reset) this.validate();
      }
  },
  components: {vRow,vCol},
  computed: {
    itemCls () {
      return [
          'ant-row',
          this.prefix,
          {[`${this.prefix}-with-help`]: this.help}
      ]
    },
    labelCls () {
        return `${this.prefix}-label`
    },
    controlCls () {
        let status = {error:'has-error',warning:'has-warning',success:'has-success',validating:'is-validating'}[this.validateStatus];

        return [
            `${this.prefix}-control`,
            {'has-feedback': this.hasFeedback},
            {[status]:status}
        ]
    },
    form() {
        var parent = this.$parent;
        while (parent.$options.name !== 'v-form') {
            parent = parent.$parent;
        }
        return parent;
    },
    fieldValue: {
        cache: false,
        get() {
            var model = this.form.model;
            if (!model || !this.prop) { return; }

            var temp = this.prop.split(':');

            return temp.length > 1
                ? model[temp[0]][temp[1]]
                : model[this.prop];
        }
    }
  },
  ready(){
    if (this.prop) {
        this.$dispatch('form.addField', this);

        this.initialValue = this.getInitialValue();
        let rules = this.getRules();

        if (rules.length) {
            rules.every(rule => {
                if (rule.required) {
                    this.required = true;
                    return false;
                }
            });
        }
    }
  },
  beforeDestroy() {
    this.$dispatch('form.removeField', this);
  },
  methods: {
    validate(trigger, cb) {
        var rules = this.getFilteredRule(trigger);
        if (!rules || rules.length === 0) {
            cb && cb();
            return true;
        }

        this.validateStatus = 'validating';

        var descriptor = {};
        descriptor[this.prop] = rules;

        var validator = new AsyncValidator(descriptor);
        var model = {};

        model[this.prop] = this.fieldValue;

        validator.validate(model, { firstFields: true }, (errors, fields) => {
            this.valid = !errors;
            this.help = errors ? errors[0].message : '';

            cb && cb(errors);
            this.validateStatus = this.help?'error':'success';
        });
    },
    resetField() {
        this.validateStatus = "";
        this.valid = true;
        this.help = '';
        this.reset = true;

        let model = this.form.model;
        let value = this.fieldValue;

        if (Array.isArray(value) && value.length ) {
            this.validateDisabled = true;
            model[this.prop] = [];
        } else if (value) {
            this.validateDisabled = true;
            model[this.prop] = this.initialValue;
        }
        this.$nextTick(()=>{
            this.reset = false;
        })
    },
    getFilteredRule(trigger) {
        var rules = this.getRules();

        return rules.filter(rule => {
            return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
        });
    },
    getRules() {
        var formRules = this.form.rules;
        var selfRuels = this.rules;

        formRules = formRules ? formRules[this.prop] : [];

        return [].concat(selfRuels || formRules || []);
    },
    getInitialValue() {
        var value = this.form.model[this.prop];
        if (value === undefined) {
            return value;
        } else {
            return JSON.parse(JSON.stringify(value));
        }
    }
  }
}

</script>
