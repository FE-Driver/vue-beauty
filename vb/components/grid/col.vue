<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>
<script lang="babel">
    export default {
        name: 'Col',
        props: {
            span: [String, Number],
            offset: [String, Number],
            push: [String, Number],
            pull: [String, Number],
            order: [String, Number],
            xs: [Number, Object],
            sm: [Number, Object],
            md: [Number, Object],
            lg: [Number, Object],
        },
        data() {
            return {
                prefixCls: 'ant-col',
            }
        },
        computed: {
            classes () {
                const props = this;
                const prefixCls = this.prefixCls;
                let sizeClassObj = {};
                ['xs', 'sm', 'md', 'lg'].forEach(size => {
                    let sizeProps = {};
                    if (typeof props[size] === 'number') {
                        sizeProps.span = props[size];
                    } else if (typeof props[size] === 'object') {
                        sizeProps = props[size] || {};
                    }

                    sizeClassObj = Object.assign({}, sizeClassObj, {
                        [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
                        [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
                        [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
                        [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
                        [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
                    });
                });
                return [
                    this.span ? `${prefixCls}-${this.span}` : '',
                    this.offset ? `${prefixCls}-offset-${this.offset}` : '',
                    this.push ? `${prefixCls}-push-${this.push}` : '',
                    this.pull ? `${prefixCls}-pull-${this.pull}` : '',
                    this.order ? `${prefixCls}-order-${this.order}` : '',
                    sizeClassObj
                ]
            }
        }
    }
</script>
