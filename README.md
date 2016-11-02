# vue-beauty
Beautiful  UI components build with vue and ant design

- [Vue官网](http://vuejs.org/)
- [Ant.Design官网](http://ant.design/)
- 在本项目release之前，你都不应该在生产环境中使用
- vue2.0版本请关注next分支

## 已完成组件

- Alert 警告提示
- Badge 徽标数
- Card 卡片
- Collapse 折叠面板
- Switch 开关
- Rate 评分
- Notification 通知提醒框
- Message 全局提示
- Input 输入框
- InputNumber 数字输入框
- Affix 固钉
- Steps 步骤条
- Radio 单选框
- BackTop 回到顶部
- Modal 模态框
- Spin 加载中
- Tag 标签
- Upload 上传
- Icon 图标
- Select 选择器
- Transfer 穿梭框
- Tree 树形控件
- TreeSelect 树选择
- Pagination 分页
- QueueAnim 进出场动画
- Form 表单
- Popover 气泡卡片
- Popconfirm 气泡确认框
- TimePicker 时间选择框
- Cascader 级联控件
- Carousel 走马灯
- Menu 菜单
- DataTable 数据表格

**(持续更新中。。。)**

## 引入
```
import Vue from 'vue'
import '../components/style/index.less'
import vue_beauty from '../components'

Vue.use(vue_beauty)

// or
import {
  select,
  button
  // ...
} from '../components'

Vue.use(select)
Vue.use(button)
```

## 目录结构
<pre>
    VUE-BEAUTY/
    |-- build               存放webpack的配置
    |-- components          存放组件
    |   |-- xxx             xxx组件
    |   |-- style           组件的公共样式
    |    `-- components     存放组件的样式
    |-- src                 存放文档
    |   |-- components      一些文档组件
    |   |-- views           组件的说明文档
    |   `-- routers.js      路由
    `-- utils               一些工具方法
</pre>

## 参与流程

- 我们会通过issue的形式发布一系列任务
- 在任务issue下面回复并认领
- 根据某个issue，fork并在develop分支下实现
- 提交pr到develop分支
- 合并pr，测试并发布到master分支
- NOTICE：可以加入QQ群548062121讨论

## 开发步骤
- 到[ant-design2.2](https://github.com/ant-design/ant-design/tree/master/components)官网拷贝相应的样式到components/style/components下
- 打开style/components/index.less，导出组件的样式
- 在components文件夹下开发组件
- 到components/index.js下导出组件
- 到src/views下编写组件的使用文档
- 修改以下文件：src/routers.js、src/views/components.vue添加文档的路由和链接
- NOTICE：如果你需要增加样式，可以在组件对应的样式目录中增加xxx_vb.less（如button_vb.less），并在index.less中import该样式文件

## 命名规范
- 文件，目录均以小写开头，驼峰式(如inputNumber)
- 组件的import export 均以v开头，驼峰式(如vInputNumber)

## 感谢
- 感谢为这个项目做过贡献的所有朋友。
- 感谢vue和ant design的开发者。
- 感谢[okoala](https://github.com/okoala)的[vue-antd](https://github.com/okoala/vue-antd)。