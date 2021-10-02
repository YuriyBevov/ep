// import { axiosInstance } from 'src/boot/axios'

import user from "../user/user"

let tasks = [
    {
        id: '1',
        //название задачи
        title: 'Задача Задача Задача №1',
        //описание задачи
        description: 'Описание задачи №1',
        //к какому проекту относится
        projectMember: 'АМ',
        //статус задачи
        // isOpened,inWork,isFrozen,isDone,isClosed
        status: "isDone",

        //участники. Те пользователи, которые видят данную задачу в списке СВОИХ задач
        members: [
            {
                id: 1
            },

            {
                id: 2
            } 
        ],

        //изображения
        imgList: [
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
        ],

        //кем и когда создана
        createdBy: {
            id: 3,
            createdDate: new Date()
        },
        
        //дата сдачи
        expDate: new Date(),

        //кфф срочночти выполнения
        urgentState: 5,

        //ответственное лицо
        taskMasters: [
            { id: 3 },
            { id: 2 }
        ],
        //исполнитель(ли)
        performers: [
            {
                id: 1
            }
        ],
        //к какому отделу(отделам) относится задача
        departments: ['manufacture', 'office', 'manager']
    },

    {
        id: '2',
        //название задачи
        title: 'Зад. №2',
        //описание задачи
        description: 'Описание задачи №1',
        //к какому проекту относится
        projectMember: 'АМ',
        //статус задачи
        // isOpened,inWork,isFrozen,isDone,isClosed
        status: "inWork",
        //участники. Те пользователи, которые видят данную задачу в списке СВОИХ задач
        members: [
            {
                id: 1
            },

            {
                id: 2
            } 
        ],
        //изображения
        imgList: [
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
        ],
        //кем и когда создана
        createdBy: {
            id: 3,
            createdDate: new Date()
        },
        
        //дата сдачи
        expDate: new Date(),

        //кфф срочночти выполнения
        urgentState: 7,

        //ответственное лицо
        taskMasters: [
            { id: 3 },
            { id: 2 }
        ],
        //исполнитель(ли)
        performers: [
            {
                id: 1
            }
        ],
        //к какому отделу(отделам) относится задача
        departments: ['manufacture']
    },

    {
        id: '3',
        //название задачи
        title: 'Задача №3',
        //описание задачи
        description: 'Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи №1',
        //к какому проекту относится
        projectMember: 'АМ',
        //статус задачи
        // isOpened,inWork,isFrozen,isDone,isClosed
        status: "isOpened",
        //участники. Те пользователи, которые видят данную задачу в списке СВОИХ задач
        members: [
            {
                id: 1
            },

            {
                id: 2
            } 
        ],
        //изображения
        imgList: [
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
        ],
        //кем и когда создана
        createdBy: {
            id: 3,
            createdDate: new Date()
        },
        
        //дата сдачи
        expDate: new Date(),

        //кфф срочночти выполнения
        urgentState: 7,

        //ответственное лицо
        taskMasters: [
            { id: 3 },
            { id: 2 }
        ],
        //исполнитель(ли)
        performers: [
            {
                id: 1
            }
        ],
        //к какому отделу(отделам) относится задача
        departments: ['manufacture']
    },

    {
        id: '4',
        //название задачи
        title: 'Задача №4',
        //описание задачи
        description: 'Описание задачи №1',
        //к какому проекту относится
        projectMember: 'АМ',
        //статус задачи
        // isOpened,inWork,isFrozen,isDone,isClosed
        status: "isFrozen",
        //участники. Те пользователи, которые видят данную задачу в списке СВОИХ задач
        members: [
            {
                id: 1
            },

            {
                id: 2
            } 
        ],
        //изображения
        imgList: [
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
        ],
        //кем и когда создана
        createdBy: {
            id: 3,
            createdDate: new Date()
        },
        
        //дата сдачи
        expDate: new Date(),

        //кфф срочночти выполнения
        urgentState: 7,

        //ответственное лицо
        taskMasters: [
            { id: 3 },
            { id: 2 }
        ],
        //исполнитель(ли)
        performers: [
            {
                id: 1
            }
        ],
        //к какому отделу(отделам) относится задача
        departments: ['manufacture']
    },

    {
        id: '5',
        //название задачи
        title: 'Задача №5',
        //описание задачи
        description: 'Описание задачи №1',
        //к какому проекту относится
        projectMember: 'АМ',
        //статус задачи
        // isOpened,inWork,isFrozen,isDone,isClosed
        status: "isDone",
        //участники. Те пользователи, которые видят данную задачу в списке СВОИХ задач
        members: [
            {
                id: 1
            },

            {
                id: 2
            } 
        ],
        //изображения
        imgList: [
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
        ],
        //кем и когда создана
        createdBy: {
            id: 3,
            createdDate: new Date()
        },
        
        //дата сдачи
        expDate: new Date(),

        //кфф срочночти выполнения
        urgentState: 3,

        //ответственное лицо
        taskMasters: [
            { id: 3 },
            { id: 2 }
        ],
        //исполнитель(ли)
        performers: [
            {
                id: 1
            }
        ],
        //к какому отделу(отделам) относится задача
        departments: ['manufacture']
    },

    {
        id: '6',
        //название задачи
        title: 'Задача №6',
        //описание задачи
        description: 'Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи Описание задачи №1',
        //к какому проекту относится
        projectMember: 'АМ',
        //статус задачи
        // isOpened,inWork,isFrozen,isDone,isClosed
        status: "isClosed",
        //участники. Те пользователи, которые видят данную задачу в списке СВОИХ задач
        members: [
            {
                id: 1
            },

            {
                id: 2
            },

            {
                id: 3
            }
        ],
        //изображения
        imgList: [
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
            {
                name: 'img-1.png',
                desc: 'Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание'
            },
        ],
        //кем и когда создана
        createdBy: {
            id: 3,
            createdDate: new Date()
        },
        
        //дата сдачи
        expDate: new Date(),

        //кфф срочночти выполнения
        urgentState: 7,

        //ответственное лицо
        taskMasters: [
            { id: 3 },
            { id: 2 }
        ],
        //исполнитель(ли)
        performers: [
            {
                id: 1
            }
        ],
        //к какому отделу(отделам) относится задача
        departments: ['manufacture']
    }
]

