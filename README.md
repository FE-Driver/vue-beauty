# vue-beauty
Beautiful  UI components build with vue and ant design

- [Vue官网](http://vuejs.org/)
- [Ant.Design官网](http://ant.design/)
- 本项目采用vue2和ant deisgn2.0进行开发

## 如何体验（How to experience）
Still developing,not suggesting to use in production!
- clone本项目，并切换到next分支
- 安装依赖(yarn)，并打包(npm run package)
- 在你的项目中引入
````javascript
import 'relativePath/vue-beauty/package/style/vue-beauty.min.css';
import vueBeauty from 'relativePath/vue-beauty';

vue.use(vueBeauty);
````

## 目录结构
<pre>
    VUE-BEAUTY/
    |-- build               存放webpack的配置
    |-- vb                  组件库
    |   |-- components      组件
    |   |-- directives      指令
    |   |-- locale          多语言
    |   |-- mixins          混合
    |   |-- style           核心样式
    |   |-- utils           工具方法
    |   `-- index.js        入口
    `-- src                 存放文档
        |-- views           视图页面
        |-- docs            组件文档
        |-- components      业务组件
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
- 开发完组件后，需要在vb/components/index.js里面导出
- 到src/docs下编写组件的使用文档
- 同时在下列文件：src/routers.js、src/views/components.vue，添加组件的路由和链接

## 命名规范
- 文件，目录均以横线连接(如data-table)
- 组件的name均以大写开头，驼峰式(如TreeSelect)

## 感谢
- 感谢为这个项目做过贡献的所有朋友。
- 感谢vue和ant design的开发者。
