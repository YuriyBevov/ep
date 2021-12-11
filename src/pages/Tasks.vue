<template>
    <div>
        <BlockTabHeader :dataType="'task'" :tabs="taskPageTabs" @filter="filtration" />
    </div>
</template>

<script>
    import BlockTabHeader from 'src/components/BlockTabHeader'
    import { searching } from 'src/functions/searching.js'
    
    let tasksData = [
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

                    {
                        _id:'0034',
                        name: 'Задача №112',
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
                    }
                ]
            },

            {
                _id: '003',
                name: 'Задача №2',
                urgency: 8,
                head: 'Гр.Дзнеладзе',
                members: 24,
                performers: 16,
                department: 'Произв-во',
                status: 'done',
                statusDesc: 'Выполнена',
                statusColor: '#2b8741',
                project: 'Ам на большевиков',
                projectGroup: 'Ароматный мир',
                childCount: 0
            },

            {
                _id: '004',
                name: 'Задача №3',
                urgency: 8,
                head: 'А. Чернух',
                members: 24,
                performers: 16,
                department: 'Произв-во',
                status: 'closed',
                statusDesc: 'Закрыта',
                statusColor: '#b53544',
                project: 'Ам на большевиков',
                projectGroup: 'Ароматный мир',
                childCount: 3,
                childrens: []
            },

            {
                _id: '005',
                name: 'Задача №4',
                urgency: 8,
                head: 'Гр.Дзнеладзе',
                members: 24,
                performers: 16,
                department: 'Произв-во',
                status: 'frozen',
                statusDesc: 'Приостановлена',
                statusColor: '#b4dde6',
                project: 'Ам на большевиков',
                projectGroup: 'Ароматный мир',
                childCount: 0
            },           
        ];

    let tableViewColumns = [
            { name: 'name', required: true, label: 'Название задачи', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
            { name: 'childrens', align: 'right', label: 'Подзадач', field: 'childCount', sortable: true },
            { name: 'urgency', align: 'right', label: 'Кфф срочности', field: 'urgency', sortable: true },
            { name: 'head', align: 'right', label: 'Отв.лицо', field: 'head', sortable: true },
            { name: 'members', align: 'right', label: 'Участников', field: 'members', sortable: true },
            { name: 'performers', align: 'right', label: 'Исполнителей', field: 'performers', sortable: true },
            { name: 'department', align: 'right', label: 'Отдел', field: 'department', sortable: true },
            { name: 'status', align: 'right', label: 'Статус', field: 'statusDesc', sortable: true },
            { name: 'project', align: 'right', label: 'Проект', field: 'project', sortable: true },
            { name: 'projectGroup', align: 'right', label: 'Группа проектов', field: 'projectGroup', sortable: true },
        ]

    export default {
        name: 'Tasks',

        components: {
            BlockTabHeader
        },
        
        data() {
            return {
                searchFilterText: '',

                taskPageTabs: [
                    {
                        name: 'all',
                        label: 'Все',

                        options: { 
                            components: ['List'], 
                            
                            tableViewColumns,

                            data: tasksData

                        }
                    },

                    {
                        name: 'opened',
                        label: 'Открытые',

                        options: { 
                            components: ['List'], 
                            
                            tableViewColumns,

                            data: tasksData.filter(item => item.status === 'opened')
                        }
                    },

                    {
                        name: 'work',
                        label: 'В работе',
                        active: true,
                        options: { 
                            components: ['List'], 
                            
                            tableViewColumns,
                            data: tasksData.filter(item => item.status === 'work')
                        }
                    },

                    {
                        name: 'done',
                        label: 'Выполненные',
                        options: { 
                            components: ['List'], 
                            
                            tableViewColumns,
                            data: tasksData.filter(item => item.status === 'done')
                        }
                    },

                    {
                        name: 'frozen',
                        label: 'Приостановленные',
                        options: { 
                            components: ['List'], 
                            
                            tableViewColumns,
                            data: tasksData.filter(item => item.status === 'frozen')
                        }
                    },

                    {
                        name: 'closed',
                        label: 'Закрытые',
                        options: { 
                            components: ['List'], 
                            
                            tableViewColumns,
                            data: tasksData.filter(item => item.status === 'closed')
                        }
                    },

                    {
                        name: 'tree',
                        label: 'Дерево проектов и задач',
                        options: { 
                            components: ['Tree'], 
                            viewMode: 'table'
                        }
                    },
                ],
            }
        },
        
        computed: {
            filteredData() {
                console.log('ff')
                let data = [...tasksData]              

                if(this.searchFilterText) {
                    data = searching(data, this.searchFilterText, 'name')
                }

                return data
            },
        },

        methods: {
            filtration(opt) {
                console.log(opt, 'filter')
                this.searchFilterText = opt.searchText
            }
        }
    }
</script>