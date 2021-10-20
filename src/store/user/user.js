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

    CREATE_USER({commit, dispatch}, user) {
        dispatch('common/CHANGE_LOADING_STATE', true, { root: true })

        axiosInstance.post('user/add_user', user)
        .then((resp) => {
            dispatch('GET_USER_LIST')
        })
        .catch(err => console.log(err))
        .finally(() => {
            dispatch('common/CHANGE_LOADING_STATE', false, { root: true })
        })
    },

    GET_USER_LIST({commit}) {
        axiosInstance.get('user/get_users')
        .then((users) => {
            commit('SET_USER_LIST', users.data)
        })
        .catch(err => console.log(err))
    },

    DELETE_USER({commit}, _id) {
        console.log(_id)
        axiosInstance.post('user/delete_user', _id)
        .then((resp) => {
            console.log('RESP:', resp)
        })
        .catch(err => console.log(err))
    }
}

const getters = {
    userList: state => state.userList,

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