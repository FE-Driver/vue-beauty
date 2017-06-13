<template>
    <div :class="prefixCls">
        <span v-for="item in marksArr"
              :class="item.className"
              :style="item.style"
              :key="item.point">
            {{ marks[item.point] }}
        </span>
    </div>
</template>

<script lang="babel">
    export default {
        props: ['prefixCls', 'marks', 'included', 'upperBound', 'lowerBound', 'max', 'min'],

        computed: {
            marksKeys() {
                return Object.keys(this.marks);
            },
            markWidth() {
                return (100 / (this.marksKeys.length - 1)) * 0.9;
            },
            marksArr() {
                const that = this;
                return this.marksKeys.map(parseFloat).map((point) => {
                    const res = {};
                    res.point = point;
                    res.isActived = (!that.included && point === that.upperBound) ||
                        (that.included && point <= that.upperBound && point >= that.lowerBound);
                    res.className = [
                        `${that.prefixCls}-text`,
                        { [`${that.prefixCls}-text-active`]: res.isActived },
                    ];
                    res.style = {
                        width: `${that.markWidth}%`,
                        left: `${(point - that.min) / (that.max - that.min) * 100 - that.markWidth / 2}%`,
                    };
                    return res;
                });
            },
        },
    };
</script>
