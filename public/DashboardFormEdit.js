(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{28:function(s,t,e){"use strict";var n=e(9);e.n(n).a},29:function(s,t,e){(s.exports=e(5)(!1)).push([s.i,"\n.row[data-v-4404ba62] {\n    font-size: 18px;\n}\n",""])},32:function(s,t,e){"use strict";e.r(t);e(11);var n={name:"Edit",data:function(){return{users:[],roles:[],is_admin:!1}},mounted:function(){this.init()},methods:{init:function(){var s=this;window.axios.post("/dashboard/users").then((function(t){!1===t.data.is_admin?location="/courses":(s.is_admin=t.data.is_admin,s.users=t.data.users,s.roles=t.data.roles),console.log(s.roles)}))},changeRole:function(s,t){window.axios.post("/dashboard/changerole",{id:s,role:t})}}},i=(e(28),e(0)),a=Object(i.a)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:s.is_admin,expression:"is_admin"}],staticClass:"container text-center"},[s._m(0),s._v(" "),s._l(s.users,(function(t){return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"},[s._v(s._s(t.name))]),s._v(" "),e("div",{staticClass:"col-1"},[s._v(s._s(t.roles[0].name))]),s._v(" "),e("div",{staticClass:"col-1"},[s._v(s._s(t.id))]),s._v(" "),e("div",{staticClass:"col-2"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.roles[0].name,expression:"user.roles[0].name"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(s){return s.selected})).map((function(s){return"_value"in s?s._value:s.value}));s.$set(t.roles[0],"name",e.target.multiple?n:n[0])},function(e){return s.changeRole(t.id,t.roles[0].name)}]}},s._l(s.roles,(function(t){return e("option",{domProps:{value:t.name}},[s._v(s._s(t.name))])})),0)])])])}))],2)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-1 border-right"},[this._v("Имя")]),this._v(" "),t("div",{staticClass:"col-1 border-right"},[this._v("Роль")])])])}],!1,null,"4404ba62",null);t.default=a.exports},9:function(s,t,e){var n=e(29);"string"==typeof n&&(n=[[s.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(6)(n,i);n.locals&&(s.exports=n.locals)}}]);