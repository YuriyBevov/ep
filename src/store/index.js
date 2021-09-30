import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth/auth.js'
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
    auth,
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
