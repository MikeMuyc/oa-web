(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dfa9de0"],{"14a4":function(e,t,a){e.exports=a.p+"img/暂无数据.857fa50e.png"},"45b5":function(e,t,a){},"49cf":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));var i=a("b6c4");function n(e){Object(i["b"])("notice",e)}function c(e){return i["a"].put("/api/oa/notice/changeIntoReadStatus",e).then((function(e){return e.data}))}},"4e0e":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"viewbox",attrs:{id:"noticeList"}},[i("div",{ref:"searchLine",staticClass:"searchLine"},[i("div",{staticClass:"left"},[i("div",{staticClass:"tabSelect",staticStyle:{"margin-right":"20px"}},[i("div",{staticClass:"option",class:{active:null===e.read},on:{click:function(t){return e.tabSelect(null)}}},[e._v("全部")]),i("div",{staticClass:"option",class:{active:!1===e.read},on:{click:function(t){return e.tabSelect(!1)}}},[e._v("未读")]),i("div",{staticClass:"option",class:{active:!0===e.read},on:{click:function(t){return e.tabSelect(!0)}}},[e._v("已读")])]),i("div",{staticClass:"pmbtn change",on:{click:e.setRead}},[e._v("标记为已读")])]),i("div",{staticClass:"right"},[i("normalInput",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:"请输入关键字"},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),i("div",{staticClass:"pmbtn primary",on:{click:function(t){return e.getPage()}}},[i("i",{staticClass:"iconfont iconsousuo"}),e._v("查询 ")])],1)]),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.noticeList,height:e.formHeight},on:{"selection-change":e.handleSelectionChange}},[i("template",{slot:"empty"},[i("img",{attrs:{src:a("14a4")}}),i("br"),e._v(" 暂无内容 ")]),i("el-table-column",{attrs:{type:"selection",label:"",width:"80px",align:"center"}}),i("el-table-column",{attrs:{prop:"title",label:"主题","min-width":"300px","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;t.$index;return[a.read?i("i",{staticClass:"iconfont iconyidu1"}):i("i",{staticClass:"iconfont iconweidu1"}),a.read?i("em",{staticClass:"read"},[e._v(" 【"+e._s(a.title)+"】"+e._s(e.cutDetail(a.detail)))]):i("em",{staticClass:"unread"},[e._v(" 【"+e._s(a.title)+"】"+e._s(e.cutDetail(a.detail)))])]}}])}),i("el-table-column",{attrs:{prop:"createTime",label:"时间","min-width":"170px"}}),i("el-table-column",{attrs:{label:"操作",align:"center",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){t.row,t.$index;return[i("font",{staticClass:"fontBtn"},[e._v("详情")]),i("font",{staticClass:"fontBtn-delete"},[e._v("删除")])]}}])})],2),i("div",{ref:"pageBottom",staticClass:"pageBottom"},[i("Page",{attrs:{"show-elevator":"","show-total":"","page-size":e.pageSize,current:e.pageNum,total:e.totalElements},on:{"on-change":e.getPage}})],1)],1)},n=[],c=(a("4160"),a("fb6a"),a("159b"),a("96cf"),a("1da1")),s=a("d4ec"),r=a("bee2"),o=a("262e"),l=a("2caf"),u=a("9ab4"),d=a("60a3"),h=a("f825"),f=a("49cf"),p=function(e){Object(o["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.noticeList=[],e.checkList=[],e.formHeight=600,e.pageNum=1,e.pageSize=10,e.totalElements=20,e.read=null,e.keyword="",e.loading=!1,e}return Object(r["a"])(a,[{key:"setPagesize",value:function(){var e=this.$refs,t=e.viewbox.clientHeight,a=e.searchLine.clientHeight,i=e.pageBottom.clientHeight;this.formHeight=t-a-i,this.pageSize=Math.floor((this.formHeight-49)/48)}},{key:"mounted",value:function(){var e=this;this.$nextTick((function(){e.setPagesize(),e.reset()}))}},{key:"getNoticeList",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t,a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.loading=!0;try{t={code:200,message:"success",data:{content:[{id:"5fb2658fad2d27614eeeb501",recipientId:"string",title:"string",detail:"string",attachmentId:["string"],createTime:"2020-11-16 19:42:07",creatorId:null,read:!1},{id:"5fb121e2c2d1c62180351af6",recipientId:"1232123",title:"你好 杭州！",detail:"how are you",attachmentId:["1444433"],createTime:"2020-11-15 20:41:06",creatorId:null,read:!0},{id:"5fb121e2c2d1c62180351af7",recipientId:"1221",title:"你好 浙江！",detail:"我们是浙江",attachmentId:["1335533"],createTime:"2020-11-15 20:41:06",creatorId:null,read:!0},{id:"5fb121d0c2d1c62180351af5",recipientId:"1221",title:"你好 浙江！",detail:"我们是浙江",attachmentId:["1335533"],createTime:"2020-11-15 20:40:48",creatorId:null,read:!0},{id:"5fb120ddc2d1c62180351aef",recipientId:"1221",title:"你好 浙江！",detail:"我们是浙江",attachmentId:["1335533"],createTime:"2020-11-15 20:36:45",creatorId:null,read:!1}],pageable:{sort:{sorted:!0,unsorted:!1,empty:!1},offset:0,pageNumber:0,pageSize:11,paged:!0,unpaged:!1},last:!1,totalPages:3,totalElements:23,number:0,size:11,sort:{sorted:!0,unsorted:!1,empty:!1},numberOfElements:11,first:!0,empty:!1}},a=t.data,i=a.content,n=a.totalElements,this.noticeList=i,this.totalElements=n}catch(c){this.$message.error("获取列表失败！"),console.log(c)}this.loading=!1;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getPage",value:function(e){this.pageNum=e||1,this.getNoticeList()}},{key:"reset",value:function(){this.read=null,this.keyword="",this.getPage()}},{key:"cutDetail",value:function(e){return e.slice(0,20)}},{key:"handleSelectionChange",value:function(e){var t=this;this.checkList=[],e.forEach((function(e){t.checkList.push(e.id)}))}},{key:"tabSelect",value:function(e){this.read=e,this.getPage()}},{key:"setRead",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.checkList.length>0)){e.next=14;break}return e.prev=1,e.next=4,f["a"](this.checkList);case 4:this.$message.success("已将选中的公告标记为“已读”！"),this.reset(),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](1),this.$message.error("操作失败！"),console.log(e.t0);case 12:e.next=15;break;case 14:this.$message.warning("请至少勾选一条公告！");case 15:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}()}]),a}(d["b"]);p=Object(u["a"])([Object(d["a"])({components:{Icon:h["Icon"],Spin:h["Spin"],Page:h["Page"],Select:h["Select"],Option:h["Option"],CheckboxGroup:h["CheckboxGroup"],RadioGroup:h["RadioGroup"],Radio:h["Radio"],Checkbox:h["Checkbox"]}})],p);var g=p,m=g,b=(a("7da1"),a("2877")),v=Object(b["a"])(m,i,n,!1,null,"45ca982c",null);t["default"]=v.exports},"7da1":function(e,t,a){"use strict";a("45b5")}}]);
//# sourceMappingURL=chunk-7dfa9de0.fd7f9d85.js.map