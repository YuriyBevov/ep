// import { axiosInstance } from 'src/boot/axios'

const departments = [
   {
        id: '1',
        title: 'Производство',

        masters: [
            {
                id: '1'
            }
        ],

        members: [
            {
                id: '1'
            },

            {
                id: '2'
            },

            {
                id: '3'
            }
        ]

   },

   {
    id: '2',
    title: 'Офис',
    masters: [
        {
            id: '1'
        },

        {
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
    ]
   },

   {
    id: '3',
    title: 'Менеджер',
    masters: [
        {
            id: '3'
        }
    ],
    members: [
        {
            id: '3'
        }
    ]
   },
]

const state = {
    departmentList: [],
}

const mutations = {
    SET_DEPARTMENTS_LIST(state, departments) {
        state.departmentList = departments
    }
}

const actions = {
    GET_DEPARTMENTS_LIST({commit}) {
        commit('SET_DEPARTMENTS_LIST', departments)
    }
}

const getters = {
    departmentList: (state, {}, rootGetters)  => {

        function fillData(resArr, entList, objKey) {
            resArr.forEach(resArrItem => {
                entList.forEach(entListItem => {
                    resArrItem.id === entListItem.id ?
                    resArrItem[objKey] = entListItem[objKey] : null
                })
            })
        }

        let users = rootGetters.user.userList

        state.departmentList.forEach(dep => {
            fillData(dep.members, users, 'fullName')
            fillData(dep.masters, users, 'fullName')
        })

        return state.departmentList
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}