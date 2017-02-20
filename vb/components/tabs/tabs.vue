<script lang="babel">
    const Tabs = {
        name: 'Tabs',
        props: {
            onChange: Function,
            onTableClick: Function,
        },
        data() {
            const baseClass = 'ant-tabs';
            const className = {
                [baseClass]: true,
                [`${baseClass}-top`]: true,
                [`${baseClass}-line`]: true,
            };
            return {
                inkBarOffset: 0,
                inkBarWidth: 0,
                active: undefined,
                baseClass,
                className,
                pane: [],
            };
        },
        created() {
            const childrens = this.getRenderChild();
            childrens.forEach((tab, index) => {
                //这一部分是tabs的标题部分，通过对_tab的注入，修改相关内容
                const _tab = tab.componentOptions.children;
                const ind = tab.componentOptions.propsData.index || index;
                tab.componentOptions.propsData.index = ind;
                _tab.index = ind;
                if (this.active === undefined) {
                    this.active = ind;
                }
                _tab.active = this.active;
                this.pane.push(_tab);
            });
        },
        mounted() {
            const child = this.$children;
            if (child[0]) {
                const inkBarWidth = child[0].$el.offsetWidth;
                this.inkBarWidth = inkBarWidth;
            }
        },
        methods: {
            getRenderChild() {
                this.$options._renderChildren.filter((tab) => tab.context);
                const _childrens = this.$options._renderChildren;
                if (_childrens) {
                    return _childrens.filter((tab) => tab.context);
                } else {
                    return [];
                }
            },
            movePane(e, index, target, className) {
                this.$emit('change', e, index, target);
                if (typeof this.onChange === 'function') {
                    this.onChange(e, index, target);
                }
                this.active = index;
                this.$children.forEach((c) => {
                    const child = c;
                    if (child === target) {
                        child.className[className] = true;
                    } else {
                        child.className[className] = false;
                    }
                });
            },
        },
        render(h) {
            const {className, baseClass} = this;
            const title = this.getRenderChild().filter((tab) => tab.context).map((tab) => {
                const _tab = tab;
                if (_tab.data.on === undefined) {
                    _tab.data.on = {};
                }
                _tab.data.on.click = (e) => {
                    const target = e.target;
                    const {offsetLeft, offsetWidth} = target;
                    this.inkBarWidth = offsetWidth;
                    this.inkBarOffset = offsetLeft;
                };
                return _tab;
            });
            const content = this.pane;
            return (
                <div
                    class={className}
                >
                    <div class={`${baseClass}-bar`}>
                        <div class={`${baseClass}-nav-container`}>
                            <div class={`${baseClass}-nav-wrap`}>
                                <div class={`${baseClass}-nav-scroll`}>
                                    <div class={`${baseClass}-nav ${baseClass}-nav-animated`}>
                                        <div class={`${baseClass}-ink-bar ${baseClass}-ink-bar-animated`}
                                             style={`display: block; transform: translate3d(${this.inkBarOffset}px, 0px, 0px); width: ${this.inkBarWidth}px;`}/>
                                        {title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class={`${baseClass}-content ${baseClass}-content-animated`} style={{
                'margin-left': `-${this.active}00%`,
            }}>
                        {content.map((val) => {
                            let active;
                            const isActive = this.active === val.index;
                            if (isActive) {
                                active = ` ${baseClass}-tabpane-active`;
                            } else {
                                active = ` ${baseClass}-tabpane-inactive`;
                            }
                            const _val = <div class={`${baseClass}-tabpane${active}`}>{val}</div>;
                            return _val;
                        })}
                    </div>
                </div>
            );
        },
    };

    export default Tabs;

</script>

<style lang='less'>
    @import './style/index.less';
    @import '../../style/index.less';
</style>
