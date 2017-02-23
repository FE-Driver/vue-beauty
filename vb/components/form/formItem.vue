<template>
    <div :class="itemCls">
        <v-col :class="labelCls" v-if="label" :span="labelCol.span" :offset="labelCol.offset">
            <label for="userName" :class="[{'ant-form-item-required':isRequired}]" v-text="label"></label>
        </v-col>
        <v-col :span="wrapperCol.span" :offset="wrapperCol.offset">
            <div :class="controlCls">
                <slot></slot>
                <div v-if="defaultHelp" v-text="defaultHelp" :class="formPrefix + '-explain'"></div>
            </div>
        </v-col>
    </div>
</template>

<script lang="babel">
    import AsyncValidator from 'async-validator'
    import {col as vCol} from '../grid'
    import emitter from '../../mixins/emitter';

    export default {
        name: 'FormItem',
        mixins: [emitter],
        data() {
            return {
                formPrefix: 'ant-form',
                prefixCls: 'ant-form-item',
                valid: true,
                validateDisabled: false,
                initialValue: null,
                defaultHelp: this.help,
                defaultValidateStatus: this.validateStatus,
                isRequired: this.required
            }
        },
        props: {
            prop: String,
            label: String,
            labelCol: {
                type: Object,
                default: () => ({})
            },
            wrapperCol: {
                type: Object,
                default: () => ({})
            },
            help: String,
            validateStatus: String,
            hasFeedback: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false
            },
            rules: [Object, Array]
        },
        watch: {
            fieldValue(){
                if (!this.reset) this.validate();
            },
            help(val){
                this.defaultHelp = val;
            },
            validateStatus(val){
                this.defaultValidateStatus = val;
            }
        },
        components: {vCol},
        computed: {
            itemCls () {
                return [
                    'ant-row',
                    this.prefixCls,
                    {[`${this.prefixCls}-with-defaultHelp`]: this.defaultHelp}
                ]
            },
            labelCls () {
                return `${this.prefixCls}-label`
            },
            controlCls () {
                let status = {
                    error: 'has-error',
                    warning: 'has-warning',
                    success: 'has-success',
                    validating: 'is-validating'
                }[this.defaultValidateStatus];

                return [
                    `${this.prefixCls}-control`,
                    {'has-feedback': this.hasFeedback},
                    {[status]: status}
                ]
            },
            form() {
                var parent = this.$parent;
                while (parent.$options.name !== 'Form') {
                    parent = parent.$parent;
                }
                return parent;
            },
            fieldValue: {
                cache: false,
                get() {
                    var model = this.form.model;
                    if (!model || !this.prop) {
                        return;
                    }

                    var temp = this.prop.split(':');

                    return temp.length > 1
                        ? model[temp[0]][temp[1]]
                        : model[this.prop];
                }
            }
        },
        mounted(){
            if (this.prop) {
                this.dispatch('Form', 'form.addField', [this]);

                this.initialValue = this.getInitialValue();
                let rules = this.getRules();

                if (rules.length) {
                    rules.every(rule => {
                        if (rule.required) {
                            this.isRequired = true;
                            return false;
                        }
                    });
                }
            }
        },
        beforeDestroy() {
            this.dispatch('Form', 'form.removeField', [this]);
        },
        methods: {
            validate(trigger, cb) {
                var rules = this.getFilteredRule(trigger);
                if (!rules || rules.length === 0) {
                    cb && cb();
                    return true;
                }

                this.defaultValidateStatus = 'validating';

                var descriptor = {};
                descriptor[this.prop] = rules;

                var validator = new AsyncValidator(descriptor);
                var model = {};

                model[this.prop] = this.fieldValue;

                validator.validate(model, {firstFields: true}, (errors, fields) => {
                    this.valid = !errors;
                    this.defaultHelp = errors ? errors[0].message : '';

                    cb && cb(errors);
                    this.defaultValidateStatus = this.defaultHelp ? 'error' : 'success';
                });
            },
            resetField() {
                this.defaultValidateStatus = "";
                this.valid = true;
                this.defaultHelp = '';
                this.reset = true;

                let model = this.form.model;
                let value = this.fieldValue;

                if (Array.isArray(value) && value.length) {
                    this.validateDisabled = true;
                    model[this.prop] = [];
                } else if (value) {
                    this.validateDisabled = true;
                    model[this.prop] = this.initialValue;
                }
                this.$nextTick(() => {
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