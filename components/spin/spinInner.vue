<template lang="html">
<div :class="wrapClasses">
    <span class="{{prefix}}-dot"></span>
    <div class="{{prefix}}-text">{{tip}}</div>
</div>
</template>

<script>
import { defaultProps } from '../../utils'
import cx from 'classnames'

export default {
    props: defaultProps({
        prefix: 'ant-spin',
        size: String,
        spinning: true,
        tip: String
    }),
    computed: {
        wrapClasses () {
        const size = {small:'sm',large:'lg'}[this.size];

        return cx({
            [this.prefix]: true,
            [`${this.prefix}-spinning`]: this.spinning,
            [`${this.prefix}-show-text`]: this.tip,
            [`${this.prefix}-${size}`]: size
        })
        }
    }
}
</script>
