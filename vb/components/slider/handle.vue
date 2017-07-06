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
                let eventMask = document.querySelector('#v-slider-event-mask');
                if (!eventMask) {
                    eventMask = document.createElement('div');
                    eventMask.id = 'v-slider-event-mask';
                    eventMask.style.cssText = [
                        'width:100%',
                        'height:100%',
                        'position:absolute',
                        'z-index:1000',
                        'top:0',
                        'left:0',
                        'cursor:pointer',
                    ].join(';');
                    document.body.appendChild(eventMask);
                    eventMask.addEventListener('mouseup', this.onDragEnd);
                } else {
                    eventMask.style.display = 'block';
                }
            },

            onDragEnd() {
                if (this.$children[0]) this.$children[0].visible = false;
                const eventMask = document.querySelector('#v-slider-event-mask');
                if (eventMask) {
                    eventMask.style.display = 'none';
                }
            },
        },
        beforeDestroy() {
            const eventMask = document.querySelector('#v-slider-event-mask');
            if (eventMask) {
                document.body.removeChild(eventMask);
            }
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