const state = {
    taskList: []
}

const mutations = {
    FILL_TASK_LIST(state, tasks ) {
        state.initialTaskList = state.taskList = tasks
    }
}

const actions = {
    GET_TASK_LIST({commit}) {
        // получаю список задач с сервера
        commit('FILL_TASK_LIST', tasks)
    }
}

const getters = {
    taskList: (state, {}, rootGetters)  => {
        function fillUserData(arr, userList) {
            arr.forEach(item => {
                userList.forEach(user => {
                    item.id === user.id ?
                    item.fullName = user.fullName : null
                })
            })
        }

        const users = rootGetters.user.userList

        state.taskList.forEach(task => {
            fillUserData(task.members, users)
            fillUserData(task.performers, users)
            fillUserData(task.taskMasters, users)

            let user = users.find(user => {
               return user.id === task.createdBy.id
            })

            // Возможно убрать на сервер ?
            task.createdBy.fullName = user.fullName
            task.statusDesc =   task.status === 'isOpened' ? 'Открытая задача' :
                                task.status === 'inWork'   ? 'В работе'        :
                                task.status === 'isFrozen' ? 'Приостановлена'  :
                                task.status === 'isDone'   ? 'Выполнена'       :
                                task.status === 'isClosed' ? 'Закрыта'         : null

            // Возможно убрать на сервер ?                           
            let departments = []
            
            if(task.departments.includes('manufacture')) {
                departments.push('Производство')
            }
            if(task.departments.includes('office')) {
                departments.push('Офис') 
            }
            if(task.departments.includes('manager')) {
                departments.push('Менеджер')
            }

            task.departmentsDesc = departments
        })

        return state.taskList
    },

    activeUserTasks: (state, {}, rootGetters) => {
        let user = rootGetters.user.activeUser

        return state.taskList.filter(task => {
            return task.members.find(member => member.id === user.id)
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