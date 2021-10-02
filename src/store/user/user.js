// import { axiosInstance } from 'src/boot/axios'

const state = {
    userList: [
        {
            id: 1,
            name: "Юрий",
            surname: "Бевов",
            fullName: "Юрий Бевов",
            role: "user",

            // отдел пользователя
            department: "manufacture",

            // задачи в которых сотоит
            tasks: [
                '1','2','3'
            ],

            // задачи в которых является мастером
            taskMaster: [
                '2'
            ],

            // задачи в которых является исполнителем
            taskPerformer: [
                '1'
            ]
        },

        {
            id: 2,
            name: "Артем",
            surname: "Чернух",
            fullName: "Артем Чернух",
            role: "user",

            // отдел пользователя
            department: "manufacture",

            // задачи в которых сотоит
            tasks: [
                '1','2','3'
            ],

            // задачи в которых является мастером
            taskMaster: [
                '2'
            ],

            // задачи в которых является исполнителем
            taskPerformer: [
                '1'
            ]
        },

        {
            id: 3,
            name: "Григорий",
            surname: "Дзнеладзе",
            fullName: "Григорий Дзнеладзе",
            role: "user, master",

            // отдел пользователя
            department: "manufacture",

            /*!! не будет в бд !!*/

            // задачи в которых сотоит
            tasks: [
                '1','2','3'
            ],

            // задачи в которых является мастером
            taskMaster: [
                '2'
            ],

            // задачи в которых является исполнителем
            taskPerformer: [
                '1'
            ]

            /*!! --- !!*/
        }
    ],

    activeUser: {
        id: 1,
        fullName: "Юрий Бевов",
        role: ['user'],
        //
        accesibleList: [
            {
                id: 1
            }
        ]
    }
}

const mutations = {

}

const actions = {

}

const getters = {
    userList: state => state.userList,

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