# vue-beauty
Beautiful  UI components build with vue and ant design

- [Vue官网](http://vuejs.org/)
- [Ant.Design官网](http://ant.design/)

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

**(持续更新中。。。)**

## 目录结构
<pre>
    VUE-BEAUTY/
    |-- build               存放webpack的配置
    |-- components          存放组件
    |-- src                 存放文档
    |   |-- components      一些文档组件
    |   |-- views           组件的说明文档
    |   `-- routers.js      路由
    |-- style 
    |   `-- components      存放组件的样式
    `-- utils               一些工具方法         
</pre>

## 参与流程

- 我们会通过issue的形式发布一系列任务
- 在任务issue下面回复并认领
- 根据某个issue，fork并在develop分支下实现
- 提交pr到develop分支
- 合并pr，测试并发布到master分支

## 开发步骤
- 到[ant-design1.8](https://github.com/ant-design/ant-design/tree/master/components)官网拷贝相应的样式到style/components下
- 打开style/components/index.less，导出组件的样式
- 涉及文件：src/routers.js、src/views/components.vue
- 到src/views下添加组件的文档
- 在components开发组件  
notice：如果你需要增加样式，可以在组件对应的样式目录中增加xxx_vb.less（如button_vb.less），并在index.less中import该样式文件

## 命名规范
- 文件，目录均以小写开头，驼峰式(如inputNumber)
- 组件的import export 均以v开头，驼峰式(如vInputNumber)

## 感谢
- 感谢为这个项目做过贡献的所有朋友。
- 感谢vue和ant design的开发者。
- 感谢[okoala](https://github.com/okoala)的[vue-antd](https://github.com/okoala/vue-antd)。
