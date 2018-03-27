<template>
    <v-select
      search
      style="width: 100%"
      :data="data"
      v-model="value"
      @search="search"
    ></v-select>
</template>

<script lang="babel">
    export default {
        name: 'AutoComplete',
        props: {
            data: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                value: '',
            };
        },
        watch: {
            value(val) {
                this.$emit('select', val);
            },
        },
        methods: {
            search(val) {
                this.$emit('search', val);
            },
        },
    };
</script>