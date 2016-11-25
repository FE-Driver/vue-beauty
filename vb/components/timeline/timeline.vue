<template>
    <ul :class="wrapClasses">
        <slot></slot>
    </ul>
</template>
<script lang="babel">
    import { defaultProps, oneOfType } from '../../utils'
    import Vue from 'vue'
    import vTimelineItem from './timelineItem.vue'

    export default {
        name: 'v-timeline',
        props: defaultProps({
            prefixCls: 'ant-timeline',
            pending: oneOfType([Boolean, String])
        }),
        ready (){
            this._mapPropsToChildComponent()
        },
        computed: {
            wrapClasses () {
                return [
                    `${this.prefixCls}`,
                    {[`${this.prefixCls}-pending`]: !!this.pending}
                ]
            }
        },
        methods: {
            _mapPropsToChildComponent () {
                const len = this.$children.length
                this.$children.forEach((child, index) => {
                    child.last = index === len - 1
                })

                if (this.pending) {
                    const pendingNode = typeof this.pending === 'boolean' ? '' : this.pending;

                    const _TimelineItem = Vue.extend({
                        template: `<v-timeline-item :pending="true">${pendingNode}</v-timeline-item>`,
                        components: {vTimelineItem}
                    })


                    new _TimelineItem().$mount().$appendTo(this.$el);
                }
            }
        }
    }
</script>