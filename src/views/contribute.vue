<template lang="html">

    <div v-highlight>

        <section class="markdown">
            <h1>目录结构</h1>
<pre>
    <code>
        VUE-BEAUTY/
        |-- build               存放webpack的配置
        |-- vb                  组件库的位置
        |   |-- components      存放组件
        |   |   |-- base        基础组件，可复用的公共组件
        |   |   `-- _util       公共方法
        |   |-- style           组件的公共样式
        |   |-- directive       vue指令
        |   `-- utils           工具方法
        `-- src                 存放文档
            |-- components      文档组件、业务组件
            |-- views           组件的说明文档
            `-- routers.js      路由
    </code>
</pre>

            <h2>参与流程</h2>
            <p>
                <li>fork并clone本项目</li>
                <li>我们会通过issue的形式发布一系列任务</li>
                <li>在任务issue下面回复并认领</li>
                <li>在develop分支下实现</li>
                <li>rebase并发起pr到develop分支</li>
                <li>NOTICE：可以加入QQ群548062121讨论</li>
            </p>
            <h2>组件开发步骤</h2>
            <p>
                <li>到<a href="https://github.com/ant-design/ant-design/tree/master/components" target="blank">ant-design</a>官网拷贝组件相应的样式到vb/style/components下</li>
                <li>打开vb/style/components/index.less，导出组件的样式</li>
                <li>在vb/components文件夹下开发组件</li>
                <li>到vb/index.js下导出组件</li>
                <li>到src/views下编写组件的使用文档</li>
                <li>修改以下文件：src/routers.js、src/views/components.vue添加文档的路由和链接</li>
                <li>NOTICE：如果你需要增加样式，可以在组件对应的样式目录中增加xxx_vb.less（如button_vb.less），并在index.less中import该样式文件</li>
            </p>
            <h2>命名规范</h2>
            <p>
                <li>文件，目录均以小写开头，驼峰式(如inputNumber)</li>
                <li>组件的import export 均以v开头，驼峰式(如vInputNumber)</li>
            </p>
            <h2>ES语法说明</h2>
            <p>
                <li>.babelrc配置了preset-latest保证新的语法支持（如const、let）</li>
                <li>.babelrc配置了transform-runtime保证新的全局对象和全局对象上的方法的支持（如Promise、Object.assign）</li>
                <li>vb/utils/polyfill.js配置了可以使用的实例方法（如'abc'.includes('a')）</li>
            </p>
            <h2>开发环境搭建</h2>
            首先你需要安装Node.js 4+
<pre>
        <code>  
        git clone your fork
        npm install
        npm run dev
        </code>
</pre>
            To build:
<pre>
    <code>
        npm run build
    </code>
</pre>
        <h2>代码规范</h2>
        <p>参考<a href="https://github.com/airbnb/javascript" target="blank">Airbnb</a>的JavaScript风格规范。</p>
        </section>

    </div>

</template>