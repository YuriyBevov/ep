import { axiosInstance } from 'src/boot/axios'

const actions = {
    INIT_APP({ commit, dispatch }) {
        dispatch('common/CHANGE_LOADING_STATE', true, { root: true })

        // не правильно, тк при загрузке еще не авторизованного пользователя пытается обратиться и забрать все другие данные !!!
        dispatch('user/AUTHENTICATION', {}, {root: true})
        dispatch('department/GET_DEPARTMENT_LIST', {}, {root: true}),
        dispatch('user/GET_USER_LIST', {}, {root: true}),

        axiosInstance.get('/init/init_app')
        .then((resp) => {
            console.log(resp.data)
        })
        .catch(err => console.log(err))
        .finally(() => {
            dispatch('common/CHANGE_LOADING_STATE', false, { root: true })
        })
    },

    CHANGE_LOADING_STATE({commit}, payload) {
        commit('SET_LOADING_STATE', payload)
    },
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