<template>
    <div :class="wrapClasses">
        <div v-el:list class="slick-list"
             @mousedown="_swipeStart"
             @mousemove="_swipeMove"
             @mouseup="_swipeEnd"
             @mouseleave="_swipeEnd"
             @touchstart="_swipeStart"
             @touchmove="_swipeMove"
             @touchend="_swipeEnd"
             @touchcancel="_swipeEnd">
            <v-track
                v-ref:track
                :fade="fade"
                :css-ease="cssEase"
                :speed="speed"
                :infinite="infinite"
                :current-slide="currentSlide"
                :lazy-load="lazyLoad"
                :lazy-loaded-list="lazyLoadedList"
                :slide-width="slideWidth"
                :slides-to-show="slidesToShow"
                :slide-count.sync="slideCount"
                :track-style="trackStyle"
                :variable-width="variableWidth">
                <slot></slot>
            </v-track>
        </div>
        <ul :class="dotsClass" v-if="dots" :style="{display: 'block'}">
            <li v-for="dot in dotsArray" track-by="$index" :key="$index" :class="{'slick-active': currentSlide === $index * slidesToScroll}">
                <button @click="_dotHandler($index)">{{$index}}</button>
            </li>
        </ul>
    </div>
</template>

<script lang="babel">
    const checkSpecKeys = function (spec, keysArray) {
        return keysArray.reduce((value, key) => {
            return value && spec.hasOwnProperty(key)
        }, true) ? null : console.error('Keys Missing', spec)
    };

    const getTrackCSS = function (spec) {
        checkSpecKeys(spec, [
            'left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth'
        ]);

        let trackWidth

        if (spec.variableWidth) {
            trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth + 'px'
        } else if (spec.centerMode) {
            trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth + 'px'
        } else {
            trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth + 'px'
        }

        let style = {
            opacity: 1,
            width: trackWidth,
            WebkitTransform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
            transform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
            transition: '',
            WebkitTransition: '',
            msTransform: 'translateX(' + spec.left + 'px)'
        };

        if (!window.addEventListener && window.attachEvent) {
            style.marginLeft = spec.left + 'px'
        }

        return style
    };

    const getTrackAnimateCSS = function (spec) {
        checkSpecKeys(spec, [
            'left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase'
        ]);

        let style = getTrackCSS(spec)
        // useCSS is true by default so it can be undefined
        style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase
        style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase
        return style
    };

    const getTrackLeft = function (spec) {
        checkSpecKeys(spec, [
            'slideIndex', 'trackRef', 'infinite', 'slideCount', 'slidesToShow',
            'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth']);

        let slideOffset = 0;
        let targetLeft;
        let targetSlide;

        if (spec.fade) {
            return 0;
        }

        if (spec.infinite) {
            if (spec.slideCount > spec.slidesToShow) {
                slideOffset = (spec.slideWidth * spec.slidesToShow) * -1;
            }
            if (spec.slideCount % spec.slidesToScroll !== 0) {
                if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
                    if (spec.slideIndex > spec.slideCount) {
                        slideOffset = ((spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth) * -1
                    } else {
                        slideOffset = ((spec.slideCount % spec.slidesToScroll) * spec.slideWidth) * -1
                    }
                }
            }
        }

        if (spec.centerMode) {
            if (spec.infinite) {
                slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2)
            } else {
                slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2)
            }
        }

        targetLeft = ((spec.slideIndex * spec.slideWidth) * -1) + slideOffset

        if (spec.variableWidth === true) {
            let targetSlideIndex;
            if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
                targetSlide = spec.trackRef.childNodes[spec.slideIndex]
            } else {
                targetSlideIndex = (spec.slideIndex + spec.slidesToShow);
                targetSlide = spec.trackRef.childNodes[targetSlideIndex];
            }
            targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
            if (spec.centerMode === true) {
                if (spec.infinite === false) {
                    targetSlide = spec.trackRef.children[spec.slideIndex];
                } else {
                    targetSlide = spec.trackRef.children[(spec.slideIndex + spec.slidesToShow + 1)]
                }

                targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
                targetLeft += (spec.listWidth - targetSlide.offsetWidth) / 2;
            }
        }

        return targetLeft;
    };

    import { addEndEventListener, removeEndEventListener } from "../../utils"
    import vTrack from './Track.vue'
    import props from './props'
    export default {
        props: props,
        components: { vTrack },
        data () {
            return {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                slideCount: null,
                slideWidth: null,
                swipeLeft: null,
                touchObject: {
                    startX: 0,
                    startY: 0,
                    curX: 0,
                    curY: 0
                },
                lazyLoadedList: [],
                mounted: false,
                initialized: false,
                edgeDragged: false,
                swiped: false,
                trackStyle: {},
                trackWidth: 0
            }
        },

        computed: {
            wrapClasses () {
                return [
                    `slick-initialized`,
                    `slick-slider`,
                    {[`${this.className}`]: !!this.className}
                ]
            },

            dotsArray () {
                if(this.dots) {
                    const dotCount = Math.ceil(this.slideCount / this.slidesToScroll);
                    return Array.apply(null, Array(dotCount + 1).join('0').split(""));
                } else {
                    return [];
                }

            }
        },
        ready () {
            this.children = this.$refs.track.$el.children;
            this._initialize();
            const lazyLoadedList = [];
            for(let i = 0; i < this.children.length; i++) {
                if(i >= this.currentSlide && i < this.currentSlide + this.slidesToShow) {
                    lazyLoadedList.push(i);
                }
            }
            if(this.lazyLoadedList && this.lazyLoadedList.length === 0) {
                this.lazyLoadedList = lazyLoadedList;
            }
        },

        beforeDestory () {
            // 清除可能存在的自动播放
            if (this.autoPlayTimer) {
                window.clearTimeout(this.autoPlayTimer);
            }
        },

        methods: {
            _initialize () {
                this.mounted = true;
                // 有几个
                const slideCount = this.children.length;
                // 整个列表的宽度
                const listWidth = this._getWidth(this.$els.list);
                // 元素的宽度
                const trackWidth = this._getWidth(this.$refs.track.$el);
                // slide的宽度
                const slideWidth = this._getWidth(this.$el) / this.slidesToShow;

                // 当前是第几个
                const currentSlide = this.rtl ? slideCount - 1 - this.initialSlide : this.initialSlide;

                // 这里加了如果是infinite状态就会加上克隆的个数了
                //this.slideCount = slideCount;
                this.slideWidth = slideWidth;
                this.listWidth = listWidth;
                this.trackWidth = trackWidth;
                this.currentSlide = currentSlide;
                Object.assign(this.$data, this);

                const targetLeft = getTrackLeft(Object.assign({
                    slideIndex: this.currentSlide,
                    trackRef: this.$refs.track
                }, this.$data));

                const trackStyle = getTrackCSS(Object.assign({left: targetLeft}, this));

                this.trackStyle = trackStyle;
                this._autoPlay();
            },

            _getWidth (elem) {
                return elem.getBoundingClientRect().width || elem.offsetWidth;
            },

            _slideHandler (index) {
                let targetSlide, currentSlide;
                let targetLeft, currentLeft;
                let callback;

                if (this.currentSlide === index) {
                    return;
                }

                if (this.fade) {
                    currentSlide = this.currentSlide;

                    if (index < 0) {
                        targetSlide = index + this.slideCount;
                    } else if (index >= this.slideCount) {
                        targetSlide = index - this.slideCount;
                    } else {
                        targetSlide = index;
                    }
                    if (this.lazyLoad && this.lazyLoadedList.indexOf(targetSlide) < 0) {
                        this.lazyLoadedList = this.lazyLoadedList.concat(targetSlide)
                    }

                    // 划完的回调
                    callback = () => {
                        this.animating = false;
                        if (this.afterChange) {
                            this.afterChange(currentSlide);
                        }
                        removeEndEventListener(this.$refs.track.$el.children[currentSlide], callback);
                    };

                    this.animating = true;
                    this.currentSlide = targetSlide;

                    addEndEventListener(this.$refs.track.$el.children[currentSlide], callback);

                    if (this.beforeChange) {
                        this.beforeChange(this.currentSlide, currentSlide);
                    }

                    this._autoPlay();
                    return;
                }

                targetSlide = index;
                if (targetSlide < 0) {
                    if (this.infinite === false) {
                        currentSlide = 0;
                    } else if (this.slideCount % this.slidesToScroll !== 0) {
                        currentSlide = this.slideCount - (this.slideCount % this.slidesToScroll);
                    } else {
                        currentSlide = this.slideCount + targetSlide;
                    }
                } else if (targetSlide >= this.slideCount) {
                    if (this.infinite === false) {
                        currentSlide = this.slideCount - this.slidesToShow;
                    } else if (this.slideCount % this.slidesToScroll !== 0) {
                        currentSlide = 0;
                    } else {
                        currentSlide = targetSlide - this.slideCount;
                    }
                } else {
                    currentSlide = targetSlide;
                }

                targetLeft = getTrackLeft(Object.assign({
                    slideIndex: targetSlide,
                    trackRef: this.$refs.track
                }, this.$data));

                currentLeft = getTrackLeft(Object.assign({
                    slideIndex: currentSlide,
                    trackRef: this.$refs.track
                }, this.$data));

                if (this.infinite === false) {
                    targetLeft = currentLeft;
                }
                if (this.beforeChange) {
                    this.beforeChange(this.currentSlide, currentSlide);
                }

                if (this.lazyLoad) {
                    var loaded = true;
                    var slidesToLoad = [];
                    for (var i = targetSlide; i < targetSlide + this.slidesToShow; i++) {
                        loaded = loaded && (this.lazyLoadedList.indexOf(i) >= 0);
                        if (!loaded) {
                            slidesToLoad.push(i);
                        }
                    }
                    if (!loaded) {
                        this.lazyLoadedList = this.lazyLoadedList.concat(slidesToLoad)
                    }
                }

                if (this.useCSS === false) {
                    this.currentSlide = currentSlide;
                    this.trackStyle = getTrackCss(Object.assign({
                        left: currentLeft
                    }, this.$data));
                    if (this.afterChange) {
                        this.afterChange(currentSlide);
                    }
                } else {
                    var nextStateChanges = {
                        animating: false,
                        currentSlide: currentSlide,
                        trackStyle: getTrackCSS(Object.assign({left: currentLeft}, this.$data)),
                        swipeLeft: null
                    };
                    callback = () => {
                        this.animating = nextStateChanges.animating;
                        this.currentSlide = nextStateChanges.currentSlide;
                        this.trackStyle = nextStateChanges.trackStyle;
                        this.swipeLeft = nextStateChanges.swipeLeft;
                        if (this.afterChange) {
                            this.afterChange(currentSlide);
                        }
                        removeEndEventListener(this.$refs.track.$el, callback);
                    };
                    this.animating = true;
                    this.currentSlide = targetSlide;
                    this.trackStyle = getTrackAnimateCSS(Object.assign({left: targetLeft}, this.$data));
                    if(this.$refs.track.$el) {
                        addEndEventListener(this.$refs.track.$el, callback);
                    }

                }

                this._autoPlay();
            },

            _swipeDirection (touchObject) {
                let xDist, yDist, r, swipeAngle;
                xDist = touchObject.startX - touchObject.curX;
                yDist = touchObject.startY - touchObject.curY;
                r = Math.atan2(yDist, xDist);
                swipeAngle = Math.round(r * 180 / Math.PI);
                if (swipeAngle < 0) {
                    swipeAngle = 360 - Math.abs(swipeAngle);
                }
                if ((swipeAngle <= 45) && (swipeAngle >= 0) || (swipeAngle <= 360) && (swipeAngle >= 315)) {
                    return 'left';
                }
                if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
                    return 'right';
                }
                return 'vertical';
            },

            _autoPlay () {
                const play = () => {
                    if (this.mounted) {
                        this._slideHandler(this.currentSlide + this.slidesToScroll);
                    }
                };
                // 自动播放
                if (this.autoplay) {
                    window.clearTimeout(this.autoPlayTimer);
                    this.autoPlayTimer = window.setTimeout(play, this.autoplaySpeed);
                }
            },

            _clickHandler (options, e) {
                e && e.preventDefault();
                this._changeSlide(options);
                this.clickHandler(options, e);
            },

            _dotHandler (i) {
                this._clickHandler({
                    message: 'dots',
                    index: i,
                    slidesToScroll: this.slidesToScroll,
                    currentSlide: this.currentSlide
                })
            },

            _changeSlide (options) {
                let indexOffset, slideOffset, unevenOffset, targetSlide;
                unevenOffset = (this.slideCount % this.slidesToScroll !== 0)
                indexOffset = unevenOffset ? 0 : (this.slideCount - this.currentSlide) % this.slidesToScroll
                if (options.message === 'dots') {
                    // Click on dots
                    targetSlide = options.index * options.slidesToScroll;
                    if (targetSlide === options.currentSlide) {
                        return;
                    }
                }
                this._slideHandler(targetSlide);
            },

            _swipeStart (e) {
                let posX, posY;

                if ((this.swipe === false) || ('ontouchend' in document && this.swipe === false)) {
                    return;
                } else if (this.draggable === false && e.type.indexOf("mouse") !== -1) {
                    return;
                }
                posX = (e.touches !== undefined) ? e.touches[0].pageX : e.clientX;
                posY = (e.touches !== undefined) ? e.touches[0].pageY : e.clientY;

                this.dragging = true;
                this.touchObject = {
                    startX: posX,
                    startY: posY,
                    curX: posX,
                    curY: posY
                };
            },

            _swipeMove (e) {
                if (!this.dragging) {
                    return;
                }

                if (this.animating) {
                    return;
                }

                let swipeLeft;
                let curLeft, positionOffset;
                const touchObject = this.touchObject;

                curLeft = getTrackLeft(Object.assign({
                    slideIndex: this.currentSlide,
                    trackRef: this.$refs.track
                }, this.$data));

                touchObject.curX = (e.touches) ? e.touches[0].pageX : e.clientX;
                touchObject.curY = (e.touches) ? e.touches[0].pageY : e.clientY;
                touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));

                positionOffset = touchObject.curX > touchObject.startX ? 1 : -1;

                var currentSlide = this.currentSlide;
                var dotCount = Math.ceil(this.slideCount / this.slidesToScroll);
                var swipeDirection = this._swipeDirection(this.touchObject);
                var touchSwipeLength = touchObject.swipeLength;

                if (this.infinite === false) {
                    if ((currentSlide === 0 &&
                        swipeDirection === 'right') ||
                        (currentSlide + 1 >= dotCount && swipeDirection === 'left')) {
                        touchSwipeLength = touchObject.swipeLength * this.edgeFriction;

                        //                    if(this.edgeDragged === false && this.edgeEvent) {
                        //                        this.edgeEvent(swipeDirection);
                        //                        this.edgeDragged = true;
                        //                    }
                    }
                }

                if (this.swiped === false && this.swipeEvent) {
                    this.swipeEvent(swipeDirection);
                    this.swiped = true;
                }

                swipeLeft = curLeft + touchSwipeLength * positionOffset;
                this.touchObject = touchObject;
                this.swipeLeft = swipeLeft;
                this.trackStyle = getTrackCSS(Object.assign({left: swipeLeft}, this.$data))
                if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
                    return;
                }
                if (touchObject.swipeLength > 4) {
                    e.preventDefault();
                }
            },

            _swipeEnd(e) {
                if (!this.dragging) {
                    return;
                }

                const touchObject = this.touchObject;
                // 最小滑动距离
                const minSwipe = this.listWidth / this.touchThreshold;
                const swipeDirection = this._swipeDirection(touchObject);

                // reset
                this.dragging = false;
                this.edgeDragged = false;
                this.swiped = false;
                this.swipeLeft = null;
                this.touchObject = {};

                if (!touchObject.swipeLength) {
                    return;
                }

                if (touchObject.swipeLength > minSwipe) {
                    e.preventDefault();
                    if (swipeDirection === 'left') {
                        this._slideHandler(this.currentSlide + this.slidesToScroll);
                    } else if (swipeDirection === 'right') {
                        this._slideHandler(this.currentSlide - this.slidesToScroll);
                    } else {
                        this._slideHandler(this.currentSlide);
                    }
                } else {
                    var currentLeft = getTrackLeft(Object.assign({
                        slideIndex: this.currentSlide,
                        trackRef: this.$refs.track
                    }, this.$data));

                    this.trackStyle = getTrackAnimateCSS(Object.assign({left: currentLeft}, this.$data));
                }

            }
        }
    };
</script>
