<template>
    <div class="user-tasks">

        Мои задачи:

        <ul>
            <li
                v-for="(task, i) of userTasks"
                :key="'task_i' + i"
                style="max-width: 500px;"
            >
                <TaskCard 
                    :taskData="task"
                />

            </li>
        </ul>

        Открытые задачи:

        <ul>
            <li
                v-for="(task, i) of openedTasks"
                :key="'task_i' + i"
            >
                {{task.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import TaskCard from '../../components/TASK/TaskCard'

    export default {
        name: "TasksPage",

        components: {
            TaskCard
        },

        computed: {
            ...mapGetters('task', ['userTasks', 'openedTasks'])
        }
    }
</script>