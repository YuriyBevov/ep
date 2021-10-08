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
        .then((departments) => {
            console.log('getDepartmentList')
            commit('SET_DEPARTMENTS_LIST', departments.data)
        })
        .catch(err => console.log(err))
    },

    CREATE_DEPARTMENT({commit, dispatch}, department) {
        axiosInstance.post('departments/create_department', department)
        .then((resp) => {
            dispatch('GET_DEPARTMENT_LIST')
        })
        .catch(err => console.log(err))
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