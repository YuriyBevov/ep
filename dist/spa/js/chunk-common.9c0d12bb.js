(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"0322":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-mb-md"},[s("p",{staticClass:"q-mb-md"},[t._v(t._s(this.$props.title)+":")]),t.$props.tasks.length?s("q-list",{staticClass:"flex no-wrap"},t._l(this.$props.tasks,(function(e,a){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:"task_i"+a,staticClass:"flex items-center q-mr-sm",staticStyle:{width:"150px"},style:"border: 1px solid"+t.$props.color,attrs:{dense:"",clickable:""},on:{click:function(s){return t.emitTaskID(e._id)}}},[s("q-item-section",[t._v(t._s(e.title))]),s("q-icon",{style:"color:"+t.$props.color,attrs:{name:"navigate_next",size:"20px"}})],1)})),1):s("span",{staticClass:"text-italic"},[t._v(t._s(this.$props.emptyText))])],1)},r=[],i={name:"ShortTaskCard",props:{title:{type:String},emptyText:{type:String},tasks:{type:Array},color:{type:String}},methods:{emitTaskID(t){this.$emit("openTask",t)}}},n=i,o=s("2877"),l=Object(o["a"])(n,a,r,!1,null,null,null);e["a"]=l.exports},"0727":function(t,e,s){"use strict";function a(t){return"isOpened"===t?"Открытая задача":"Открытая задача"===t?"isOpened":"inWork"===t?"В работе":"В работе"===t?"inWork":"isFrozen"===t?"Приостановлена":"Приостановлена"===t?"isFrozen":"isDone"===t?"Выполнена":"Выполнена"===t?"isDone":"isClosed"===t?"Закрыта":"Закрыта"===t?"isClosed":void 0}s.d(e,"a",(function(){return a}))},24449:function(t,e,s){"use strict";s.d(e,"a",(function(){return p}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-input",{staticClass:"search",staticStyle:{width:"200px"},attrs:{square:"",outlined:"",type:"search",placeholder:"Поиск"},on:{input:t.emitSearchText},scopedSlots:t._u([{key:"append",fn:function(){return[t.search.length?s("q-btn",{attrs:{flat:""},on:{click:function(e){return t.reset()}}},[s("q-icon",{attrs:{name:"close"}})],1):s("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})},r=[],i={name:"Search",data(){return{search:""}},methods:{emitSearchText(){this.$emit("search",this.search)},reset(){this.search="",this.emitSearchText()}}},n=i,o=(s("845e"),s("2877")),l=Object(o["a"])(n,a,r,!1,null,null,null),c=l.exports;const p={components:{SearchInput:c},data(){return{searchingText:""}},methods:{setSearchField(t){console.log(!!t),this.searchingText=t}}}},"32a1":function(t,e,s){"use strict";s.d(e,"a",(function(){return p}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-select",{staticStyle:{width:"250px"},attrs:{filled:"",options:this.$props.sortOptions,label:"Сортировка"},on:{input:t.emitSortOption},model:{value:t.option,callback:function(e){t.option=e},expression:"option"}})},r=[],i={name:"SortSelect",props:{sortOptions:{type:Array}},data(){return{option:""}},methods:{emitSortOption(){this.$emit("sortOption",this.option)},reset(){this.option="",this.emitSortOption()}}},n=i,o=s("2877"),l=Object(o["a"])(n,a,r,!1,null,null,null),c=l.exports;const p={components:{SortSelect:c},data(){return{sortOption:""}},methods:{setSortOpt(t){this.sortOption=t}}}},"3b0f":function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));s("498a");function a(t,e,s){let a=[],r=e.trim().toLowerCase();return t.forEach((t=>-1!==t[s].toLowerCase().trim().indexOf(r)?a.push(t):null)),a}},"49cc":function(t,e,s){},"50b6":function(t,e,s){},"5e64":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"task-card",style:this.$props.cardView?"width: 320px;":"width: 100%; display: flex; align-items: center;",attrs:{flat:"",bordered:""}},[this.$props.cardView?t._e():s("q-card-section",{style:this.$props.cardView?null:"padding: 0; padding-left: 15px; flex-grow: 1;"},[s("div",{staticClass:"flex items-center"},[s("span",{staticClass:"task-card__title task-card__title--full text-h6 q-mr-auto"},[t._v(t._s(this.$props.taskData.title))]),s("span",{staticClass:"q-mr-lg",class:t.setTaskStatusColor(this.$props.taskData.status)},[t._v("\n                "+t._s(t.translate(this.$props.taskData.status))+"\n            ")]),s("span",{staticClass:"text-orange-4 q-mr-lg"},[t._v("Приоритет: "+t._s(this.$props.taskData.priority))]),s("span",{staticClass:"text-caption"},[t._v("\n                "+t._s(t.setDate(this.$props.taskData.expDate))+"\n            ")])])]),this.$props.cardView?s("q-card-section",[s("div",{staticClass:"text-overline flex justify-between"},[s("span",{staticClass:"text-orange-9"},[t._v("\n                "+t._s(this.$props.taskData.projectMember?this.$props.taskData.projectMember:"Б/П")+"\n            ")]),s("span",{class:t.setTaskStatusColor(this.$props.taskData.status)},[t._v("\n                "+t._s(t.translate(this.$props.taskData.status))+"\n            ")])]),s("div",{staticClass:"text-h5 q-mt-sm q-mb-xs flex justify-between items-center"},[s("span",{staticClass:"task-card__title"},[t._v(t._s(this.$props.taskData.title))]),s("div",{staticClass:"flex column items-end text-caption"},[s("span",{staticClass:"text-orange-4"},[t._v("Приоритет: "+t._s(this.$props.taskData.priority))]),s("span",[t._v(t._s(t.setDate(this.$props.taskData.expDate)))])])]),s("div",{staticClass:"text-caption text-grey cmn__text cmn__text--ellipsys"},[t._v("\n            "+t._s(this.$props.taskData.description)+"\n        ")])]):t._e(),s("q-card-actions",[s("q-btn",{attrs:{flat:"",color:"dark","icon-right":"navigate_next",label:this.$props.cardView?"Перейти в задачу":null},on:{click:function(e){return t.onClickOpenTaskInfo(t.$props.taskData._id)}}}),s("q-space"),this.$props.cardView?s("q-btn",{attrs:{color:"grey",round:"",flat:"",dense:"",icon:t.isCardExpanded?"keyboard_arrow_up":"keyboard_arrow_down"},on:{click:function(e){t.isCardExpanded=!t.isCardExpanded}}}):t._e()],1),s("q-slide-transition",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isCardExpanded&&this.$props.cardView,expression:"isCardExpanded && this.$props.cardView"}]},[s("q-separator"),s("q-card-section",{staticClass:"text-subtitle2"},[s("div",{staticClass:"text-overline"},[s("span",{staticClass:"text-grey"},[t._v("Создатель:")]),t._v(" "+t._s(this.$props.taskData.createdBy.fullName)+"\n                ")]),s("div",{staticClass:"text-overline"},[s("span",{staticClass:"text-grey"},[t._v("Дата создания: ")]),s("span",[t._v("  "+t._s(t.setDate(this.$props.taskData.created)))])]),s("div",{staticClass:"text-overline"},[s("div",[s("span",{staticClass:"text-grey"},[t._v("Участники:")])]),this.$props.taskData.members?s("ul",{staticClass:"cmn__list q-pl-none"},t._l(this.$props.taskData.members,(function(e,a){return s("li",{key:"member_"+a},[t._v("\n                            "+t._s(e.fullName)+"\n                        ")])})),0):s("span",[t._v("Не выбраны")])]),s("div",{staticClass:"text-overline"},[s("div",[s("span",{staticClass:"text-grey"},[t._v("Исполнители:")])]),this.$props.taskData.performers?s("ul",{staticClass:"cmn__list q-pl-none"},t._l(this.$props.taskData.performers,(function(e,a){return s("li",{key:"performer_"+a,staticClass:"q-pl-none"},[t._v("\n                            "+t._s(e.fullName)+"\n                        ")])})),0):s("span",[t._v("Не выбраны")])]),s("div",{staticClass:"text-overline"},[s("div",[s("span",{staticClass:"text-grey"},[t._v("Ответственное лицо:")])]),this.$props.taskData.master?s("span",[t._v(t._s(this.$props.taskData.master.fullName))]):s("span",[t._v("Не выбрано")])]),s("div",{staticClass:"text-overline"},[s("div",[s("span",{staticClass:"text-grey"},[t._v("Подзадачи:")])]),this.$props.taskData.subtasks.length?s("ul",{staticClass:"cmn__list q-pl-none"},t._l(this.$props.taskData.subtasks,(function(e,a){return s("li",{key:"subtask_"+a},[t._v("\n                            "+t._s(e.title)+"\n                        ")])})),0):s("span",[t._v("Нет")])])])],1)])],1)},r=[],i=s("8cb1"),n=s("0727"),o=s("b178"),l={name:"TaskCard",props:{taskData:{type:Object},cardView:{type:Boolean}},data(){return{isCardExpanded:!1}},methods:{translate(t){return Object(n["a"])(t)},setTaskStatusColor(t){return Object(i["a"])(t)},setDate(t){return o["a"].formatDate(t,"DD.MM.YY HH:mm")},onClickOpenTaskInfo(t){this.$router.push("task/"+t)}}},c=l,p=(s("8a11"),s("2877")),u=Object(p["a"])(c,a,r,!1,null,null,null);e["a"]=u.exports},"7ddd":function(t,e,s){"use strict";s.d(e,"a",(function(){return p}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-select",{staticStyle:{width:"250px"},attrs:{filled:"",options:this.$props.filterOptions,label:"Фильтр"},on:{input:t.emitFilterOption},model:{value:t.option,callback:function(e){t.option=e},expression:"option"}})},r=[],i={name:"FilterSelect",props:{filterOptions:{type:Array}},data(){return{option:""}},methods:{emitFilterOption(){this.$emit("filterOption",this.option)},reset(){this.option="",this.emitFilterOption()}}},n=i,o=s("2877"),l=Object(o["a"])(n,a,r,!1,null,null,null),c=l.exports;const p={components:{FilterSelect:c},data(){return{filterOption:""}},methods:{setFilterOpt(t){this.filterOption=t}}}},"845e":function(t,e,s){"use strict";s("49cc")},"8a11":function(t,e,s){"use strict";s("50b6")},"8cb1":function(t,e,s){"use strict";function a(t){return"isOpened"===t?"text-red-14":"inWork"===t?"text-green-12":"isFrozen"===t?"text-grey-4":"isDone"===t?"text-green-10":"isClosed"===t?"text-grey-10":null}s.d(e,"a",(function(){return a}))},a991:function(t,e,s){"use strict";function a(t,e,s,a=null){return t.filter((t=>null!==a?t[s][a]===e:t[s]===e))}s.d(e,"a",(function(){return a}))},cefc:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));s("ddb0"),s("4e82");function a(t,e,s){let a=[...t],r=[];if("expDate"===s&&(a=a.filter((t=>(null===t[s]&&r.push(t),null!==t[s])))),"fromBiggest"===e){if(r.length){let t=a.sort(((t,e)=>t[s]>e[s]?-1:0));return[...t,...r]}return t.sort(((t,e)=>t[s]>e[s]?-1:0))}if("fromSmaller"===e){if(r.length){let t=a.sort(((t,e)=>t[s]<e[s]?-1:0));return[...t,...r]}return t.sort(((t,e)=>t[s]<e[s]?-1:0))}}},d21d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"selection"},[s("div",{staticClass:"selection__header q-mb-lg flex"},[s("div",{staticClass:"q-mr-sm"},[s("SearchInput",{attrs:{arr:this.$props.users},on:{search:t.setSearchField}})],1),s("div",[s("FilterSelect",{attrs:{filterOptions:t.concatOptions()},on:{filterOption:t.setFilterOpt}})],1)]),s("div",{staticClass:"selection__content flex items-center q-mb-lg"},[this.filteredUserList.length?s("div",{staticClass:"q-mr-lg"},t._l(t.filteredUserList,(function(e,a){return s("div",{key:"user_"+a,staticClass:"flex items-center",staticStyle:{width:"100%","max-width":"500px",height:"40px"}},[s("span",{staticClass:"q-mr-auto"},[t._v(t._s(e.fullName)+"("+t._s(e.department)+")")])])})),0):s("div",[s("span",[t._v("Никого нет...")])]),s("div",{staticClass:"flex column"},t._l(t.filteredMembersData,(function(e,a){return s("div",{key:"member_"+a},["department_create"===t.$props.type?s("q-checkbox",{staticStyle:{width:"80px"},on:{input:function(s){return t.checkMemberRole(e)}},model:{value:e.isHead,callback:function(s){t.$set(e,"isHead",s)},expression:"member.isHead"}},[s("q-badge",{attrs:{outline:"",color:"orange",label:"Нач."}})],1):t._e(),"task_create"===t.$props.type?s("q-checkbox",{on:{input:function(s){t.checkIsUnique(e,"isMaster"),t.checkMemberRole(e)}},model:{value:e.isMaster,callback:function(s){t.$set(e,"isMaster",s)},expression:"member.isMaster"}},[s("q-badge",{attrs:{outline:"",color:"orange",label:"Отв."}})],1):t._e(),"task_create"===t.$props.type?s("q-checkbox",{staticStyle:{width:"80px"},on:{input:function(s){return t.checkMemberRole(e)}},model:{value:e.isPerformer,callback:function(s){t.$set(e,"isPerformer",s)},expression:"member.isPerformer"}},[s("q-badge",{attrs:{outline:"",color:"secondary",label:"Исп."}})],1):t._e(),"task_create"===t.$props.type||"department_create"===t.$props.type?s("q-checkbox",{staticStyle:{width:"80px"},attrs:{disable:!!(e.isPerformer||e.isHead||e.isMaster)},on:{input:function(s){return t.checkMemberRole(e)}},model:{value:e.isMember,callback:function(s){t.$set(e,"isMember",s)},expression:"member.isMember"}},[s("q-badge",{attrs:{outline:"",color:"secondary",label:"Уч-к"}})],1):t._e()],1)})),0)]),s("div",["department_create"===this.$props.type?s("span",{staticClass:"text-italic",staticStyle:{color:"#C10015"}},[t._v(" * Если пользователь уже состоит в каком-либо отделе, он покидает его, при условии, что не является единственным руководителем прежнего отдела !")]):t._e()]),s("q-btn",{on:{click:t.submit}},[t._v("Подтвердить")])],1)},r=[],i=(s("ddb0"),s("7ddd")),n=s("a991"),o=s("24449"),l=s("3b0f");function c(t){return Array.from(new Set(t))}var p={name:"UserSelection",mixins:[o["a"],i["a"]],props:{users:{type:Array},type:{type:String}},data(){return{members:[]}},methods:{concatOptions(){let t=[];return this.$props.users.forEach((e=>{t.push(e.department)})),["Все",...c(t)]},checkMemberRole(t){(t.isHead||t.isPerformer||t.isMaster)&&(console.log(t.isHead,t.isMaster),t.isMember=!0)},checkIsUnique(t,e){let s=this.members.find((e=>e._id===t._id));this.members.forEach((t=>{t._id!==s._id&&(t[e]=!1)}))},submit(){let t=[];this.members.forEach((e=>{e.isMember&&t.push(e)})),this.$emit("memberList",t)}},computed:{filteredUserList(){let t=this.$props.users;if(this.searchingText&&(t=Object(l["a"])(t,this.searchingText,"fullName")),this.filterOption&&"Все"!==this.filterOption){let e="department",s=this.filterOption;t=Object(n["a"])(t,s,e)}return t},poolData(){this.$props.users.forEach((t=>{this.members.push({_id:t._id,fullName:t.fullName,isMaster:!1,isHead:!1,isMember:!1,isPerformer:!1})}))},filteredMembersData(){let t=[];return this.filteredUserList.forEach((e=>{let s=this.members.find((t=>t._id===e._id));s&&t.push(s)})),t}},beforeMount(){this.poolData}},u=p,d=s("2877"),m=Object(d["a"])(u,a,r,!1,null,null,null);e["a"]=m.exports}}]);