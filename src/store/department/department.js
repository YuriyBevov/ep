import { axiosInstance } from "src/boot/axios"
import { fillData } from 'src/functions/fillData'

const state = {
    departmentList: [],
}

const mutations = {
    SET_DEPARTMENTS_LIST(state, departments) {
        state.departmentList = departments
    }
}

const actions = {
    GET_DEPARTMENT_LIST({commit}) {
        axiosInstance.get('departments/get_departments')
        .then((payload) => {
            commit('SET_DEPARTMENTS_LIST', payload.data.departments)
        })
        .catch(err => console.log(err))
    },

    CREATE_DEPARTMENT({commit, dispatch}, department) {
        dispatch('common/CHANGE_LOADING_STATE', true, { root: true })

        axiosInstance.post('departments/create_department', department)
        .then((resp) => {
            dispatch('GET_DEPARTMENT_LIST')
            console.log('ok', resp)
            //dispatch('common/SET_SERVER_ANSWER_MODAL', { message: resp.data.message, isOpened: true }, {root: true})
        })
        .catch((err) => {
            console.log('err', err)
            //dispatch('common/SET_SERVER_ANSWER_MODAL', { message: err.message, isOpened: true }, {root: true}) // не рабтает, нужно показывать сообщение
        })
        .finally(() => {
            dispatch('common/CHANGE_LOADING_STATE', false, { root: true })
        })
    }
}

const getters = {
    departmentList: (state, {}, rootGetters)  => {   
        let users = rootGetters.user.userList
        let tasks = rootGetters.task.taskList
        
        state.departmentList.forEach(dep => {
            dep.members ?
            fillData(dep.members, users, 'fullName') : null
            dep.heads ?
            fillData(dep.heads, users, 'fullName') : null
            dep.tasks ?
            fillData(dep.tasks, tasks, 'title') : null
        })

        return state.departmentList
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}