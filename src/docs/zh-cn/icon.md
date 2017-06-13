<script>
    import Clipboard from 'clipboard'

    export default {
        data: function () {
            return {
                icons1: ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrows-alt', 'down', 'up', 'left', 'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right', 'up-circle', 'down-circle', 'left-circle', 'right-circle', 'up-circle-o', 'down-circle-o', 'right-circle-o', 'left-circle-o', 'double-right', 'double-left', 'verticle-left', 'verticle-right', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'play-circle', 'play-circle-o', 'up-square', 'down-square', 'left-square', 'right-square', 'up-square-o', 'down-square-o', 'left-square-o', 'right-square-o', 'login', 'logout', 'menu-fold', 'menu-unfold'],
                icons2: ['question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'plus-square', 'plus-square-o', 'minus-square', 'minus-square-o', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'close', 'close-circle', 'close-circle-o', 'close-square', 'close-square-o', 'check', 'check-circle', 'check-circle-o', 'check-square', 'check-square-o', 'clock-circle-o', 'clock-circle'],
                icons3: ['lock', 'unlock', 'area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'code-o', 'copy', 'credit-card', 'delete', 'desktop', 'download', 'edit', 'ellipsis', 'file', 'file-text', 'file-unknown', 'file-pdf', 'file-excel', 'file-jpg', 'file-ppt', 'file-add', 'folder', 'folder-open', 'folder-add', 'hdd', 'frown', 'frown-o', 'meh', 'meh-o', 'smile', 'smile-o', 'inbox', 'laptop', 'appstore-o', 'appstore', 'line-chart', 'link', 'mail', 'mobile', 'notification', 'paper-clip', 'picture', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'tablet', 'tag', 'tag-o', 'tags', 'tags-o', 'to-top', 'upload', 'user', 'video-camera', 'home', 'loading', 'loading-3-quarters', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'heart-o', 'heart', 'environment', 'environment-o', 'eye', 'eye-o', 'camera', 'camera-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customer-service', 'qrcode', 'scan', 'like', 'like-o', 'dislike', 'dislike-o', 'message', 'pay-circle', 'pay-circle-o', 'calculator', 'pushpin', 'pushpin-o', 'bulb', 'select', 'switcher', 'rocket', 'bell', 'disconnect', 'database', 'compass', 'barcode', 'hourglass', 'key', 'flag', 'layout', 'printer', 'sound', 'usb', 'skin', 'tool', 'sync', 'wifi', 'car', 'schedule', 'user-add', 'user-delete', 'usergroup-add', 'usergroup-delete', 'man', 'woman', 'shop', 'gift', 'idcard', 'medicine-box', 'red-envelope', 'coffee', 'copyright', 'trademark', 'safety', 'wallet', 'bank', 'trophy', 'contacts', 'global', 'shake', 'api','fork'],
                icons4: ['android', 'android-o', 'apple', 'apple-o', 'windows', 'windows-o', 'ie', 'chrome', 'github', 'aliwangwang', 'aliwangwang-o', 'dingding', 'dingding-o'],
                Copied:false,
                type:String,
                content: [
                    [
                        'type',
                        '图标类型',
                        'String',
                        '-'
                    ],
                    [
                        'spin',
                        '是否有旋转动画',
                        'Boolean',
                        'false'
                    ]
                ]
            }
        },

        computed: {
            icons1Obj () {
                return this.icons1.map(name => {
                    return {name, justCopied: false}
                })
            },
            icons2Obj () {
                return this.icons2.map(name => {
                    return {name, justCopied: false}
                })
            },
            icons3Obj () {
                return this.icons3.map(name => {
                    return {name, justCopied: false}
                })
            },
            icons4Obj () {
                return this.icons4.map(name => {
                    return {name, justCopied: false}
                })
            }
        },

        mounted () {
            this.$nextTick(()=>{
                const clipboard = new Clipboard('.anticons-list li')
                var that = this
                clipboard.on('success', (e) => {
                    var target= e.trigger

                    target.className='icon-item copied'

                    setTimeout(() => {
                        target.className='icon-item'
                    }, 1000)
                })
            })
        },

        methods: {
            _getCopyCode: function(type) {
                return '<v-icon type="'+type+'"></v-icon>'
            },
            clickfunc: function(event){
                console.log(this);
                console.log(event);

            }
        }

    }

</script>
<style scoped>
    ul.anticons-list {
        margin: 20px 0;
        list-style: none;
        overflow: hidden;
    }
    ul.anticons-list li {
        float: left;
        margin: 5px 5px 5px 0;
        width: 155px;
        text-align: center;
        list-style: none;
        cursor: pointer;
        height: 110px; color: #5C6B77;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        position: relative; padding-top: 10px;
    }
    ul.anticons-list li:hover {
        background-color: #4BB8FF;
        color: #fff;
        border-radius: 4px;
    }
    ul.anticons-list li.copied:hover {
        color: rgba(255,255,255,0.2);
    }
    ul.anticons-list li:after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 100%;
        width: 100%;
        content: "Copied!";
        text-align: center;
        line-height: 110px;
        color: #fff;
        -webkit-transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
        opacity: 0;
    }
    ul.anticons-list li.copied:after {
        opacity: 1;
        top: 0;
    }
    .anticon {
        font-size: 26px;
        margin: 12px 0 16px;
    }
    .anticon-class {
        display: block;
        text-align: center;
        word-wrap: break-word;
    }

</style>

# Iconfont

语义化的矢量图形。

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:
- 实心和描线图标保持同名，用 -o 来区分，比如 question-circle(实心) 和 question-circle-o(描线)；
- 命名顺序：[icon名]-[形状可选]-[描线与否]-[方向可选]。

## 如何使用

使用 标签声明组件，指定图标对应的 type 属性，示例代码如下:
```
<v-icon type="link"></v-icon>
```
最终会渲染为：
```
<i class="anticon anticon-link"></i>
```

## 本地部署

图标组件使用 [iconfont.cn](http://www.iconfont.cn/)，默认公网可访问。如需本地部署，可参考 [示例](https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont)。
<font color="#ff7800">* 点击下面的图标即可复制标签<font>

## API

### Icon Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| type | 图标类型	 | string | - |
| spin | 是否有旋转动画 | boolean | false |

## 图标列表

### 方向性图标

<ul class="anticons-list">
  <li class="icon-item" v-for="icon in icons1Obj" :class="{copied: Copied}" :data-clipboard-text="_getCopyCode(icon.name)">
    <v-icon :type="icon.name"></v-icon> 
    <span class="anticon-class">{{icon.name}}</span>
  </li>
</ul>

### 提示建议性图标

<ul class="anticons-list">
  <li class="icon-item" v-for="icon in icons2Obj" :class="{copied: Copied}" :data-clipboard-text="_getCopyCode(icon.name)">
    <v-icon :type="icon.name"></v-icon> 
    <span class="anticon-class">{{icon.name}}</span>
  </li>
</ul>

### 网站通用图标

<ul class="anticons-list">
  <li class="icon-item" v-for="icon in icons3Obj" :class="{copied: Copied}" :data-clipboard-text="_getCopyCode(icon.name)">
    <v-icon :type="icon.name"></v-icon>    
    <span class="anticon-class">{{icon.name}}</span>
  </li>
</ul>

### 品牌和标识

<ul class="anticons-list">
  <li class="icon-item" v-for="icon in icons4Obj" :class="{copied: Copied}" :data-clipboard-text="_getCopyCode(icon.name)">
    <v-icon :type="icon.name"></v-icon>    
    <span class="anticon-class">{{icon.name}}</span>
  </li>
</ul>
