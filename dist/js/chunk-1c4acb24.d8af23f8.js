(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c4acb24"],{"14a4":function(t,e,a){t.exports=a.p+"img/暂无数据.857fa50e.png"},"49eb":function(t,e,a){},"8ea6":function(t,e,a){"use strict";a("49eb")},ffea:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"viewbox",attrs:{id:"sentList"}},[i("div",{ref:"searchLine",staticClass:"searchLine"},[i("div",{staticClass:"left"},[i("div",{staticClass:"tabSelect",staticStyle:{"margin-right":"20px"}},[i("div",{staticClass:"option",class:{active:0===t.type},on:{click:function(e){t.type=0}}},[t._v("全部")]),i("div",{staticClass:"option",class:{active:1===t.type},on:{click:function(e){t.type=1}}},[t._v("未被签收")]),i("div",{staticClass:"option",class:{active:2===t.type},on:{click:function(e){t.type=2}}},[t._v("已被签收")])])]),i("div",{staticClass:"right"},[i("normalInput",{staticStyle:{"margin-right":"10px",width:"180px"},attrs:{placeholder:"请输入关键字"}}),t._m(0)],1)]),i("div",{staticClass:"tableBox"},[i("el-table",{staticClass:"dailyTable",attrs:{data:t.orderList,height:t.formHeight}},[i("template",{slot:"empty"},[i("img",{attrs:{src:a("14a4")}}),i("br"),t._v(" 暂无内容 ")]),i("el-table-column",{attrs:{prop:"",label:"序号",align:"center",width:"100px"},scopedSlots:t._u([{key:"default",fn:function(e){e.row;var a=e.$index;return[t._v(" "+t._s((t.pageNum-1)*t.pageSize+a+1)+" ")]}}])}),i("el-table-column",{attrs:{prop:"title",label:"公文标题","min-width":"200px"}}),i("el-table-column",{attrs:{prop:"department",label:"收文单位","min-width":"140px","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{prop:"sentime",label:"发文时间","min-width":"170px"}}),i("el-table-column",{attrs:{prop:"receiveTime",label:"签收时间","min-width":"170px"}}),i("el-table-column",{attrs:{label:"操作",align:"center",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){e.row,e.$index;return[i("font",{staticClass:"fontBtn"},[t._v("查看")])]}}])})],2)],1),i("div",{ref:"pageBottom",staticClass:"pageBottom"},[i("Page",{attrs:{"show-elevator":"","show-total":"","page-size":t.pageSize,current:t.pageNum,total:t.totalElements},on:{"on-change":t.getPage}})],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pmbtn primary"},[a("i",{staticClass:"iconfont iconsousuo"}),t._v("查询 ")])}],n=a("d4ec"),o=a("bee2"),l=a("262e"),c=a("2caf"),r=a("9ab4"),p=a("60a3"),u=a("f825"),m=function(t){Object(l["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(n["a"])(this,a),t=e.apply(this,arguments),t.orderList=[{title:"省厅1号文件",sentime:"2020-5-3 19:32:32",receiveTime:"2020-5-4 19:11:12",department:"宣发部",status:"0"},{title:"省厅2号文件",sentime:"2020-5-3 19:32:32",receiveTime:"2020-5-14 14:13:12",department:"组织部",status:"1"}],t.type=0,t.formHeight=600,t.pageNum=1,t.pageSize=10,t.totalElements=20,t}return Object(o["a"])(a,[{key:"setPagesize",value:function(){var t=this.$refs,e=t.viewbox.clientHeight,a=t.searchLine.clientHeight,i=t.pageBottom.clientHeight;this.formHeight=e-a-i,this.pageSize=Math.floor((this.formHeight-49)/48)}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.setPagesize()}))}},{key:"getPage",value:function(t){this.pageNum=t||1,console.log(t)}}]),a}(p["b"]);m=Object(r["a"])([Object(p["a"])({components:{Icon:u["Icon"],Spin:u["Spin"],Page:u["Page"],Select:u["Select"],Option:u["Option"],CheckboxGroup:u["CheckboxGroup"],RadioGroup:u["RadioGroup"],Radio:u["Radio"],Checkbox:u["Checkbox"]}})],m);var h=m,f=h,d=(a("8ea6"),a("2877")),g=Object(d["a"])(f,i,s,!1,null,"f27879ba",null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-1c4acb24.d8af23f8.js.map