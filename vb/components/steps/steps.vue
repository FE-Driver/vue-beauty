<template>
    <div :class="wrapClasses">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Steps',
    props: {
        current: {
            type: Number,
            default: 0,
        },
        status: String,
        size: {
            type: String,
            default: 'process',
        },
        direction: String,
    },
    data() {
        return {
            currentStatus: this.status,
            prefixCls: 'ant-steps',
            maxDescriptionWidth: '100px',
        };
    },
    computed: {
        wrapClasses() {
            return [
                'ant-steps',
                { 'ant-steps-small': this.size === 'small' },
                { 'ant-steps-vertical': this.direction === 'vertical' },
            ];
        },
    },
    watch: {
        current() {
            this.handStatus();
        },
    },
    created() {
        window.addEventListener('resize', () => {
            this.handleTailWidth();
        });
    },
    mounted() {
        this.$nextTick(() => {
            if (this.direction === 'vertical') {
                this.maxDescriptionWidth = 'auto';
            }
            this.handStatus(true);
            this.handleTailWidth();
        });
    },
    methods: {
        handStatus(isInit) {
            const len = this.$children.length - 1;
            this.$children.forEach((child, index) => {
                child.maxDescriptionWidth = this.maxDescriptionWidth;
                child.stepNumber = (index + 1).toString();
                child.stepLast = index === len;
                //                    debugger
                if (isInit && child.currentStatus) {
                    return;
                }

                if (this.currentStatus) {
                    if (index === this.current) {
                        this.$children[index - 1].rootStatus = this.currentStatus;
                        child.currentStatus = this.currentStatus;
                    } else if (index < this.current) {
                        child.currentStatus = 'finish';
                    } else {
                        child.currentStatus = 'wait';
                    }
                } else if (index === this.current) {
                    child.currentStatus = 'process';
                } else if (index < this.current) {
                    child.currentStatus = 'finish';
                } else {
                    child.currentStatus = 'wait';
                }
            });
        },
        handleTailWidth() {
            if (this.direction === 'vertical') {
                return;
            }
            const dom = this.$el;
            const len = this.$el.children.length - 1;
            if (len <= 0) return;
            const width = this.$children[len].$el.offsetWidth;

            this.$children.forEach((child, index) => {
                if (index === len) {
                    child.tailWidth = 'auto';
                } else {
                    child.tailWidth = `${Math.floor((dom.offsetWidth - width - 1) / len)}px`;
                }
            });
        },
    },
};
</script>
