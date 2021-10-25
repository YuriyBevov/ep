import { axiosInstance } from 'src/boot/axios'

const actions = {
    INIT_APP({ commit, dispatch }) {
        console.log('init')
        axiosInstance.get('/init/init_app')
        .then(() => {
            dispatch('user/GET_USER_LIST', {}, {root: true})
            dispatch('task/GET_TASK_LIST', {}, {root: true})
            dispatch('department/GET_DEPARTMENT_LIST', {}, {root: true})
        })
        .catch(err => console.log(err))
    }
}

const mutations = {

}

const state = {
}

const getters = {

}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}