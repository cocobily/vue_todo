(function(t){function e(e){for(var i,r,a=e[0],l=e[1],c=e[2],d=0,p=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],i=!0,a=1;a<o.length;a++){var l=o[a];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=o[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=i,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"4ffd":function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrap",attrs:{id:"app"}},[o("TodoHeader",{attrs:{pdata:t.countFilter},on:{removeAllEvt:t.removeAll}}),o("TodoInput",{on:{addItemEvt:t.todoAdd}}),o("TodoList",{attrs:{propsdata:t.todoListItems},on:{toggleCheckEvt:t.changeDone,editItemEvt:t.editItem,doneEditEvt:t.editDone,removeItemEvt:t.removeTodoList}})],1)},s=[],r=(o("55dd"),o("6b54"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[t._m(0),o("button",{staticClass:"btn_reset",on:{click:t.removeAll}},[t._v("전체 삭제")]),o("div",{staticClass:"bx_count"},[t._v("총 : "+t._s(t.pdata.listTotal)+" "),o("span",[t._v("|")]),t._v(" 완료 : "+t._s(t.pdata.listComplete)+" "),o("span",[t._v("|")]),t._v(" 진행 : "+t._s(t.pdata.listBeing)+" ")])])}),a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",{staticClass:"tit"},[i("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:o("4ffd")}}),t._v("\n    Todo App\n  ")])}],l={props:["pdata"],methods:{removeAll:function(){this.$emit("removeAllEvt")}}},c=l,u=o("2877"),d=Object(u["a"])(c,r,a,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bx_inp"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.addItem(e)}}},[o("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model.trim",value:t.newItem,expression:"newItem",modifiers:{trim:!0}}],ref:"addinp",staticClass:"inp",attrs:{type:"text",placeholder:"할일을 입력 후 추가해 주세요."},domProps:{value:t.newItem},on:{input:function(e){e.target.composing||(t.newItem=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),o("button",{staticClass:"btn_add",attrs:{type:"button"},on:{click:t.addItem}},[t._v("+")])])])},m=[],v={data:function(){return{newItem:""}},methods:{addItem:function(){if(""!==this.newItem){var t=this.newItem;this.$emit("addItemEvt",t,this.$refs.addinp),this.clearText()}else alert("할일을 입력해주세요."),this.$refs.addinp.focus()},clearText:function(){this.newItem=""}},directives:{focus:{inserted:function(t){t.focus()}}}},h=v,g=Object(u["a"])(h,f,m,!1,null,null,null),_=g.exports,y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.propsdata.length?o("div",[t._m(0),o("ul",{staticClass:"li_todo"},t._l(t.propsdata,function(e,i){return o("li",{key:e.key,class:{todoComplete_li:e.isDone,edit_li:e.isEdit}},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEdit,expression:"!item.isEdit"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.isDone,expression:"item.isDone"}],attrs:{type:"checkbox",id:e.key},domProps:{checked:Array.isArray(e.isDone)?t._i(e.isDone,null)>-1:e.isDone},on:{click:function(o){return t.toggleCheck(e.key,i,e.isDone)},change:function(o){var i=e.isDone,n=o.target,s=!!n.checked;if(Array.isArray(i)){var r=null,a=t._i(i,r);n.checked?a<0&&t.$set(e,"isDone",i.concat([r])):a>-1&&t.$set(e,"isDone",i.slice(0,a).concat(i.slice(a+1)))}else t.$set(e,"isDone",s)}}}),o("span",{staticClass:"item_txt",attrs:{title:e.value},on:{dblclick:function(o){return t.editItem(e.key,i,e.isEdit)}}},[t._v("\n              "+t._s(e.value)+"\n          ")]),o("button",{staticClass:"btn_remove",on:{click:function(o){return t.removeItem(e.key,i)}}},[t._v("-")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"item.isEdit"}]},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],ref:"inp",refInFor:!0,staticClass:"edit",attrs:{type:"text"},domProps:{value:e.value},on:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.doneEdit(e.key,i,e.value,e.isEdit)},input:function(o){o.target.composing||t.$set(e,"value",o.target.value)}}}),o("button",{staticClass:"btn_ok",attrs:{type:"button"},on:{click:function(o){return t.doneEdit(e.key,i,e.value,e.isEdit)}}},[t._v("OK")])])])}),0)]):o("div",[o("p",{staticClass:"nodata"},[t._v("할일이 없습니다.")])])])},I=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bx_top"},[o("select",[o("option",[t._v("최신순")]),o("option",[t._v("진행중")]),o("option",[t._v("가나다순")])])])}],b={props:["propsdata"],methods:{removeItem:function(t,e){event.stopPropagation(),this.$emit("removeItemEvt",t,e)},toggleCheck:function(t,e,o){event.stopPropagation(),this.$emit("toggleCheckEvt",t,e,!o)},editItem:function(t,e,o){event.stopPropagation(),this.$emit("editItemEvt",t,e,!o,this.$refs.inp)},doneEdit:function(t,e,o,i){event.stopPropagation(),this.$emit("doneEditEvt",t,e,o,!i)}}},k=b,E=Object(u["a"])(k,y,I,!1,null,null,null),w=E.exports,x={data:function(){return{todoListItems:[],countFilter:[]}},methods:{removeAll:function(){alert("전체 삭제"),this.todoListItems=[],this.filterTodo(),this.$refs.addinp,localStorage.clear()},todoAdd:function(t,e){var o="k"+(new Date).getTime().toString(),i={key:o,value:t,isDone:!1,isEdit:!1};this.todoListItems.push(i),this.filterTodo(),e.focus(),localStorage.setItem(o,JSON.stringify(i))},removeTodoList:function(t,e){this.todoListItems.splice(e,1),this.filterTodo(),localStorage.removeItem(t)},changeDone:function(t,e,o){this.todoListItems[e].isDone=o;var i=this.todoListItems[e];this.filterTodo(),localStorage.setItem(t,JSON.stringify(i))},editItem:function(t,e,o,i){this.todoListItems[e].isEdit=o,setTimeout(function(){i[e].focus()},100)},editDone:function(t,e,o,i){if(""===o)alert("할일을 입력하세요");else{this.todoListItems[e].value=o,this.todoListItems[e].isEdit=i;var n=this.todoListItems[e];localStorage.setItem(t,JSON.stringify(n))}},filterTodo:function(){var t={listTotal:this.todoListItems.length,listComplete:0,listBeing:0};t.listComplete=this.todoListItems.filter(function(t){return!0===t.isDone}).length,t.listBeing=this.todoListItems.filter(function(t){return!1===t.isDone}).length,this.countFilter=t}},created:function(){if(localStorage.length>0){for(var t=0;t<localStorage.length;t++)if("loglevel:webpack-dev-server"!==localStorage.key(t)){var e=localStorage[localStorage.key(t)],o=JSON.parse(e);this.todoListItems.push(o)}this.todoListItems.sort(function(t,e){var o=t["key"],i=e["key"];return o<i?-1:o>i?1:0})}this.filterTodo()},components:{TodoHeader:p,TodoInput:_,TodoList:w}},C=x,T=Object(u["a"])(C,n,s,!1,null,null,null),$=T.exports;o("78a7");i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t($)}}).$mount("#app"),i["a"].directive("focus",{inserted:function(t){t.focus()}})},"78a7":function(t,e,o){}});
//# sourceMappingURL=app.212b5dc1.js.map