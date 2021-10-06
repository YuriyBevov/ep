
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/USER/UserTasks.vue') },
      { path: '/all_tasks', component: () => import('pages/USER/TaskList.vue') },
      { path: '/task/:id', component: () => import('pages/USER/TaskInfo.vue') },
      { path: '/opened_tasks', component: () => import('pages/USER/OpenedTasks.vue') },
      // { path: '/create_task', component: () => import('pages/USER/CreateTask.vue') },
      { path: '/archived_tasks', component: () => import('pages/USER/ArchivedTasks.vue') },
      { path: '/done_tasks', component: () => import('pages/USER/DoneTasks.vue') },

      // не защищенный пока(суперадмин)
      { path: '/create_user', component: () => import('pages/SUPERADMIN/CreateUser.vue') },
      // не защищенный (админ)
      { path: '/create_task', component: () => import('pages/ADMIN/CreateTask.vue') },
      
      // не защищенный пока(логин)
      //{ path: '/login', component: () => import('pages/USER/Login.vue') },
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
