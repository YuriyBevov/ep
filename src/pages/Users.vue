<template>
    <div class="">
        <!--Шапка-->
        <div class="q-pa-sm">
            <h3 class="q-ma-none q-mb-sm">Пользователи</h3>

            <div class="q-mb-sm">
                <q-tabs
                    v-model="tab"
                    no-caps
                    outside-arrows
                    mobile-arrows
                    class="bg-secondary text-white shadow-2"
                >
                    <q-tab name="all" label="Все" />
                    <q-tab name="online" label="Онлайн" />
                    <q-tab name="blocked" label="Заблок-нные" />
                </q-tabs>
            </div>

            <div class="flex no-wrap align-center row">
                <q-btn 
                    outline 
                    color="primary q-mr-sm" 
                    icon="add"
                    @click="isUserAddEditModalOpened = true"
                />

                <q-input
                    square 
                    outlined
                    v-model="search" 
                    type="search" 
                    placeholder="Поиск"
                    class="search"
                    style="flex-grow: 1;"
                >
                    <template v-slot:append>
                        <q-icon name="search" v-if="!search.length"/>
                        <q-btn
                            v-else
                            flat
                        >
                            <q-icon name="close"/>
                        </q-btn>
                    </template>
                </q-input>
            </div>

            <q-select
                square
                label="Сортировка по отделам"
                :options="['Отдел-1', 'Отдел-2']"
                v-model="department"
            />
        </div>
        <!--шапка конец-->

        <!--контент-->
        <div class="">
            <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
            >
                <q-tab-panel name="all">
                    <UserList
                        :users="this.users"
                        :showStyle="this.showStyle"
                    />
                </q-tab-panel>
    
                <q-tab-panel name="online">
                    <UserList
                        :users="this.users.filter(user => user.isOnline)"
                        :showStyle="this.showStyle"
                    />
                </q-tab-panel>
    
                <q-tab-panel name="blocked">
                    <UserList
                        :users="this.users.filter(user => user.status === 1)"
                        :showStyle="this.showStyle"
                    />
                </q-tab-panel>
            </q-tab-panels>
        </div>
        <!--контент конец-->

        <!--modals-->
        
        <UserAddEditModal
            v-if="this.isUserAddEditModalOpened"
            :isOpen="this.isUserAddEditModalOpened"
            :type="'addUser'"
            @closeModal="closeUserAddEditModal"
            @saveData="saveNewUser"
        />
        <!--modals end-->
    </div>
</template>

<script>
    import UserAddEditModal from 'src/components/MODALS/UserAddEditModal'
    import UserList from 'src/components/USER/UserList'
    

    export default {
        name: 'Users',

        components: {
            UserAddEditModal,
            UserList
        },

        data() {
            return {
                tab: 'all',
                showStyle: 'table',
                search: '',
                isUserAddEditModalOpened: false,
                department: [],

                users: [
                    {
                        id: '12345789',
                        login: 'user_1',
                        ordinal_number: 1,
                        created_at: '05.05.1365',
                        status: 0,
                        isOnline: true,
                        name: 'Юрий',
                        surname: 'Бевов',
                        fullName: 'Юрий Бевов',
                        email: 'test@mail.ru',
                        phone: '+79213271197',


                        tasks: [
                            {
                                id: '1',
                                title: 'Задача №1',
                                published_at: '05.05.1985',
                                status: 0,
                                role: 0
                            },

                            {
                                id: '2',
                                title: 'Задача №2',
                                published_at: '05.05.1985',
                                status: 1,
                                role: -1
                            },

                            {
                                id: '3',
                                title: 'Задача №3',
                                published_at: '05.05.1985',
                                status: 3,
                                role: 1
                            },
                        ],
                        permits: [0,3,5,9],
                        role: [ 0, 1 ],
                    },

                    {
                        id: '12345789',
                        login: 'user_1',
                        ordinal_number: 1,
                        created_at: '05.05.1365',
                        status: 0,
                        isOnline: false,
                        name: 'Артем',
                        surname: 'Чернух',
                        fullName: 'Артем Чернух',
                        email: 'test@mail.ru',
                        phone: '+79213271197',

                        tasks: [
                            {
                                id: '1',
                                title: 'Задача №1',
                                role: 1
                            },

                            {
                                id: '2',
                                title: 'Задача №2',
                                role: 0
                            },

                            {
                                id: '5',
                                title: 'Задача №5',
                                role: -1
                            },
                        ],

                        permits: [ 0,3,5,9 ],
                        role: [ 0, 1 ],
                    },
                ]
            }
        },

        methods: {
            closeUserAddEditModal() {
                this.isUserAddEditModalOpened = false
            },
            saveNewUser(data) {
                this.isUserAddEditModalOpened = false
                console.log('save new user', data )
            }
        }
    }
</script>