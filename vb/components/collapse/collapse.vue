<template lang="html">
    <div class="ant-collapse" :class="{'ant-collapse-borderless':!bordered}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Collapse',
        props: {
            accordion: {
                type: Boolean,
                default: false,
            },
            activeIndex: {
                type: Array,
                default: () => [],
            },
            bordered: {
                type: Boolean,
                default: true,
            },
        },
        model: {
            prop: 'activeIndex',
        },
        data() {
            return {
                innerActiveIndex: this.accordion ? [this.activeIndex[0]] : [...this.activeIndex],
            };
        },
        mounted() {
            this.$on('item.change', (index, status) => {
                if (this.accordion) {
                    this.innerActiveIndex = status ? [] : [index];
                } else if (status) {
                    const i = this.innerActiveIndex.indexOf(index);
                    if (i !== -1) {
                        this.innerActiveIndex.splice(i, 1);
                    }
                } else if (!this.innerActiveIndex.includes(index)) {
                    this.innerActiveIndex.push(index);
                }
                this.$emit('change', index, !status);
            });
        },
        watch: {
            activeIndex(val) {
                this.innerActiveIndex = val;
            },
            innerActiveIndex(value) {
                this.$emit('input', value);
            },
        },
    };
</script>
