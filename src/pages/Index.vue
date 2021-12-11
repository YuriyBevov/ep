<template>
    <div>
        <BlockTabHeader :dataType="'main'" :tabs="mainPageTabs"/>
    </div>
</template>

<script>
    import BlockTabHeader from 'src/components/BlockTabHeader'

    let userStat = {
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
        name: 'PageIndex',

        components: {
            BlockTabHeader
        },

        data() {
            return {
                mainPageTabs: [
                        

                        {
                            name: 'calendar', label: 'Календарь',
                            active: true,
                            options: { 
                                components: ['Calendar'], 
                                /*data: массив моих задач*/
                            }
                        },

                        {
                            name: 'todo', label: 'Список дел',
                            options: { 
                                components: ['ToDo'],
                                /*data: массив текущих заметок*/
                            }
                        },

                        {
                            name: 'stat', label: 'Статистика',
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
