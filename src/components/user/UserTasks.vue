<template>
    <div class="">
        <div class="flex items-center row">
            <!--В отдельный компонент поиска-->
            <q-input
                square 
                outlined
                v-model="search" 
                type="search" 
                placeholder="Поиск"
                class="search col-6 q-pr-sm"
                style="flex-grow: 1;"
            >
                <template v-slot:append>
                    <q-icon name="search" v-if="!search.length"/>
                    <q-btn
                        v-else
                        flat
                        @click="resetSearchField()"
                    >
                        <q-icon name="close"/>
                    </q-btn>
                </template>
            </q-input>
            <!--В отдельный компонент селекта-->
            <q-select 
                class="col-6 q-pl-sm" 
                square outlined 
                v-model="taskRole" 
                :options="['Ответственный', 'Исполнитель', 'Участник']" 
                label="Роль в задаче:" 
            />
        </div>

        <q-list class="task-list q-pa-none">
            <q-item
                v-for="(task,i) of this.$props.tasks"
                :key="'task_' + i"
            >
                <DataItem 
                    :dataType="'task'"
                    :data="task"
                />
            </q-item>
        </q-list>
    </div>
</template>

<script>
    import DataItem from 'src/components/DataItem'

    export default {
        name: 'UserTasks',

        data() {
            return {
                search: '',
                taskRole: 'Участник'
            }
        },

        components: {
            DataItem
        },

        props: {
            tasks: { type: Array }
        },

        methods: {
            resetSearchField() { this.search = ''}
        }
    }
</script>

<style lang="scss">
    .task-list {
        max-height: 800px;
        overflow: hidden;
        overflow-y: auto;
    }
</style>