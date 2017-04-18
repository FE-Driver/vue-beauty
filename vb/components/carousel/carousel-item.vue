<template>
    <div class="slick-slide" :style="styles"><slot></slot></div>
</template>
<script>
    const prefixCls = 'ant-carousel-item';

    export default {
        name: 'CarouselItem',
        data() {
            return {
                prefixCls,
                width: 0,
                height: 'auto',
                left: 0,
            };
        },
        computed: {
            styles() {
                return {
                    width: `${this.width}px`,
                    height: `${this.height}`,
                    left: `${this.left}px`,
                };
            },
        },
        mounted() {
            this.$parent.slotChange();
        },
        beforeDestroy() {
            this.$parent.slotChange();
        },
    };
</script>
