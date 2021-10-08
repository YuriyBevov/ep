import { axiosInstance } from 'src/boot/axios'
import { fillData } from 'src/functions/fillData'

const state = {
    taskList: []
}

const mutations = {
    FILL_TASK_LIST(state, tasks ) {
        state.taskList = tasks
    }
}

const actions = {
    GET_TASK_LIST({commit}) {
        axiosInstance.get('task/get_tasks')
        .then((tasks) => {
            commit('FILL_TASK_LIST', tasks.data)
        })
        .catch(err => console.log(err))
    },

    CREATE_TASK({commit, dispatch}, task) {
        dispatch('common/CHANGE_LOADING_STATE', true, { root: true })

        axiosInstance.post('task/add_task', task)
        .then((resp) => {
            dispatch('GET_TASK_LIST')
        })
        .catch(err => console.log(err))
        .finally(() => {
            dispatch('common/CHANGE_LOADING_STATE', false, { root: true })
        })
    }
}

const getters = {
    taskList: (state, {}, rootGetters)  => {
        const users = rootGetters.user.userList

        state.taskList.forEach(task => {
            task.members ?
            fillData(task.members, users, 'fullName') : null

            task.performers ?
            fillData(task.performers, users, 'fullName') : null

            task.master ?
            task.master.fullName = users.find(user => user._id === task.master._id).fullName : null
        })

        return state.taskList
    },

    activeUserTasks: (state, {}, rootGetters) => {
        let user = rootGetters.user.activeUser

        return state.taskList.filter(task => {
            return task.members ?
                   task.members.find(member => member._id === user._id) : null
        })
    },
    
    openedTasks: state => {
        return state.taskList.filter(task => task.status === 'isOpened')
    },

    closedTasks: state => {
        return state.taskList.filter(task => task.status === 'isClosed')
    },

    frozenTasks: state => {
        return state.taskList.filter(task => task.status === 'isFrozen')
    },

    doneTasks: state => {
        return state.taskList.filter(task => task.status === 'isDone')
    },

    inWorkTasks: state => {
        return state.taskList.filter(task => task.status === 'inWork')
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}