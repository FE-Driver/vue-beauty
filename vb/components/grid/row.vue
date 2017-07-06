<template>
    <div class="ant-row" :class="classes">
        <slot></slot>
    </div>
</template>
<script lang="babel">
    export default {
        name: 'Row',
        props: {
            gutter: Number,
            type: String,
            align: String,
            justify: String,
        },
        mounted() {
            if (this.gutter) {
                this.updateGutter(this.gutter);
            }
        },
        updated() {
            if (this.gutter) {
                this.updateGutter(this.gutter);
            }
        },
        computed: {
            classes() {
                return [
                    this.type ? `ant-row-${this.type}` : '',
                    this.justify ? `ant-row-flex-${this.justify}` : '',
                    this.align ? `ant-row-flex-${this.align}` : '',
                ];
            },
        },
        watch: {
            gutter(value) {
                this.updateGutter(value);
            },
        },
        methods: {
            updateGutter(value) {
                const half = value / 2;
                this.$el.style.marginLeft = `-${half}px`;
                this.$el.style.marginRight = `-${half}px`;

                for (const $child of this.$children) {
                    $child.$el.style.paddingLeft = `${half}px`;
                    $child.$el.style.paddingRight = `${half}px`;
                }
            },
        },
    };
</script>

