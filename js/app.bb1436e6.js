(function(e){function t(t){for(var i,a,u=t[0],c=t[1],l=t[2],p=0,d=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/lol/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("h1",[e._v("lol Champions skins cart")]),n("Table",{ref:"selection",attrs:{border:"",columns:e.columns,data:e.data1},scopedSlots:e._u([{key:"image",fn:function(e){var t=e.row;return[n("img",{staticClass:"cover-fit",attrs:{src:t.image,alt:""}})]}},{key:"total",fn:function(t){var i=t.row;return[n("span",[e._v(e._s(e.computedTotal(i.price,i.count)))])]}},{key:"action",fn:function(t){var i=t.index;return[n("Button",{attrs:{type:"error"},on:{click:function(t){return e.remove(i)}}},[e._v("Delete")])]}}])}),n("div",{staticClass:"footer"},[n("h1",[e._v("Total: "+e._s(e.total))]),n("p",[n("Button",{attrs:{type:"success"},on:{click:function(t){return e.submit()}}},[e._v("Pay")])],1)])],1)])},o=[],a=(n("b680"),n("a434"),n("d81d"),n("901e")),u=n.n(a),c={name:"App",data:function(){var e=this;return{columns:[{type:"selection",width:60,align:"center"},{title:"Number",key:"number",type:"index"},{title:"Image",key:"image",slot:"image",width:250},{title:"Name",key:"name"},{title:"Price",key:"price"},{title:"Quantity",key:"count",render:function(t,n){return t("div",[t("InputNumber",{props:{max:100,min:0,value:n.row.count},on:{"on-change":function(t){e.data1[n.index].count=t}}})])}},{title:"Total Price",slot:"total"},{title:"Action",key:"action",slot:"action"}],data1:[{id:"0",image:"./images/Irelia.jpg",name:"PROJECT: Irelia",price:"43.65",count:0},{id:"1",image:"./images/Irelia2.jpg",name:"Aviator Irelia",price:"76.63",count:0},{id:"2",image:"./images/Zilean.jpg",name:"Sugar Rush Zilean",price:"43.65",count:0},{id:"3",image:"./images/Yuumi.jpg",name:"Battle Principal Yuumi",price:"50.65",count:0},{id:"4",image:"./images/XinZhao.jpg",name:"Secret Agent Xin Zhao",price:"83.25",count:0},{id:"5",image:"./images/Nunu.jpg",name:"Nunu & Willump",price:"43.65",count:0},{id:"6",image:"./images/Lux.jpg",name:"Elementalist Lux",price:"76.63",count:0},{id:"7",image:"./images/Gnar.jpg",name:"Super Galaxy Gnar",price:"76.63",count:0}]}},methods:{computedTotal:function(e,t){return new u.a(e).multipliedBy(t).toFixed(2)},remove:function(e){var t=this;this.$Modal.confirm({title:"Hint",content:"<p>Are you sure you want to delete this product？</p>",onOk:function(){t.$Message.info("Deleted"),t.data1.splice(e,1)},onCancel:function(){}})},submit:function(){var e=this.data1.map((function(e){return{id:e.id,count:e.count}}));console(e)}},computed:{total:function(){var e=this.data1.reduce((function(e,t){return new u.a(e).plus(new u.a(t.count).multipliedBy(t.price))}),0);return new u.a(e).toFixed(2)}}},l=c,s=(n("034f"),n("2877")),p=Object(s["a"])(l,r,o,!1,null,null,null),d=p.exports,f=n("f825"),m=n.n(f);n("f8ce");i["default"].use(m.a),i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.bb1436e6.js.map