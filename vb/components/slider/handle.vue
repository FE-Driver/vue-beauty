<template>
    <div v-if="noTip"
         :style="{left: offset + '%'}"
         @mousedown="onMouseDown"></div>

    <div v-else
         :style="{left: offset + '%'}"
         @mousedown="onMouseDown">
        <tooltip ref="tooltip" class="draggable-button-wrapper" placement="top" :controlled="dragging" :content="tipValue">
            <div class="draggable-button"></div>
        </tooltip>
    </div>
</template>

<script lang="babel">
    import Tooltip from '../tooltip';

    export default {
        props: ['offset', 'tipTransitionName', 'tipFormatter', 'value', 'dragging', 'noTip'],

        components: { Tooltip },
        data() {
            return {};
        },

        computed: {
            tipValue() {
                return this.tipFormatter ? this.tipFormatter(this.value) : this.value;
            },
        },

        methods: {
            onMouseDown() {
                if (this.disabled) return;
                window.addEventListener('mouseup', this.onDragEnd);
            },

            onDragEnd() {
                if (this.$children[0]) this.$children[0].visible = false;
                window.removeEventListener('mouseup', this.onDragEnd);
            },
        },
    };
</script>

<style lang="less">
    .draggable-button-wrapper {
        position: relative;
        width: 14px;
        height: 14px;
        .draggable-button {
            position: relative;
            top: -4px;
            left: -2px;
            width: 14px;
            height: 14px;
            border: 2px solid #5cadff;
            border-radius: 50%;
            background-color: #fff;
            transition: all .2s linear;
            opacity: 0;
        }
        .ant-tooltip {
            top: -50px !important;
            left: 50% !important;
            margin-left: -19px;
        }
    }
 </style>
