<template>
    <div class="ant-row" :class="classes">
        <slot></slot>
    </div>
</template>
<script lang="babel">
    export default {
        name: 'vRow',
        props: {
            gutter: Number,
            type: String,
            align: String,
            justify: String
        },
        mounted(){
            console.log("mounted");
            if (this.gutter) {
                console.log("mounted + gutter");

                let half = this.gutter / 2;
                this.$el.style.marginLeft = -half + 'px';
                this.$el.style.marginRight = -half + 'px';

                for (let $child of this.$children) {
                    $child.$el.style.paddingLeft = half + 'px';
                    $child.$el.style.paddingRight = half + 'px';
                }
            }
        },
        updated(){
            console.log("updated");
            if (this.gutter) {
                console.log("updated + gutter");

                let half = this.gutter / 2;
                this.$el.style.marginLeft = -half + 'px';
                this.$el.style.marginRight = -half + 'px';

                for (let $child of this.$children) {
                    $child.$el.style.paddingLeft = half + 'px';
                    $child.$el.style.paddingRight = half + 'px';
                }
            }
        },
        computed: {
            classes () {
                return [
                    this.type ? `ant-row-${this.type}` : '',
                    this.justify ? `ant-row-flex-${this.justify}` : '',
                    this.align ? `ant-row-flex-${this.align}` : '',
                ]
            }
        },
        watch: {
            gutter(value) {
                let half = value / 2;
                this.$el.style.marginLeft = -half + 'px';
                this.$el.style.marginRight = -half + 'px';

                for (let $child of this.$children) {
                    $child.$el.style.paddingLeft = half + 'px';
                    $child.$el.style.paddingRight = half + 'px';
                }
            }
        }
    }
</script>

