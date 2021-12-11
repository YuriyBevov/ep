
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      /*{ path: '', component: () => import('pages/USER/UserTasks.vue') },
      { path: '/all_tasks', component: () => import('pages/USER/TaskList.vue') },
      { path: '/task/:id', component: () => import('pages/USER/TaskInfo.vue') },
      { path: '/opened_tasks', component: () => import('pages/USER/OpenedTasks.vue') },
      // { path: '/create_task', component: () => import('pages/USER/CreateTask.vue') },
      { path: '/archived_tasks', component: () => import('pages/USER/ArchivedTasks.vue') },
      { path: '/done_tasks', component: () => import('pages/USER/DoneTasks.vue') },
      { path: '/create_task', component: () => import('pages/USER/CreateTask.vue') },
      // не защищенный пока(суперадмин)
      { path: '/create_user', component: () => import('pages/ADMIN/CreateUser.vue') },
      { path: '/users', component: () => import('pages/ADMIN/UserList.vue') },
      { path: '/departments', component: () => import('pages/ADMIN/DepartmentList.vue') },
      { path: '/create_department', component: () => import('pages/ADMIN/CreateDepartment.vue') },
      { path: '/department/:id', component: () => import('pages/ADMIN/DepartmentInfo.vue') },
      { path: '/user/:id', component: () => import('pages/ADMIN/UserInfo.vue') },*/
      
      // не защищенный пока(логин)
      //{ path: '/login', component: () => import('pages/USER/Login.vue') },

      { path: '/', component: () => import('pages/index.vue') },

      /* chart, calendar, chat*/
      { path: '/charts', component: () => import('pages/Charts.vue') },
      { path: '/calendar', component: () => import('pages/Calendar.vue') },
      { path: '/chat', component: () => import('pages/Chat.vue') },

      /* main-pages */
      { path: '/users', component: () => import('pages/Users.vue') },
      { path: '/tasks', component: () => import('pages/Tasks.vue') },
      { path: '/projects', component: () => import('pages/Projects.vue') },
      { path: '/departments', component: () => import('pages/Departments.vue') },

      /* info-pages */
      { path: '/user/:id', component: () => import('pages/UserPage.vue') },
      { path: '/project/:id', component: () => import('pages/ProjectPage.vue') },
      { path: '/task/:id', component: () => import('pages/TaskPage.vue') },
      { path: '/projectGroup/:id', component: () => import('pages/ProjectGroupPage.vue') },
      { path: '/department/:id', component: () => import('pages/DepartmentPage.vue') },

    ]
  },

  {
    path: '/',
    component: () => import('layouts/LoginPageLayout.vue'),
    children: [
      { path: '/login', name: 'login', component: () => import('pages/USER/Login.vue')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
