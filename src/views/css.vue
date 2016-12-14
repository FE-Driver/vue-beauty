<template lang="html">

    <div>

        <section class="markdown">
            <h1>全局CSS样式</h1>
            <p>
                和Bootstrap一样，为了增强跨浏览器表现的一致性，Vue Beauty也对浏览器默认样式做了重置和全局设置。同时我们也提供了很多有助于Web开发的工具类，你可以在需要的时候直接使用。
            </p>

            <h2>概览</h2>
            <p>深入了解 Bootstrap 底层结构的关键部分，包括我们让 web 开发变得更好、更快、更强壮的最佳实践。</p>

            <h4>HTML5 文档类型</h4>
            <p>Bootstrap 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。</p>
            <div class="highlight">    
<pre>
    <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="zh-CN"&gt;
            ...
        &lt;/html&gt;
    </code>
</pre>
            </div>

            <h4>基本样式</h4>
            <p>Vue Beauty设置了基本的全局样式。分别是<a href="#">dsd</a>：</p>
            <ul>
                <li>为 <code>body</code> 元素设置 <code>background-color: #fff;</code></li>
                <li>使用 <code>@font-family</code>、<code>@text-color</code>、<code>@font-size-base</code> 和 <code>@line-height-base</code>变量作为排版的基本参数
                </li>
                <li><code>@font-family</code>变量的默认值为<code>-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                    "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun,
                    sans-serif</code></li>
                <li><code>@text-color</code>变量的默认值为<code>#444</code></li>
                <li><code>@font-size-base</code>变量的默认值为<code>12px</code></li>
                <li><code>@line-height-base</code>变量的默认值为<code>1.5</code></li>
                <li>为所有链接设置了基本颜色 <code>#369BE9</code> ，并且当链接处于 <code>:hover</code> 状态时才添加下划线</li>
            </ul>

            <h4>Normalize.css</h4>
            <p>为了增强跨浏览器表现的一致性，我们使用了 <a href="http://necolas.github.io/normalize.css/" target="_blank">Normalize.css</a>，这是由
                <a href="https://twitter.com/necolas" target="_blank">Nicolas Gallagher</a> 和 <a
                        href="https://twitter.com/jon_neal" target="_blank">Jonathan Neal</a> 维护的一个CSS 重置样式库。</p>

            <h4>布局容器</h4>
            <p>Vue Beauty提供了两种<code>.container</code> 容器，可作为页面内容的顶层容器。具体说明如下：</p>
            <p><code>.container</code> 类用于固定宽度并支持响应式布局的容器。其宽度有3种：720px、940px、1140px，根据视口宽度响应式匹配。</p>
            <p><code>.container-fluid</code> 类用于 100% 宽度，占据全部视口（viewport）的容器。</p>


            <h2>排版</h2>

            <h4>标题</h4>
            <p>HTML 中的所有标题标签，<code>&lt;h1&gt;</code> 到 <code>&lt;h6&gt;</code> 均可使用。在标题内还可以包含 <code>&lt;small&gt;</code>
                标签，可以用来标记副标题。</p>

            <h4>内联文本元素</h4>
            <p>高亮文本使用<code>&lt;mark&gt;</code>标签：
                <mark>高亮文本</mark>
            </p>
            <p>删除文本使用<code>&lt;del&gt;</code>标签：
                <del>删除文本</del>
            </p>
            <p>带下划线的文本使用<code>&lt;u&gt;</code>标签：<u>下划线文本</u></p>
            <p>小号文本使用<code>&lt;small&gt;</code>标签：
                <small>小号文本</small>
            </p>
            <p>着重文本使用<code>&lt;strong&gt;</code>标签：<strong>着重文本</strong></p>

            <h4>对齐及换行</h4>
            <p class="text-left">左对齐：<code>.text-left</code></p>
            <p class="text-right">右对齐：<code>.text-right</code></p>
            <p class="text-center">居中对齐：<code>.text-center</code></p>
            <p class="text-nowrap">禁止换行：<code>.text-nowrap</code></p>

            <h4>文本颜色</h4>
            <p class="text-muted">.text-muted</p>
            <p class="text-dark">.text-dark</p>
            <p class="text-primary">.text-primary</p>
            <p class="text-success">.text-success</p>
            <p class="text-info">.text-info</p>
            <p class="text-warning">.text-warning</p>
            <p class="text-error">.text-error</p>

            <h4>文本大小</h4>
            <p class="text-md">.text-md(14px)</p>
            <p class="text-lg">.text-lg(16px)</p>
            <p class="text-xl">.text-xl(18px)</p>
            <p class="text-xxl">.text-xxl(20px)</p>

            <h4>背景区块</h4>
            <p class="bg-primary">.bg-primary</p>
            <p class="bg-success">.bg-success</p>
            <p class="bg-info">.bg-info</p>
            <p class="bg-warning">.bg-warning</p>
            <p class="bg-error">.bg-error</p>
            <p class="bg-muted">.bg-muted</p>

            <h4>margin和padding</h4>
            <p>为了开发方便，Vue Beauty提供了一组常用的margin和padding类，具体尺寸有：5px、10px、15px、20px、25px。使用方法如下：</p>
            <p>margin-{size}类表示4个方向都有同样大小的外边距，如<code>margin-10</code>。</p>
            <p>padding-{size}类表示4个方向都有同样大小的内边距，如<code>padding-15</code>。</p>
            <p>margin-{side}-{size}类表示某个方向有设定大小的外边距，如<code>margin-top-25</code>。</p>
            <p>padding-{side}-{size}类表示某个方向有设定大小的内边距，如<code>padding-right-5</code>。</p>


            <h2>工具类</h2>

            <h4>浮动</h4>
            <p class="pull-left">左浮动:<code>.pull-left</code></p>
            <p class="pull-right">右浮动:<code>.pull-right</code></p>
            <h4>clearfix</h4>
            <p class="clearfix">清除浮动:<code>.clearfix</code></p>
            <h4>显示隐藏</h4>
            <p>显示:<code>.show</code></p>
            <p>隐藏:<code>.hide</code></p>
            <p>不可见:<code>.invisible</code>（使用visibility控制）</p>

        </section>

    </div>

</template>

<script>
    export default {}
</script>