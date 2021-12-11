<template>
    <div>
        <div class="q-mb-md">
            <span class="text-h4">Юрий Кураев</span>
        </div>

        <div class="flex items-center row q-mb-md">
            <!--В отдельный компонент поиска-->
            <q-input
                square 
                outlined
                v-model="search" 
                type="search" 
                placeholder="Поиск по разрешениям"
                class="search q-mr-sm"
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
            <q-select class="col-4" square outlined v-model="model" :options="options" label="Тип разрешений:" />
        </div>

        <div class="flex row q-mb-md">
            <div class="col-6">
                <q-list class="q-pa-none" style="max-height: 600px; overflow: hidden; overflow-y: auto;">
                    <q-item
                        v-for="(permit, i) of this.userPermits"
                        :key="'permit_' + i"
                    >
                        <q-checkbox
                            v-model="permit.isChecked"
                            style="width: 50%; min-width: 250px;"
                        >
                            {{permit.name}}
                        </q-checkbox>
                    </q-item>
                </q-list>
            </div>
            <div class="col-6">
                <q-list class="q-pa-none" style="max-height: 600px; overflow: hidden; overflow-y: auto;">
                    <q-item
                        v-for="(permitGroup, i) of this.permitGroups"
                        :key="'permitGroup_' + i"
                    >
                        <q-checkbox
                            v-model="permitGroup.isChecked"
                            style="width: 50%; min-width: 250px;"
                        >
                            {{permitGroup.name}}
                        </q-checkbox>
                    </q-item>
                </q-list>
            </div>
        </div>

        <div class="flex justify-end q-mt-auto">
            <q-btn outline color="primary" label="Отмена" class="q-mr-md"/>
            <q-btn outline color="primary" label="Сохранить" />
        </div>
    </div>
</template>

<script>
    let permitList = [
        /*Пользовательские*/
        {
            _id: 'user-1',
            type: 'user',
            name: 'Редактирование пользователей'
        },

        {
            _id: 'user-2',
            type: 'user',
            name: 'Удаление пользователей'
        },

        {
            _id: 'user-3',
            type: 'user',
            name: 'Добавление пользователей'
        },
        
        /*Задачи*/
        {
            _id: 'task-1',
            type: 'task',
            name: 'Создание задач'
        },

        {
            _id: 'task-2',
            type: 'task',
            name: 'Редактирование задач'
        },

        {
            _id: 'task-3',
            type: 'task',
            name: 'Делегирование задач'
        },

        {
            _id: 'task-4',
            type: 'task',
            name: 'Удаление задач'
        },

        /*Проект*/
        {
            _id: 'project-1',
            type: 'project',
            name: 'Создание проектов'
        },

        {
            _id: 'project-2',
            type: 'project',
            name: 'Удаление проектов'
        },

        {
            _id: 'project-3',
            type: 'project',
            name: 'Редактирование проектов'
        },

        /*Группа проектов*/
        {
            _id: 'projectGroup-1',
            type: 'projectGroup',
            name: 'Создание групп проектов'
        },

        {
            _id: 'projectGroup-2',
            type: 'projectGroup',
            name: 'Редактирование групп проектов'
        },

        {
            _id: 'projectGroup-3',
            type: 'projectGroup',
            name: 'Удаление групп проектов'
        },

        /*Общие*/

        {
            _id: 'common-1',
            type: 'common',
            name: 'Доступ к списку пользователей'
        },

        {
            _id: 'common-2',
            type: 'common',
            name: 'Доступ к статистике'
        },

        {
            _id: 'common-3',
            type: 'common',
            name: 'Доступ к календарю проектов и задач'
        },

        {
            _id: 'common-4',
            type: 'common',
            name: 'Доступ к чату'
        },

        {
            _id: 'common-5',
            type: 'common',
            name: 'Доступ к списку всех задач'
        },

        {
            _id: 'common-6',
            type: 'common',
            name: 'Доступ к списку всех проектов'
        },

        {
            _id: 'common-7',
            type: 'common',
            name: 'Доступ к блоку проектов'
        },

        {
            _id: 'common-8',
            type: 'common',
            name: 'Доступ к группам проектов'
        },

        {
            _id: 'common-8',
            type: 'common',
            name: 'Доступ к календарю всех задач'
        },
    ]

    let permitGroups = [
        { name: 'Группа пол-х раз-й 1', permits: [1,2,3], isChecked: true },
        { name: 'Группа пол-х раз-й 2', permits: [1,3,4,6,9], isChecked: false },
        { name: 'Группа пол-х раз-й 3', permits: [2,4,6,7], isChecked: false },
        { name: 'Группа пол-х раз-й 4', permits: [1,5,6], isChecked: false },
        { name: 'Группа пол-х раз-й 5', permits: [3,8,9], isChecked: false },
        { name: 'Группа пол-х раз-й 6', permits: [2,4,5], isChecked: false },
        { name: 'Группа пол-х раз-й 7', permits: [4,6,7], isChecked: false },
        { name: 'Группа пол-х раз-й 8', permits: [3,7,9], isChecked: false },
        { name: 'Группа пол-х раз-й 9', permits: [1,3,4], isChecked: false },
    ]

    export default {
        name: 'UserPermits',
        data() {
            return {
                search: '',
                model: 'Все',
                options: ['Все', 'Пользователи', 'Проекты', 'Группы проектов', 'Задачи', 'Общие'],

                userPermits: null,
                permitGroups
            }
        },
        methods: {
            resetSearchField() {
                this.search = ''
            }
        },

        mounted() {
            let permits = [...permitList]

            permits.forEach(permit => {
                permit.isChecked = false
            })

            this.$props.permits.forEach(permit => {
                let index = permit
                permits[index].isChecked = true
            });

            this.userPermits = permits
        },

        props: { permits: { type: Array } }
    }
</script>