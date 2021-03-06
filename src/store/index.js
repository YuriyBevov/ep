import Vue from 'vue'
import Vuex from 'vuex'

import common from './common/common.js'
import init from './init/init.js'
import auth from './auth/auth.js'
import user from './user/user.js'
import department from './department/department.js'
import project from './project/project.js'
import task from './task/task.js'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const Store = new Vuex.Store({
  modules: {
    common,
    init,
    auth,
    user,
    department,
    project,
    task,
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEBUGGING
})

export default function (/* { ssrContext } */) {
  return Store
}

export {
  Store
}
