webpackJsonp([37],{368:function(s,a,t){s.exports=t(455)},455:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t(0),n={data:function(){return{value:1}},methods:{pageSizeChange:function(s,a){console.log(s,a)},showTotal:function(s){return"全部 "+s+" 条"},showTotal2:function(s,a){return"1-"+a+" 全部 "+s+" 条"},loadPage:function(s){console.log("cb"+s)}}},v=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("undefined",[t("h1",[s._v("Pagination 分页")]),s._v(" "),t("p",[s._v("采用分页的形式分隔长列表，每次只加载一个页面。")]),s._v(" "),t("h2",{attrs:{id:"he-shi-shi-yong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#he-shi-shi-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 何时使用")]),s._v(" "),t("ul",[t("li",[s._v("当加载/渲染所有数据将花费很多时间时；")]),s._v(" "),t("li",[s._v("可切换页码浏览数据。")])]),s._v(" "),t("h2",{attrs:{id:"zu-jian-yan-shi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zu-jian-yan-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 组件演示")]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-pagination v-model="value" @change="loadPage" :total="50">\n  </v-pagination>\n</template>\n\n',script:"\nexport default {\n    methods: {\n        loadPage(i) {\n            console.log('cb' + i);\n        }\n    }\n}\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-pagination",{attrs:{total:50},on:{change:s.loadPage},model:{value:s.value,callback:function(a){s.value=a},expression:"value"}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"ji-ben"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben","aria-hidden":"true"}},[s._v("¶")]),s._v(" 基本")]),s._v(" "),t("p",[s._v("基础分页。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"loadPage"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"50"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n        loadPage(i) {\n            "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'cb'")]),s._v(" + i);\n        }\n    }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 基本\n  基础分页。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"loadPage"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        loadPage(i) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{attrs:{class:"hljs-string"}},[s._v("'cb'")]),s._v(" + i);\n        }\n    }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-pagination :total="500"></v-pagination>\n</template>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-pagination",{attrs:{total:500}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"geng-duo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#geng-duo","aria-hidden":"true"}},[s._v("¶")]),s._v(" 更多")]),s._v(" "),t("p",[s._v("更多分页。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"500"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 更多\n  更多分页。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"500"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-pagination show-size-changer @sizechange="pageSizeChange" :total="50"></v-pagination>\n</template>\n\n',script:"\nexport default {\n    methods: {\n        pageSizeChange(current, size) {\n            console.log(current, size);\n        }\n    }\n}\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-pagination",{attrs:{"show-size-changer":"",total:50},on:{sizechange:s.pageSizeChange}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"gai-bian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gai-bian","aria-hidden":"true"}},[s._v("¶")]),s._v(" 改变")]),s._v(" "),t("p",[s._v("改变每页显示条目数。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("show-size-changer")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@sizechange")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"pageSizeChange"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"50"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n        pageSizeChange(current, size) {\n            "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(current, size);\n        }\n    }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 改变\n  改变每页显示条目数。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("show-size-changer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@sizechange")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"pageSizeChange"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        pageSizeChange(current, size) {\n            "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(current, size);\n        }\n    }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-pagination show-quick-jumper :total="500"></v-pagination>\n</template>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-pagination",{attrs:{"show-quick-jumper":"",total:500}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"tiao-zhuan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tiao-zhuan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 跳转")]),s._v(" "),t("p",[s._v("快速跳转到某一页。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("show-quick-jumper")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"500"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 跳转\n  快速跳转到某一页。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("show-quick-jumper")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"500"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-pagination size="small" :total="50">\n  </v-pagination>\n  <br>\n  <v-pagination :value="value" :total="100" :default-page-size="5" :page-size="10" @change="loadPage" show-size-changer="" @sizechange="pageSizeChange" show-quick-jumper size="small" :simple="false">\n  </v-pagination>\n  <br>\n  <v-pagination :value="value" :total="50" :default-page-size="5" :page-size="10" @change="loadPage" size="small" :simple="false" :show-total="showTotal">\n  </v-pagination>\n</template>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-pagination",{attrs:{size:"small",total:50}}),s._v(" "),t("br"),s._v(" "),t("v-pagination",{attrs:{value:s.value,total:100,"default-page-size":5,"page-size":10,"show-size-changer":"","show-quick-jumper":"",size:"small",simple:!1},on:{change:s.loadPage,sizechange:s.pageSizeChange}}),s._v(" "),t("br"),s._v(" "),t("v-pagination",{attrs:{value:s.value,total:50,"default-page-size":5,"page-size":10,size:"small",simple:!1,"show-total":s.showTotal},on:{change:s.loadPage}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"mi-ni"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mi-ni","aria-hidden":"true"}},[s._v("¶")]),s._v(" 迷你")]),s._v(" "),t("p",[s._v("迷你版本。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"small"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"50"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"100"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":default-page-size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"5"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":page-size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"10"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"loadPage"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("show-size-changer")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("@sizechange")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"pageSizeChange"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("show-quick-jumper")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"small"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":simple")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"50"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":default-page-size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"5"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":page-size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"10"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("@change")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"loadPage"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v("size")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"small"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":simple")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v("\n      "),t("span",{staticClass:"hljs-attr"},[s._v(":show-total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"showTotal"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 迷你\n  迷你版本。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"100"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":default-page-size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":page-size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"loadPage"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("show-size-changer")]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@sizechange")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"pageSizeChange"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("show-quick-jumper")]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":simple")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":default-page-size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"5"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":page-size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"10"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"loadPage"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("size")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"small"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":simple")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v("\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":show-total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showTotal"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-pagination simple></v-pagination>\n  <v-pagination simple :total="500"></v-pagination>\n</template>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-pagination",{attrs:{simple:""}}),s._v(" "),t("v-pagination",{attrs:{simple:"",total:500}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"jian-ji"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jian-ji","aria-hidden":"true"}},[s._v("¶")]),s._v(" 简洁")]),s._v(" "),t("p",[s._v("简单的翻页。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("simple")]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("simple")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"500"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 简洁\n  简单的翻页。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("simple")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("simple")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"500"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-pagination :value="3" :total="50"></v-pagination>\n</template>\n',script:null,style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-pagination",{attrs:{value:3,total:50}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"shou-kong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shou-kong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 受控")]),s._v(" "),t("p",[s._v("受控制的页码。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":value")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"3"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"50"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 受控\n  受控制的页码。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-pagination :show-total="showTotal" :total="50"></v-pagination>\n  <br>\n  <v-pagination :show-total="showTotal2" :total="50"></v-pagination>\n</template>\n\n',script:"\nexport default {\n    methods: {\n        showTotal(total) {\n            return `全部 ${total} 条`;\n        },\n        showTotal2(total, pages) {\n            return `1-${pages} 全部 ${total} 条`;\n        }\n    }\n}\n",style:null}}},[t("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[t("v-pagination",{attrs:{"show-total":s.showTotal,total:50}}),s._v(" "),t("br"),s._v(" "),t("v-pagination",{attrs:{"show-total":s.showTotal2,total:50}})]],2),s._v(" "),t("div",{attrs:{slot:"description"},slot:"description"},[t("h4",{attrs:{id:"zong-shu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zong-shu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 总数")]),s._v(" "),t("p",[s._v("通过设置 "),t("code",[s._v("showTotal")]),s._v(" 展示总共有多少数据。")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[t("pre",[t("code",{staticClass:"hljs language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":show-total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"showTotal"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"50"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("br")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":show-total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"showTotal2"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":total")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"50"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n        showTotal(total) {\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("`全部 "),t("span",{staticClass:"hljs-subst"},[s._v("${total}")]),s._v(" 条`")]),s._v(";\n        },\n        showTotal2(total, pages) {\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("`1-"),t("span",{staticClass:"hljs-subst"},[s._v("${pages}")]),s._v(" 全部 "),t("span",{staticClass:"hljs-subst"},[s._v("${total}")]),s._v(" 条`")]),s._v(";\n        }\n    }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("summary",[s._v("\n  #### 总数\n  通过设置 `showTotal` 展示总共有多少数据。\n")]),s._v(" "),t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":show-total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showTotal"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("br")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":show-total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"showTotal2"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":total")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"50"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("v-pagination")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n        showTotal(total) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("`全部 "),t("span",{attrs:{class:"hljs-subst"}},[s._v("${total}")]),s._v(" 条`")]),s._v(";\n        },\n        showTotal2(total, pages) {\n            "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("`1-"),t("span",{attrs:{class:"hljs-subst"}},[s._v("${pages}")]),s._v(" 全部 "),t("span",{attrs:{class:"hljs-subst"}},[s._v("${total}")]),s._v(" 条`")]),s._v(";\n        }\n    }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[s._v("¶")]),s._v(" API")]),s._v(" "),t("h3",{attrs:{id:"pagination-props"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pagination-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Pagination Props")]),s._v(" "),t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("value")]),s._v(" "),t("td",[s._v("当前页数")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("1")])]),s._v(" "),t("tr",[t("td",[s._v("total")]),s._v(" "),t("td",[s._v("数据总数")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("0")])]),s._v(" "),t("tr",[t("td",[s._v("pageSize")]),s._v(" "),t("td",[s._v("每页条数")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[s._v("10")])]),s._v(" "),t("tr",[t("td",[s._v("showSizeChanger")]),s._v(" "),t("td",[s._v("是否可以改变 pageSize")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("pageSizeOptions")]),s._v(" "),t("td",[s._v("指定每页可以显示多少条")]),s._v(" "),t("td",[s._v("Array")]),s._v(" "),t("td",[s._v("[10, 20, 30, 40]")])]),s._v(" "),t("tr",[t("td",[s._v("showQuickJumper")]),s._v(" "),t("td",[s._v("是否可以快速跳转至某页")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[s._v("false")])]),s._v(" "),t("tr",[t("td",[s._v("size")]),s._v(" "),t("td",[s._v("当为「small」时，是小尺寸分页")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("无")])]),s._v(" "),t("tr",[t("td",[s._v("simple")]),s._v(" "),t("td",[s._v("当添加该属性时，显示为简单分页")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td",[s._v("无")])]),s._v(" "),t("tr",[t("td",[s._v("showTotal")]),s._v(" "),t("td",[s._v("用于显示总共有多少条数据")]),s._v(" "),t("td",[s._v("Function(total, totalPages)")]),s._v(" "),t("td",[s._v("无")])])])]),s._v(" "),t("h3",{attrs:{id:"pagination-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pagination-events","aria-hidden":"true"}},[s._v("¶")]),s._v(" Pagination Events")]),s._v(" "),t("table",{staticClass:"table"},[t("thead",[t("tr",[t("th",[s._v("事件")]),s._v(" "),t("th",[s._v("说明")]),s._v(" "),t("th",[s._v("参数")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("change")]),s._v(" "),t("td",[s._v("页码改变的回调，参数是改变后的页码")]),s._v(" "),t("td",[s._v("page")])]),s._v(" "),t("tr",[t("td",[s._v("sizechange")]),s._v(" "),t("td",[s._v("pageSize 变化的回调")]),s._v(" "),t("td",[s._v("current, size")])])])])],1)},_=[],i={render:v,staticRenderFns:_},e=i,p=Object(l.a)(n,e,!1,null,null,null);a.default=p.exports}});
//# sourceMappingURL=37.25c52bf5edc58bf03628.js.map