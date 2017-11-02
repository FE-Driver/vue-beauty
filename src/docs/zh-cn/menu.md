<script>
const data = [{
    name: '导航一',
    icon: 'mail',
    groups: [{
        groupName: "分组1",
        list: [{
            name: "选项1"
        },{
            name: "选项2"
        }]
    }, {
        groupName: "分组2",
        list: [{
            name: "选项3"
        },{
            name: "选项4"
        }]
    }]
},{
    name: '导航二',
    icon: 'appstore',
    expand: true,
    children: [{
        name: "选项5",
        selected: true
    },{
        name: "选项6"
    },{
        name: "三级导航",
        children: [{
            name: "选项7"
        },{
            name: "选项8"
        }]
    }]
},{
    name: '导航三',
    icon: 'setting',
    children: [{
        name: "选项9"
    },{
        name: "选项10"
    },{
        name: "选项11"
    },{
        name: "选项12"
    }]
}]
export default {
    data:()=> ({
        mode: 'inline',
        theme: 'dark',
        collapsed: false,
        collapsedMenuData: [{
            name: '选项1',
            icon: 'mail',
        }, {
            name: '选项2',
            icon: 'appstore',
        }, {
            name: '选项3',
            icon: 'lock',
        }, {
            name: '导航1',
            icon: 'setting',
            children: [{
                name: "选项4"
            },{
                name: "选项5"
            },{
                name: "选项6"
            },{
                name: "选项7"
            }]
        }, {
            name: '导航2',
            icon: 'desktop',
            children: [{
                name: "选项8"
            },{
                name: "选项9"
            },{
                name: "选项10"
            }]
        }],
        horizontalMnueData: [{
            name: '导航一',
            icon: 'mail'
        },{
            name: '导航二',
            icon: 'appstore',
            disabled: true
        },{
            name: '导航三-子菜单',
            icon: 'setting',
            groups: [{
                groupName: "分组1",
                list: [{
                    name: "选项1"
                },{
                    name: "选项2"
                }]
            }, {
                groupName: "分组2",
                list: [{
                    name: "选项3"
                },{
                    name: "选项4"
                }]
            }]
        },{
            name: '导航四-链接',
            href: "http://www.alipay.com/",
            target: '_blank'
        }],
        inlineMenuData: JSON.parse(JSON.stringify(data)),
        verticalMenuData: JSON.parse(JSON.stringify(data)),
        themeMenuData: JSON.parse(JSON.stringify(data)),
        modeMenuData: JSON.parse(JSON.stringify(data)),
        customMenuData: [{
            name: "首页",
            icon: 'home',
            selected: true,
            disabled: true,
            href: '/components/card'
        },{
            name: "安装指南",
            icon: 'mail',
            children: [{
                href: {
                    name: 'menu',
                    query: {
                        src: 'http://test.api.g7s.chinawayltd.com/iframe.html#apilog/index.html'
                    }
                },
                name: "快速上手"
            },{
                href: "/development",
                name: "开发指南",
                disabled: true
            }]
        },{
            name: "基础组件",
            icon: 'folder',
            groups: [{
                groupName: "Basic",
                list: [{
                    href: "/components/layout",
                    name: "布局"
                }]
            },{
                groupName: "Form",
                list: [{
                    href: "/components/radio",
                    name: "按钮"
                }]
            }]
        }]
    }),
    methods: {
        itemclick(data) {
            console.log(data)
        }
    }
}
</script>

# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。  
更多布局和导航的范例可以参考：[常用布局](https://ant.design/docs/spec/layout-cn)。

## 代码演示

::: demo

<summary>
  #### 顶部导航
  水平的顶部导航菜单。
</summary>

```html
<template>                   
    <v-menu mode="horizontal" :data="horizontalMnueData"  @item-click="itemclick"></v-menu>
</template> 
<script>
export default {
    data:()=> ({
        horizontalMnueData: [{
            name: '导航一',
            icon: 'mail'
        },{
            name: '导航二',
            icon: 'appstore',
            disabled: true
        },{
            name: '导航三-子菜单',
            icon: 'setting',
            groups: [{
                groupName: "分组1",
                list: [{
                    name: "选项1"
                },{
                    name: "选项2"
                }]
            }, {
                groupName: "分组2",
                list: [{
                    name: "选项3"
                },{
                    name: "选项4"
                }]
            }]
        },{
            name: '导航四-链接',
            href: "http://www.alipay.com/",
            target: '_blank'
        }]
    })
}
</script>
```
:::

::: demo

<summary>
  #### 内嵌菜单
  垂直菜单，子菜单内嵌在菜单区域。
</summary>

```html
<template>                
    <v-menu style="width:240px" mode="inline" :data="inlineMenuData"></v-menu>
</template>
<script>
export default {
    data:()=> ({
        inlineMenuData: [{
            name: '导航一',
            icon: 'mail',
            groups: [{
                groupName: "分组1",
                list: [{
                    name: "选项1"
                },{
                    name: "选项2"
                }]
            }, {
                groupName: "分组2",
                list: [{
                    name: "选项3"
                },{
                    name: "选项4"
                }]
            }]
        },{
            name: '导航二',
            icon: 'appstore',
            children: [{
                name: "选项5"
            },{
                name: "选项6"
            },{
                name: "三级导航",
                children: [{
                    name: "选项7"
                },{
                    name: "选项8"
                }]
            }]
        },{
            name: '导航三',
            icon: 'setting',
            children: [{
                name: "选项9"
            },{
                name: "选项10"
            },{
                name: "选项11"
            },{
                name: "选项12"
            }]
        }]
    })
}
</script>
```
:::

::: demo

<summary>
  #### 缩起内嵌菜单
  你可以在 Layout 里查看侧边布局结合的完整示例
</summary>

```html
<template>
    <div style="width:240px">
        <v-button type="primary" @click="collapsed = !collapsed" style="margin-bottom: 16px">
            <v-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'"></v-icon>
        </v-button>
        <v-menu mode="inline" :data="collapsedMenuData" theme="dark" :inline-collapsed="collapsed"></v-menu>
    <div>
</template>
<script>
export default {
    data:()=> ({
        collapsed: false,
        collapsedMenuData: [{
            name: '选项1',
            icon: 'mail',
        }, {
            name: '选项2',
            icon: 'appstore',
        }, {
            name: '选项3',
            icon: 'lock',
        }, {
            name: '导航1',
            icon: 'setting',
            children: [{
                name: "选项4"
            },{
                name: "选项5"
            },{
                name: "选项6"
            },{
                name: "选项7"
            }]
        }, {
            name: '导航2',
            icon: 'desktop',
            children: [{
                name: "选项8"
            },{
                name: "选项9"
            },{
                name: "选项10"
            }]
        }]
    })
}
</script>
```
:::

::: demo

<summary>
  #### 垂直菜单
  子菜单是弹出的形式。
</summary>

```html
<template>                
    <v-menu style="width:240px" :data="verticalMenuData"></v-menu>
</template>
<script>
export default {
    data:()=> ({
        verticalMenuData: [{
            name: '导航一',
            icon: 'mail',
            groups: [{
                groupName: "分组1",
                list: [{
                    name: "选项1"
                },{
                    name: "选项2"
                }]
            }, {
                groupName: "分组2",
                list: [{
                    name: "选项3"
                },{
                    name: "选项4"
                }]
            }]
        },{
            name: '导航二',
            icon: 'appstore',
            children: [{
                name: "选项5"
            },{
                name: "选项6"
            },{
                name: "三级导航",
                children: [{
                    name: "选项7"
                },{
                    name: "选项8"
                }]
            }]
        },{
            name: '导航三',
            icon: 'setting',
            children: [{
                name: "选项9"
            },{
                name: "选项10"
            },{
                name: "选项11"
            },{
                name: "选项12"
            }]
        }]
    })
}
</script>
```
:::

::: demo

<summary>
  #### 主题
  内建了两套主题 `light|dark`，默认 `light`。
</summary>

```html
<template>
    <v-switch v-model="theme" true-value="dark" false-value="light">
        <span slot="checkedChildren">Dark</span>
        <span slot="unCheckedChildren">Light</span>
    </v-switch>
    <br><br>
    <v-menu style="width:240px" mode="inline" :data="themeMenuData" :theme="theme"></v-menu>
</template>
<script>
export default {
    data:()=> ({
        theme: 'dark',
        themeMenuData: [{
            name: '导航一',
            icon: 'mail',
            groups: [{
                groupName: "分组1",
                list: [{
                    name: "选项1"
                },{
                    name: "选项2"
                }]
            }, {
                groupName: "分组2",
                list: [{
                    name: "选项3"
                },{
                    name: "选项4"
                }]
            }]
        },{
            name: '导航二',
            icon: 'appstore',
            children: [{
                name: "选项5"
            },{
                name: "选项6"
            },{
                name: "三级导航",
                children: [{
                    name: "选项7"
                },{
                    name: "选项8"
                }]
            }]
        },{
            name: '导航三',
            icon: 'setting',
            children: [{
                name: "选项9"
            },{
                name: "选项10"
            },{
                name: "选项11"
            },{
                name: "选项12"
            }]
        }]
    })
}
</script>
```
:::

::: demo

<summary>
  #### 切换菜单类型
  展示动态切换模式。
</summary>

```html
<template>
    <v-switch v-model="mode" true-value="vertical" false-value="inline"></v-switch>
    <br><br>
    <v-menu style="width:240px" :mode="mode" :data="modeMenuData"></v-menu>
</template>
<script>
export default {
    data:()=> ({
        mode: 'inline',
        modeMenuData: [{
            name: '导航一',
            icon: 'mail',
            groups: [{
                groupName: "分组1",
                list: [{
                    name: "选项1"
                },{
                    name: "选项2"
                }]
            }, {
                groupName: "分组2",
                list: [{
                    name: "选项3"
                },{
                    name: "选项4"
                }]
            }]
        },{
            name: '导航二',
            icon: 'appstore',
            children: [{
                name: "选项5"
            },{
                name: "选项6"
            },{
                name: "三级导航",
                children: [{
                    name: "选项7"
                },{
                    name: "选项8"
                }]
            }]
        },{
            name: '导航三',
            icon: 'setting',
            children: [{
                name: "选项9"
            },{
                name: "选项10"
            },{
                name: "选项11"
            },{
                name: "选项12"
            }]
        }]
    })
}
</script>
```
:::

::: demo

<summary>
  #### 自定义选项
  通过scopedSlot自定义选项显示内容
</summary>

```html
<template>
    <v-menu style="width:240px" :data="customMenuData">
        <template slot-scope="{data}">
            <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
            <router-link :to="data.href" style="display:inline">{{'item-' + data.name}}</router-link>
        </template>
        <template slot-scope="{data}" slot="sub">
            <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
            <span>{{'sub-' + data.name}}</span>
        </template>
        <template slot-scope="{data}" slot="group">
            {{'group-' + data.groupName}}
        </template>
    </v-menu>
</template>
<script>
export default {
    data:()=> ({
        customMenuData: [{
            name: "首页",
            icon: 'home',
            selected: true,
            disabled: true,
            href: '/components/card'
        },{
            name: "安装指南",
            icon: 'mail',
            children: [{
                href: {
                    name: 'menu',
                    query: {
                        src: 'http://test.api.g7s.chinawayltd.com/iframe.html#apilog/index.html'
                    }
                },
                name: "快速上手"
            },{
                href: "/development",
                name: "开发指南",
                disabled: true
            }]
        },{
            name: "基础组件",
            icon: 'folder',
            groups: [{
                groupName: "Basic",
                list: [{
                    href: "/components/layout",
                    name: "布局"
                }]
            },{
                groupName: "Form",
                list: [{
                    href: "/components/radio",
                    name: "按钮"
                }]
            }]
        }]
    })
}
</script>
```
:::

## API

### Menu Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| data | 可嵌套的节点属性的数组，生成menu的数据 | Array | - |
| theme | 主题颜色 | String: `light` `dark` | light |
| expand | 设为true会展开所有第一级的菜单 | Boolean | false |
| inlineCollapsed | inline 时菜单是否收起状态 | Boolean | false |
| default:scopedSlot | 自定义MenuItem Name的内容，传入的参数:data | Slot Node | - |
| sub:scopedSlot | 自定义SubMenu Name的内容，传入的参数:data | Slot Node | - |
| group:scopedSlot | 自定义Group Name的内容，传入的参数:data | Slot Node | - |

### Menu Methods

| 方法名     |   说明	   | 参数      | 返回值  |
|---------- |-------------- |----------  |-------- |
| setCheck | 根据条件对象筛选节点，并设置节点的选中状态 | conditions: Object,status: Boolean = true | isSuccess: Boolean |

### Menu Events

| 事件     |   说明	   | 参数      |
|---------- |-------------- |----------  |-------- |
| item-click | 点击Menu Item时触发 | 从根到叶的数组，包含路径上的每个节点的数据 |

### Menu:Data Prop

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| name | 标题 | String | - |
| disabled | 是否禁用 | Boolean | false |
| expand | 是否展开(只有SubMenu上可设置) | Boolean | false |
| selected | 选中效果(只有MenuItem上可设置) | Boolean | false |
| icon | 图标(只有MenuItem和SubMenu上可以设置) | String | - |
| href | 链接(只有MenuItem上可设置) | String | - |
| target | 打开方式（同<a>，(只有MenuItem上可设置)） | String | - |
| children | 子菜单，同data | Object | - |
| groups | 分组菜单 | Object | - |

### Menu:Data:groups Prop

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| groupName | 标题 | String | - |
| list | 同data | Object | - |

