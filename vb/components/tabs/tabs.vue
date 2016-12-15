<template>
    <div class="ant-tabs ant-tabs-top ant-tabs-line">
        <div role="tablist" class="ant-tabs-bar" tabindex="0">
            <div :class="containerCls">
                <span v-if="isScroll" unselectable="unselectable" class="ant-tabs-tab-prev ant-tabs-tab-btn-disabled"><span class="ant-tabs-tab-prev-icon"></span></span>
                <span v-if="isScroll" unselectable="unselectable" class="ant-tabs-tab-next" @click="next"><span class="ant-tabs-tab-next-icon"></span></span>
                <div class="ant-tabs-nav-wrap">
                    <div class="ant-tabs-nav-scroll" v-el:nav-scroll>
                        <div class="ant-tabs-nav" v-el:nav style="transform:translate3d(0px, 0px, 0px)">
                            <div class="ant-tabs-ink-bar ant-tabs-ink-bar-transition-forward" :style="barSty"></div>
                            <div role="tab" aria-disabled="false" aria-selected="false" :class="['ant-tabs-tab',{'ant-tabs-tab-active': $index == activeIndex},{'ant-tabs-tab-disabled':tab.disabled}]" v-for="tab in tabs" @click="selectTab($index)">
                                <div class="ant-tabs-tab-inner">
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
            navScroll_w:0
        }),
        props: defaultProps({
            activeKey: String
        }),
        ready(){
            let temp_tabs = [];
            for(let [index,child] of Object.entries(this.$children)){
                let temp = {};
                temp.tab = child.tab;
                temp.key = child.key;
                temp.disabled = child.disabled;
                temp_tabs.push(temp);

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
            },
            next(){
                let now = getComputedStyle(this.$els.nav,false).transform;
                console.log(now)
            }
        },
        computed: {
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
            }
        }
    }
</script>
