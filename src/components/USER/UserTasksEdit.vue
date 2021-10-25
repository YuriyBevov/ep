<template>
    <div>
        <div class="">
            <ShortTaskCard
                :title="'Ответственное лицо в задачах'"
                :emptyText="'Задач в которых является ответственным пока нет...'"
                :color="'#C10015'"
                :tasks="this.filteredTasks.master ? this.filteredTasks.master : []"
                @openTask="onClickOpenTask"
            />
        </div>
        <div class="">
            <ShortTaskCard
                :title="'Исполнитель в задачах'"
                :emptyText="'Задач в которых является исполнителем пока нет...'"
                :color="'#F2C037'"
                :tasks="this.filteredTasks.performer ? this.filteredTasks.performer : []"
                @openTask="onClickOpenTask"
            />
        </div>
        <div class="">
            <ShortTaskCard
                :title="'Участник в задачах'"
                :emptyText="'Задач в которых является участником пока нет...'"
                :color="'#21BA45'"
                :tasks="this.filteredTasks.member ? this.filteredTasks.member : []"
                @openTask="onClickOpenTask"
            />
        </div>
    </div>
</template>

<script>
    import ShortTaskCard from 'components/TASK/ShortTaskCard'

    export default {
        components: {
            ShortTaskCard
        },

        props: {
            tasks: { type: Array },
            _id: { type: String }
        },

        computed: {
            filteredTasks() {
                let userTasks = {
                    master: [],
                    performer: [],
                    member: []
                }

                this.$props.tasks.forEach(task => {
                    if(task.members) {
                        let isMember = task.members.find(member => member._id === this.$props._id)
                        isMember ?
                        userTasks.member.push({
                            _id: task._id,
                            title: task.title
                        }) : null
                    }

                    if(task.performers) {
                        let isPerformer = task.performers.find(performer => performer._id === this.$props._id)
                        isPerformer ?
                        userTasks.performer.push({
                            _id: task._id,
                            title: task.title
                        }) : null
                    }

                    if(task.master) {
                        task.master._id === this.$props._id ? 
  
                        userTasks.master.push({
                            _id: task._id,
                            title: task.title
                        }) : null
                    }
                })

                return userTasks
            }
        },

        methods: {
            onClickOpenTask(id) {
                this.$router.push('/task/' + id)
            }
        }
    }
</script>