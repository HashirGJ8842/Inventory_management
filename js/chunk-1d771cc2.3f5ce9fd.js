(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d771cc2"],{"524a":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",{staticClass:"border-bottom m-4"},[t._v("Member's Section")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-2"}),s("div",{staticClass:"col-8"},t._l(t.items,(function(e){return s("div",{key:e.itemId,staticClass:"m-4"},[s("singleItem",{attrs:{item:e,type:t.$route.params.type}})],1)})),0)])])},n=[],i=(s("96cf"),s("1da1")),o=s("56d7"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.setAttribute(t.item.Total)},[s("div",{staticClass:"body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.item.Name))]),t.show?s("div",[s("p",{staticClass:"card-text"},[t._v("Number of items:- "+t._s(t.item.Total))]),s("a",{class:t.setButtonAttribute(t.item.Total),staticStyle:{color:"white"},on:{click:function(e){t.show=!1}}},[t._v(" Book ")])]):s("div",[s("p",[t._v("Enter the number of items you want to book:-")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"form-control",attrs:{placeholder:t.setValue()},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}}),s("button",{class:t.setButtonAttribute(t.item.Total),staticStyle:{color:"white"},on:{click:function(e){return t.insideClickHandler()}}},[t._v(" Save ")]),s("p",{staticClass:"text-muted"},[t._v(" This will notify other admins that the change is made. ")])])])])},c=[],l=(s("99af"),{props:["item"],data:function(){return{value:"",absolute:!0,show:!0}},created:function(){console.log("Came Here")},methods:{setValue:function(){return parseInt(this.$props.item.Total)},insideClickHandler:function(){console.log(this.$props.item.id),this.value&&o["db"].ref("notification").push({Name:this.$store.state.user.displayName,Email:this.$store.state.user.email,Body:"".concat(this.$store.state.user.displayName," wants to book ").concat(this.value," ").concat(this.$props.item.Name,"'s from the inventory."),Type:"issue"}),console.log("saved"),this.show=!0,this.$router.push({name:"Members"})},setButtonAttribute:function(t){return t>=0&&t<=4?"btn btn-danger":t>4&&t<=9?"btn btn-primary":t>9?"btn btn-success":void 0},setAttribute:function(t){return t>=0&&t<=4?"danger":t>4&&t<=9?"primary":t>9?"success":void 0}}}),u=l,m=(s("9977"),s("2877")),d=Object(m["a"])(u,r,c,!1,null,"54decab0",null),v=d.exports,p={components:{singleItem:v},data:function(){return{itemId:null,name:null,damaged:0,total:0,working:0,items:[],factor:1}},mounted:function(){this.getItems()},methods:{getItems:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=o["db"].ref("data/".concat(t.$route.params.type)),a=[],s.on("value",(function(t){for(var e in t.val()){console.log(e);var s=t.val()[e].Name,n=t.val()[e].Quantity,i=e;a.push({itemId:i,Name:s,Total:n})}})),t.items=a;case 4:case"end":return e.stop()}}),e)})))()}}},h=p,f=Object(m["a"])(h,a,n,!1,null,"7ee22084",null);e["default"]=f.exports},9977:function(t,e,s){"use strict";var a=s("e573"),n=s.n(a);n.a},e573:function(t,e,s){}}]);
//# sourceMappingURL=chunk-1d771cc2.3f5ce9fd.js.map