(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{edf7:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"flex q-mb-sm"},[s("div",{staticClass:"user-tasks__search q-mr-xl"},[s("SearchInput",{attrs:{arr:this.userList},on:{search:t.setSearchField}})],1),s("div",{staticClass:"user-tasks__filter q-mr-xl"},[s("FilterSelect",{attrs:{filterOptions:this.setFilterOptions()},on:{filterOption:t.setFilterOpt}})],1)]),s("q-list",{staticClass:"q-mb-xl"},t._l(t.filteredUsers,(function(e,i){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:"user_i"+i,attrs:{clickable:"",bordered:""},on:{click:function(s){return t.onClickShowUserInfo(e._id)}}},[s("q-item-section",[s("q-item-label",{attrs:{overline:""}},[t._v(t._s(i+1+"-")+t._s(e.fullName))])],1),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"q-mr-xs"},[s("q-icon",{attrs:{color:e.isDepartmentHead?"warning":"positive",name:e.isDepartmentHead?"face":"person",size:"xs"}}),t._v("/"+t._s(e.department))],1)])])],1)})),1)],1)},r=[],a=(s("ddb0"),s("2f62")),l=s("7ddd"),n=s("a991"),c=s("24449"),o=s("3b0f"),u=s("c8fa"),d={name:"UserList",mixins:[c["a"],l["a"]],computed:{...Object(a["c"])("user",["userList"]),filteredUsers(){let t=[...this.userList];if(this.searchingText&&(t=Object(o["a"])(t,this.searchingText,"fullName")),this.filterOption&&"Показать всех"!==this.filterOption){let e="department";t=Object(n["a"])(t,this.filterOption,e)}return t}},methods:{onClickShowUserInfo(t){this.$router.push("user/"+t)},setFilterOptions(){console.log(this.userList,"TEST");let t=[];return this.userList.forEach((e=>{t.push(e.department)})),["Показать всех",...Object(u["a"])(t)]}}},p=d,f=s("2877"),m=Object(f["a"])(p,i,r,!1,null,null,null);e["default"]=m.exports}}]);