<template>
    <div :style="wrapStyle"></div>
</template>

<script lang="babel">
    export default {
        props: ['offset', 'length', 'included'],
        computed: {
            wrapStyle() {
                return {
                    left: `${this.offset}%`,
                    width: `${this.length}%`,
                    visibility: this.included ? 'visible' : 'hidden',
                };
            },
        },
    };
</script>
