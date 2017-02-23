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
            fields: {},
            initModel: {},
            fieldLength: 0
        }),
        props: {
            model: Object,
            rules: Object,
            direction: {
                type: String,
                default: 'inline'
            }
        },
        created() {
            this.$on('form.addField', field => {
                this.fields[field.prop] = field;
                this.fieldLength++;
            });
            this.$on('form.removeField', field => {
                delete this.fields[field.prop];
                this.fieldLength--;
            });
        },
        mounted(){
            if (this.model) this.initModel = JSON.parse(JSON.stringify(this.model));
        },
        computed: {
            wrapClasses () {
                return [
                    this.prefix,
                    `${this.prefix}-${this.direction}`
                ]
            }
        },
        methods: {
            resetFields(all = true) {
                if (all) {
                    let temp = JSON.parse(JSON.stringify(this.initModel));
                    for (let key in this.model) {
                        if (this.fields[key]) {
                            this.fields[key].resetField();
                        } else {
                            this.model[key] = temp[key];
                        }
                    }
                } else {
                    for (let prop in this.fields) {
                        this.fields[prop].resetField();
                    }
                }
            },
            validate(callback) {
                var count = 0;
                var valid = true;

                for (let prop in this.fields) {
                    let field = this.fields[prop];
                    field.validate('', errors => {
                        if (errors) {
                            valid = false;
                        }

                        if (++count === this.fieldLength) {
                            callback(valid);
                        }
                    });
                }
            },
            validateField(prop, cb) {
                var field = this.fields[prop];
                if (!field) {
                    throw new Error('must call validateField with valid prop string!');
                }

                field.validate('', cb);
            }
        }
    }

</script>