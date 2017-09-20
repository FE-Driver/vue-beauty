<template>
    <div :class="wrapClasses" :style="{'width': tailWidth}">
        <div class="ant-steps-tail" v-if="!stepLast"><i></i></div>
        <div class="ant-steps-head">
            <div class="ant-steps-head-inner">
                <span v-if="!icon && currentStatus !== 'finish'" class="ant-steps-icon">{{stepNumber}}</span>
                <span v-else :class="'ant-steps-icon anticon anticon-' + iconName"></span>
            </div>
        </div>

        <div class="ant-steps-main" :style="{'maxWidth': maxDescriptionWidth}">
            <div class="ant-steps-title">{{title}}</div>
            <div v-if="description" class="ant-steps-description">{{description}}</div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Step',
    props: {
        status: String,
        title: String,
        description: String,
        icon: String,
    },
    data() {
        return {
            stepLast: Boolean,
            stepNumber: 1,
            iconPrefix: '',
            maxDescriptionWidth: '',
            tailWidth: String,
            currentStatus: this.status,
            rootStatus: false,
        };
    },
    computed: {
        iconName() {
            return this.icon ? this.icon : 'check';
        },
        wrapClasses() {
            return [
                'ant-steps-item',
                `ant-steps-status-${this.currentStatus}`,
                { 'ant-steps-item-last': this.stepLast },
                { [`ant-steps-next-${this.rootStatus}`]: this.rootStatus },
                { 'ant-steps-custom': this.icon },
            ];
        },
    },
};
</script>
