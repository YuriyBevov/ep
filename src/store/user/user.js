// import { axiosInstance } from 'src/boot/axios'

const state = {
    userList: [
        {
            id: '1',
            name: "Юрий",
            surname: "Бевов",
            fullName: "Юрий Бевов",
            role: "user",

            // отдел пользователя
            department: { id: '1' },

            // задачи в которых сотоит
            taskMember: [
                { id: '1' },
                { id: '2' },
                { id: '3' },
                { id: '4' },
                { id: '5' }   
            ],

            // задачи в которых является мастером
            taskMaster: [
                { id: '3' },
                { id: '4' }
            ],

            // задачи в которых является исполнителем
            taskPerformer: [
                { id: '1' },
                { id: '2' },
                { id: '3' },
                { id: '4' }
            ]
        },

        {
            id: '2',
            name: "Артем",
            surname: "Чернух",
            fullName: "Артем Чернух",
            role: "user",

            // отдел пользователя
            department: { id: '3' },

            // задачи в которых сотоит
            taskMember: [
                { id: '2' },
                { id: '4' },
                { id: '5' },
                { id: '6' }
            ],

            // задачи в которых является мастером
            taskMaster: [
                { id: '2' },
                { id: '5' }
            ],

            // задачи в которых является исполнителем
            taskPerformer: [
                { id: '2' },
                { id: '4' }
            ]
        },

        {
            id: '3',
            name: "Григорий",
            surname: "Дзнеладзе",
            fullName: "Григорий Дзнеладзе",
            role: "user, master",

            // отдел пользователя
            department: { id: '1' },

            /*!! не будет в бд !!*/

            // задачи в которых сотоит
            taskMember: [
                { id: '1' },
                { id: '3'},
                { id: '6' }                    
            ],

            // задачи в которых является мастером
            taskMaster: [
                { id: '2' }
            ],

            // задачи в которых является исполнителем
            taskPerformer: [
                { id: '2'},
                { id: '1'},
            ]

            /*!! --- !!*/
        }
    ],

    activeUser: {
        id: '1',
        fullName: "Юрий Бевов",
        role: ['user'],
        //
        accesibleList: [
            {
                id: '1'
            }
        ]
    }
}

const mutations = {

}

const actions = {

}

const getters = {
    userList: (state, {}, rootGetters)  => {
        function fillData(resArr, entList, objKey) {
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
        })
        

        return state.userList
    },

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