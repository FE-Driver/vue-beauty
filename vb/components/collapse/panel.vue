<template lang="html">
    <div class="ant-collapse-item" :class="{'ant-collapse-item-active': open}">
        <div class="ant-collapse-header" @click="handleOpen" :aria-expanded="open">
            <i class="arrow"></i>
            <slot name="header">{{header}}</slot>
        </div>
        <div class="ant-collapse-content"
            :class="[prefix+'-anim-active']" 
            v-show="open">
            <div class="ant-collapse-content-box">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="babel">
    import emitter from '../../mixins/emitter';

    export default {
        name: 'Panel',
        mixins: [emitter],
        data: () => ({
            prefix: 'ant-collapse',
            open: false,
        }),
        props: {
            index: String,
            header: String,
        },
        mounted() {
            this.setChecked();
        },
        computed: {
            innerValue() {
                return JSON.parse(JSON.stringify(this.$parent.innerActiveIndex));
            },
        },
        watch: {
            innerValue() {
                this.setChecked();
            },
        },
        methods: {
            handleOpen() {
                this.dispatch('Collapse', 'item.change', [this.index, this.open]);
            },
            setChecked() {
                this.open = this.innerValue.includes(this.index);
            },
        },
    };
</script>
