# 全局CSS样式
和Bootstrap一样，为了增强跨浏览器表现的一致性，vue-beauty也对浏览器默认样式做了重置和全局设置。同时我们也提供了很多有助于Web开发的工具类，你可以在需要的时候直接使用
## 概览
深入了解 vue-beauty 底层结构的关键部分，包括我们让 web 开发变得更好、更快、更强壮的最佳实践。
### HTML5 文档类型
vue-beauty 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。
````html
    <!DOCTYPE html>
    <html lang="zh-CN">
        ...
    </html>
````
### 基本样式
vue-beauty设置了基本的全局样式。分别是：
- 为 `body` 元素设置 `background-color: #fff`;
- 使用 `@font-family、@text-color、@font-size-base` 和 `@line-height-base` 变量作为排版的基本参数
- `@font-family`变量的默认值为`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif`
- `@text-color`变量的默认值为`#444`
- `@font-size-base`变量的默认值为`12px`
- `@line-height-base`变量的默认值为`1.5`
- 为所有链接设置了基本颜色 `#369BE9` ，并且当链接处于 `:hover` 状态时才添加下划线
### Normalize.css
为了增强跨浏览器表现的一致性，我们使用了 <a href="http://necolas.github.io/normalize.css/" target="_blank">Normalize.css</a>，这是由 <a href="https://twitter.com/necolas" target="_blank">Nicolas Gallagher</a> 和 <a href="https://twitter.com/jon_neal" target="_blank">Jonathan Neal</a> 维护的一个CSS 重置样式库。
### 布局容器
vue-beauty提供了两种`.container`容器，可作为页面内容的顶层容器。具体说明如下：
- `.container`类用于固定宽度并支持响应式布局的容器。其宽度有3种：720px、940px、1140px，根据视口宽度响应式匹配。
- `.container-fluid`类用于 100% 宽度，占据全部视口（viewport）的容器。
## 排版
### 标题
HTML 中的所有标题标签，`<h1>` 到 `<h6>` 均可使用。在标题内还可以包含 `<small>` 标签，可以用来标记副标题。
### 内联文本元素
- 高亮文本使用`<mark>`标签： <mark>高亮文本</mark>
- 删除文本使用`<del>`标签： <del>删除文本</del>
- 带下划线的文本使用`<u>`标签：<u>下划线文本</u>
- 小号文本使用`<small>`标签： <small>小号文本</small>
- 着重文本使用`<strong>`标签：<strong>着重文本</strong>
### 对齐及换行

::: demo
<summary>
  #### 用法
  通过文本对齐类，可以简单方便的将文字重新对齐。
</summary>

```html
<p class="text-left">左对齐</p>
<p class="text-right">右对齐</p>
<p class="text-center">居中对齐</p>
<p class="text-nowrap">禁止换行</p>
```
:::

### 文本颜色
<div class="text-muted">.text-muted</div>
<div class="text-dark">.text-dark</div>
<div class="text-primary">.text-primary</div>
<div class="text-success">.text-success</div>
<div class="text-warning">.text-warning</div>
<div class="text-error">.text-error</div>

### 文本大小
<div class="text-md">.text-md(14px)</div>
<div class="text-lg">.text-lg(16px)</div>
<div class="text-xl">.text-xl(18px)</div>
<div class="text-xxl">.text-xxl(20px)</div>

### 背景区块
<div class="bg-primary">.bg-primary</div>
<div class="bg-success">.bg-success</div>
<div class="bg-warning">.bg-warning</div>
<div class="bg-error">.bg-error</div>
<div class="bg-muted">.bg-muted</div>

### margin和padding
为了开发方便，vue-beauty提供了一组常用的margin和padding类，具体尺寸有：5px、10px、15px、20px、25px。使用方法如下：
- margin-{size}类表示4个方向都有同样大小的外边距，如`margin-10`。
- padding-{size}类表示4个方向都有同样大小的内边距，如`padding-15`。
- margin-{side}-{size}类表示某个方向有设定大小的外边距，如`margin-top-25`。
- padding-{side}-{size}类表示某个方向有设定大小的内边距，如`padding-right-5`。
## 工具类
### 浮动

::: demo
<summary>
  #### 用法
  通过浮动类，可以快速地让一个元素左（右）浮动。
</summary>

```html
<p class="pull-left">左浮动</p>
<p class="pull-right">右浮动</p>
```
:::

### clearfix
清除浮动:.clearfix
### 显示隐藏
- 显示: `.show`
- 隐藏: `.hide`
- 不可见: `.invisible`（使用visibility控制）
### 动画过渡类
可用在vue的transition上
- fade
- move-up
- move-down
- move-left
- move-right
- slide-up
- slide-down
- slide-left
- slide-right
- swing
- zoom
- zoom-big
- zoom-big-fast
- zoom-up
- zoom-down
- zoom-left
- zoom-right