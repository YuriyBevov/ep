<template>
    <div class="row items-start q-gutter-md">
    
        <TodoList :data="list" :key="list.id" :type="'task'" @delete-list="deleteList" @delete-card="deleteCard" class="col" v-for="list in todoLists" @addNewTask="addTask" @editTask="editTask"/>
        <TodoList :data="note" :key="note.id" :type="'note'"  @delete-list="deleteList" @delete-card="deleteCard" class="col" v-for="note in notes"/>

        <AddEditModal
            :isOpened="this.isAddEditModalOpened"
            :actionType="'add'"
            :dataType="'task'"
            @closeModal="isAddEditModalOpened = false"
        />
    </div>
</template>

<script>
    import Draggable from 'vuedraggable'
    import TodoList from 'src/components/toDo/TodoList.vue'
    import AddEditModal from 'src/components/modals/AddEditModal'
    let data = [
        {
        id: 'list-1',
        type: 'expired',
        title: 'Просроченные',
            cards: [
                {
                    id: 1,
                    name: 'Задача №1',
                    urgency: 8,
                    head: 'Гр.Дзнеладзе',
                    members: 24,
                    performers: 16,
                    department: 'Произв-во',
                    status: 'work',
                    statusDesc: 'В работе',
                    statusColor: 'red',
                    project: 'Ам на большевиков',
                    projectGroup: 'Ароматный мир',
                    childCount: 2,
                },
                {
                    id: 3,
                    name: 'Задача №231',
                    urgency: 8,
                    head: 'Гр.Дзнеладзе',
                    members: 24,
                    performers: 16,
                    department: 'Произв-во',
                    status: 'work',
                    statusDesc: 'В работе',
                    statusColor: 'red',
                    project: 'Ам на большевиков',
                    projectGroup: 'Ароматный мир',
                    childCount: 2,
                },
            ]
        },

        {
        id: 'list-2',
        type: 'actual',
        title: 'Сегодня',
            cards: [
                {
                    id: 12,
                    name: 'Задача №1',
                    urgency: 8,
                    head: 'Гр.Дзнеладзе',
                    members: 24,
                    performers: 16,
                    department: 'Произв-во',
                    status: 'work',
                    statusDesc: 'В работе',
                    statusColor: 'yellow',
                    project: 'Ам на большевиков',
                    projectGroup: 'Ароматный мир',
                    childCount: 2,
                },
                {
                    id: 13,
                    name: 'Задача №231',
                    urgency: 8,
                    head: 'Гр.Дзнеладзе',
                    members: 24,
                    performers: 16,
                    department: 'Произв-во',
                    status: 'work',
                    statusDesc: 'В работе',
                    statusColor: 'yellow',
                    project: 'Ам на большевиков',
                    projectGroup: 'Ароматный мир',
                    childCount: 2,
                },
            ]
        },

        {
        id: 'list-3',
        type: 'comming',
        title: 'Завтра',
            cards: [
                {
                    id: 301,
                    name: 'Задача №1',
                    urgency: 8,
                    head: 'Гр.Дзнеладзе',
                    members: 24,
                    performers: 16,
                    department: 'Произв-во',
                    status: 'work',
                    statusDesc: 'В работе',
                    statusColor: 'green',
                    project: 'Ам на большевиков',
                    projectGroup: 'Ароматный мир',
                    childCount: 2,
                },
                {
                    id: 903,
                    name: 'Задача №231',
                    urgency: 8,
                    head: 'Гр.Дзнеладзе',
                    members: 24,
                    performers: 16,
                    department: 'Произв-во',
                    status: 'work',
                    statusDesc: 'В работе',
                    statusColor: 'green',
                    project: 'Ам на большевиков',
                    projectGroup: 'Ароматный мир',
                    childCount: 2,
                },
            ]
        },
    ]

    export default {
        name: 'TodoBoard',

        components: {
            Draggable,
            TodoList,
            AddEditModal
        },

        methods: {
            addTask() {
                console.log('task')
                this.isAddEditModalOpened = true
            },

            editTask() {
                console.log('task edit'),
                this.isAddEditModalOpened = true
            },
            //---         
            deleteList (e) {
                let listIndex = null

                this.todoLists.find((list, i) => {
                        if(list.id === e) {
                            listIndex = i
                        }
                    }
                )
                this.todoLists.splice(listIndex, 1)
            },

            deleteCard(data) {
                let cardIndex = null 
                
                this.notes.find(list => list.id === data.listID).cards.find((card, i) => {
                    if(card.id === data.cardID) {
                        cardIndex = i
                    }
                })

                this.notes.find(list => list.id === data.listID).cards.splice(cardIndex, 1)
            }
        },

        data() {
            return {
                todoLists: data,
                isAddEditModalOpened: false,

                notes: [
                    {
                        id: 'list-4',
                        title: 'Заметки',
                        cards: [
                            {
                                id: '0',
                                title: 'Позвонить Грише',
                                description:'Узнать что со здоровьем'
                            },
                            {
                                id: '111',
                                title: 'Решить где проводим корпоратив',
                                description: 'Наверно все таки в турции',
                                duedate: '23.9.2019'
                            }
                        ]
                    },
                ]
            }
        }
    }
</script>