<template>
    <div :class="wrapClasses">
        <span :class="prefix +'-dot'">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </span>
        <div v-show="showTip" :class="prefix + '-text'">{{tip}}</div>
    </div>
</template>

<script>

export default {
    props: {
        prefix: {
            type: String,
            default: 'ant-spin',
        },
        spinning: {
            type: Boolean,
            default: true,
        },
        size: {
            type: String,
        },
        tip: {
            type: String,
        },
    },
    computed: {
        wrapClasses() {
            const size = { small: 'sm', large: 'lg' }[this.size];

            return [
                this.prefix,
                {
                    [`${this.prefix}-spinning`]: this.spinning,
                    [`${this.prefix}-show-text`]: this.tip,
                    [`${this.prefix}-${size}`]: size,
                },
            ];
        },
        showTip() {
            return !!this.tip;
        },
    },
};
</script>
