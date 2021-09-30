<template>
    <div class="user-tasks">

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
    export default {
        computed: {
            ...mapGetters('task', ['openedTasks'])
        }
    }
</script>