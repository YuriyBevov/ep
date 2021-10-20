<template>
    <div class="user-info">
        <div>
            <q-card>
                <q-tabs
                    v-model="tab"
                    dense
                    class="text-grey"
                    active-color="primary"
                    indicator-color="primary"
                    align="justify"
                    narrow-indicator
                >
                    <q-tab name="options" label="Данные пользователя" />
                    <q-tab name="tasks" label="Текущие задачи" />
                    <q-tab name="permits" label="Разрешения" />
                </q-tabs>
        
                <q-separator />
    
                <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="options">
                        <UserDataEdit
                            :users="this.userList"
                            :departments="this.departmentList"
                            @updateUser="updateUserData"
                            @deleteUser="deleteUser"
                        />
                    </q-tab-panel>
            
                    <q-tab-panel name="tasks">
                        <!--компонент задач пользователя-->
                        <UserTasksEdit
                            
                        />
                    </q-tab-panel>
            
                    <q-tab-panel name="permits">
                        <!--компонент разрешений пользователя-->
                        <UserPermitsEdit
                        
                        />
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { translater } from 'src/functions/translater'
    import UserDataEdit from 'src/components/USER/UserDataEdit'
    import UserPermitsEdit from 'src/components/USER/UserPermitsEdit'
    import UserTasksEdit from 'src/components/USER/UserTasksEdit'

    export default {
        data() {
            return {
                tab: 'options',
            }
        },

        components: {
            UserDataEdit,
            UserPermitsEdit,
            UserTasksEdit
        },

        computed: {
            ...mapGetters('user', ['userList']),
            ...mapGetters('department', ['departmentList'])
        },

        methods: {
            ...mapActions('user', ['DELETE_USER']),

            updateUserData(userData) {
                let data = Object.assign({}, userData)
                let roles = []
                
                data.roles.forEach(role => {
                    roles.push( translater(role) )
                })

                data.roles = roles

                console.log('UPDATE:',data)
            },

            deleteUser(_id) {
                console.log(_id)
                this.DELETE_USER({_id})
            }
        }
    } 
</script>
