<template>
  <div v-if="hasSlot" :class="[`${prefix}-nested-loading`]">
    <div v-if="spinning">
      <spin-inner :size="size" :spinning="spinning" :tip="tip" :prefix="prefix"></spin-inner>
    </div>
    <div :class="containerCls">
      <slot></slot>
    </div>
  </div>
  <spin-inner v-else :size="size" :spinning="spinning" :tip="tip" :prefix="prefix"></spin-inner>
</template>

<script>
import spinInner from './spinInner';

export default {
    components: { spinInner },
    name: 'Spin',
    data() {
        return {
            prefix: 'ant-spin',
            hasSlot: false,
            delay: 0,
        };
    },
    props: {
        spinning: {
            type: Boolean,
            default: true,
        },
        size: {
            type: String,
        },
        tip: {
            type: String,
        },
    },
    mounted() {
        if (this.$slots && this.$slots.default) {
            this.hasSlot = true;
        }
    },
    computed: {
        containerCls() {
            return [
                `${this.prefix}-container`,
                { [`${this.prefix}-blur`]: this.spinning },
            ];
        },
    },
};
</script>
