<template>
    <div class="ant-tabs ant-tabs-top ant-tabs-line">
        <div role="tablist" class="ant-tabs-bar" tabindex="0">
            <div class="ant-tabs-nav-container ">
                <div class="ant-tabs-nav-wrap">
                    <div class="ant-tabs-nav-scroll">
                        <div class="ant-tabs-nav">
                            <div class="ant-tabs-ink-bar ant-tabs-ink-bar-transition-forward" :style="barSty">
                            </div>
                            <div role="tab" aria-disabled="false" aria-selected="false" :class="['ant-tabs-tab',{'ant-tabs-tab-active': $index == activeIndex}]" v-for="tab in tabs" @click="selectTab($index)">
                                <div class="ant-tabs-tab-inner">
                                    {{tab}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ant-tabs-content">
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import { defaultProps } from '../../utils'
    export default{
        data:()=>({
            prefix: 'ant-tabs',
            activeIndex: 0,
            tabs: [],
            keys: [],
            tabWidth: 0
        }),
        props: defaultProps({
            activeKey: String
        }),
        ready(){
            for(let [index,child] of Object.entries(this.$children)){
                this.tabs.push(child.tab);
                this.keys.push(child.key);

                if(this.activeKey === child.key){
                    this.activeIndex = index;
                    this.$broadcast('activeKey',this.activeKey);
                }
            }
            
            this.$nextTick(()=>{
                this.tabWidth = this.$el.querySelector('.ant-tabs-tab').offsetWidth;
            })
        },
        methods: {
            selectTab(index){
                this.activeIndex = index;
                this.activeKey = this.keys[index];
                this.$broadcast('activeKey',this.activeKey);
            }
        },
        computed: {
            barSty(){
                return {
                    transform: 'translate3d('+120*this.activeIndex+'px, 0px, 0px)',
                    width: this.tabWidth+'px'
                }
            }
        }
    }
</script>