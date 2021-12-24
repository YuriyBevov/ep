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
        dispatch('common/CHANGE_LOADING_STATE', true, { root: true })

        axiosInstance.post('user/login', user)
        .then((resp) => {
            localStorage.setItem('token', resp.data.token)
            console.log('login')
            dispatch('init/INIT_APP', true, { root: true })
            commit('SET_ACTIVE_USER', resp.data.user)
        })
        .then((resp) => {
            this.$router.push('/')
        })
        .catch(err => console.log(err))
        .finally(() => {
            dispatch('common/CHANGE_LOADING_STATE', false, { root: true })
        })
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
            commit('SET_ACTIVE_USER', resp.data.user)
            dispatch('REFRESH_TOKEN', resp.data.token)
            dispatch('init/INIT_APP', true, { root: true })
        })
        .catch((err) => {
            console.log('auth not')
            localStorage.removeItem('token')
            //this.$router.push('/login')
        })
        .finally(() => {
            dispatch('common/CHANGE_LOADING_STATE', false, { root: true })
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
            this.$router.push('/users')
            dispatch('init/INIT_APP', true, { root: true })
            dispatch('common/SET_SERVER_ANSWER_MODAL', { message: resp.data.message, isOpened: true }, {root: true})
        })
        .catch(err => {
            dispatch('common/SET_SERVER_ANSWER_MODAL', { message: err.response.data.message, isOpened: true }, {root: true})
        })
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

    UPDATE_USER({commit, dispatch}, userData) {
        console.log(userData)

        dispatch('common/CHANGE_LOADING_STATE', true, { root: true })

        axiosInstance.post('user/update_user', userData)
        .then((resp) => {
            dispatch('init/INIT_APP', true, { root: true })
            dispatch('common/SET_SERVER_ANSWER_MODAL', { message: resp.data.message, isOpened: true }, {root: true})
        })
        .catch(err => {
            dispatch('common/SET_SERVER_ANSWER_MODAL', { message: err.response.data.message, isOpened: true }, {root: true})
        })
        .finally(() => {
            dispatch('common/CHANGE_LOADING_STATE', false, { root: true })
        })
    },

    DELETE_USER({commit, dispatch}, _id) {
        dispatch('common/CHANGE_LOADING_STATE', true, { root: true })

        axiosInstance.post('user/delete_user', _id)
        .then((resp) => {
            this.$router.push('/users')
            dispatch('init/INIT_APP', true, { root: true })
            dispatch('common/SET_SERVER_ANSWER_MODAL', { message: resp.data.message, isOpened: true }, {root: true})
        })
        .catch(err => {
            dispatch('common/SET_SERVER_ANSWER_MODAL', { message: err.response.data.message, isOpened: true }, {root: true})
        })
        .finally(() => {
            dispatch('common/CHANGE_LOADING_STATE', false, { root: true })
        })
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