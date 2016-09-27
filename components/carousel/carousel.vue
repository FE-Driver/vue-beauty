<template>
    <div :class="wrapClasses">
        <inner-slider
            :dots="dots"
            :fade="fade"
            :autoplay="autoplay"
            :easing="easing"
            :draggable="draggable"
            :vertical="vertical"
            :before-change="beforeChange"
            :after-change="afterChange">
            <slot></slot>
        </inner-slider>
  </div>
</template>

<script lang="babel">
    // matchMedia polyfill for
    // https://github.com/WickyNilliams/enquire.js/issues/82
    if (typeof window !== 'undefined') {
        const matchMediaPolyfill = function matchMediaPolyfill() {
            return {
                matches: false,
                addListener: function () {
                },
                removeListener: function () {
                }
            };
        };
      window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }
    import InnerSlider from './InnerSlider.vue'
    import props from './props'

    export default {
        name:'v-carousel',
        props: props,
        components: { InnerSlider },
        data () {
            return {};
        },
        computed: {
            wrapClasses () {
                return [
                    this.prefixCls,
                    {[`${this.prefixCls}-vertical`]: !!this.vertical}
                ]
            }
        }
    }
</script>
