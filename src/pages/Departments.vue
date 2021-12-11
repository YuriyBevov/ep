<template>
    <div class="">
        <BlockTabHeader :dataType="'deps'" :tabs="departmentsPageTabs"/>
    </div>
</template>

<script>
    import BlockTabHeader from 'src/components/BlockTabHeader'

    let tableViewColumns = [
        { name: 'title', required: true, label: 'Название отдела:', align: 'left', field: 'title', sortable: true },
        { name: 'head', align: 'right', label: 'Рук-ль:', field: 'head', sortable: true },
        { name: 'members', align: 'right', label: 'Кол-во подчиненных:', field: 'members', sortable: true },
        { name: 'currentTasks', align: 'right', label: 'Текущих задач:', field: 'currentTasks', sortable: true },
        { name: 'closedTasks', align: 'right', label: 'Всего задач выполнено:', field: 'closedTasks', sortable: true },
    ]

    let departmentsData = [
        {
            _id: '1',
            published_at: '05.05.2021',
            title: 'Производство',
            head: 'Гр. Дзнеладзе',
            members: 16,
            currentTasks: 32,
            closedTasks: 89,
            departmentColor: '#aed581'
        },

        {
            _id: '2',
            published_at: '05.05.2012',
            title: 'Офис',
            head: 'Юрий Кураев',
            members: 3,
            currentTasks: 18,
            closedTasks: 89,
            departmentColor: '#ff5722'
        },
    ]

    export default {
        name: 'Departments',

        components: {
            BlockTabHeader
        },

        data() {
            return {
                departmentsPageTabs: [
                    {
                        name: 'Info',
                        label: 'Информация',
                        active: true, 
                        options: { 
                            components: ['List'], 
                            tableViewColumns,
                            data: departmentsData
                        }
                    },

                    {
                        name: 'stats',
                        label: 'Статистика',
                        active: true, 
                        options: { 
                            /*components: ['Stat'],*/
                        }
                    },
                ]
            }
        }
    }
</script>