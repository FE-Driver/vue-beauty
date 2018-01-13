<template>
    <div :class="itemCls">
        <v-col :class="labelCls" v-if="label" :span="labelCol.span" :offset="labelCol.offset">
            <label :class="[{'ant-form-item-required':isRequired}]" v-text="label"></label>
        </v-col>
        <v-col :span="wrapperCol.span" :offset="wrapperCol.offset">
            <div :class="controlCls">
                <slot></slot>
                <div v-if="validateMessage && showMessage && form.showMessage" v-text="validateMessage" :class="formPrefix + '-explain'"></div>
            </div>
        </v-col>
    </div>
</template>

<script>
    import AsyncValidator from 'async-validator';
    import { col as vCol } from '../grid';
    import emitter from '../../mixins/emitter';

    function noop() {}
    function getPropByPath(obj, path) {
        let tempObj = obj;
        path = path.replace(/\[(\w+)\]/g, '.$1');
        path = path.replace(/^\./, '');

        const keyArr = path.split('.');
        let i = 0;

        for (let len = keyArr.length; i < len - 1; ++i) {
            const key = keyArr[i];
            if (key in tempObj) {
                tempObj = tempObj[key];
            } else {
                throw new Error('please transfer a valid prop path to form item!');
            }
        }
        return {
            o: tempObj,
            k: keyArr[i],
            v: tempObj[keyArr[i]],
        };
    }
    export default {
        name: 'FormItem',
        mixins: [emitter],
        components: { vCol },
        data() {
            return {
                formPrefix: 'ant-form',
                prefixCls: 'ant-form-item',
                validateState: this.validateStatus,
                validateMessage: this.help,
                validateDisabled: false,
                validator: {},
                isRequired: this.required,
            };
        },
        props: {
            prop: String,
            label: String,
            labelCol: {
                type: Object,
                default: () => ({}),
            },
            wrapperCol: {
                type: Object,
                default: () => ({}),
            },
            hasFeedback: {
                type: Boolean,
                default: false,
            },
            required: Boolean,
            rules: [Object, Array],
            help: String,
            validateStatus: String,
            showMessage: {
                type: Boolean,
                default: true,
            },
        },
        watch: {
            help(value) {
                this.validateMessage = value;
                this.validateState = value ? 'error' : '';
            },
            validateStatus(value) {
                this.validateState = value;
            },
            required(value) {
                this.isRequired = value;
            },
        },
        computed: {
            itemCls() {
                return [
                    'ant-row',
                    this.prefixCls,
                    { [`${this.prefixCls}-with-help`]: this.validateMessage },
                ];
            },
            labelCls() {
                return `${this.prefixCls}-label`;
            },
            controlCls() {
                const status = {
                    error: 'has-error',
                    warning: 'has-warning',
                    success: 'has-success',
                    validating: 'is-validating',
                }[this.validateState];

                return [
                    `${this.prefixCls}-control`,
                    { 'has-feedback': this.hasFeedback },
                    { [status]: status },
                ];
            },
            form() {
                let parent = this.$parent;
                while (parent.$options.name !== 'Form') {
                    parent = parent.$parent;
                }
                return parent;
            },
            fieldValue: {
                cache: false,
                get() {
                    const model = this.form.model;
                    if (!model || !this.prop) { return; }

                    let path = this.prop;
                    if (path.indexOf(':') !== -1) {
                        path = path.replace(/:/, '.');
                    }

                    return getPropByPath(model, path).v;
                },
            },
        },
        mounted() {
            if (this.prop) {
                this.dispatch('Form', 'form.addField', [this]);

                Object.defineProperty(this, 'initialValue', {
                    value: this.fieldValue,
                });

                const rules = this.getRules();

                if (rules.length) {
                    rules.every((rule) => {
                        if (rule.required) {
                            this.isRequired = true;
                            return false;
                        }
                        return true;
                    });
                    this.$on('form.blur', this.onFieldBlur);
                    this.$on('form.change', this.onFieldChange);
                }
            }
        },
        beforeDestroy() {
            this.dispatch('Form', 'form.removeField', [this]);
        },
        methods: {
            validate(trigger, callback = noop) {
                const rules = this.getFilteredRule(trigger);
                if (!rules || rules.length === 0) {
                    callback();
                    return true;
                }

                this.validateState = 'validating';

                const descriptor = {};
                descriptor[this.prop] = rules;

                const validator = new AsyncValidator(descriptor);
                const model = {};

                model[this.prop] = this.fieldValue;

                validator.validate(model, { firstFields: true }, (errors) => {
                    this.validateState = !errors ? 'success' : 'error';
                    this.validateMessage = errors ? errors[0].message : '';

                    callback(this.validateMessage);
                });
            },
            resetField() {
                this.validateState = '';
                this.validateMessage = '';

                const model = this.form.model;
                const value = this.fieldValue;
                let path = this.prop;
                if (path.indexOf(':') !== -1) {
                    path = path.replace(/:/, '.');
                }

                const prop = getPropByPath(model, path);

                if (Array.isArray(value) && value.length > 0) {
                    this.validateDisabled = true;
                    prop.o[prop.k] = [];
                } else if (value) {
                    this.validateDisabled = true;
                    prop.o[prop.k] = this.initialValue;
                }
            },
            getRules() {
                let formRules = this.form.rules;
                const selfRuels = this.rules;

                formRules = formRules ? formRules[this.prop] : [];

                return [].concat(selfRuels || formRules || []);
            },
            getFilteredRule(trigger) {
                const rules = this.getRules();

                return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
            },
            onFieldBlur() {
                this.validate('blur');
            },
            onFieldChange() {
                if (this.validateDisabled) {
                    this.validateDisabled = false;
                    return;
                }

                this.validate('change');
            },
        },
    };
</script>