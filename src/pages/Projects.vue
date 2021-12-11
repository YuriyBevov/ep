<template>
    <div class="">
        <BlockTabHeader :dataType="'project'" :tabs="projectPageTabs"/>
    </div>
</template>

<script>
    import BlockTabHeader from 'src/components/BlockTabHeader'
    
    let projectData = [
        {
            _id: '1',
            name: 'Ам на пискаревском, 32',
            owner: 'Артем Чернух',
            published_at: '05.05.1989',
            status: 'work',
            statusDesc: 'В работе',
            statusColor: '#2a4d6b',
            projectGroup: 'Ароматный мир',
            taskCount: 1,

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
            ]
        },

        {
            _id: '2',
            name: 'Ам на пискаревском, 69',
            owner: 'Артем Чернух',
            published_at: '05.05.1989',
            status: 'done',
            statusDesc: 'Выполнена',
            statusColor: '#2b8741',
            projectGroup: 'Ароматный мир',
            taskCount: 0,

            tasks: [
              
            ]
        }
    ]

    let tableViewColumns = [
        { name: 'name', required: true, label: 'Название проекта:', align: 'left', field: 'name', sortable: true },
        { name: 'owner', align: 'right', label: 'Создатель:', field: 'owner', sortable: true },
        { name: 'projectGroup', align: 'right', label: 'Гр. проектов:', field: 'projectGroup', sortable: true },
        { name: 'status', align: 'right', label: 'Статус:', field: 'statusDesc', sortable: true },
        { name: 'taskCount', align: 'right', label: 'Задач в проекте:', field: 'taskCount', sortable: true },
    ]

    let projectGroupData = [
        {
            _id: '1133212',
            name: 'Ароматный мир',
            published_at: '05.05.2019',
            projectColor: '#2b8741',
            projectCount: 34,
            closedProjectCount: 13,
            taskCount: 89,
            closedTaskCount: 28,
        },

        {
            _id: '11332212',
            name: 'Аптека для бережливых',
            published_at: '05.05.2017',
            projectColor: '#F2C037',
            projectCount: 324,
            closedProjectCount: 123,
            taskCount: 829,
            closedTaskCount: 281,
        },

        {
            _id: '113333212',
            name: 'Винлаб',
            published_at: '05.05.2020',
            projectColor: '#9C27B0',
            projectCount: 34,
            closedProjectCount: 13,
            taskCount: 89,
            closedTaskCount: 28,
        }
    ]

    let projectGroupTableViewColumns = [
        { name: 'name', required: true, label: 'Название проекта:', align: 'left', field: 'name', sortable: true },
        { name: 'published_at', align: 'right', label: 'Создано:', field: 'published_at', sortable: true },
        { name: 'projectCount', align: 'right', label: 'Всего проектов:', field: 'projectCount', sortable: true },
        { name: 'closedProjectCount', align: 'right', label: 'Закрытых проектов:', field: 'closedProjectCount', sortable: true },
        { name: 'taskCount', align: 'right', label: 'Всего задач:', field: 'taskCount', sortable: true },
        { name: 'closedTaskCount', align: 'right', label: 'Закрытых задач:', field: 'closedTaskCount', sortable: true },
    ]

    export default {
        name: 'Tasks',

        components: {
            BlockTabHeader,
        },

        data() {
            return {
                projectPageTabs: [
                    {
                        name: 'all',
                        label: 'Все',
                        active: true, 
                        options: { 
                            components: ['List'], 
                            tableViewColumns,
                            data: projectData
                        }
                    },

                    {
                        name: 'work', label: 'В работе',
                        options: { 
                            components: ['List'], 
                            tableViewColumns,
                            data: projectData.filter(project => project.status === 'work' )
                        }
                    },

                    {
                        name: 'frozen', label: 'Приостановленные',
                        options: { 
                            components: ['List'], 
                            tableViewColumns,
                            data: projectData.filter(project => project.status === 'frozen' )
                        }
                    },

                    {
                        name: 'done', label: 'Выполненные',
                        options: { 
                            components: ['List'], 
                            tableViewColumns,
                            data: projectData.filter(project => project.status === 'done' )
                        }
                    },

                    {
                        name: 'closed', label: 'Закрытые',
                        options: { 
                            components: ['List'], 
                            tableViewColumns,
                            data: projectData.filter(project => project.status === 'closed' )
                        }
                    },

                    {
                        name: 'project-group', label: 'Группы проектов',

                        options: { 
                            components: ['List'],
                            tableViewColumns: projectGroupTableViewColumns,
                            data: projectGroupData
                        }
                    },

                    {
                        name: 'tree', label: 'Дерево проектов и задач',
                        options: { 
                            components: ['Tree'], 
                        }
                    }
                ]
            }
        }
    }
</script>