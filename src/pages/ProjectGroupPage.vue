<template>
    <div class="">
        <BlockTabHeader :dataType="'projectGroup-info'" :tabs="projectGroupPageTabs"/>
    </div>
</template>

<script>
    import BlockTabHeader from 'src/components/BlockTabHeader'

    let projectGroupData = {
            _id: '11332212',
            name: 'Аптека для бережливых',
            published_at: '05.05.2017',
            projectColor: '#F2C037',
            projectCount: 324,
            closedProjectCount: 123,
            taskCount: 829,
            closedTaskCount: 281,
        }
    

    export default {
        name: 'UserPage',

        components: {
            BlockTabHeader,
        },

        data() {
            return {
                projectGroupPageTabs: [
                    {
                        name: 'info',
                        label: 'Информация',
                        active: true, 
                        options: { 
                            components: ['Info'], 
                            data: projectGroupData
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