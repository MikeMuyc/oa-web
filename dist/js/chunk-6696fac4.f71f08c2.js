(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6696fac4"],{"177e":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"app_main"},[a("NavSider"),a("div",{staticClass:"main-content "},[a("NavBread",["通知公告"===t.routeName?a("div",{staticClass:"pmbtn primary",attrs:{slot:"rightSide"},on:{click:function(n){return t.$router.push({name:"新建公告"})}},slot:"rightSide"},[a("i",{staticClass:"iconfont iconxinzeng"}),t._v("新建公告 ")]):t._e(),"通讯录"===t.routeName?a("div",{attrs:{slot:"rightSide"},slot:"rightSide"},[a("div",{staticClass:"pmbtn primary",staticStyle:{"margin-right":"10px"}},[a("span",{staticClass:"iconfont iconxinzeng",staticStyle:{"margin-right":"5px"}}),t._v(" 新增人员信息 ")]),a("div",{staticClass:"pmbtn primary"},[a("span",{staticClass:"iconfont iconshuaxin",staticStyle:{"margin-right":"5px"}}),t._v(" 机构信息更新 ")])]):t._e(),"权限管理"===t.routeName?a("div",{attrs:{slot:"rightSide"},slot:"rightSide"},[a("div",{staticClass:"pmbtn primary",staticStyle:{"margin-right":"10px"}},[a("span",{staticClass:"iconfont iconxinzeng",staticStyle:{"margin-right":"5px"}}),t._v(" 创建角色 ")]),a("div",{staticClass:"pmbtn primary"},[t._v(" 确定 ")])]):t._e(),"发文管理"===t.routeName?a("div",{staticClass:"pmbtn primary",attrs:{slot:"rightSide"},on:{click:function(n){return t.$router.push({name:"新建发文"})}},slot:"rightSide"},[a("i",{staticClass:"iconfont iconxinzeng"}),t._v("新建发文 ")]):t._e(),"办公用品管理"===t.routeName?a("div",{staticClass:"pmbtn primary",attrs:{slot:"rightSide"},slot:"rightSide"},[a("i",{staticClass:"iconfont iconsousuo"}),t._v("查看入库记录 ")]):t._e(),"工作审批"===t.routeName?a("div",{attrs:{slot:"rightSide"},slot:"rightSide"},[a("div",{staticClass:"pmbtn primary",staticStyle:{"margin-right":"20px"},on:{click:function(n){return t.$router.push({name:"新建自办件审批"})}}},[a("i",{staticClass:"iconfont iconxinzeng"}),t._v("新建自办件审批 ")]),a("div",{staticClass:"pmbtn primary",on:{click:function(n){return t.$router.push({name:"新建外部来文审批"})}}},[a("i",{staticClass:"iconfont iconxinzeng"}),t._v("新建外部来文审批 ")])]):t._e()]),a("vue-perfect-scrollbar",{staticClass:"routerView"},[a("router-view",{})],1)],1)],1)},i=[],s=(a("b0c0"),a("d4ec")),o=a("bee2"),r=a("262e"),c=a("2caf"),u=a("9ab4"),m=a("60a3"),l=a("b5b8"),p=function(t){Object(r["a"])(a,t);var n=Object(c["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=n.apply(this,arguments),t.routeName=t.$route.name,t}return Object(o["a"])(a,[{key:"handleRouteChange",value:function(){this.routeName=this.$route.name}}]),a}(m["b"]);Object(u["a"])([Object(m["c"])("$route")],p.prototype,"handleRouteChange",null),p=Object(u["a"])([Object(m["a"])({components:{NavSider:l["a"]}})],p);var g=p,h=g,v=(a("4d4c"),a("2877")),f=Object(v["a"])(h,e,i,!1,null,null,null);n["default"]=f.exports},"478f":function(t,n,a){},"4d4c":function(t,n,a){"use strict";a("478f")},b5b8:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("Sider",[a("Menu",{attrs:{"active-name":t.routeName,"open-names":t.openNames,width:"auto"}},[a("MenuItem",{attrs:{name:"OA工作台",to:{name:"OA工作台"}}},[a("span",{staticClass:"iconfont iconshouye-xuanzhong",staticStyle:{"font-size":"20px","margin-right":"10px"}}),a("span",[t._v("OA工作台")])]),a("MenuItem",{attrs:{name:"工作审批",to:{name:"工作审批"}}},[a("span",{staticClass:"iconfont icongongzuoshenpi",staticStyle:{"font-size":"20px","margin-right":"10px"}}),a("span",[t._v("工作审批")])]),a("MenuItem",{attrs:{name:"通知公告",to:{name:"通知公告"}}},[a("span",{staticClass:"iconfont icontongzhigonggao",staticStyle:{"font-size":"20px","margin-right":"10px"}}),a("span",[t._v("通知公告")])]),a("MenuItem",{attrs:{name:"日报周报",to:{name:"日报周报"}}},[a("span",{staticClass:"iconfont iconzhoubaoribao",staticStyle:{"font-size":"20px","margin-right":"10px"}}),a("span",[t._v("日报周报")])]),a("Submenu",{attrs:{name:"公文收发"}},[a("template",{slot:"title"},[a("span",{staticClass:"iconfont iconshouwenwenjianxiang",staticStyle:{"font-size":"20px","margin-right":"10px"}}),t._v(" 公文收发 ")]),a("MenuItem",{attrs:{name:"收文管理",to:{name:"收文管理"}}},[t._v("收文管理")]),a("MenuItem",{attrs:{name:"发文管理",to:{name:"发文管理"}}},[t._v("发文管理")])],2),a("MenuItem",{attrs:{name:"通讯录",to:{name:"通讯录"}}},[a("span",{staticClass:"iconfont iconbianzu",staticStyle:{"font-size":"20px","margin-right":"10px"}}),a("span",[t._v("通讯录")])]),a("MenuItem",{attrs:{name:"办公用品管理",to:{name:"办公用品管理"}}},[a("span",{staticClass:"iconfont iconbangongyongpin",staticStyle:{"font-size":"20px","margin-right":"10px"}}),a("span",[t._v("办公用品管理")])]),a("Submenu",{attrs:{name:"系统管理"}},[a("template",{slot:"title"},[a("span",{staticClass:"iconfont iconxitongguanli",staticStyle:{"font-size":"20px","margin-right":"10px"}}),t._v(" 系统管理 ")]),a("MenuItem",{attrs:{name:"用户管理",to:{name:"用户管理"}}},[t._v("用户管理")]),a("MenuItem",{attrs:{name:"流程管理",to:{name:"流程管理"}}},[t._v("流程管理")])],2),a("MenuItem",{attrs:{name:"标准页",to:{name:"标准页"}}},[a("span",[t._v("标准页")])])],1)],1)},i=[],s=(a("b0c0"),a("d4ec")),o=a("bee2"),r=a("262e"),c=a("2caf"),u=a("9ab4"),m=a("60a3"),l=function(t){Object(r["a"])(a,t);var n=Object(c["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=n.apply(this,arguments),t.routeName="",t}return Object(o["a"])(a,[{key:"handleRouteChange",value:function(){this.routeName=this.$route.name}},{key:"mounted",value:function(){this.routeName=this.$route.name}},{key:"openNames",get:function(){var t=this.$route.meta.pname;return t?[t]:[]}}]),a}(m["b"]);Object(u["a"])([Object(m["c"])("$route")],l.prototype,"handleRouteChange",null),l=Object(u["a"])([m["a"]],l);var p=l,g=p,h=(a("dc44"),a("2877")),v=Object(h["a"])(g,e,i,!1,null,null,null);n["a"]=v.exports},dc44:function(t,n,a){"use strict";a("f5ae")},f5ae:function(t,n,a){}}]);
//# sourceMappingURL=chunk-6696fac4.f71f08c2.js.map