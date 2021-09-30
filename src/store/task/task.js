// import { axiosInstance } from 'src/boot/axios'

const state = {
    taskList: [
        {
            title: 'Задача №1',
            description: 'Описание задачи №1',

            projectMember: 'АМ',

            status: {
                isOpened: false,
                inWork: true,
                isFrozen: false,
                isDone: false,
                isClosed: false,
            },

            members: [
                {
                    id: 1
                },

                {
                    id: 2
                } 
            ],

            createdDate: '05.05.2021',
            createdTime: '18.00',

            expDate: '07.05.2021',
            expTime: '18.00',

            urgentState: 7,

            createdBy: {
                id: 3
            },

            taskMaster: {
                id: 3
            },

            performers: {
                id: 1
            },

            taskDepartment: ['manufacture']
        },

        {
            title: 'Задача №2',
            description: 'Описание задачи №1',

            status: {
                isOpened: true,
                inWork: false,
                isFrozen: false,
                isDone: false,
                isClosed: false,
            },

            members: [],

            createdDate: '05.05.2021',
            createdTime: '18.00',

            expDate: '07.05.2021',
            expTime: '18.00',

            urgentState: 7,

            createdBy: {
                id: 3
            },

            taskMaster: {},

            performers: {},

            taskDepartment: ['manufacture']
        },
    ]
}

const mutations = {

}

const actions = {

}

const getters = {
    taskList: state => state.taskList,

    userTasks: (state, {}, rootGetters) => {
        let user = rootGetters.auth.activeUser

        return state.taskList.filter(task => {
            console.log(task)
            return task.members.find(member => member.id === user.id)
        })
    },
    
    openedTasks: state => {
        return state.taskList.filter(task => task.status.isOpened)
    },

    closedTasks: state => {
        return state.taskList.filter(task => task.status.isClosed)
    },

    frozenTasks: state => {
        return state.taskList.filter(task => task.status.isFrozen)
    },

    doneTasks: state => {
        return state.taskList.filter(task => task.status.isDone)
    },

    inWorkTasks: state => {
        return state.taskList.filter(task => task.status.inWork)
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}