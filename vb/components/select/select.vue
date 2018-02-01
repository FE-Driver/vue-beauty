<template>
    <div :class="wrapCls" v-clickoutside="closeDropdown">
        <div :class="selectionCls" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0" @click="toggleDropdown">
            <div class="ant-select-selection__rendered ant-select__dropdown" :tabindex="search ? false : '0'" @focus="$emit('focus')" @blur="$emit('blur')">
                <template v-if="labels">
                    <ul v-if="multiple">
                        <li v-for="(text,i) in labels" unselectable="unselectable" class="ant-select-selection__choice" :title="text" style="user-select: none" :key="text">
                            <div class="ant-select-selection__choice__content">{{text}}</div>
                            <span class="ant-select-selection__choice__remove" @click="remove(i,text)"></span>
                        </li>
                        <li v-if="search && multiple" class="ant-select-search ant-select-search--inline">
                            <div class="ant-select-search__field__wrap">
                                <input class="ant-select-search__field" v-model="searchVal" :style="multipleSearchStyle" @focus="searchFocus" @blur="searchBlur" ref="searchInput" @keydown.delete="handleInputDelete">
                                <span class="ant-select-search__field__mirror" ref="searchMirror">{{searchVal}}</span>
                            </div>
                        </li>
                    </ul>
                    <div v-else class="ant-select-selection-selected-value" :title="labels" :style="selectedValueStyle">{{labels}}</div>
                </template>
                <div v-show="((multiple && !labels.length) || (!multiple && !labels)) && !searchVal" unselectable="unselectable" class="ant-select-selection__placeholder" style="user-select: none;">{{placeholder}}</div>
                <div v-if="search && !multiple" class="ant-select-search ant-select-search--inline">
                    <div class="ant-select-search__field__wrap">
                        <input class="ant-select-search__field" v-model="searchVal" @focus="searchFocus" @blur="searchBlur" ref="searchInput">
                        <span class="ant-select-search__field__mirror"></span>
                    </div>
                </div>
            </div>
            <span v-if="allowClear && labels && !multiple" unselectable="unselectable" class="ant-select-selection__clear" style="-webkit-user-select: none" @click.stop="clear"></span>
            <span v-if="!multiple" class="ant-select-arrow" unselectable="unselectable" style="user-select: none;">
                <b>
                </b>
            </span>
        </div>
        <transition name="slide-up">
            <div ref="dropdown" v-show="show" style="overflow: auto" :style="dropdownStyle" :class="dropdownCls">
                <div style="overflow: auto;">
                    <ul class="ant-select-dropdown-menu ant-select-dropdown-menu-vertical  ant-select-dropdown-menu-root" role="menu" aria-activedescendant="">
                        <li v-if="loading" unselectable="unselectable" class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled" role="menuitem" aria-selected="false" style="user-select: none;">{{loadingText}}</li>
                        <template v-else>
                            <li v-if="searchVal && remoteMethod && !data.length" unselectable="unselectable" class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled" role="menuitem" aria-selected="false" style="user-select: none;">{{notFoundContent}}</li>
                            <li v-if="searchVal && !remoteMethod && !searchFound" unselectable="unselectable" class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled" role="menuitem" aria-selected="false" style="user-select: none;">{{notFoundContent}}</li>
                            <template v-for="(option,i) in ori_data">
                                <template v-if="option.options">
                                    <li v-show="option.show" class=" ant-select-dropdown-menu-item-group">
                                        <div class="ant-select-dropdown-menu-item-group-title">
                                            {{option[groupLabel]}}
                                        </div>
                                        <ul v-if="option.options.length" class="ant-select-dropdown-menu-item-group-list">
                                            <li v-show="option.show" v-for="(item,index) in option.options" unselectable="unselectable" :class="['ant-select-dropdown-menu-item', {'ant-select-dropdown-menu-item-disabled': item.disabled}, {'ant-select-dropdown-menu-item-selected': item.selected}]" role="menuitem" aria-selected="false" style="user-select: none;" @click="select([i,index])">
                                                <slot :data="option">{{item[label]}}</slot>
                                            </li>
                                        </ul>
                                    </li>
                                </template>
                                <template v-else>
                                    <li v-show="option.show" unselectable="unselectable" :class="['ant-select-dropdown-menu-item', {'ant-select-dropdown-menu-item-disabled': option.disabled}, {'ant-select-dropdown-menu-item-selected': option.selected}]" role="menuitem" aria-selected="false" style="user-select: none;" @click="select(i)">
                                        <slot :data="option">{{option[label]}}</slot>
                                    </li>
                                </template>
                            </template>
                        </template>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import { t } from '../../locale';
