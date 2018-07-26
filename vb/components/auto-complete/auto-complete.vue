<template>
    <v-select
        ref="test"
        search
        :data="data"
        v-model="value"
        @search="search"
        @change="select"
        :placeholder="placeholder"
        :filter="filter"
        @blur="blur"
        @focus="focus"
    >
        <template slot-scope="{data}">
            <slot :data="data">{{data.label}}</slot>
        </template>
    </v-select>
</template>

<script lang="babel">
import { t } from '../../locale';

export default {
    name: 'AutoComplete',
    props: {
        data: {
            type: Array,
            default: () => [],
        },
        placeholder: {
            type: String,
            default: () => t('common.placeholder2'),
        },
        filter: Function,
    },
    data() {
        return {
            value: '',
        };
    },
    created() {
        const { value } = this.$attrs;
        this.value = value;
    },
    methods: {
        search(val) {
            this.$emit('search', val);
        },
        select(val) {
            this.$emit('select', val);
        },
        blur() {
            this.$emit('blur');
        },
        focus() {
            this.$emit('focus');
        },
    },
};
</script>
