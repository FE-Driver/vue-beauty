webpackJsonp([1],{355:function(t,e,n){t.exports=n(422)},395:function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],a=r[0],s=r[1],c=r[2],l=r[3],u={id:t+":"+o,css:s,media:c,sourceMap:l};i[a]?i[a].parts.push(u):n.push(i[a]={id:a,parts:[u]})}return n}function o(t,e,n,o){v=n,m=o||{};var a=i(t,e);return r(a),function(e){for(var n=[],o=0;o<a.length;o++){var s=a[o],c=d[s.id];c.refs--,n.push(c)}e?(a=i(t,e),r(a)):a=[];for(var o=0;o<n.length;o++){var c=n[o];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete d[c.id]}}}}function r(t){for(var e=0;e<t.length;e++){var n=t[e],i=d[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(s(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var r=[],o=0;o<n.parts.length;o++)r.push(s(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:r}}}}function a(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function s(t){var e,n,i=document.querySelector("style["+y+'~="'+t.id+'"]');if(i){if(v)return g;i.parentNode.removeChild(i)}if(b){var o=h++;i=p||(p=a()),e=c.bind(null,i,o,!1),n=c.bind(null,i,o,!0)}else i=a(),e=l.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function c(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function l(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),m.ssrId&&t.setAttribute(y,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},f=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,h=0,v=!1,g=function(){},m=null,y="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase()),_=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},422:function(t,e,n){"use strict";function i(t){n(423)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n(425),a=n.n(r),s={data:function(){return{icons1:["step-backward","step-forward","fast-backward","fast-forward","shrink","arrows-alt","down","up","left","right","caret-up","caret-down","caret-left","caret-right","up-circle","down-circle","left-circle","right-circle","up-circle-o","down-circle-o","right-circle-o","left-circle-o","double-right","double-left","verticle-left","verticle-right","forward","backward","rollback","enter","retweet","swap","swap-left","swap-right","arrow-up","arrow-down","arrow-left","arrow-right","play-circle","play-circle-o","up-square","down-square","left-square","right-square","up-square-o","down-square-o","left-square-o","right-square-o","login","logout","menu-fold","menu-unfold"],icons2:["question","question-circle-o","question-circle","plus","plus-circle-o","plus-circle","pause","pause-circle-o","pause-circle","minus","minus-circle-o","minus-circle","plus-square","plus-square-o","minus-square","minus-square-o","info","info-circle-o","info-circle","exclamation","exclamation-circle-o","exclamation-circle","close","close-circle","close-circle-o","close-square","close-square-o","check","check-circle","check-circle-o","check-square","check-square-o","clock-circle-o","clock-circle"],icons3:["lock","unlock","area-chart","pie-chart","bar-chart","dot-chart","bars","book","calendar","cloud","cloud-download","code","code-o","copy","credit-card","delete","desktop","download","edit","ellipsis","file","file-text","file-unknown","file-pdf","file-excel","file-jpg","file-ppt","file-add","folder","folder-open","folder-add","hdd","frown","frown-o","meh","meh-o","smile","smile-o","inbox","laptop","appstore-o","appstore","line-chart","link","mail","mobile","notification","paper-clip","picture","poweroff","reload","search","setting","share-alt","shopping-cart","tablet","tag","tag-o","tags","tags-o","to-top","upload","user","video-camera","home","loading","loading-3-quarters","cloud-upload-o","cloud-download-o","cloud-upload","cloud-o","star-o","star","heart-o","heart","environment","environment-o","eye","eye-o","camera","camera-o","save","team","solution","phone","filter","exception","export","customer-service","qrcode","scan","like","like-o","dislike","dislike-o","message","pay-circle","pay-circle-o","calculator","pushpin","pushpin-o","bulb","select","switcher","rocket","bell","disconnect","database","compass","barcode","hourglass","key","flag","layout","printer","sound","usb","skin","tool","sync","wifi","car","schedule","user-add","user-delete","usergroup-add","usergroup-delete","man","woman","shop","gift","idcard","medicine-box","red-envelope","coffee","copyright","trademark","safety","wallet","bank","trophy","contacts","global","shake","api","fork"],icons4:["android","android-o","apple","apple-o","windows","windows-o","ie","chrome","github","aliwangwang","aliwangwang-o","dingding","dingding-o"],Copied:!1,type:String,content:[["type","图标类型","String","-"],["spin","是否有旋转动画","Boolean","false"]]}},computed:{icons1Obj:function(){return this.icons1.map(function(t){return{name:t,justCopied:!1}})},icons2Obj:function(){return this.icons2.map(function(t){return{name:t,justCopied:!1}})},icons3Obj:function(){return this.icons3.map(function(t){return{name:t,justCopied:!1}})},icons4Obj:function(){return this.icons4.map(function(t){return{name:t,justCopied:!1}})}},mounted:function(){this.$nextTick(function(){var t=new a.a(".anticons-list li");t.on("success",function(t){var e=t.trigger;e.className="icon-item copied",setTimeout(function(){e.className="icon-item"},1e3)})})},methods:{_getCopyCode:function(t){return'<v-icon type="'+t+'"></v-icon>'},clickfunc:function(t){console.log(this),console.log(t)}}},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("undefined",[n("h1",[t._v("Iconfont")]),t._v(" "),n("p",[t._v("语义化的矢量图形。")]),t._v(" "),n("h2",{attrs:{id:"tu-biao-de-ming-ming-gui-fan"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tu-biao-de-ming-ming-gui-fan","aria-hidden":"true"}},[t._v("¶")]),t._v(" 图标的命名规范")]),t._v(" "),n("p",[t._v("我们为每个图标赋予了语义化的命名，命名规则如下:")]),t._v(" "),n("ul",[n("li",[t._v("实心和描线图标保持同名，用 -o 来区分，比如 question-circle(实心) 和 question-circle-o(描线)；")]),t._v(" "),n("li",[t._v("命名顺序：[icon名]-[形状可选]-[描线与否]-[方向可选]。")])]),t._v(" "),n("h2",{attrs:{id:"ru-he-shi-yong"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ru-he-shi-yong","aria-hidden":"true"}},[t._v("¶")]),t._v(" 如何使用")]),t._v(" "),n("p",[t._v("使用 标签声明组件，指定图标对应的 type 属性，示例代码如下:")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"hljs"}},[t._v('<v-icon type="link"></v-icon>\n')])]),t._v(" "),n("p",[t._v("最终会渲染为：")]),t._v(" "),n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"hljs"}},[t._v('<i class="anticon anticon-link"></i>\n')])]),t._v(" "),n("h2",{attrs:{id:"ben-di-bu-shu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ben-di-bu-shu","aria-hidden":"true"}},[t._v("¶")]),t._v(" 本地部署")]),t._v(" "),n("p",[t._v("图标组件使用 "),n("a",{attrs:{href:"http://www.iconfont.cn/"}},[t._v("iconfont.cn")]),t._v("，默认公网可访问。如需本地部署，可参考 "),n("a",{attrs:{href:"https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"}},[t._v("示例")]),t._v("。"),n("br"),t._v(" "),n("font",{attrs:{color:"#ff7800"}},[t._v("* 点击下面的图标即可复制标签"),n("font")],1)],1),t._v(" "),n("h2",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("¶")]),t._v(" API")]),t._v(" "),n("h3",{attrs:{id:"icon-props"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#icon-props","aria-hidden":"true"}},[t._v("¶")]),t._v(" Icon Props")]),t._v(" "),n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("图标类型")]),t._v(" "),n("td",[t._v("string")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("spin")]),t._v(" "),n("td",[t._v("是否有旋转动画")]),t._v(" "),n("td",[t._v("boolean")]),t._v(" "),n("td",[t._v("false")])])])]),t._v(" "),n("h2",{attrs:{id:"tu-biao-lie-biao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tu-biao-lie-biao","aria-hidden":"true"}},[t._v("¶")]),t._v(" 图标列表")]),t._v(" "),n("h3",{attrs:{id:"fang-xiang-xing-tu-biao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fang-xiang-xing-tu-biao","aria-hidden":"true"}},[t._v("¶")]),t._v(" 方向性图标")]),t._v(" "),n("ul",{staticClass:"anticons-list"},t._l(t.icons1Obj,function(e){return n("li",{staticClass:"icon-item",class:{copied:t.Copied},attrs:{"data-clipboard-text":t._getCopyCode(e.name)}},[n("v-icon",{attrs:{type:e.name}}),t._v(" "),n("span",{staticClass:"anticon-class"},[t._v(t._s(e.name))])],1)})),t._v(" "),n("h3",{attrs:{id:"ti-shi-jian-yi-xing-tu-biao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ti-shi-jian-yi-xing-tu-biao","aria-hidden":"true"}},[t._v("¶")]),t._v(" 提示建议性图标")]),t._v(" "),n("ul",{staticClass:"anticons-list"},t._l(t.icons2Obj,function(e){return n("li",{staticClass:"icon-item",class:{copied:t.Copied},attrs:{"data-clipboard-text":t._getCopyCode(e.name)}},[n("v-icon",{attrs:{type:e.name}}),t._v(" "),n("span",{staticClass:"anticon-class"},[t._v(t._s(e.name))])],1)})),t._v(" "),n("h3",{attrs:{id:"wang-zhan-tong-yong-tu-biao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wang-zhan-tong-yong-tu-biao","aria-hidden":"true"}},[t._v("¶")]),t._v(" 网站通用图标")]),t._v(" "),n("ul",{staticClass:"anticons-list"},t._l(t.icons3Obj,function(e){return n("li",{staticClass:"icon-item",class:{copied:t.Copied},attrs:{"data-clipboard-text":t._getCopyCode(e.name)}},[n("v-icon",{attrs:{type:e.name}}),t._v(" "),n("span",{staticClass:"anticon-class"},[t._v(t._s(e.name))])],1)})),t._v(" "),n("h3",{attrs:{id:"pin-pai-he-biao-shi"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#pin-pai-he-biao-shi","aria-hidden":"true"}},[t._v("¶")]),t._v(" 品牌和标识")]),t._v(" "),n("ul",{staticClass:"anticons-list"},t._l(t.icons4Obj,function(e){return n("li",{staticClass:"icon-item",class:{copied:t.Copied},attrs:{"data-clipboard-text":t._getCopyCode(e.name)}},[n("v-icon",{attrs:{type:e.name}}),t._v(" "),n("span",{staticClass:"anticon-class"},[t._v(t._s(e.name))])],1)}))])},l=[],u={render:c,staticRenderFns:l},d=u,f=i,p=Object(o.a)(s,d,!1,f,"data-v-3a20cb8e",null);e.default=p.exports},423:function(t,e,n){var i=n(424);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n(395).default;o("bf21d632",i,!0,{})},424:function(t,e,n){e=t.exports=n(339)(!1),e.push([t.i,'ul.anticons-list[data-v-3a20cb8e]{margin:20px 0;list-style:none;overflow:hidden}ul.anticons-list li[data-v-3a20cb8e]{float:left;margin:5px 5px 5px 0;width:155px;text-align:center;list-style:none;cursor:pointer;height:110px;color:#5c6b77;-webkit-transition:all .2s ease;transition:all .2s ease;position:relative;padding-top:10px}ul.anticons-list li[data-v-3a20cb8e]:hover{background-color:#4bb8ff;color:#fff;border-radius:4px}ul.anticons-list li.copied[data-v-3a20cb8e]:hover{color:hsla(0,0%,100%,.2)}ul.anticons-list li[data-v-3a20cb8e]:after{position:absolute;top:10px;left:0;height:100%;width:100%;content:"Copied!";text-align:center;line-height:110px;color:#fff;-webkit-transition:all .3s cubic-bezier(.18,.89,.32,1.28);transition:all .3s cubic-bezier(.18,.89,.32,1.28);opacity:0}ul.anticons-list li.copied[data-v-3a20cb8e]:after{opacity:1;top:0}.anticon[data-v-3a20cb8e]{font-size:26px;margin:12px 0 16px}.anticon-class[data-v-3a20cb8e]{display:block;text-align:center;word-wrap:break-word}',""])},425:function(t,e,n){var i,o,r;!function(a,s){o=[t,n(426),n(428),n(429)],i=s,void 0!==(r="function"==typeof i?i.apply(e,o):i)&&(t.exports=r)}(0,function(t,e,n,i){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var l=o(e),u=o(n),d=o(i),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),h=function(t){function e(t,n){r(this,e);var i=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return s(e,t),p(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===f(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,d.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return c("action",t)}},{key:"defaultTarget",value:function(t){var e=c("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return c("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(u.default);t.exports=h})},426:function(t,e,n){var i,o,r;!function(a,s){o=[t,n(427)],i=s,void 0!==(r="function"==typeof i?i.apply(e,o):i)&&(t.exports=r)}(0,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(t){return t&&t.__esModule?t:{default:t}}(e),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(){function t(e){n(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a})},427:function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}t.exports=n},428:function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function i(){o.off(t,i),e.apply(n,arguments)}var o=this;return i._=e,this.on(t,i,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var r=0,a=i.length;r<a;r++)i[r].fn!==e&&i[r].fn._!==e&&o.push(i[r]);return o.length?n[t]=o:delete n[t],this}},t.exports=n},429:function(t,e,n){function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(t))return o(t,e,n);if(s.nodeList(t))return r(t,e,n);if(s.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return c(document.body,t,e,n)}var s=n(430),c=n(431);t.exports=i},430:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},431:function(t,e,n){function i(t,e,n,i,r){var a=o.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function o(t,e,n,i){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&i.call(t,n)}}var r=n(432);t.exports=i},432:function(t,e){function n(t,e){for(;t&&t.nodeType!==i;){if(t.matches(e))return t;t=t.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=n}});
//# sourceMappingURL=1.338de929fa2efb2a08ff.js.map