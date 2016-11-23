<template lang="html">
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>
<script>
    import cx from 'classnames'

    export default {
        name: 'v-breadcrumbs',
        computed: {
            wrapClasses () {
                return cx({
                    ['ant-breadcrumb']: 1
                })
            }
        }
    }
</script>