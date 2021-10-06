import { axiosInstance } from 'src/boot/axios'

const state = {
    userList: [],

    activeUser: {}
}

const mutations = {
    SET_ACTIVE_USER(state, user) {
        state.activeUser = user
    },

    SET_USER_LIST(state, users) {
        state.userList = users
    }
}

const actions = {
    LOGIN({commit, dispatch}, user) {
        axiosInstance.post('user/login', user)
        .then((resp) => {
            localStorage.setItem('token', resp.data.token)
            dispatch('GET_USER_LIST')
            commit('SET_ACTIVE_USER', resp.data.user)
        })
        .then((resp) => {
            this.$router.push('/')
        })
        .catch(err => console.log(err))
    },

    LOGOUT({commit}) {
        delete axiosInstance.defaults.headers.common['Authorization']
        
        localStorage.removeItem('token')
        commit('SET_ACTIVE_USER', {})
        this.$router.push('/login')
    },

    AUTHENTICATION({ commit, dispatch }) {

        axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem('token')

        axiosInstance.get('/auth/auth')
        .then((resp) => {
            console.log('auth ok')
            // dispatch('GET_USER_LIST')
            commit('SET_ACTIVE_USER', resp.data.user)
            dispatch('REFRESH_TOKEN', resp.data.token)
        })
        .catch((err) => {
            console.log('auth not')
            localStorage.removeItem('token')
            this.$router.push('/login')
        })
    },

    REFRESH_TOKEN({dispatch}, payload) {
        localStorage.setItem('token', payload)
        // каждые 4 часа обновляю токен
        setTimeout(() => {
            dispatch('USER_AUTHENTICATION')
        }, 4*60*60*1000)
    },

    CREATE_USER({commit}, user) {
        axiosInstance.post('user/add_user', user)
        .then((resp) => {
            // console.log(resp.data)
        })
        .catch(err => console.log(err))
    },

    GET_USER_LIST({commit}) {
        console.log('GET_USER_LIST')
        axiosInstance.get('user/get_users')
        .then((users) => {
            commit('SET_USER_LIST', users.data)
        })
        .catch(err => console.log(err))
    }
}

const getters = {
    userList: (state, {}, rootGetters)  => {
        /*function fillData(resArr, entList, objKey) {
            resArr.forEach(resArrItem => {
                entList.forEach(entListItem => {
                    resArrItem.id === entListItem.id ?
                    resArrItem[objKey] = entListItem[objKey] : null
                })
            })
        }

        const tasks = rootGetters.task.taskList
        const departments = rootGetters.department.departmentList

        state.userList.forEach(user => {
            fillData(user.taskMember, tasks, 'title')
            fillData(user.taskMaster, tasks, 'title')
            fillData(user.taskPerformer, tasks, 'title')

            departments.forEach(dep => {
                dep.id === user.department.id ?
                user.department.title = dep.title: null
            })
        })*/

        return state.userList
    },

    activeUser: state => state.activeUser,

    currentOrdinalNumber: (state) => {
        return state.userList.length ?
               state.userList[state.userList.length - 1].ordinalNumber + 1 : null
    },

    roles: state => {
        return state.activeUser ?
               state.activeUser.roles : null
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}