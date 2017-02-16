<template lang="html">
    <div :class="prefixCls">
        <v-checkbox
                :class="prefixCls + '-item'"
                v-for="(option, index) in ori_data"
                v-model="option.checked"
                :disabled="!!option.disabled"
                @click="toggleChecked(index)"
        >
            {{ option[label] }}
        </v-checkbox>
    </div>
</template>

<script lang="babel">
    import vCheckbox from './checkbox'

    export default {
        name: 'CheckboxGroup',
        props: {
            data: Array,
            keyFiled: {
                type: String,
                default: 'value'
            },
            label: {
                type: String,
                default: 'label'
            },
            value: {
                type: Array,
                default: () => []
            }
        },
        data: function () {
            return {
                prefixCls: 'ant-checkbox-group',
                ori_data: JSON.parse(JSON.stringify(this.data)),
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
            data: function(value) {
                this.ori_data = JSON.parse(JSON.stringify(value));
                this.setChecked();
            }
        },
        mounted: function () {
            this.setChecked();
        },
        methods: {
            setChecked: function () {
                for (let [index, item] of this.ori_data.entries()) {
                    if(this.currentValue.includes(item[this.keyFiled])) {
                        this.$set(this.ori_data[index], 'checked', true);
                    } else {
                        this.$set(this.ori_data[index], 'checked', false);
                    }
                }
            },
            toggleChecked: function (index) {
                if(this.currentValue.includes(this.ori_data[index][this.keyFiled])) {
                    for (let [i, item] of this.currentValue.entries()) {
                        if (this.currentValue[i] == this.ori_data[index][this.keyFiled]) {
                            this.currentValue.splice(i,1);
                            break;
                        }
                    }
                } else {
                    this.currentValue.push(this.ori_data[index][this.keyFiled]);
                }

            }
        },
        components: {
            vCheckbox
        }
    }
</script>
