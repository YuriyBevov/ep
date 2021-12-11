<template>
    <div class="">
        <Draggable class="row items-start q-gutter-md" v-model="todoLists">
            <TodoList :data="list" :key="list.id" @delete-list="deleteList" @delete-card="deleteCard" class="col" v-for="list in todoLists" />
        
            <q-card class="no-shadow bg-indigo-1 col-auto">
                <q-card-section>
                    <q-btn @click="showNew = true" color="primary" dense flat icon="add" v-if="!showNew" />
                    
                    <q-form @reset="cancelNewList" @submit="addNewList" v-else>
                        <div class="row items-center no-wrap">
                            <div class="col q-mr-sm">
                                <q-input autofocus dense outlined v-model="newListTitle" />
                            </div>
    
                            <div class="col-auto">
                                <q-btn color="primary" dense flat icon="close" type="reset" />
                                <q-btn color="primary" dense flat icon="done" type="submit" />
                            </div>
                        </div>
                    </q-form>
                </q-card-section>
            </q-card>
        </Draggable>
    </div>
</template>

<script>
    import Draggable from 'vuedraggable'
    import TodoList from 'src/components/toDo/TodoList.vue'

    let data = [
        {
        id: 'list-1',
        title: 'Не забыть:',
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

    export default {
        name: 'TodoBoard',

        components: {
            Draggable,
            TodoList
        },

        methods: {
            addNewList () {
                this.todoLists.push({
                    id: toString(this.todoLists.length),
                    title: this.newListTitle,
                    cards: []
                })

                this.showNew = false
                this.newListTitle = ''
            },
            
            cancelNewList () {
                this.newListTitle = ''
                setTimeout(() => {
                    this.showNew = false
                }, 100)
            },

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
                
                this.todoLists.find(list => list.id === data.listID).cards.find((card, i) => {
                    if(card.id === data.cardID) {
                        cardIndex = i
                    }
                })

                this.todoLists.find(list => list.id === data.listID).cards.splice(cardIndex, 1)
            }
        },

        data() {
            return {
                showNew: false,
                newListTitle: '',
                todoLists: data
            }
        }
    }
</script>