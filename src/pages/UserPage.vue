<template>
    <div class="">
        <BlockTabHeader :dataType="'user-info'" :tabs="userPageTabs"/>
    </div>
</template>

<script>
    import BlockTabHeader from 'src/components/BlockTabHeader'

    let userData = 
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
                },

                {
                    _id: '00ew1',
                    name: 'Задача №12',
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
                            _id:'00we2',
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
                                    _id:'00dqqad2',
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
        }
    

    let userStat = 
        {
            barChartData: [{
                    "month": "Янв",
                    "tasks": 250
                }, {
                    "month": "Фев",
                    "tasks": 140
                }, {
                    "month": "Март",
                    "tasks": 69
                }, {
                    "month": "Апр",
                    "tasks": 14
                }, {
                    "month": "Май",
                    "tasks": 189
                }, {
                    "month": "Июнь",
                    "tasks": 220
                }, {
                    "month": "Июль",
                    "tasks": 58
                }, {
                    "month": "Авг",
                    "tasks": 123
                }, {
                    "month": "Сен",
                    "tasks": 94
                }, {
                    "month": "Окт",
                    "tasks": 84
                }, {
                    "month": "Ноя",
                    "tasks": 0
                }, {
                    "month": "Дек",
                    "tasks": 0
                }
            ],
        }

    export default {
        name: 'UserPage',

        components: {
            BlockTabHeader,
        },

        data() {
            return {
                userPageTabs: [
                    {
                        name: 'info',
                        label: 'Информация',
                        active: true, 
                        options: { 
                            components: ['Info'], 
                            data: userData
                        }
                    },

                    {
                        name: 'permits', 
                        label: 'Разрешения',

                        options: { 
                            components: ['Permits'],
                            data: userData
                        }
                    },

                    {
                        name: 'task', 
                        label: 'Задачи',

                        options: { 
                            components: ['UserTasks'],
                            data: userData
                        }
                    },

                    {
                        name: 'stat', 
                        label: 'Статистика',

                        options: { 
                            components: ['Stat'],
                            data: userStat
                        }
                    },
                ],
            }
        }
    }

</script>