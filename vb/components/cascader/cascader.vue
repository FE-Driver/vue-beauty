<template>
    <span :class="pickerCls" v-clickoutside="closeDropdown">
        <span class="ant-cascader-picker-label">{{label}}</span>
        <input type="text" :placeholder="label?'':placeholder" :class="inpCls" value="" readonly="" autocomplete="off" @click="toggleMenu">
        <i v-if="allowClear && defaultValue.length" class="anticon anticon-cross-circle ant-cascader-picker-clear" @click.stop="clear"></i>
        <i class="anticon anticon-down ant-cascader-picker-arrow"></i>
        <transition name="slide-up">
            <div ref="menu" v-show="open" style="max-height: 300px; overflow: auto" :style="style" class="ant-cascader-menus ant-cascader-menus-placement-bottomLeft">
                <div>
                    <vmenu v-for="(item,index) in path" v-model="path[index]" :data="getMenuData(index)" :_key="index" @change="changeMenuValue" :key="item.index"></vmenu>
                </div>
            </div>
        </transition>
    </span>
</template>

<script>
import vmenu from './menu';
import { getOffset } from '../../utils/fn';
import emitter from '../../mixins/emitter';
import clickoutside from '../../directives/clickoutside';

export default {
    name: 'Cascader',
    components: { vmenu },
    directives: { clickoutside },
    mixins: [emitter],
    data: () => ({
        prefix: 'ant-cascader',
        defaultValue: [],
        style: {},
        container: null,
        open: false,
        label: '',
        path: [-1],
    }),
    props: {
        popupContainer: {
            type: Function,
            default: () => document.body,
        },
        position: {
            type: String,
            default: 'absolute',
        },
        data: Array,
        value: {
            type: Array,
            default: () => [],
        },
        placeholder: {
            type: String,
            default: '请选择',
        },
        size: String,
        disabled: {
            type: Boolean,
            default: false,
        },
        allowClear: {
            type: Boolean,
            default: true,
        },
    },
    mounted() {
        this.init();
        this.container = this.popupContainer();
        this.$refs.menu.style.position = this.position;
        this.container.appendChild(this.$refs.menu);

        this.$nextTick(() => {
            this.setPosition();
        });

        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                this.setPosition();
            }, 200);
        });
    },
    beforeDestroy() {
        this.container.removeChild(this.$refs.menu);
    },
    watch: {
        path(val) {
            const value = [];
            const label = [];
            let opt = this.data;

            for (const i of val) {
                if (i < 0) break;
                value.push(opt[i].value);
                label.push(opt[i].label);
                opt = opt[i].children;
            }
            this.defaultValue = value;
            this.$emit('input', value);
            this.$emit('change', value);
            this.dispatch('FormItem', 'form.change', [value]);
            this.label = label.join(' / ');
            this.pathChange = true;
        },
        value() {
            if (this.pathChange) return this.pathChange = false;
            this.init();
        },
    },
    computed: {
        pickerCls() {
            return [
                `${this.prefix}-picker`,
                { [`${this.prefix}-picker-disabled`]: this.disabled },
            ];
        },
        inpCls() {
            const size = { large: 'lg', small: 'sm' }[this.size];

            return [
                'ant-input',
                'ant-cascader-input',
                { [`ant-input-${size}`]: size },
            ];
        },
    },
    methods: {
        init() {
            this.defaultValue = JSON.parse(JSON.stringify(this.value));
            const res = [];
            let opt = this.data;
            for (const val of this.value) {
                for (const [i, item] of opt.entries()) {
                    if (item.value === val) {
                        res.push(i);
                        opt = opt[i].children;
                        break;
                    }
                }
            }
            if (opt) res.push(-1);

            if (this.path.join() !== res.join()) this.path = res;
        },
        clear() {
            this.path = [-1];
        },
        setPosition() {
            if (!this.$el) {
                return;
            }
            const p = getOffset(this.$el, this.container);

            this.style = {
                top: `${p.bottom + 4}px`,
                left: `${p.left}px`,
            };
        },
        getMenuData(index) {
            let res = this.data;
            for (let i = 0; i < index; i++) {
                const s = this.path[i];
                if (res[s].children) {
                    res = res[s].children;
                } else {
                    res = null;
                    break;
                }
            }
            return res;
        },
        closeDropdown() {
            this.open = false;
        },
        toggleMenu() {
            if (this.disabled) return;
            this.open = !this.open;
            if (this.open) {
                this.$nextTick(() => {
                    this.setPosition();
                });
            }
        },
        changeMenuValue(key, i) {
            this.$set(this.path, key, i);
            if (this.getMenuData(key + 1)) {
                this.$set(this.path, key + 1, -1);
                this.path.splice(key + 2, this.path.length - 1 - key - 1);
            } else {
                this.path.splice(key + 1, this.path.length - 1 - key);
                this.open = false;
            }
        },
    },
};
</script>
