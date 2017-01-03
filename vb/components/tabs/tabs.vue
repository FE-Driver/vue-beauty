<template>
    <div :class="tabsCls">
        <div role="tablist" class="ant-tabs-bar" tabindex="0">
            <div :class="containerCls">
                <span v-if="isScroll" unselectable="unselectable" :class="['ant-tabs-tab-prev',{'ant-tabs-tab-btn-disabled': tab_transform == 0}]" @click="before">
                    <span class="ant-tabs-tab-prev-icon"></span>
                </span>
                <span v-if="isScroll" unselectable="unselectable" :class="['ant-tabs-tab-next',{'ant-tabs-tab-btn-disabled': tab_transform + tabWrap >= nav_w}]" @click="next"><span class="ant-tabs-tab-next-icon"></span></span>
                <div class="ant-tabs-nav-wrap">
                    <div class="ant-tabs-nav-scroll" v-el:nav-scroll>
                        <div class="ant-tabs-nav" v-el:nav  :style="{ transform: 'translate3d(-' + tab_transform + 'px, 0px, 0px)' }">
                            <div class="ant-tabs-ink-bar ant-tabs-ink-bar-transition-forward" :style="barSty"></div>
                            <div role="tab" aria-disabled="false" aria-selected="false"
                                 :class="['ant-tabs-tab',{'ant-tabs-tab-active': $index == activeIndex},{'ant-tabs-tab-disabled':tab.disabled}]"
                                 v-for="tab in tabs" @click="selectTab($index)">
                                <div class="ant-tabs-tab-inner">
                                    <i v-if="tab.icon !== ''" class="anticon anticon-{{tab.icon}}"></i>
                                    {{tab.tab}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ant-tabs-content ant-tabs-content-animated" :style="contentSty">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { defaultProps } from '../../utils'
    export default{
        name: 'v-tabs',
        data:()=>({
            prefix: 'ant-tabs',
            activeIndex: 0,
            tabs: [],
            tabWidth: 0,
            tabMarginRight: 0,
            isScroll: false,
            nav_w:0,
            navScroll_w:0,
            tabWrap: 0,
            moveWidth: 0,
            tab_transform: 0
        }),
        props: defaultProps({
            activeKey: String,
            size: String
        }),
        ready(){
            let temp_tabs = [];
            for(let [index,child] of Object.entries(this.$children)){
                temp_tabs.push({
                    tab: child.tab,
                    icon: child.icon || '',
                    key: child.key || index,
                    disabled: child.disabled
                });

                if(this.activeKey === child.key){
                    this.activeIndex = index;
                    this.$broadcast('activeKey',this.activeKey);
                }
            }
            this.$set('tabs',temp_tabs);

            this.$nextTick(()=>{
                let tab = this.$el.querySelector('.ant-tabs-tab');
                this.tabWidth = tab.offsetWidth;
                this.tabMarginRight = parseInt(getComputedStyle(tab,false).marginRight);

                this.nav_w = this.$els.nav.offsetWidth;
                this.navScroll_w = this.$els.navScroll.offsetWidth;

                if(this.navScroll_w < this.nav_w) this.isScroll = true;
            })
        },
        methods: {
            selectTab(index){
                this.activeIndex = index;
                this.activeKey = this.tabs[index].key;
                this.$broadcast('activeKey',this.activeKey);
                this.$emit('tabclick',this.activeKey)
            },
            before() {
                if ( this.tab_transform > 0 ) {
                    this.tab_transform += -1 * this.moveWidth;
                }
            },
            next() {
                this.tabWrap = this.$el.querySelector('.ant-tabs-nav-scroll').offsetWidth;
                this.moveWidth =  Math.floor( this.tabWrap / ( this.tabWidth + 24 ) ) * ( this.tabWidth + 24 );
                if ( this.tab_transform + this.tabWrap < this.nav_w ) {
                    this.tab_transform += this.moveWidth;
                }
            }
        },
        computed: {
            tabsCls(){
                const size = {small: 'mini'}[this.size];
                return [
                    this.prefix,
                    `${this.prefix}-top`,
                    `${this.prefix}-line`,
                    {[`${this.prefix}-${size}`]: size}
                ]
            },
            containerCls(){
                return [
                    'ant-tabs-nav-container',
                    {'ant-tabs-nav-container-scrolling': this.isScroll}
                ]
            },
            barSty(){
                return {
                    transform: 'translate3d('+(this.tabWidth+this.tabMarginRight)*this.activeIndex+'px, 0px, 0px)',
                    width: this.tabWidth+'px'
                }
            },
            contentSty() {
                return {
                    'margin-left': -100 * this.activeIndex + '%'
                }
            },
            tabSty() {
                return {
                    transform: 'translate3d('+(this.tabWidth)* -5 +'px, 0px, 0px)'
                }
            }
        }
    }
</script>
