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
        //dispatch('common/CHANGE_LOADING_STATE', true, { root: true })
        /*let users = [                                                
            {                                              
              department: 'Производство',                  
              isDepartmentHead: true,                      
              tasksMember: [],                             
              tasksPerformer: [],                          
              tasksMaster: [],                             
              roles: [ 'superadmin', 'admin', 'user' ],    
              permits: [],                                 
              usersGroup: [],                              
              _id: '61631508ecdfb52b447a57e1',               
              ordinalNumber: 1,                            
              login: 'user_1',                             
              password: '$2b$07$vnxtZrZwL14XHzA52JYLwejWWsD',
              name: 'Юрий',                                
              surname: 'Бевов',                            
              fullName: 'Юрий Бевов',                      
              email: 'test',                               
              phone: '+7(123)456-78-92',                   
              created: '2021-10-10T16:30:00.091Z',           
              __v: 0                                       
            },                                             
            {                                              
              department: 'Офис',                          
              isDepartmentHead: true,                      
              tasksMember: [],                             
              tasksPerformer: [],                          
              tasksMaster: [],                             
              roles: [ 'admin', 'user', 'superadmin' ],    
              permits: [],                                 
              usersGroup: [],                              
              _id: '616d7cab4cd5f11708f17407',               
              ordinalNumber: 2,                            
              login: 'user_2',                             
              password: '$2b$07$MyQgWXU56Ej1gQWkve3mhuLnVfF',
              name: 'Григорий',                            
              surname: 'Дзнеладзе',                        
              fullName: 'Григорий Дзнеладзе',              
              email: 'test',                               
              phone: '+7(123)456-78-92',                   
              created: '2021-10-18T13:54:51.815Z',           
              __v: 0                                       
            },                                             
            {                                              
              department: 'Офис',                          
              isDepartmentHead: false,                     
              tasksMember: [],                             
              tasksPerformer: [],                          
              tasksMaster: [],                             
              roles: [ 'admin', 'user', 'superadmin' ],    
              permits: [],                                 
              usersGroup: [],                              
              _id: '616d7cd84cd5f11708f17408',               
              ordinalNumber: 2,                            
              login: 'user_3',                             
              password: '$2b$07$8u0bCaQfbNJaRD/af.6IUeUM8LN',
              name: 'Артем',                               
              surname: 'Чернух',                           
              fullName: 'Артем Чернух',                    
              email: 'test',                               
              phone: '+7(123)456-78-92',                   
              created: '2021-10-18T13:55:36.068Z',           
              __v: 0                                       
            },                                             
            {                                              
              department: 'Офис',                          
              isDepartmentHead: true,                      
              tasksMember: [],                             
              tasksPerformer: [],                          
              tasksMaster: [],                             
              roles: [ 'admin', 'user', 'superadmin' ],    
              permits: [],                                 
              usersGroup: [],                              
              _id: '616d7cf24cd5f11708f17409',               
              ordinalNumber: 3,                            
              login: 'user_4',                             
              password: '$2b$07$u/06xCCMiw1HwaP3MdHDneiK1zi',
              name: 'Юрий',                                
              surname: 'Кураев',                           
              fullName: 'Юрий Кураев',                     
              email: 'test',                               
              phone: '+7(123)456-78-92',                   
              created: '2021-10-18T13:56:02.752Z',           
              __v: 0                                       
            }                                              
          ]     */                                           


        /*task.members.forEach(member => {
            console.log('MEMBER', member)

            users.find(user => {
                user._id === member._id ?
                user.tasksMember.push(task.title) : null
            })

            console.log(users)
        })*/
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