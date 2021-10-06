// import { axiosInstance } from 'src/boot/axios'

const projects = [
    {
        id: '1',

        title: 'AМ на большевиков',

        description: 'Делаем большой магазин под ключ',

        projectGroup: {id : '1', name: 'АМ'},

        tasks: [
            {
                id: '1',
                id: '2'
            }
        ],

        members: [
            {
                id: '2'
            },

            {
                id: '3'
            }
        ],

        master: { id: '2' },

        created: {
            by: { id: '2'},
            date: new Date()
        },

        exp: new Date(),

        priority: 7,

        status: 'inWork'
    },

    {
        id: '2',

        title: 'ЛекОптТорг на петроградке',

        description: 'Вешаем вывеску и делаем интерьер',

        projectGroup: {id : '2', name: 'ЛекОптТорг'},

        tasks: [
            {
                id: '3',
                id: '5'
            }
        ],

        members: [
            {
                id: '1'
            },

            {
                id: '3'
            }
        ],

        master: { id: '3' },

        created: {
            by: { id: '1'},
            date: new Date()
        },

        exp: new Date(),

        priority: 7,

        status: 'isDone'
    }
]

const state = {
    projectList: [],
}

const mutations = {
    SET_PROJECT_LIST(state, projects) {
        state.projectList = projects
    }
}

const actions = {
    GET_PROJECT_LIST({commit}) {
        commit('SET_PROJECT_LIST', projects)
    }
}

const getters = {
    projectList: (state, {}, rootGetters)  => {
        
        function fillData(resArr, entList, objKey) {
            resArr.forEach(resArrItem => {
                entList.forEach(entListItem => {
                    resArrItem.id === entListItem.id ?
                    resArrItem[objKey] = entListItem[objKey] : null
                })
            })
        }

        let tasks = rootGetters.task.taskList
        let users = rootGetters.user.userList

        state.projectList.forEach(project => {
            fillData(project.tasks, tasks, 'title')
            fillData(project.members, users, 'fullName')

            project.master.fullName = users.find(user => user.id === project.master.id).fullName
            project.created.by.fullName = users.find(user => user.id === project.created.by.id).fullName

            project.statusDesc =    project.status === 'isOpened' ? 'Открытая задача' :
                                    project.status === 'inWork'   ? 'В работе'        :
                                    project.status === 'isFrozen' ? 'Приостановлена'  :
                                    project.status === 'isDone'   ? 'Выполнена'       :
                                    project.status === 'isClosed' ? 'Закрыта'         : null
        })

        return state.projectList
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}