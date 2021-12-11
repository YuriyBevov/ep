<template>
    <div class="">
        <BlockTabHeader :dataType="'task-info'" :tabs="taskPageTabs"/>
    </div>
</template>

<script>
    import BlockTabHeader from 'src/components/BlockTabHeader'

    let taskData = {
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

    export default {
        name: 'UserPage',

        components: {
            BlockTabHeader,
        },

        data() {
            return {
                taskPageTabs: [
                    {
                        name: 'info',
                        label: 'Информация',
                        active: true, 
                        options: { 
                            components: ['Info'], 
                            data: taskData
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