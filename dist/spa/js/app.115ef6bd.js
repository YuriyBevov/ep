(function(e){function t(t){for(var s,a,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&m.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],s=!0,a=1;a<o.length;a++){var i=o[a];0!==n[i]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=o[0]))}return e}var s={},a={2:0},n={2:0},r=[];function i(e){return c.p+"js/"+({0:"chunk-common"}[e]||e)+"."+{0:"fe154c2d",3:"e7cd74ee",4:"1f4531a3",5:"2a88d1af",6:"5924181a",7:"910a0b78",8:"9dd46fa9",9:"14636656",10:"980a27b9",11:"11331927",12:"a063adad",13:"8d99dd6c",14:"f609c4f8",15:"4a5fd62e",16:"2b8254da",17:"75bb8716",18:"2f20e8c5",19:"69d7b27e"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var o=s[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o={0:1,3:1,4:1,5:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=new Promise((function(t,o){for(var s="css/"+({0:"chunk-common"}[e]||e)+"."+{0:"a9f14dc0",3:"02daecaf",4:"fc417d7f",5:"02daecaf",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0",17:"31d6cfe0",18:"31d6cfe0",19:"31d6cfe0"}[e]+".css",n=c.p+s,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===n))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){l=m[i],d=l.getAttribute("data-href");if(d===s||d===n)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var s=t&&t.target&&t.target.src||n,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete a[e],u.parentNode.removeChild(u),o(r)},u.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(u)})).then((function(){a[e]=0})));var s=n[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,o){s=n[e]=[t,o]}));t.push(s[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var m=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(u);var o=n[e];if(0!==o){if(o){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",m.name="ChunkLoadError",m.type=s,m.request=a,o[1](m)}n[e]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(o,s,function(t){return e[t]}.bind(null,s));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var u=d;r.push([0,1]),o()})({0:function(e,t,o){e.exports=o("2f39")},"2f39":function(e,t,o){"use strict";o.r(t);o("5319"),o("7d6e"),o("e54f"),o("985d"),o("31cd");var s=o("2b0e"),a=o("1f91"),n=o("42d2"),r=o("b178");s["a"].use(r["b"],{config:{},lang:a["a"],iconSet:n["a"]});var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view"),o("Loader",{attrs:{loadingState:e.loadingState}}),o("ServerAnswerModal",{attrs:{modalText:e.serverAnswerData.message,status:e.serverAnswerData.isOpened}})],1)},c=[],l=o("2f62"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-inner-loading",{attrs:{showing:this.$props.loadingState}},[o("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)},m=[],u={name:"Loader",props:{loadingState:{type:Boolean,default:!0}}},p=u,E=(o("f488"),o("2877")),_=Object(E["a"])(p,d,m,!1,null,null,null),h=_.exports,f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-dialog",{attrs:{persistent:""},model:{value:e.isOpened,callback:function(t){e.isOpened=t},expression:"isOpened"}},[o("q-card",[o("q-card-section",{staticClass:"row items-center"},[o("span",{staticClass:"q-ml-sm"},[e._v(e._s(this.$props.modalText))])]),o("q-card-actions",{attrs:{align:"right"}},[o("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Ок",color:"primary"},on:{click:function(t){return e.resetModalState()}}})],1)],1)],1)},T=[],A={props:{status:{type:Boolean},modalText:{type:String},serverAnswerStatus:{type:Number}},data(){return{isOpened:!1,text:""}},methods:{...Object(l["b"])("common",["SET_SERVER_ANSWER_MODAL"]),resetModalState(){this.SET_SERVER_ANSWER_MODAL({msg:"",isOpened:!1})}},watch:{status:function(e,t){this.isOpened=e},modalText:function(e,t){this.text=e}}},S=A,g=Object(E["a"])(S,f,T,!1,null,null,null),L=g.exports,N={name:"App",components:{Loader:h,ServerAnswerModal:L},methods:{...Object(l["b"])("user",["AUTHENTICATION"]),initApp(){this.AUTHENTICATION()}},computed:{...Object(l["c"])("common",["loadingState","serverAnswerData"])},created(){this.initApp()}},O=N,R=Object(E["a"])(O,i,c,!1,null,null,null),b=R.exports,I=o("bc3a"),v=o.n(I),D=o("4328"),k=o.n(D);v.a.defaults.headers.post["Content-Type"]="application/json;charset=utf-8",v.a.defaults.headers.post["Access-Control-Allow-Origin"]="*",v.a.defaults.headers.get["Content-Type"]="application/json;charset=utf-8",v.a.defaults.headers.get["Access-Control-Allow-Origin"]="*",console.log(v.a.defaults.headers);const y=v.a.create({paramsSerializer:e=>k.a.stringify(e,{arrayFormat:"repeat"}),baseURL:"http://5.23.54.158/"});s["a"].prototype.$axios=y;const P={CHANGE_LOADING_STATE({commit:e},t){e("SET_LOADING_STATE",t)},SET_SERVER_ANSWER_MODAL({commit:e},t){e("FILL_SERVER_ANSWER_STATE",t)}},G={SET_LOADING_STATE(e,t){e.isLoading=t},FILL_SERVER_ANSWER_STATE(e,t){e.serverAnswer={message:t.message,isOpened:t.isOpened}}},w={isLoading:!0,serverAnswer:{message:"",isOpened:!1}},C={loadingState:e=>e.isLoading,serverAnswerData:e=>e.serverAnswer};var M={namespaced:!0,actions:P,mutations:G,state:w,getters:C};const U={INIT_APP({commit:e,dispatch:t}){console.log("init"),y.get("/init/init_app").then((()=>{t("user/GET_USER_LIST",{},{root:!0}),t("task/GET_TASK_LIST",{},{root:!0}),t("department/GET_DEPARTMENT_LIST",{},{root:!0})})).catch((e=>console.log(e)))}},j={},V={},H={};var W={namespaced:!0,actions:U,mutations:j,state:V,getters:H};const x={},$={},q={},F={};var K={namespaced:!0,state:x,mutations:$,actions:q,getters:F};o("a79d");const z={userList:[],activeUser:{}},B={SET_ACTIVE_USER(e,t){e.activeUser=t},SET_USER_LIST(e,t){e.userList=t}},J={LOGIN({commit:e,dispatch:t},o){t("common/CHANGE_LOADING_STATE",!0,{root:!0}),y.post("user/login",o).then((o=>{localStorage.setItem("token",o.data.token),console.log("login"),t("init/INIT_APP",!0,{root:!0}),e("SET_ACTIVE_USER",o.data.user)})).then((e=>{this.$router.push("/")})).catch((e=>console.log(e))).finally((()=>{t("common/CHANGE_LOADING_STATE",!1,{root:!0})}))},LOGOUT({commit:e}){delete y.defaults.headers.common["Authorization"],localStorage.removeItem("token"),e("SET_ACTIVE_USER",{}),this.$router.push("/login")},AUTHENTICATION({commit:e,dispatch:t}){y.defaults.headers.common["Authorization"]=localStorage.getItem("token"),y.get("/auth/auth").then((o=>{console.log("auth ok"),e("SET_ACTIVE_USER",o.data.user),t("REFRESH_TOKEN",o.data.token),t("init/INIT_APP",!0,{root:!0})})).catch((e=>{console.log("auth not"),localStorage.removeItem("token"),this.$router.push("/login")})).finally((()=>{t("common/CHANGE_LOADING_STATE",!1,{root:!0})}))},REFRESH_TOKEN({dispatch:e},t){localStorage.setItem("token",t),setTimeout((()=>{e("USER_AUTHENTICATION")}),144e5)},CREATE_USER({commit:e,dispatch:t},o){t("common/CHANGE_LOADING_STATE",!0,{root:!0}),y.post("user/add_user",o).then((e=>{this.$router.push("/users"),t("init/INIT_APP",!0,{root:!0}),t("common/SET_SERVER_ANSWER_MODAL",{message:e.data.message,isOpened:!0},{root:!0})})).catch((e=>{t("common/SET_SERVER_ANSWER_MODAL",{message:e.response.data.message,isOpened:!0},{root:!0})})).finally((()=>{t("common/CHANGE_LOADING_STATE",!1,{root:!0})}))},GET_USER_LIST({commit:e}){y.get("user/get_users").then((t=>{e("SET_USER_LIST",t.data)})).catch((e=>console.log(e)))},UPDATE_USER({commit:e,dispatch:t},o){console.log(o),t("common/CHANGE_LOADING_STATE",!0,{root:!0}),y.post("user/update_user",o).then((e=>{t("init/INIT_APP",!0,{root:!0}),t("common/SET_SERVER_ANSWER_MODAL",{message:e.data.message,isOpened:!0},{root:!0})})).catch((e=>{t("common/SET_SERVER_ANSWER_MODAL",{message:e.response.data.message,isOpened:!0},{root:!0})})).finally((()=>{t("common/CHANGE_LOADING_STATE",!1,{root:!0})}))},DELETE_USER({commit:e,dispatch:t},o){t("common/CHANGE_LOADING_STATE",!0,{root:!0}),y.post("user/delete_user",o).then((e=>{this.$router.push("/users"),t("init/INIT_APP",!0,{root:!0}),t("common/SET_SERVER_ANSWER_MODAL",{message:e.data.message,isOpened:!0},{root:!0})})).catch((e=>{t("common/SET_SERVER_ANSWER_MODAL",{message:e.response.data.message,isOpened:!0},{root:!0})})).finally((()=>{t("common/CHANGE_LOADING_STATE",!1,{root:!0})}))}},Q={userList:e=>e.userList,activeUser:e=>e.activeUser,currentOrdinalNumber:e=>e.userList.length?e.userList[e.userList.length-1].ordinalNumber+1:null,roles:e=>e.activeUser?e.activeUser.roles:null};var X={namespaced:!0,state:z,mutations:B,actions:J,getters:Q};function Y(e,t,o){e.forEach((e=>{t.forEach((t=>{e._id===t._id&&(e[o]=t[o])}))}))}const Z={departmentList:[]},ee={SET_DEPARTMENTS_LIST(e,t){e.departmentList=t}},te={GET_DEPARTMENT_LIST({commit:e}){y.get("departments/get_departments").then((t=>{e("SET_DEPARTMENTS_LIST",t.data.departments)})).catch((e=>console.log(e)))},CREATE_DEPARTMENT({commit:e,dispatch:t},o){t("common/CHANGE_LOADING_STATE",!0,{root:!0}),y.post("departments/create_department",o).then((e=>{t("init/INIT_APP",!0,{root:!0}),t("common/SET_SERVER_ANSWER_MODAL",{message:e.data.message,isOpened:!0},{root:!0})})).catch((e=>{t("common/SET_SERVER_ANSWER_MODAL",{message:e.response.data.message,isOpened:!0},{root:!0})})).finally((()=>{this.$router.push("/departments"),t("common/CHANGE_LOADING_STATE",!1,{root:!0})}))},UPDATE_DEPARTMENT({commit:e,dispatch:t},o){t("common/CHANGE_LOADING_STATE",!0,{root:!0}),y.post("departments/update_department",o).then((e=>{t("init/INIT_APP",!0,{root:!0}),t("common/SET_SERVER_ANSWER_MODAL",{message:e.data.message,isOpened:!0},{root:!0})})).catch((e=>{t("common/SET_SERVER_ANSWER_MODAL",{message:e.response.data.message,isOpened:!0},{root:!0})})).finally((()=>{t("common/CHANGE_LOADING_STATE",!1,{root:!0})}))},DELETE_DEPARTMENT({commit:e,dispatch:t},o){t("common/CHANGE_LOADING_STATE",!0,{root:!0}),y.post("departments/delete_department",o).then((e=>{t("init/INIT_APP",!0,{root:!0}),t("common/SET_SERVER_ANSWER_MODAL",{message:e.data.message,isOpened:!0},{root:!0})})).catch((e=>{t("common/SET_SERVER_ANSWER_MODAL",{message:e.response.data.message,isOpened:!0},{root:!0})})).finally((()=>{this.$router.push("/departments"),t("common/CHANGE_LOADING_STATE",!1,{root:!0})}))}},oe={departmentList:(e,{},t)=>{let o=t.user.userList,s=t.task.taskList;return e.departmentList.forEach((e=>{e.members&&Y(e.members,o,"fullName"),e.heads&&Y(e.heads,o,"fullName"),e.tasks&&Y(e.tasks,s,"title")})),e.departmentList}};var se={namespaced:!0,state:Z,mutations:ee,actions:te,getters:oe};const ae=[{id:"1",title:"AМ на большевиков",description:"Делаем большой магазин под ключ",projectGroup:{id:"1",name:"АМ"},tasks:[{id:"1",id:"2"}],members:[{id:"2"},{id:"3"}],master:{id:"2"},created:{by:{id:"2"},date:new Date},exp:new Date,priority:7,status:"inWork"},{id:"2",title:"ЛекОптТорг на петроградке",description:"Вешаем вывеску и делаем интерьер",projectGroup:{id:"2",name:"ЛекОптТорг"},tasks:[{id:"3",id:"5"}],members:[{id:"1"},{id:"3"}],master:{id:"3"},created:{by:{id:"1"},date:new Date},exp:new Date,priority:7,status:"isDone"}],ne={projectList:[]},re={SET_PROJECT_LIST(e,t){e.projectList=t}},ie={GET_PROJECT_LIST({commit:e}){e("SET_PROJECT_LIST",ae)}},ce={projectList:(e,{},t)=>{function o(e,t,o){e.forEach((e=>{t.forEach((t=>{e.id===t.id&&(e[o]=t[o])}))}))}let s=t.task.taskList,a=t.user.userList;return e.projectList.forEach((e=>{o(e.tasks,s,"title"),o(e.members,a,"fullName"),e.master.fullName=a.find((t=>t.id===e.master.id)).fullName,e.created.by.fullName=a.find((t=>t.id===e.created.by.id)).fullName,e.statusDesc="isOpened"===e.status?"Открытая задача":"inWork"===e.status?"В работе":"isFrozen"===e.status?"Приостановлена":"isDone"===e.status?"Выполнена":"isClosed"===e.status?"Закрыта":null})),e.projectList}};var le={namespaced:!0,state:ne,mutations:re,actions:ie,getters:ce};const de={taskList:[]},me={FILL_TASK_LIST(e,t){e.taskList=t}},ue={GET_TASK_LIST({commit:e}){y.get("task/get_tasks").then((t=>{e("FILL_TASK_LIST",t.data)})).catch((e=>console.log(e)))},CREATE_TASK({commit:e,dispatch:t},o){t("common/CHANGE_LOADING_STATE",!0,{root:!0}),y.post("task/add_task",o).then((e=>{t("init/INIT_APP",!0,{root:!0}),t("common/SET_SERVER_ANSWER_MODAL",{message:e.data.message,isOpened:!0},{root:!0})})).catch((e=>{t("common/SET_SERVER_ANSWER_MODAL",{message:e.response.data.message,isOpened:!0},{root:!0})})).finally((()=>{t("common/CHANGE_LOADING_STATE",!1,{root:!0})}))},DELETE_TASK({dispatch:e},t){e("common/CHANGE_LOADING_STATE",!0,{root:!0}),y.post("task/delete_task",t).then((t=>{this.$router.push("/all_tasks"),e("init/INIT_APP",!0,{root:!0}),e("common/SET_SERVER_ANSWER_MODAL",{message:t.data.message,isOpened:!0},{root:!0})})).catch((t=>{e("common/SET_SERVER_ANSWER_MODAL",{message:t.response.data.message,isOpened:!0},{root:!0})})).finally((()=>{e("common/CHANGE_LOADING_STATE",!1,{root:!0})}))}},pe={taskList:(e,{},t)=>{const o=t.user.userList;return e.taskList.forEach((e=>{e.members&&Y(e.members,o,"fullName"),e.performers&&Y(e.performers,o,"fullName"),e.master&&(e.master.fullName=o.find((t=>t._id===e.master._id)).fullName)})),e.taskList},activeUserTasks:(e,{},t)=>{let o=t.user.activeUser;return e.taskList.filter((e=>e.members?e.members.find((e=>e._id===o._id)):null))},openedTasks:e=>e.taskList.filter((e=>"isOpened"===e.status)),closedTasks:e=>e.taskList.filter((e=>"isClosed"===e.status)),frozenTasks:e=>e.taskList.filter((e=>"isFrozen"===e.status)),doneTasks:e=>e.taskList.filter((e=>"isDone"===e.status)),inWorkTasks:e=>e.taskList.filter((e=>"inWork"===e.status))};var Ee={namespaced:!0,state:de,mutations:me,actions:ue,getters:pe};s["a"].use(l["a"]);const _e=new l["a"].Store({modules:{common:M,init:W,auth:K,user:X,department:se,project:le,task:Ee},strict:!1});var he=function(){return _e},fe=o("8c4f");o("ddb0");const Te=[{path:"/",component:()=>o.e(7).then(o.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"3635"))},{path:"/all_tasks",component:()=>Promise.all([o.e(0),o.e(19)]).then(o.bind(null,"eeea"))},{path:"/task/:id",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"7c3b"))},{path:"/opened_tasks",component:()=>Promise.all([o.e(0),o.e(18)]).then(o.bind(null,"3709"))},{path:"/archived_tasks",component:()=>o.e(16).then(o.bind(null,"260b"))},{path:"/done_tasks",component:()=>Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"eb52"))},{path:"/create_user",component:()=>o.e(11).then(o.bind(null,"fd78"))},{path:"/users",component:()=>Promise.all([o.e(0),o.e(15)]).then(o.bind(null,"edf7"))},{path:"/departments",component:()=>o.e(13).then(o.bind(null,"a90d"))},{path:"/create_department",component:()=>Promise.all([o.e(0),o.e(10)]).then(o.bind(null,"9687"))},{path:"/department/:id",component:()=>Promise.all([o.e(0),o.e(12)]).then(o.bind(null,"fa2a"))},{path:"/user/:id",component:()=>Promise.all([o.e(0),o.e(14)]).then(o.bind(null,"2fea"))},{path:"/create_task",component:()=>Promise.all([o.e(1),o.e(0),o.e(8)]).then(o.bind(null,"9379"))}]},{path:"/",component:()=>o.e(6).then(o.bind(null,"21f0")),children:[{path:"/login",name:"login",component:()=>o.e(17).then(o.bind(null,"d37f"))}]},{path:"*",component:()=>o.e(9).then(o.bind(null,"e51e"))}];var Ae=Te;s["a"].use(fe["a"]);var Se=function(){const e=new fe["a"]({scrollBehavior:()=>({x:0,y:0}),routes:Ae,mode:"hash",base:""});return e},ge=async function(){const e="function"===typeof he?await he({Vue:s["a"]}):he,t="function"===typeof Se?await Se({Vue:s["a"],store:e}):Se;e.$router=t;const o={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:o,store:e,router:t}};const Le="";async function Ne(){const{app:e,store:t,router:o}=await ge();let a=!1;const n=e=>{a=!0;const t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},r=window.location.href.replace(window.location.origin,""),i=[void 0];for(let l=0;!1===a&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:o,store:t,Vue:s["a"],ssrContext:null,redirect:n,urlPath:r,publicPath:Le})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&new s["a"](e)}Ne()},"31cd":function(e,t,o){},"976f":function(e,t,o){},f488:function(e,t,o){"use strict";o("976f")}});