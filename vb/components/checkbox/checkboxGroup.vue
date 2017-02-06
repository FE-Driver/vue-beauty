<template lang="html">
    <div class="ant-checkbox-group">
        <v-checkbox
                class="ant-checkbox-group-item"
                v-for="(option, index) in ori_options"
                v-model="option.checked"
                :disabled="!!option.disabled"
                @click="toggleChecked(index)"
        >
            {{ option.label }}
        </v-checkbox>
    </div>
</template>

<script lang="babel">
    import vCheckbox from './checkbox'

    export default {
        name: 'vCheckboxGroup',
        props: {
            options: Array,
            keyFiled: {
                type: String,
                default: 'value'
            },
            value: {
                type: Array,
                default: () => []
            }
        },
        data: function () {
            return {
                ori_options: JSON.parse(JSON.stringify(this.options)),
                currentValue: this.value
            }
        },
        watch: {
            value: function(value) {
                this.currentValue = value;
                this.setChecked();
            },
            currentValue: function(value) {
                this.$emit('change',value);
                this.$emit('input',value);
            },
            options: function(value) {
                this.ori_options = JSON.parse(JSON.stringify(value));
                this.setChecked();
            }
        },
        mounted: function () {
            this.setChecked();
        },
        methods: {
            setChecked: function () {
                for (let [index, item] of this.ori_options.entries()) {
                    if(this.currentValue.includes(item[this.keyFiled])) {
                        this.$set(this.ori_options[index], 'checked', true);
                    } else {
                        this.$set(this.ori_options[index], 'checked', false);
                    }
                }
            },
            toggleChecked: function (index) {
                if(this.currentValue.includes(this.ori_options[index][this.keyFiled])) {
                    for (let [i, item] of this.currentValue.entries()) {
                        if (this.currentValue[i] == this.ori_options[index][this.keyFiled]) {
                            this.currentValue.splice(i,1);
                            break;
                        }
                    }
                } else {
                    this.currentValue.push(this.ori_options[index][this.keyFiled]);
                }

            }
        },
        components: {
            vCheckbox
        }
    }
</script>
