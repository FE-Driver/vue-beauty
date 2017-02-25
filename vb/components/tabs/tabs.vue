<template>
    <div :class="tabsCls">
        <div v-if="position == 'bottom'" :class="[contentPrefixCls, animated ? contentPrefixCls + '-animated' : contentPrefixCls + '-no-animated']" :style="contentStyle">
            <slot></slot>
        </div>
        <div role="tablist" :class="prefixCls + '-bar'" tabindex="0">
            <div v-if="(!!$slots && $slots.tabBarExtraContent) || (type === 'editable-card' && !hideAdd)" style="float: right;">
                <div class="ant-tabs-extra-content">
                    <slot name="tabBarExtraContent"></slot>
                    <span v-if="type === 'editable-card' && !hideAdd" @click="onAdd">
                        <i :class="`anticon anticon-plus ${prefixCls}-new-tab`"></i>
                    </span>
                </div>
            </div>
            <div :class="navContainerCls">
                <span v-if="isScroll" unselectable="unselectable"
                      :class="[tabPrefixCls + '-prev',{[tabPrefixCls + '-btn-disabled']: tab_transform == 0}]"
                      @click="before">
                    <span :class="tabPrefixCls + '-prev-icon'"></span>
                </span>
                <span v-if="isScroll" unselectable="unselectable"
                      :class="[tabPrefixCls + '-next',{[tabPrefixCls + '-btn-disabled']: tab_transform + tabWrap >= nav_w}]"
                      @click="next">
                    <span :class="tabPrefixCls + '-next-icon'"></span>
                </span>
                <div :class="navPrefixCls + '-wrap'">
                    <div ref="navScroll" :class="navPrefixCls + '-scroll'">
                        <div ref="nav" :class="[navPrefixCls, animated ? navPrefixCls + '-animated' : navPrefixCls + '-no-animated']"
                             :style="{ transform: 'translate3d(-' + tab_transform + 'px, 0px, 0px)' }">
                            <div :class="[inkBarPrefixCls, animated ? inkBarPrefixCls + '-animated' : inkBarPrefixCls + '-no-animated']" :style="barStyle"></div>
                            <template v-for="(tab, index) in tabs">
                                <div role="tab" v-bind:aria-disabled="tab.disabled" v-bind:aria-selected="index == activeIndex"
                                     :class="[tabPrefixCls, {[tabPrefixCls + '-active']: index == activeIndex, [tabPrefixCls + '-disabled']: tab.disabled}]"
                                     @click="selectTab(index)">
                                    <span v-if="tab.icon !== ''" >
                                        <i :class="'anticon anticon-' + tab.icon"></i>
                                        {{ tab.tab }}
                                        <i v-if="type === 'editable-card'" class="anticon anticon-close" @click.stop="onRemove(tab.tabKey)"></i>
                                    </span>
                                    <template v-else="">
                                        {{ tab.tab }}
                                        <i v-if="type === 'editable-card'" class="anticon anticon-close" @click.stop="onRemove(tab.tabKey)"></i>
                                    </template>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="position != 'bottom'" :class="[contentPrefixCls, animated ? contentPrefixCls + '-animated' : contentPrefixCls + '-no-animated']" :style="contentStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="babel">
    import emitter from '../../mixins/emitter';
    import onWindowResize from '../../utils/resize';

    export default{
        name: 'Tabs',
        mixins: [emitter],
        props: {
            activeTabKey: String,
            tabBarExtraContent: String,
            type: {
                type: String,
                default: 'line'
            },
            size: String,
            position: {
                type: String,
                default: 'top'
            },
            hideAdd: {
                type: Boolean,
                default: false
            },
            animated: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                prefixCls: 'ant-tabs',
                activatedTabKey: this.activeTabKey || 0,
                activeIndex: 0,
                tabs: [],
                tabWidth: 0,
                tabMarginRight: 0,
                tabHeight: 0,
                tabMarginBottom: 0,
                isScroll: false,
                nav_w: 0,
                navScroll_w: 0,
                screenWidth: document.body.clientWidth,
                tabWrap: 0,
                moveWidth: 0,
                tab_transform: 0,
                preTabPanesCount: 0,
            }
        },
        created() {
            let that = this;
            onWindowResize(function () {
                that.screenWidth = document.body.clientWidth;
            });
            this.$on('tabs.disabledItem', function(tabPane) {
                that.disableTab.call(that, tabPane.tabKey, tabPane.disabled);
            });
        },
        mounted() {
            this.updateTabs();
        },
        updated() {
            let that = this;
            setTimeout(function () {
                /* 当有增加或删除操作时，要更新tabs */
                if (that.tabPanesCount() != that.preTabPanesCount) {
                    that.updateTabs();
                }
                /* 直接调用并不会触发视图更新，而在第一次看不到inkBar，所以使用事件排队 */
                that.updateIndicator();
            }, 0);
        },
        methods: {
            tabPanesCount() {
                let count = 0;
                for (let child of this.$children) {
                    if (child.$options.name !== 'TabPane') continue;
                    count++;
                }
                return count;
            },
            updateTabs() {
                let temp_tabs = [];
                let tabPaneIndex = 0;
                for (let child of this.$children) {
                    if (child.$options.name !== 'TabPane') continue;
                    temp_tabs.push({
                        tab: child.tab,
                        icon: child.icon || '',
                        tabKey: child.tabKey || tabPaneIndex,
                        disabled: child.disabled
                    });

                    if (this.activatedTabKey === child.tabKey) {
                        this.activeIndex = tabPaneIndex;
                        this.broadcast('TabPane', 'tabPane.activeTabKey', this.activatedTabKey);
                    }
                    tabPaneIndex++;
                }
                this.$set(this, 'tabs', temp_tabs);
                this.preTabPanesCount = tabPaneIndex;

                if (tabPaneIndex > 0) {
                    if (this.activeIndex >= tabPaneIndex) {
                        /* 防止最后一个被删除后没有内容显示 */
                        this.activeIndex = tabPaneIndex - 1;
                        this.activatedTabKey = this.tabs[this.activeIndex].tabKey;
                        this.broadcast('TabPane', 'tabPane.activeTabKey', this.activatedTabKey);
                    } else if (this.tabs[this.activeIndex].tabKey !== this.activatedTabKey) {
                        /* 删除当前active的tab时，要激活后面一个tab */
                        this.activatedTabKey = this.tabs[this.activeIndex].tabKey;
                        this.broadcast('TabPane', 'tabPane.activeTabKey', this.activatedTabKey);
                    }
                }
            },
            updateIndicator() {
                let tab = this.$el.querySelector('.ant-tabs-tab');
                try {
                    if (this.isVertical){
                        this.tabWidth = 0;
                        this.tabMarginRight = 0;
                        this.tabHeight = tab.offsetHeight;
                        this.tabMarginBottom = parseInt(getComputedStyle(tab, false).marginBottom);
                    } else  {
                        this.tabWidth = tab.offsetWidth;
                        this.tabMarginRight = parseInt(getComputedStyle(tab, false).marginRight);
                        this.tabHeight = 0;
                        this.tabMarginBottom = 0;
                    }
                    this.updateScroll();
                } catch (e) {
                    /* Do nothing */
                }
            },
            updateScroll() {
                this.nav_w = this.$refs.nav.offsetWidth;
                this.navScroll_w = this.$refs.navScroll.offsetWidth;

                if (this.navScroll_w < this.nav_w) {
                    this.isScroll = true;
                } else {
                    this.isScroll = false;
                }
            },
            disableTab(tabKey, disabled) {
                for (let i = 0; i < this.tabs.length; i++) {
                    let tab = this.tabs[i];
                    if (tab.tabKey == tabKey) {
                        this.$set(this.tabs[i], "disabled", disabled);
                        break;
                    }
                }
            },
            selectTab(index) {
                this.activeIndex = index;
                this.activatedTabKey = this.tabs[index].tabKey;
                this.broadcast('TabPane', 'tabPane.activeTabKey', this.activatedTabKey);
                this.$emit('tab-click', this.activatedTabKey);
            },
            before() {
                if (this.tab_transform > 0) {
                    this.tab_transform += -1 * this.moveWidth;
                }
            },
            next() {
                this.tabWrap = this.$el.querySelector('.ant-tabs-nav-scroll').offsetWidth;
                this.moveWidth = Math.floor(this.tabWrap / ( this.tabWidth + 24 )) * ( this.tabWidth + 24 );
                if (this.tab_transform + this.tabWrap < this.nav_w) {
                    this.tab_transform += this.moveWidth;
                }
            },
            onAdd() {
                this.$emit("add");
            },
            onRemove(tabKey) {
                this.$emit("remove", tabKey);
            }
        },
        computed: {
            isVertical() {
                return this.position === 'left' || this.position === 'right';
            },
            tabPrefixCls() { return this.prefixCls + '-tab' },
            navPrefixCls() { return this.prefixCls + '-nav' },
            inkBarPrefixCls() { return this.prefixCls + '-ink-bar' },
            contentPrefixCls() { return this.prefixCls + '-content' },
            tabsCls() {
                const size = {small: 'mini'}[this.size];
                return [
                    this.prefixCls,
                    `${this.prefixCls}-${this.position}`,
                    `${this.prefixCls}-${this.type}`,
                    {
                        [`${this.prefixCls}-card`]: this.type === 'editable-card',
                        [`${this.prefixCls}-${size}`]: !!size,
                        [`${this.prefixCls}-vertical`]: this.isVertical
                    }
                ]
            },
            navContainerCls() {
                return [
                    `${this.navPrefixCls}-container`,
                    {[`${this.navPrefixCls}-container-scrolling`]: this.isScroll}
                ]
            },
            barStyle(){
                let barStyle =  {
                    transform: 'translate3d(' + (this.tabWidth + this.tabMarginRight) * this.activeIndex + 'px, ' +
                                + (this.tabHeight + this.tabMarginBottom) * this.activeIndex + 'px, 0px)'
                };
                if (this.isVertical) {
                    barStyle.height = this.tabHeight + 'px';
                } else {
                    barStyle.width = this.tabWidth + 'px';
                }
                return barStyle;
            },
            contentStyle() {
                let contentStyle =  {};
                if (!this.isVertical) {
                    contentStyle.marginLeft = -100 * this.activeIndex + '%';
                }
                return contentStyle;
            }
        },
        watch: {
            position(value, oldValue) {
                if ( value == 'bottom' || oldValue == 'bottom') {
                    let that = this;
                    setTimeout(function () {
                        that.broadcast('TabPane', 'tabPane.activeTabKey', that.activatedTabKey);
                    }, 0);
                }
            },
            screenWidth() {
                let that = this;
                if (that.resizeThead) {
                    clearTimeout(that.resizeThead);
                }
                that.resizeThead = setTimeout(function () {
                    that.updateScroll();
                }, 300)
            },
            activeTabKey(value) {
                this.activatedTabKey = value;
            },
            activatedTabKey(value) {
                this.$emit('change', value);
            }
        }
    }
</script>
