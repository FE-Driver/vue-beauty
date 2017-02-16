<template>
    <div :class="[prefixCls, loading ? prefixCls + '-loading' : '', bordered ? prefixCls + '-bordered': '']">
        <div :class="prefixCls + '-head'" v-if="title">
            <h3 :class="prefixCls + '-head-title'">{{title}}</h3>
        </div>
        <template v-if="$slots.extra || extra">
            <div :class="prefixCls + '-extra'">
                <slot name="extra"></slot>
            </div>
        </template>
        <div :class="prefixCls + '-body'" :style="bodyStyle">
            <div v-if="loading">
                <p :class="prefixCls + '-loading-block'" style="width: 94%"></p>
                <p>
                    <span :class="prefixCls + '-loading-block'" style="width: 28%" ></span>
                    <span :class="prefixCls + '-loading-block'" style="width: 62%" ></span>
                </p>
                <p>
                    <span :class="prefixCls + '-loading-block'" style="width: 22%" ></span>
                    <span :class="prefixCls + '-loading-block'" style="width: 66%" ></span>
                </p>
                <p>
                    <span :class="prefixCls + '-loading-block'" style="width: 56%" ></span>
                    <span :class="prefixCls + '-loading-block'" style="width: 39%" ></span>
                </p>
                <p>
                    <span :class="prefixCls + '-loading-block'" style="width: 21%" ></span>
                    <span :class="prefixCls + '-loading-block'" style="width: 15%" ></span>
                    <span :class="prefixCls + '-loading-block'" style="width: 40%" ></span>
                </p>
            </div>
            <slot v-else></slot>
        </div>
    </div>
</template>

<script lang="babel">
    export default {
        name: 'Card',
        data: () => ({
            prefixCls: 'ant-card',
            extra: false,
        }),
        props: {
            title: String,
            bordered: {
                type: Boolean,
                default: true
            },
            loading: {
                type: Boolean,
                default: false
            },
            bodyStyle: Object,
        },
    }
</script>