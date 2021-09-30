
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/USER/Tasks.vue') },
      { path: '/opened_tasks', component: () => import('pages/USER/OpenedTasks.vue') },
      { path: '/create_task', component: () => import('pages/USER/CreateTask.vue') }
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
