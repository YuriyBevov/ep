(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{1605:function(t,e,s){"use strict";s("41c6")},"41c6":function(t,e,s){},"7c3b":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-info"},[this.currentTask?s("div",{staticClass:"task-info__part q-pa-sm"},[s("q-list",{staticClass:"q-mb-lg",attrs:{bordered:"",separator:""}},[s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{attrs:{overline:""}},[t._v("Группа проектов:")]),s("q-item-label",{staticClass:"text-orange-9"},[t._v(t._s(this.currentTask.projectMember?this.currentTask.projectMember:"Б/П"))])],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{attrs:{overline:""}},[t._v("Название задачи:")]),s("q-item-label",[t._v(t._s(this.currentTask.title)+" от "+t._s(t.setDate(this.currentTask.created)))])],1)],1),t._v("\n"+t._s(this.currentTask)+"\n                "),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"flex column",attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{attrs:{overline:""}},[t._v("Описание задачи:")]),s("q-item-label",[t._v(t._s(this.currentTask.description))])],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"flex column",attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{attrs:{overline:""}},[t._v("Статус задачи:")]),s("q-item-label",[s("span",{class:t.setTaskStatusColor(this.currentTask.status)},[t._v("\n                                "+t._s(t.translate(this.currentTask.status))+"\n                            ")])])],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"flex column",attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{attrs:{overline:""}},[t._v("Дата сдачи:")]),s("q-item-label",[t._v(t._s(this.currentTask.expDate?t.setDate(this.currentTask.expDate):"Без даты сдачи"))])],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"flex column",attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{attrs:{overline:""}},[t._v("Отдел:")]),s("q-item-label",[s("span",[t._v(t._s(this.currentTask.department?this.currentTask.department:"Не принадлежит к отделу"))])])],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"flex column",attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{attrs:{overline:""}},[t._v("Ответственное лицо:")]),s("q-item-label",[s("span",[t._v("\n                                "+t._s(this.currentTask.master?this.currentTask.master.fullName:"Не выбрано")+"\n                            ")])])],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"flex column",attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{attrs:{overline:""}},[t._v("Исполнители:")]),this.currentTask.performers?s("q-item-label",t._l(this.currentTask.performers,(function(e,a){return s("span",{key:"perf_"+a},[t._v("   \n                                "+t._s(e.fullName)+" "),a<t.currentTask.performers.length-1?s("span",[t._v("/")]):t._e()])})),0):s("q-item-label",[s("span",[t._v("Не выбраны")])])],1)],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"flex column",attrs:{clickable:""}},[s("q-item-section",[s("q-item-label",{attrs:{overline:""}},[t._v("Участники:")]),this.currentTask.members?s("q-item-label",t._l(this.currentTask.members,(function(e,a){return s("span",{key:"member_"+a},[t._v("   \n                                "+t._s(e.fullName)+" "),a<t.currentTask.members.length-1?s("span",[t._v("/")]):t._e()])})),0):s("q-item-label",[s("span",[t._v("Не выбраны")])])],1)],1)],1),s("div",{},[s("q-btn",{staticClass:"q-mr-sm",attrs:{color:"positive",label:"Редактировать"},on:{click:function(e){return t.updateTask(t.currentTask._id)}}}),s("q-btn",{attrs:{color:"negative",label:"Удалить"},on:{click:function(e){return t.deleteTask(t.currentTask._id)}}})],1)],1):t._e(),s("div",{staticClass:"task-info__part q-pa-sm"},[s("div",{staticClass:"task-info__gallery"},[s("q-carousel",{attrs:{swipeable:"",animated:"",arrows:"",fullscreen:t.fullscreen,infinite:""},on:{"update:fullscreen":function(e){t.fullscreen=e}},scopedSlots:t._u([{key:"control",fn:function(){return[s("q-carousel-control",{attrs:{position:"top-right",offset:[18,18]}},[s("q-btn",{attrs:{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:t.fullscreen?"fullscreen_exit":"fullscreen"},on:{click:function(e){t.fullscreen=!t.fullscreen}}})],1)]},proxy:!0}]),model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("q-carousel-slide",{attrs:{name:1,"img-src":"https://cdn.quasar.dev/img/mountains.jpg"}},[s("div",{staticClass:"absolute-bottom task-info__gallery-caption"},[s("div",{staticClass:"text-caption"},[t._v("Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains")])])]),s("q-carousel-slide",{attrs:{name:2,"img-src":"https://cdn.quasar.dev/img/parallax1.jpg"}},[s("div",{staticClass:"absolute-bottom task-info__gallery-caption"},[s("div",{staticClass:"text-caption"},[t._v("Mountains")])])])],1)],1),s("div",{staticClass:"task-info__chat",staticStyle:{width:"100%",height:"100%"}},[s("div",{staticClass:"task-info__chat-wrapper"},[s("q-chat-message",{attrs:{name:"me",avatar:"https://cdn.quasar.dev/img/avatar1.jpg",text:["hey, how are you?"],stamp:"7 minutes ago",sent:"","bg-color":"amber-7"}}),s("q-chat-message",{attrs:{name:"Jane",avatar:"https://cdn.quasar.dev/img/avatar5.jpg",text:["doing fine, how r you?"],stamp:"4 minutes ago","text-color":"white","bg-color":"primary"}})],1)])])])},i=[],n=s("2f62"),r=s("b178"),l=s("8cb1"),c=s("0727"),o={name:"TaskInfo",data(){return{isEditable:!1,slide:1,fullscreen:!1,currentTask:{}}},computed:{...Object(n["c"])("task",["taskList"]),...Object(n["c"])("user",["activeUser"])},methods:{...Object(n["b"])("task",["DELETE_TASK"]),translate(t){return Object(c["a"])(t)},setTaskStatusColor(t){return Object(l["a"])(t)},setTaskInfo(){this.currentTask=this.taskList.find((t=>t._id===this.$route.params.id))},setDate(t){return r["a"].formatDate(t,"DD.MM.YY HH:mm")},updateTask(t){console.log(t)},deleteTask(t){this.DELETE_TASK({_id:t})}},mounted(){this.setTaskInfo()},watch:{taskList:function(){this.setTaskInfo()}}},u=o,m=(s("1605"),s("2877")),p=Object(m["a"])(u,a,i,!1,null,null,null);e["default"]=p.exports}}]);