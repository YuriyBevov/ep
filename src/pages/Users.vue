<template>
    <div class="">
        <BlockTabHeader :dataType="'user'" :tabs="userPageTabs"/>
    </div>
</template>

<script>
    import BlockTabHeader from 'src/components/BlockTabHeader'

    let tableViewColumns = [
        { name: 'name', required: true, label: 'Имя сотрудника', align: 'left', field: 'fullName', sortable: true },
        { name: 'department', align: 'right', label: 'Отдел', field: 'department', sortable: true },
        { name: 'dep_position', align: 'right', label: 'Должность', field: 'dep_position', sortable: true },
        { name: 'phone', align: 'right', label: 'Телефон', field: 'phone', sortable: true },
        { name: 'email', align: 'right', label: 'e-mail', field: 'email', sortable: true },
        { name: 'taskCount', align: 'right', label: 'Текущих задач', field: 'taskCount', sortable: true },
    ]

    let userData = [
        {
            _id: '12345789',
            login: 'user_1',
            ordinal_number: 1,
            created_at: '05.05.1365',
            isBlocked: false,
            isOnline: true,
            name: 'Юрий',
            surname: 'Бевов',
            fullName: 'Юрий Бевов',
            email: 'test@mail.ru',
            phone: '+79213271197',
            department: 'Производство',
            dep_position: 'Монтажник',
            
            tasks: [
                {
                    _id: '001',
                    name: 'Задача №1',
                    urgency: 8,
                    head: 'Гр.Дзнеладзе',
                    members: 24,
                    performers: 16,
                    department: 'Произв-во',
                    status: 'work',
                    statusDesc: 'В работе',
                    statusColor: '#2a4d6b',
                    project: 'Ам на большевиков',
                    projectGroup: 'Ароматный мир',
                    childCount: 2,

                    childrens: [
                        {
                            _id:'002',
                            name: 'Задача №11',
                            urgency: 8,
                            head: 'Гр.Дзнеладзе',
                            members: 24,
                            performers: 16,
                            department: 'Произв-во',
                            status: 'opened',
                            statusDesc: 'Открыта',
                            statusColor: '#b53544',
                            project: 'Ам на большевиков',
                            projectGroup: 'Ароматный мир',
                            childCount: 1,

                            childrens: [
                                {
                                    _id:'00dad2',
                                    name: 'Задача №1ss1',
                                    urgency: 8,
                                    head: 'Гр.Дзнеладзе',
                                    members: 24,
                                    performers: 16,
                                    department: 'Произв-во',
                                    status: 'opened',
                                    statusDesc: 'Открыта',
                                    statusColor: '#b53544',
                                    project: 'Ам на большевиков',
                                    projectGroup: 'Ароматный мир',
                                    childCount: 0
                                },
                            ]
                        },
                    ]
                }
            ],

            taskCount: 1,
            
            permits: [0,3,5,9],
            role: [ 0, 1 ],
        },

        {
            _id: '123452789',
            login: 'user_2',
            ordinal_number: 2,
            created_at: '05.05.1365',
            isBlocked: false,
            isOnline: true,
            name: 'Юрий',
            surname: 'Кураев',
            fullName: 'Юрий Кураев',
            email: 'test@mail.ru',
            phone: '+79213271197',
            department: 'Офис',
            dep_position: 'Руководитель',
            tasks: [
                
            ],
            taskCount: 0,
            permits: [0,3,5,9],
            role: [ 0, 1 ],
        },
    ]
    
    export default {
        name: 'Users',

        components: {
            BlockTabHeader,
        },

        data() {
            return {
                userPageTabs: [
                    {
                        name: 'all',
                        label: 'Все',
                        active: true, 
                        options: { 
                            components: ['List'], 
                            tableViewColumns,
                            data: userData
                        }
                    },

                    {
                        name: 'online', label: 'Online',
                        options: { 
                            components: ['List'], 
                            tableViewColumns,
                            data: userData.filter(user => user.isOnline )
                        }
                    },

                    {
                        name: 'blocked', label: 'Забл-ные',
                        options: { 
                            components: ['List'], 
                            tableViewColumns,
                            data: userData.filter(user => user.isBlocked )
                        }
                    },

                    {
                        name: 'user-group', label: 'Группы польз-й',
                        options: { 
                            components: ['Group'], 
                            
                        }
                    }
                ],
            }
        },
    }
</script>