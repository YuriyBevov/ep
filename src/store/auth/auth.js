// import { axiosInstance } from 'src/boot/axios'

const state = {
    activeUser: {
        id: 1,
        fullName: "Юрий Бевов",
        role: ['user']
    }
}

const mutations = {

}

const actions = {

}

const getters = {
    activeUser: state => state.activeUser,

    userRole: state => {
        return state.activeUser.role
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}