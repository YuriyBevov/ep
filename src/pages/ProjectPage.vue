<template>
    <div class="">
        <BlockTabHeader :dataType="'project-info'" :tabs="projectPageTabs"/>
    </div>
</template>

<script>
    import BlockTabHeader from 'src/components/BlockTabHeader'

    let projectData = 
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
        }
    

    export default {
        name: 'UserPage',

        components: {
            BlockTabHeader,
        },

        data() {
            return {
                projectPageTabs: [
                    {
                        name: 'info',
                        label: 'Информация',
                        active: true, 
                        options: { 
                            components: ['Info'], 
                            data: projectData
                        }
                    },

                    /*{
                        name: 'chat', 
                        label: 'Чат задачи',

                        options: { 
                            components: ['Chat'],
                        }
                    },*/
                ],
            }
        }
    }

</script>