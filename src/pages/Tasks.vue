<template>
    <div class="">
        <!--Шапка-->
        <div class="q-pa-sm">
            <h3 class="q-ma-none q-mb-sm">Задачи</h3>

            <div class="q-mb-sm">
                <q-tabs
                    v-model="tab"
                    no-caps
                    outside-arrows
                    mobile-arrows
                    class="bg-secondary text-white shadow-2"
                >
                    <q-tab name="all" label="Все" />
                    <q-tab name="opened" label="Открытые" />
                    <q-tab name="inWork" label="В работе" />
                    <q-tab name="done" label="Выполненные" />
                    <q-tab name="frozen" label="Приостановленные" />
                    <q-tab name="closed" label="Закрытые" />
                </q-tabs>
            </div>

            <div class="flex no-wrap align-center row">
                <q-btn 
                    outline 
                    color="primary q-mr-sm" 
                    icon="add"
                    @click="isUserAddEditModalOpened = true"
                />

                <q-btn 
                    outline 
                    color="primary q-mr-sm" 
                    icon="dashboard"
                />

                <q-btn 
                    outline 
                    color="primary q-mr-sm" 
                    icon="view_list"
                />

                <q-input
                    square 
                    outlined
                    v-model="search" 
                    type="search" 
                    placeholder="Поиск"
                    class="search"
                    style="flex-grow: 1;"
                >
                    <template v-slot:append>
                        <q-icon name="search" v-if="!search.length"/>
                        <q-btn
                            v-else
                            flat
                        >
                            <q-icon name="close"/>
                        </q-btn>
                    </template>
                </q-input>
            </div>

            <q-select
                square
                label="Сортировка по проектам"
                :options="['проект-1', 'проект-2']"
                v-model="task"
                class="col-10 q-mr-auto"
            />

            <q-select
                square
                label="Сортировка по отделам"
                :options="['Отдел-1', 'Отдел-2']"
                v-model="department"
            />

            <q-select
                square
                label="Сортировка по пользователям"
                :options="['user-1', 'user-2']"
                v-model="task"
            />
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'Tasks',
        
        data() {
            return {
                tab: 'inWork',
                search: '',
                department: '',
                task: ''
            }
        }
    }
</script>