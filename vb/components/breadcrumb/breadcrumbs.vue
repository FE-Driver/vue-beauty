<template lang="html">
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>
<script>

    export default {
        name: 'v-breadcrumbs',
        computed: {
            wrapClasses () {
                return ['ant-breadcrumb']
            }
        }
    }
</script>