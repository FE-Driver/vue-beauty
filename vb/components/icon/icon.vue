<template>
    <i :class="iconClasses">
        <slot></slot>
    </i>
</template>

<script lang="babel">
    export default {
        name: 'Icon',
        data: ()=>({
            prefix: 'anticon'
        }),
        props: {
            type: {
                type: String,
                require: true
            },
            spin: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            iconClasses () {
                return [
                    this.prefix,
                    `${this.prefix}-${this.type}`,
                    {[`${this.prefix}-spin`]: this.spin || this.type === 'loading'}
                ]
            }
        }
    }
</script>
