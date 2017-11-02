<template>
    <span :class="avatarCls">
        <img :src="src" v-if="src">
        <i v-else-if="icon" :class="['anticon', `anticon-${icon}`]"></i>
        <span v-else :class="`${prefixCls}-string`" :style="childrenStyle" ref="children">
            <slot></slot>
        </span>
    </span>
</template>
<script>
export default {
    name: 'Avatar',
    data() {
        return {
            prefixCls: 'ant-avatar',
            scale: 1,
            isSlotShow: false,
        };
    },
    props: {
        size: {
            type: String,
            default: 'circle',
        },
        src: String,
        shape: {
            type: String,
            default: 'default',
        },
        icon: String,
    },
    computed: {
        avatarCls() {
            const size = { large: 'lg', small: 'sm' }[this.size];

            return [
                this.prefixCls,
                `${this.prefixCls}-${this.shape}`,
                {
                    [`${this.prefixCls}-${size}`]: !!size,
                    [`${this.prefixCls}-icon`]: !!this.icon,
                    [`${this.prefixCls}-image`]: !!this.src,
                },
            ];
        },
        childrenStyle() {
            let style = {};
            if (this.isSlotShow) {
                style = {
                    msTransform: `scale(${this.scale})`,
                    WebkitTransform: `scale(${this.scale})`,
                    transform: `scale(${this.scale})`,
                    position: 'absolute',
                    display: 'inline-block',
                    left: `calc(50% - ${Math.round(this.$refs.children.offsetWidth / 2)}px)`,
                };
            }
            return style;
        },
    },
    methods: {
        setScale() {
            this.isSlotShow = !this.src && !this.icon;
            if (this.$refs.children) {
                const childrenWidth = this.$refs.children.offsetWidth;
                const avatarWidth = this.$el.getBoundingClientRect().width;
                // add 4px gap for each side to get better performance
                if (avatarWidth - 8 < childrenWidth) {
                    this.scale = (avatarWidth - 8) / childrenWidth;
                } else {
                    this.scale = 1;
                }
            }
        },
    },
    mounted() {
        this.setScale();
    },
    updated() {
        this.setScale();
    },
};
</script>

