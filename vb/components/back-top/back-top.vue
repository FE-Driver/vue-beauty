<template>
    <div class="ant-back-top" v-show="visible" @click='scrollToTop'>
        <slot>
            <div class="ant-back-top-content">
                <i class="ant-back-top-icon anticon anticon-to-top"></i>
            </div>
        </slot>
    </div>
</template>

<script lang="babel">
    const easeInOutCubic = (t, b, c, d) => {
        const cc = c - b;
        let tt = t / (d / 2);
        let result = 0;
        if (tt < 1) {
            result = cc / 2 * tt * tt * tt + b;
        } else {
            result = cc / 2 * ((tt -= 2) * tt * tt + 2) + b;
        }
        return result;
    };

    function getRequestAnimationFrame() {
        let func = () => {};
        if (typeof window !== 'undefined' && window.requestAnimationFrame) {
            func = window.requestAnimationFrame;
        }
        return func;
    }
    const reqAnimFrame = getRequestAnimationFrame();

    function getDefaultTarget() {
        return typeof window !== 'undefined' ? window : null;
    }

    export default {
        name: 'BackTop',
        data: () => ({
            prefix: 'ant-back-top',
            visible: false,
            scrollEvent: null,
        }),
        props: {
            visibilityHeight: {
                type: Number,
                default: 400,
            },
            target: {
                type: Function,
            },
        },
        mounted() {
            this.handleScroll();
            (this.target || getDefaultTarget)().addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy() {
            const targetNode = (this.target || getDefaultTarget)();
            if (targetNode) {
                targetNode.removeEventListener('scroll', this.handleScroll);
            }
        },
        methods: {
            handleScroll() {
                const scrollTop = this.getScroll((this.target || getDefaultTarget)(), true);
                this.visible = scrollTop > this.visibilityHeight;
            },
            getScroll(target, top) {
                if (typeof window === 'undefined') {
                    return 0;
                }

                const prop = top ? 'pageYOffset' : 'pageXOffset';
                const method = top ? 'scrollTop' : 'scrollLeft';
                const isWindow = target === window;

                let ret = isWindow ? target[prop] : target[method];
                // ie6,7,8 standard mode
                if (isWindow && typeof ret !== 'number') {
                    ret = window.document.documentElement[method];
                }

                return ret;
            },
            scrollToTop() {
                const scrollTop = this.getCurrentScrollTop();
                const startTime = Date.now();
                const frameFunc = () => {
                    const timestamp = Date.now();
                    const time = timestamp - startTime;
                    this.setScrollTop(easeInOutCubic(time, scrollTop, 0, 450));
                    if (time < 450) {
                        reqAnimFrame(frameFunc);
                    }
                };
                reqAnimFrame(frameFunc);
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
            getCurrentScrollTop() {
                const targetNode = (this.target || getDefaultTarget)();
                if (targetNode === window) {
                    return window.pageYOffset ||
                        document.body.scrollTop ||
                        document.documentElement.scrollTop;
                }
                return targetNode.scrollTop;
            },
        },
    };

</script>
