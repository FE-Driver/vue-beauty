# vue-beauty
Beautiful  UI components build with vue and ant design

- [Vue官网](http://vuejs.org/)
- [Ant.Design官网](http://beta.ant.design/)
- 本项目采用vue2和ant deisgn2.0进行开发

## 已完成组件
- Alert 警告提示
- Button 按钮
- Card 卡片
- Rate 评分


**(持续更新中。。。)**

## 目录结构
<pre>
    VUE-BEAUTY/
    |-- build               存放webpack的配置
    |-- components          存放组件
    |   |-- rate            rate组件
    |   |   `-- style       存放组件的样式
    |   |-- style           组件的通用基础样式
    |   `--utils            一些工具方法
    `-- src                 存放文档
        |-- views           视图页面
        |-- docs            组件文档
        |-- components      业务组件
        |-- views           组件的说明文档
        |-- main.js         入口
        `-- routers.js      路由
</pre>

## 参与流程

- 我们会通过issue的形式发布一系列任务
- 在任务issue下面回复并认领
- 根据某个issue，fork并在next分支下实现
- 提交pr到next分支
- 合并pr，测试并发布到master分支
- NOTICE：可以加入QQ群548062121讨论

## 开发步骤
- 到[ant-design2.0](https://github.com/ant-design/ant-design/tree/master/components)官网拷贝相应的样式到对应组件的style文件夹下，并在组件vue文件里面引入
- 开发完组件后，需要在components/index.js里面导出
- 到src/docs下编写组件的使用文档
- 同时在下列文件：src/routers.js、src/views/components.vue，添加组件的路由和链接

## 命名规范
- 文件，目录均以小写开头，驼峰式(如inputNumber)
- 组件的name均以v开头，驼峰式(如vTreeSelect)

## 感谢
- 感谢为这个项目做过贡献的所有朋友。
- 感谢vue和ant design的开发者。
