<template>
    <div :class="prefixCls + '-step'">
        <span v-for="item in dotsArr" :class="item.pointClass" :style="item.style" :key="item.point"></span>
    </div>
</template>

<script lang="babel">
    function calcPoints(marks, dots, step, min, max) {
        const points = Object.keys(marks).map(parseFloat);
        if (dots) {
            for (let i = min; i <= max; i += step) {
                points.push(i);
            }
        }
        return points;
    }

    export default {
        props: ['prefixCls', 'marks', 'dots', 'step', 'included',
            'lowerBound', 'upperBound', 'max', 'min'],

        computed: {
            dotsArr() {
                return calcPoints(this.marks, this.dots, this.step, this.min, this.max).map((point) => {
                    const res = {};
                    const offset = `${(point - this.min) / (this.max - this.min) * 100}%`;
                    res.point = point;
                    res.style = { left: offset };
                    res.isActived = (!this.included && point === this.upperBound) ||
                        (this.included && point <= this.upperBound && point >= this.lowerBound);
                    res.pointClass = [
                        `${this.prefixCls}-dot`,
                        { [`${this.prefixCls}-dot-active`]: res.isActived },
                    ];
                    return res;
                });
            },
        },
    };
</script>
