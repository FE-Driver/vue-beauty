<template>
    <div
        v-bind:class="className"
        @click="handle"
    >
        {{this.tab}}
    </div>
</template>
<script>
    const TabPane = {
        name: 'Tabpane',
        props: ['index', 'tab'],
        data() {
            const baseClass = 'ant-tabs-tab';
            const className = {
                [baseClass]: true,
                [`${baseClass}-active`]: false,
            };
            return {
                baseClass,
                className,
            };
        },
        created() {
        },
        methods: {
            handle(e) {
                this.$emit('click', e);
                const baseClass = this.baseClass;
                this.$parent.movePane(e, this.index, this, `${baseClass}-active`);
            },
        },
    };

    export default TabPane;

</script>

<style scoped lang='less'>
    @import './style/index.less';
</style>
