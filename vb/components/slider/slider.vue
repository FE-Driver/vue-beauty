<template>
    <div
            ref="slider"
            :class="sliderClasses"
            @touchstart="onTouchStart"
            @mousedown="onMouseDown">
        <pathway
                :class="prefixCls + '-track'"
                :included="included"
                :offset="lowerOffset"
                :length="upperOffset - lowerOffset"></pathway>
        <handle
                :class="prefixCls + '-handle'"
                :no-tip="isNoTip"
                :tip-transition-name="tipTransitionName"
                :tip-formatter="tipFormatter"
                :offset="upperOffset"
                v-model="upperBound"
                :dragging="handle === 'upperBound'"></handle>
        <handle
                v-if="range"
                :class="prefixCls + '-handle'"
                :no-tip="isNoTip"
                :tip-transition-name="tipTransitionName"
                :tip-formatter="tipFormatter"
                :offset="lowerOffset"
                v-model="lowerBound"
                :dragging="handle === 'lowerBound'"></handle>
        <dots
                :prefix-cls="prefixCls"
                :marks="marks"
                :dots="dots"
                :step="step"
                :included="included"
                :lower-bound="lowerBound"
                :upper-bound="upperBound"
                :max="max"
                :min="min"></dots>
        <marks
                :prefix-cls="prefixCls + '-mark'"
                :marks="marks"
                :included="included"
                :lower-bound="lowerBound"
                :upper-bound="upperBound"
                :max="max"
                :min="min"></marks>
        <slot></slot>
    </div>
</template>