import { getOffset } from '../../utils/fn';
import emitter from '../../mixins/emitter';
import clickoutside from '../../directives/clickoutside';

export default {
    name: 'Select',
    mixins: [emitter],
    directives: { clickoutside },
    data() {
        return {
            prefix: 'ant-select',
            innerValue: this.multiple && !this.value ? [] : this.value,
            searchVal: '',
            multipleSearchStyle: {},
            searchFound: false,
            show: false,
            dropdownStyle: {},
            labels: this.multiple ? [] : '',
            ori_data: JSON.parse(JSON.stringify(this.data)),
            isSearchFocus: false,
            dropdownHeight: 0,
            container: null,
        };
    },
    props: {
        clue: {
            type: String,
            default: 'value',
        },
        label: {
            type: String,
            default: 'label',
        },
        groupLabel: {
            type: String,
            default: 'label',
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        notFoundContent: {
            type: String,
            default: () => t('select.notFoundContent'),
        },
        placement: {
            type: String,
            default: 'bottom',
        },
        search: {
            type: Boolean,
            default: false,
        },
        filter: Function,
        maxHeight: {
            type: Number,
            default: 300,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        allowClear: {
            type: Boolean,
            default: true,
        },
        value: {
            type: [Number, String, Array],
            default: '',
        },
        placeholder: {
            type: String,
            default: () => t('select.placeholder'),
        },
        data: {
            type: Array,
            default: () => [],
        },
        popupContainer: {
            type: Function,
            default: () => document.body,
        },
        size: String,
        position: {
            type: String,
            default: 'absolute',
        },
        loading: {
            type: Boolean,
            default: false,
        },
        loadingText: {
            type: String,
            default: () => t('select.loadingText'),
        },
        remoteMethod: Function,
        optionOnChange: {
            type: Boolean,
            default: false,
        },
        dropdownWidth: {
            type: String,
        },
    },
    mounted() {
        this.initVal();
        this.container = this.popupContainer();

        this.$refs.dropdown.style.position = this.position;
        this.container.appendChild(this.$refs.dropdown);

        window.addEventListener('resize', this.setPosition);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.setPosition);
        this.container.removeChild(this.$refs.dropdown);
    },
    watch: {
        innerValue(val) {
            this.$emit('input', val);
            this.dispatch('FormItem', 'form.change', [val]);
            if (this.optionOnChange) {
                this.$nextTick(() => {
                    this.$emit('change', this.getOption(val));
                });
            } else {
                this.$emit('change', val);
            }
        },
        value(val) {
            if (this.innerValue !== val) {
                this.labels = this.multiple ? [] : '';
                this.innerValue = val;
                this.$nextTick(() => {
                    this.initVal();
                });
            }
        },
        searchVal(val) {
            if (this.multiple) {
                this.$nextTick(() => { this.multipleSearchStyle = val ? { width: `${this.$refs.searchMirror.offsetWidth + 2}px` } : {}; });
            }
            if (this.remoteMethod) return this.remoteMethod(val);
            if (val) {
                this.searchFound = false;
                let show = false;
                this.mapData(([type, path, item]) => {
                    const isIncluded = this.filter ? this.filter(val, item) : item[this.label].includes(val);
                    if (isIncluded) this.searchFound = true;

                    if (type === 'item') {
                        this.$set(this.ori_data[path], 'show', isIncluded);
                    } else {
                        this.$set(this.ori_data[path[0]].options[path[1]], 'show', isIncluded);
                        if (isIncluded) show = true;
                    }
                }, (i) => {
                    this.$set(this.ori_data[i], 'show', show);
                    show = false;
                });
            } else {
                this.setData({ show: true }, { show: true });
            }
        },
        data: {
            handler(val) {
                this.ori_data = JSON.parse(JSON.stringify(val));
                this.mapData(([type, path, item]) => {
                    let selected = false;
                    if (this.multiple && this.innerValue.includes(item[this.clue])) {
                        selected = true;
                        this.labels.push(item[this.label]);
                    } else if (!this.multiple && this.innerValue === item[this.clue]) {
                        selected = true;
                        this.labels = item[this.label];
                    }
                    if (type === 'item') {
                        this.$set(this.ori_data[path], 'selected', selected);
                        this.$set(this.ori_data[path], 'show', true);
                    } else {
                        this.$set(this.ori_data[path[0]].options[path[1]], 'selected', selected);
                        this.$set(this.ori_data[path[0]].options[path[1]], 'show', true);
                    }
                }, (i) => {
                    this.$set(this.ori_data[i], 'show', true);
                });
                if (this.show) {
                    this.$nextTick(() => {
                        this.setPosition();
                    });
                }
            },
            deep: true,
        },
    },
    computed: {
        wrapCls() {
            return [
                this.prefix,
                { [`${this.prefix}-disabled`]: this.disabled },
                { [`${this.prefix}-${this.size}`]: this.size },
            ];
        },
        selectionCls() {
            return [
                `${this.prefix}-selection`,
                { [`${this.prefix}-selection--single`]: !this.multiple },
                { [`${this.prefix}-selection--multiple`]: this.multiple },
            ];
        },
        dropdownCls() {
            return [
                `${this.prefix}-dropdown`,
                `${this.prefix}-dropdown-placement-bottomLeft`,
                { [`${this.prefix}-dropdown--single`]: !this.multiple },
                { [`${this.prefix}-dropdown--multiple`]: this.multiple },
            ];
        },
        selectedValueStyle() {
            let opacity = 1;

            // Blur时isSearchFocus为false，但searchVal延时清空了，所以这里单独判断
            if (this.searchVal) {
                opacity = 0;
            } else if (this.isSearchFocus) {
                opacity = 0.4;
            }
            return { opacity };
        },
    },
    methods: {
        getOption(val) {
            let res;
            let selected = val;
            if (this.multiple) {
                res = [];
                selected = [...val];
            }
            this.mapData(([,, item]) => {
                if (this.multiple) {
                    const i = selected.indexOf(item[this.clue]);
                    if (i !== -1) {
                        res.push({ ...item });
                        selected.splice(i, 1);
                        if (!selected.length) return true;
                    }
                } else if (item[this.clue] === val) {
                    res = { ...item };
                    return true;
                }
            });
            return res;
        },
        mapData(callback, groupCallback) {
            for (const [i, opt] of this.ori_data.entries()) {
                if (opt.options) {
                    if (opt.options.length) {
                        for (const [j, item] of opt.options.entries()) {
                            const res = callback(['groupItem', [i, j], item]);
                            if (res) break;
                        }
                        groupCallback && groupCallback(i, opt);
                    }
                } else {
                    const res = callback(['item', i, opt]);
                    if (res) break;
                }
            }
        },
        initVal() {
            this.mapData(([type, path, item]) => {
                let selected = false;
                if (this.multiple && this.innerValue.includes(item[this.clue])) {
                    selected = true;
                    this.labels.push(item[this.label]);
                } else if (!this.multiple && this.innerValue === item[this.clue]) {
                    selected = true;
                    this.labels = item[this.label];
                }
                if (type === 'item') {
                    this.$set(this.ori_data[path], 'selected', selected);
                    this.$set(this.ori_data[path], 'show', true);
                } else {
                    this.$set(this.ori_data[path[0]].options[path[1]], 'selected', selected);
                    this.$set(this.ori_data[path[0]].options[path[1]], 'show', true);
                }
            }, (i) => {
                this.$set(this.ori_data[i], 'show', true);
            });
        },
        getDropdownHeight() {
            this.dropdownHeight = parseFloat(getComputedStyle(this.$refs.dropdown, null).height);
        },
        setData(opt, groupOpt) {
            this.mapData(([type, path]) => {
                if (type === 'item') {
                    for (const [key, val] of Object.entries(opt)) {
                        this.$set(this.ori_data[path], key, val);
                    }
                } else {
                    for (const [key, val] of Object.entries(opt)) {
                        this.$set(this.ori_data[path[0]].options[path[1]], key, val);
                    }
                }
            }, (i) => {
                if (groupOpt) {
                    for (const [key, val] of Object.entries(groupOpt)) {
                        this.$set(this.ori_data[i], key, val);
                    }
                }
            });
        },
        setPosition() {
            this.getDropdownHeight();
            if (!this.$el) return;
            const p = getOffset(this.$el, this.container);
            const dwidth = this.dropdownWidth || `${p.right - p.left}px`;

            this.dropdownStyle = {
                top: `${this.placement === 'top' ? p.top - this.dropdownHeight - 4 : p.bottom + 4}px`,
                left: `${p.left}px`,
                width: dwidth,
                maxHeight: `${this.maxHeight}px`,
            };
        },
        closeDropdown() {
            this.show = false;
        },
        toggleDropdown() {
            if (this.disabled) return;
            if (this.search) {
                this.show = true;
                this.$refs.searchInput.focus();
            } else {
                this.show = !this.show;
            }
            if (this.show) {
                this.$nextTick(() => {
                    this.setPosition();
                });
            }
        },
        searchBlur() {
            this.isSearchFocus = false;
            // 多选时，searchVal必须延迟清空，否则选不上
            setTimeout(() => {
                this.searchVal = '';
            }, 300);
            this.$emit('blur');
        },
        searchFocus() {
            this.isSearchFocus = true;
            this.$emit('focus');
        },
        clear() {
            this.innerValue = '';
            this.labels = '';
            this.setData({ selected: false });
        },
        handleInputDelete() {
            if (this.multiple && this.innerValue.length && this.searchVal === '') {
                this.remove(this.innerValue.length - 1, this.labels[this.innerValue.length - 1]);
            }
        },
        remove(i, text) {
            this.labels.splice(i, 1);
            this.innerValue.splice(i, 1);

            this.mapData(([type, path, item]) => {
                if (item[this.label] === text) {
                    if (type === 'item') {
                        this.$set(this.ori_data[path], 'selected', false);
                    } else {
                        this.$set(this.ori_data[path[0]].options[path[1]], 'selected', false);
                    }
                    return true;
                }
            });
        },
        select(path) {
            let opt;
            if (typeof path === 'number') {
                opt = this.ori_data[path];
            } else {
                opt = this.ori_data[path[0]].options[path[1]];
            }
            if (opt.disabled) return;
            this.searchVal = '';
            if (!this.multiple) this.setData({ selected: false });
            if (this.multiple) {
                if (opt.selected) {
                    const j = this.labels.indexOf(opt[this.label]);
                    this.labels.splice(j, 1);
                    this.innerValue.splice(j, 1);
                } else {
                    this.innerValue.push(opt[this.clue]);
                    this.labels.push(opt[this.label]);
                }
                opt.selected = !opt.selected;
            } else {
                opt.selected = true;
                this.innerValue = opt[this.clue];
                this.labels = opt[this.label];
            }
        },
    },
};
</script>
<style scoped>
.ant-select-selection__choice__remove {
    top: 0
}
.ant-select__dropdown:focus {
    outline: 0px solid transparent;
}
</style>
