import { axiosInstance } from 'src/boot/axios'

const actions = {
    INIT_APP({ commit, dispatch }) {
        console.log('init_app')

        /*dispatch('project/GET_PROJECTS', {}, {root: true})
        dispatch('user/GET_USER_LIST', {}, {root: true}),
        dispatch('task/GET_TASKS', {}, {root: true})
        dispatch('departments/GET_DEPARTMENTS', {}, {root: true}),*/

        dispatch('user/AUTHENTICATION', {}, {root: true})
        dispatch('department/GET_DEPARTMENT_LIST', {}, {root: true}),
        dispatch('user/GET_USER_LIST', {}, {root: true}),

        axiosInstance.get('/init/init_app')
        .then((resp) => {
            console.log(resp.data)
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