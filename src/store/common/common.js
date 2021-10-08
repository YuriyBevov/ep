import { axiosInstance } from 'src/boot/axios'

const actions = {
    CHANGE_LOADING_STATE({commit}, payload) {
        commit('SET_LOADING_STATE', payload)
    },

    SET_SERVER_ANSWER_MODAL({commit}, payload) {
        commit('FILL_SERVER_ANSWER_STATE', payload)
    },
}

const mutations = {
    SET_LOADING_STATE(state, payload) {
        state.isLoading = payload
    },

    FILL_SERVER_ANSWER_STATE(state, payload) {
        state.serverAnswer = {
            message: payload.message,
            isOpened: payload.isOpened
        }
    },
}

const state = {
    isLoading: true,
    serverAnswer: {
        message: '',
        isOpened: false
    },
}

const getters = {
    loadingState: state => state.isLoading,
    serverAnswerData: state=> state.serverAnswer
}

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters
}