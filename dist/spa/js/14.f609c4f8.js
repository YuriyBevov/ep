(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"2fea":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"user-info"},[a("div",[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"options",label:"Данные пользователя"}}),a("q-tab",{attrs:{name:"tasks",label:"Текущие задачи"}}),a("q-tab",{attrs:{name:"permits",label:"Разрешения"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{attrs:{name:"options"}},[a("UserDataEdit",{attrs:{user:this.userList.find((function(e){return e._id===t.$route.params.id})),departments:this.departmentList},on:{updateUser:e.updateUserData,deleteUser:e.deleteUser}})],1),a("q-tab-panel",{attrs:{name:"tasks"}},[a("UserTasksEdit",{attrs:{tasks:this.taskList,_id:this.$route.params.id}})],1),a("q-tab-panel",{attrs:{name:"permits"}},[a("UserPermitsEdit")],1)],1)],1)],1)])},i=[],r=s("2f62"),n=s("0727"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return this.userData?s("div",[s("div",{staticClass:"flex items-center q-mb-lg"},[s("div",{staticClass:"q-mr-lg"},[s("q-toggle",{attrs:{disable:!this.isDataSaved,color:"green"},model:{value:t.isUserEditing,callback:function(e){t.isUserEditing=e},expression:"isUserEditing"}}),s("span",[t._v("Открыть для редактирования")])],1),s("q-btn",{attrs:{label:"удалить",color:"negative"},on:{click:function(e){return t.deleteUser()}}})],1),s("div",{staticClass:"q-mb-lg"},[s("q-input",{staticClass:"q-mb-md",attrs:{filled:"",hint:"LogIn",disable:!this.isUserEditing},on:{input:function(e){return t.setChangeState()}},model:{value:t.userData.login,callback:function(e){t.$set(t.userData,"login",e)},expression:"userData.login"}}),s("q-input",{directives:[{name:"show",rawName:"v-show",value:!this.isUserEditing,expression:"!this.isUserEditing"}],staticClass:"q-mb-md",attrs:{filled:"",hint:"Имя пользователя",disable:""},on:{input:function(e){return t.setChangeState()}},model:{value:t.userData.fullName,callback:function(e){t.$set(t.userData,"fullName",e)},expression:"userData.fullName"}}),s("q-input",{directives:[{name:"show",rawName:"v-show",value:this.isUserEditing,expression:"this.isUserEditing"}],staticClass:"q-mb-md",attrs:{filled:"",hint:"Имя","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Поле не может быть пустым"}]},on:{input:function(e){return t.setChangeState()}},model:{value:t.userData.name,callback:function(e){t.$set(t.userData,"name",e)},expression:"userData.name"}}),s("q-input",{directives:[{name:"show",rawName:"v-show",value:this.isUserEditing,expression:"this.isUserEditing"}],staticClass:"q-mb-md",attrs:{filled:"",hint:"Фамилия","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Поле не может быть пустым"}]},on:{input:function(e){return t.setChangeState()}},model:{value:t.userData.surname,callback:function(e){t.$set(t.userData,"surname",e)},expression:"userData.surname"}}),s("q-input",{staticClass:"q-mb-md",attrs:{filled:"",hint:"Телефон",disable:!this.isUserEditing,mask:"+7(###)###-##-##","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Поле не может быть пустым"},function(t){return t.length>15||"* Проверьте правильность указаного номера"}]},on:{input:function(e){return t.setChangeState()}},model:{value:t.userData.phone,callback:function(e){t.$set(t.userData,"phone",e)},expression:"userData.phone"}}),s("q-input",{staticClass:"q-mb-md",attrs:{filled:"",hint:"E-mail",disable:!this.isUserEditing},on:{input:function(e){return t.setChangeState()}},model:{value:t.userData.email,callback:function(e){t.$set(t.userData,"email",e)},expression:"userData.email"}}),s("q-input",{directives:[{name:"show",rawName:"v-show",value:!this.isUserEditing,expression:"!this.isUserEditing"}],staticClass:"q-mb-md",attrs:{filled:"",hint:"Роль(и)",disable:!this.isUserEditing},on:{input:function(e){return t.setChangeState()}},model:{value:t.userData.roles,callback:function(e){t.$set(t.userData,"roles",e)},expression:"userData.roles"}}),s("q-select",{directives:[{name:"show",rawName:"v-show",value:this.isUserEditing,expression:"this.isUserEditing"}],staticClass:"q-mb-md",attrs:{filled:"",multiple:"",options:["СуперАдмин","Админ","Пользователь","Гость"],hint:"Роль(и)","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Поле не может быть пустым"}]},on:{input:function(e){return t.setChangeState()}},model:{value:t.userData.roles,callback:function(e){t.$set(t.userData,"roles",e)},expression:"userData.roles"}}),s("q-select",{staticClass:"q-mb-md",attrs:{filled:"",hint:"Отдел",options:t.getDepartments(),disable:!this.isUserEditing,"lazy-rules":"",rules:[function(t){return t&&t.length>0||"Поле не может быть пустым"}]},on:{input:function(e){return t.setChangeState()}},model:{value:t.userData.department.title,callback:function(e){t.$set(t.userData.department,"title",e)},expression:"userData.department.title"}}),"Без отдела"!==this.userData.department.title?s("q-checkbox",{staticClass:"q-mb-md",attrs:{disable:!this.isUserEditing,filled:"",label:"Руководитель отдела"},on:{input:function(e){return t.setChangeState()}},model:{value:t.userData.department.isHead,callback:function(e){t.$set(t.userData.department,"isHead",e)},expression:"userData.department.isHead"}}):t._e()],1),s("div",{staticClass:"flex"},[s("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.isFieldsDirty,expression:"isFieldsDirty"}],staticClass:"q-mr-sm",attrs:{label:"Сохранить изменения",color:"positive"},on:{click:function(e){return t.updateUser()}}}),s("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.isFieldsDirty,expression:"isFieldsDirty"}],attrs:{label:"Отмена",color:"negative"},on:{click:function(e){return t.resetChanges()}}})],1)]):t._e()},u=[],o=(s("ddb0"),{props:{user:{type:Object},departments:{type:Array}},data(){return{isFieldsDirty:!1,isDataSaved:!0,isUserEditing:!1,userData:null}},methods:{setUserData(){if(this.$props.user){this.userData=JSON.parse(JSON.stringify(this.$props.user));let t=[];this.userData.roles.forEach((e=>{console.log(e),t.push(Object(n["a"])(e))})),this.userData.roles=t}},getDepartments(){let t=[];return this.$props.departments.forEach((e=>{t.push(e.title)})),["Без отдела",...t]},setChangeState(){this.isDataSaved&&!this.isFieldsDirty&&(this.isDataSaved=!1,this.isFieldsDirty=!0)},resetChanges(){this.setUserData(),this.isDataSaved=!0,this.isFieldsDirty=!1,this.isUserEditing=!1},deleteUser(){this.$emit("deleteUser",this.userData._id)},updateUser(){let t=[];this.userData.roles.forEach((e=>{t.push(Object(n["a"])(e))})),this.userData.roles=t,"Без отдела"===this.userData.department.title?(this.userData.department._id=null,this.userData.department.isHead=!1):this.userData.department._id=this.$props.departments.find((t=>t.title===this.userData.department.title))._id,this.$emit("updateUser",this.userData)}},mounted(){this.setUserData()},watch:{user:function(){this.setUserData()}}}),d=o,c=s("2877"),p=Object(c["a"])(d,l,u,!1,null,null,null),m=p.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("\n    user permits edit\n")])},f=[],b={},D=Object(c["a"])(b,h,f,!1,null,null,null),v=D.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{},[s("ShortTaskCard",{attrs:{title:"Ответственное лицо в задачах",emptyText:"Задач в которых является ответственным пока нет...",color:"#C10015",tasks:this.filteredTasks.master?this.filteredTasks.master:[]},on:{openTask:t.onClickOpenTask}})],1),s("div",{},[s("ShortTaskCard",{attrs:{title:"Исполнитель в задачах",emptyText:"Задач в которых является исполнителем пока нет...",color:"#F2C037",tasks:this.filteredTasks.performer?this.filteredTasks.performer:[]},on:{openTask:t.onClickOpenTask}})],1),s("div",{},[s("ShortTaskCard",{attrs:{title:"Участник в задачах",emptyText:"Задач в которых является участником пока нет...",color:"#21BA45",tasks:this.filteredTasks.member?this.filteredTasks.member:[]},on:{openTask:t.onClickOpenTask}})],1)])},k=[],U=s("0322"),E={components:{ShortTaskCard:U["a"]},props:{tasks:{type:Array},_id:{type:String}},computed:{filteredTasks(){let t={master:[],performer:[],member:[]};return this.$props.tasks.forEach((e=>{if(e.members){let s=e.members.find((t=>t._id===this.$props._id));s&&t.member.push({_id:e._id,title:e.title})}if(e.performers){let s=e.performers.find((t=>t._id===this.$props._id));s&&t.performer.push({_id:e._id,title:e.title})}e.master&&e.master._id===this.$props._id&&t.master.push({_id:e._id,title:e.title})})),t}},methods:{onClickOpenTask(t){this.$router.push("/task/"+t)}}},C=E,q=Object(c["a"])(C,g,k,!1,null,null,null),_=q.exports,x={data(){return{tab:"options",deleteRequest:!1}},components:{UserDataEdit:m,UserPermitsEdit:v,UserTasksEdit:_},computed:{...Object(r["c"])("user",["userList"]),...Object(r["c"])("department",["departmentList"]),...Object(r["c"])("task",["taskList"])},methods:{...Object(r["b"])("user",["DELETE_USER","UPDATE_USER"]),updateUserData(t){this.UPDATE_USER(t)},deleteUser(t){this.DELETE_USER({_id:t})}}},w=x,y=Object(c["a"])(w,a,i,!1,null,null,null);e["default"]=y.exports}}]);