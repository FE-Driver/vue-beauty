<template>
  <transition name="fade">
    <div
      v-if="show"
      :class="classObject"
      @click="handleClick"
    >
      <div class="ant-back-top-content" v-if="normal">
        <i class="anticon anticon-to-top ant-back-top-icon"/>
      </div>
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  import reqAnimFrame from '../../utils/getRequestAnimationFrame';

  function getDefaultTarget() {
    return typeof window !== 'undefined' ?
      window : null;
  }
  function easeInOutCubic(xt, b, c, d) {
    const cc = c - b;
    let t = xt / (d / 2);
    if (t < 1) {
      return cc / 2 * t * t * t + b;
    }
    return cc / 2 * ((t -= 2) * t * t + 2) + b;
  }
  function currentScrollTop() {
    return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
  }
  const BackTop = {
    name: 'BackTop',
    props: ['visibilityHeight'],
    data() {
      const baseClass = 'ant-back-top';
      const visibilityHeight = this.visibilityHeight;
      return {
        normal: false,
        classObject: {
          [baseClass]: true,
        },
        show: false,
        scrollTop: parseInt(visibilityHeight, 10) || 400,
        scrollEvent: null,
        resizeEvent: null,
      };
    },
    methods: {
      toggleDisplay() {
        if (currentScrollTop() > this.scrollTop) {
          if (this.show) return;
          this.show = true;
        } else {
          if (!this.show) return;
          this.show = false;
        }
      },
      setScrollTop(value) {
        const targetNode = (this.target || getDefaultTarget)();
        if (targetNode === window) {
          document.body.scrollTop = value;
          document.documentElement.scrollTop = value;
        } else {
          targetNode.scrollTop = value;
        }
      },
      scrollToTop() {
        const scrollTop = currentScrollTop();
        const startTime = Date.now();
        const frameFunc = () => {
          const timestamp = Date.now();
          const time = timestamp - startTime;
          this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
          if (time < 450) {
            reqAnimFrame()(frameFunc);
          }
        };
        reqAnimFrame()(frameFunc);
      },
      handleClick(e) {
        this.scrollToTop();
        this.$emit('click', e);
      },
    },
    beforeMount() {
      if (this.$slots.default === undefined) {
        this.normal = true;
      }
    },
    mounted() {
      this.scrollEvent = window.addEventListener('scroll', this.toggleDisplay);
      this.resizeEvent = window.addEventListener('resize', this.toggleDisplay);
    },
  };

  export default BackTop;

</script>

<style scoped lang='less'>
  @import './style/index.less';

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
