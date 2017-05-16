## 目录结构
````
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
````
## 参与流程
- 我们会通过issue的形式发布一系列任务
- 在任务issue下面回复并认领
- 根据某个issue，fork并在next分支下实现
- 提交pr到next分支
- 合并pr，测试并发布到master分支
- NOTICE：可以加入QQ群548062121讨论
## 开发步骤
- 在vb/components建立组件的文件夹，比如xxx,里面包含style文件夹、index.js、xxx.vue
- 到[ant-design](https://github.com/ant-design/ant-design/tree/master/components)官网拷贝相应的样式到vb/components/xxx的style文件夹下
- 在index.js里面引入样式并导出组件
- 开发完组件后，需要在vb/components/index.js里面导出
- 到src/docs下编写组件的使用文档
- 同时在下列文件：src/routers.js、src/views/components.vue，添加组件的路由和链接
- NOTICE：如果你需要增加样式，可以在组件对应的style目录中增加xxx_vb.less（如button_vb.less），并在style/index.less中import该样式文件
## 命名规范
- 文件，目录均以横线连接(如data-table)
- 组件的name均以大写开头，驼峰式(如TreeSelect)
## ES语法说明
- .babelrc配置了preset-latest保证新的语法支持（如const、let）
- .babelrc配置了transform-runtime保证新的全局对象和全局对象上的方法的支持（如Promise、Object.assign）
- vb/utils/polyfill.js配置了可以使用的实例方法（如'abc'.includes('a')）
## 感谢
- 感谢为这个项目做过贡献的所有朋友。
- 感谢vue和ant design的开发者。
## 开发环境搭建
首先你需要安装Node.js 4+、yarn
````javascript
    git clone your fork
    yarn
    npm run dev
````
## 代码规范
参考<a href="https://github.com/airbnb/javascript" target="blank">Airbnb</a>的JavaScript风格规范。