<script lang="babel">
    import isEmpty from 'lodash/isEmpty';
    import Pathway from './track';
    import Handle from './handle';
    import Dots from './dots';
    import Marks from './marks';

    function isNotTouchEvent(e) {
        return e.touches.length > 1 ||
            (e.type.toLowerCase() === 'touchend' && e.touches.length > 0);
    }

    function getTouchPosition(e) {
        return e.touches[0].pageX;
    }

    function getMousePosition(e) {
        return e.pageX;
    }

    function pauseEvent(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function addEventListener(target, eventName, eventListener) {
        if (target.addEventListener) {
            target.addEventListener(eventName, eventListener, false);
            return {
                remove() {
                    target.removeEventListener(eventName, eventListener, false);
                },
            };
        } else if (target.attachEvent) {
            target.attachEvent(`on${eventName}`, eventListener);
            return {
                remove() {
                    target.detachEvent(`on${eventName}`, eventListener);
                },
            };
        }
    }

    export default {
        name: 'Slider',

        components: { Pathway, Handle, Dots, Marks },

        props: {
            tipTransitionName: {
                type: String,
                default: '',
            },
            min: {
                type: Number,
                default: 0,
            },
            max: {
                type: Number,
                default: 100,
            },
            step: {
                type: Number,
                default: 1,
            },
            value: {
                type: [Number, Array],
            },
            marks: {
                type: Object,
                default() {
                    return {};
                },
            },
            included: {
                type: Boolean,
                default: true,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            dots: {
                type: Boolean,
                default: false,
            },
            range: {
                type: Boolean,
                default: false,
            },
            tipFormatter: {
                type: Function,
                default(value) {
                    return value;
                },
            },
        },

        data() {
            return {
                prefixCls: 'ant-slider',
                handle: null,
                recent: null,
                lowerBound: null,
                upperBound: null,
            };
        },

        mounted() {
            const initialValue = this.range ? [this.min, this.max] : this.min;
            const value = this.value != null ? this.value : initialValue;
            this.updateValue(value);
        },

        computed: {
            sliderClasses() {
                return [
                    this.prefixCls,
                    { [`${this.prefixCls}-with-marks`]: !isEmpty(this.marks) },
                    { [`${this.prefixCls}-disabled`]: this.disabled },
                    { [this.className]: !!this.className },
                ];
            },

            isNoTip() {
                return this.tipFormatter === null;
            },

            upperOffset() {
                return this.calcOffset(this.upperBound);
            },

            lowerOffset() {
                return this.calcOffset(this.lowerBound);
            },
        },

        watch: {
            value(value) {
                this.updateValue(value);
            },
        },

        methods: {
            updateValue(value) {
                let upperBound;
                let lowerBound;
                if (this.range) {
                    lowerBound = this.trimAlignValue(value[0]);
                    upperBound = this.trimAlignValue(value[1]);
                } else {
                    upperBound = this.trimAlignValue(value);
                }

                let recent;
                if (this.range && upperBound === lowerBound) {
                    if (lowerBound === this.max) {
                        recent = 'lowerBound';
                    }
                    if (upperBound === this.min) {
                        recent = 'upperBound';
                    }
                } else {
                    recent = 'upperBound';
                }

                this.recent = recent;
                this.upperBound = upperBound;
                this.lowerBound = (lowerBound || this.min);
            },
            onChange(handle, value) {
                const isNotControlled = this.value == null;
                if (isNotControlled) {
                    this.$set(this, handle, value);
                }
                this[handle] = value;
                this.$emit('change', this.getValue());
                this.$emit('input', this.getValue());
            },

            onTouchStart(e) {
                if (this.disabled) {
                    return;
                }
                if (isNotTouchEvent(e)) {
                    return;
                }

                const position = getTouchPosition(e);
                this.onStart(position);
                this.addDocumentEvents('touch');
                pauseEvent(e);
            },

            onTouchMove(e) {
                if (isNotTouchEvent(e)) {
                    this.end('touch');
                    return;
                }

                const position = getTouchPosition(e);
                this.onMove(e, position);
            },

            onMouseDown(e) {
                if (this.disabled) {
                    return;
                }
                const position = getMousePosition(e);
                this.onStart(position);
                this.addDocumentEvents('mouse');
                pauseEvent(e);
            },

            onMouseMove(e) {
                const position = getMousePosition(e);
                this.onMove(e, position);
            },

            onStart(position) {
                this.$emit('before-change', this.getValue());

                const value = this.calcValueByPos(position);
                this.startValue = value;
                this.startPosition = position;

                const { upperBound, lowerBound } = this;

                let valueNeedChanging = 'upperBound';
                if (this.range) {
                    const isLowerBoundCloser =
                        Math.abs(upperBound - value) > Math.abs(lowerBound - value);
                    if (isLowerBoundCloser) {
                        valueNeedChanging = 'lowerBound';
                    }

                    const isAtTheSamePoint = (upperBound === lowerBound);
                    if (isAtTheSamePoint) {
                        valueNeedChanging = this.recent;
                    }

                    if (isAtTheSamePoint && (value !== upperBound)) {
                        valueNeedChanging = value < upperBound ? 'lowerBound' : 'upperBound';
                    }
                }

                this.handle = valueNeedChanging;
                this.recent = valueNeedChanging;

                const oldValue = this[valueNeedChanging];
                if (value === oldValue) return;

                this.onChange(valueNeedChanging, value);
            },

            onMove(e, position) {
                pauseEvent(e);
                const diffPosition = position - this.startPosition;
                const diffValue = diffPosition / this.getSliderLength() * (this.max - this.min);

                const value = this.trimAlignValue(this.startValue + diffValue);
                const oldValue = this[this.handle];
                if (value === oldValue) return;

                this.onChange(this.handle, value);
            },

            addDocumentEvents(type) {
                if (type === 'touch') {
                    // just work for chrome iOS Safari and Android Browser
                    this.onTouchMoveListener = addEventListener(document, 'touchmove', this.onTouchMove.bind(this));
                    this.onTouchUpListener = addEventListener(document, 'touchend', this.end.bind(this, 'touch'));
                } else if (type === 'mouse') {
                    this.onMouseMoveListener = addEventListener(document, 'mousemove', this.onMouseMove.bind(this));
                    this.onMouseUpListener = addEventListener(document, 'mouseup', this.end.bind(this, 'mouse'));
                }
            },

            removeEvents(type) {
                if (type === 'touch') {
                    this.onTouchMoveListener.remove();
                    this.onTouchUpListener.remove();
                } else if (type === 'mouse') {
                    this.onMouseMoveListener.remove();
                    this.onMouseUpListener.remove();
                }
            },

            end(type) {
                this.removeEvents(type);
                this.$emit('after-change', this.getValue());
                this.$emit('input', this.getValue());
                this.handle = null;
            },

            getValue() {
                const { lowerBound, upperBound } = this;
                return this.range ? [lowerBound, upperBound] : upperBound;
            },

            getSliderLength() {
                const slider = this.$refs.slider;
                if (!slider) {
                    return 0;
                }

                return slider.clientWidth;
            },

            getSliderStart() {
                const slider = this.$refs.slider;
                const rect = slider.getBoundingClientRect();

                return rect.left;
            },

            getPrecision() {
                const stepString = this.step.toString();
                let precision = 0;
                if (stepString.indexOf('.') >= 0) {
                    precision = stepString.length - stepString.indexOf('.') - 1;
                }
                return precision;
            },

            trimAlignValue(v) {
                const { handle, lowerBound, upperBound, marks, step, min, max } = this;

                let val = v;
                if (val <= min) {
                    val = min;
                }
                if (val >= max) {
                    val = max;
                }
                if (handle === 'upperBound' && val <= lowerBound) {
                    val = lowerBound;
                }
                if (handle === 'lowerBound' && val >= upperBound) {
                    val = upperBound;
                }

                const points = Object.keys(marks).map(parseFloat);
                if (step !== null) {
                    const closestStep = Math.round(val / step) * step;
                    points.push(closestStep);
                }

                const diffs = points.map(point => Math.abs(val - point));
                const closestPoint = points[diffs.indexOf(Math.min(...diffs))];
                return step !== null ?
                    parseFloat(closestPoint.toFixed(this.getPrecision())) : closestPoint;
            },

            calcOffset(value) {
                const { min, max } = this;
                const ratio = (value - min) / (max - min);
                return ratio * 100;
            },

            calcValue(offset) {
                const { min, max } = this;
                const ratio = offset / this.getSliderLength();
                return ratio * (max - min) + min;
            },

            calcValueByPos(position) {
                const pixelOffset = position - this.getSliderStart();
                const nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
                return nextValue;
            },
        },
    };

</script>
