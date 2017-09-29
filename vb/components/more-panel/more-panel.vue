<template>
    <div :class="prefix">
        <div :class="prefix+'-body'" :style="{height:height}">
            <div :class="prefix+'-form'" ref="panelForm" :style="{paddingRight: panelPR}">
                <slot name="form"></slot>
                <div :class="prefix+'-control'" :style="controlStyle" ref="panelControl">
                    <slot name="control"></slot>
                </div>
            </div>
        </div>
        <slot></slot>
        <div href="javascript:;" :class="prefix+'-btn'" @click="click" v-show="showBtn">
            <span class="anticon" :class="'anticon-'+btnIcon"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MorePanel',
    data: () => ({
        prefix: 'ant-more-panel',
        collapse: true,
        bindResize: false,
        showBtn: false,
        panelPR: 0,
    }),
    props: {
        originalHeight: {
            type: [Number, String],
            default: 34,
        },
        controlStyle: {
            type: Object,
            default: () => ({}),
        },
    },
    watch: {
        showBtn() {
            this.panelPR = `${this.$refs.panelControl.offsetWidth}px`;
        },
    },
    computed: {
        height() {
            return this.collapse ? `${this.originalHeight}px` : 'auto';
        },
        btnIcon() {
            return this.collapse ? 'down' : 'up';
        },
    },
    mounted() {
        this.panelPR = `${this.$refs.panelControl.offsetWidth}px`;
        this.ifShowBtn();

        if (!this.bindResize) {
            window.addEventListener('resize', this.ifShowBtn, false);
            this.bindResize = true;
        }
    },
    methods: {
        ifShowBtn() {
            if (!this.$el) return;

            this.$nextTick(() => {
                this.showBtn = this.$refs.panelForm.offsetHeight > this.originalHeight;
            });
        },
        click() {
            this.collapse = !this.collapse;
        },
    },
    beforeDestroy() {
        if (this.bindResize) {
            window.removeEventListener('resize', this.ifShowBtn);
        }
    },
};
</script>