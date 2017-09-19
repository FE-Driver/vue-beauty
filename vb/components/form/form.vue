<template>
    <form :class="wrapClasses">
        <slot></slot>
    </form>
</template>

<script lang="babel">
    export default {
        name: 'Form',
        data: () => ({
            prefix: 'ant-form',
            fields: [],
        }),
        props: {
            model: Object,
            rules: Object,
            showMessage: {
                type: Boolean,
                default: true,
            },
            direction: {
                type: String,
                default: 'inline',
            },
        },
        watch: {
            rules() {
                this.validate();
            },
        },
        created() {
            this.$on('form.addField', (field) => {
                if (field) {
                    this.fields.push(field);
                }
            });
            this.$on('form.removeField', (field) => {
                if (field.prop) {
                    this.fields.splice(this.fields.indexOf(field), 1);
                }
            });
        },
        computed: {
            wrapClasses() {
                return [
                    this.prefix,
                    `${this.prefix}-${this.direction}`,
                ];
            },
        },
        methods: {
            resetFields() {
                this.fields.forEach((field) => {
                    field.resetField();
                });
            },
            validate(callback) {
                let valid = true;
                let count = 0;
                this.fields.forEach((field) => {
                    field.validate('', (errors) => {
                        if (errors) {
                            valid = false;
                        }
                        if (typeof callback === 'function' && ++count === this.fields.length) {
                            callback(valid);
                        }
                    });
                });
            },
            validateField(prop, cb) {
                const field = this.fields.filter(f => f.prop === prop)[0];
                if (!field) { throw new Error('must call validateField with valid prop string!'); }

                field.validate('', cb);
            },
        },
    };
</script>