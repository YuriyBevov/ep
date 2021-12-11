<template>
    <q-card class="no-shadow bg-indigo-1" style="max-width: 380px">
        <q-card-section>
            <div class="row items-center no-wrap">

                <div class="col">
                    <div
                        @click="editListTitle = true"
                        class="text-subtitle1 text-weight-medium text-grey-10"
                        v-if="!editListTitle"
                    >
                        {{ data.title }}
                    </div>

                    <!-- Edit list title -->
                    <q-form @reset="cancelNewTitle" @submit="saveListTitle" v-else>

                        <div class="row items-center no-wrap">
                            <div class="col q-mr-sm">
                                <q-input autofocus dense outlined v-model="newTitle" />
                            </div>

                            <div class="col-auto">
                                <q-btn color="primary" dense flat icon="close" type="reset" />
                                <q-btn color="primary" dense flat icon="done" type="submit" />
                            </div>
                        </div>

                    </q-form>
                </div>

                <!-- List actions -->
                <div class="col-auto" v-if="!editListTitle">
                    <q-btn color="grey-7" dense flat icon="more_horiz">
                        <q-menu auto-close>
                            <q-list>
                                <q-item clickable>
                                    <q-item-section @click="addNewCard(data)">Создать карточку</q-item-section>
                                </q-item>

                                <q-separator />

                                <q-item clickable>
                                    <q-item-section @click="deleteList(data)">Удалить список</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-btn>
                </div>
            </div>
        </q-card-section>

        <!-- Cards -->
        <q-card-section>

            <draggable group="cards">
                <TodoCard :data="card" :key="card.id" v-for="card in data.cards" @delete-card="deleteCard"/>
            </draggable>

            <span class="flex justify-center q-mt-md">
                <q-btn @click="addNewCard(data)" color="primary" dense flat icon="add" />
            </span>

        </q-card-section>
    </q-card>
</template>
  
<script>
    import draggable from 'vuedraggable'
    import TodoCard from 'src/components/ToDo/TodoCard.vue'
      
    export default {
        name: 'TodoList',

        props: { data: { type: Object }},

        components: {
            draggable,
            TodoCard
        },
        data () {
            return {
                editListTitle: false,
                newTitle: this.data.title
            }
        },
        methods: {
            saveListTitle () {
                this.data.title = this.newTitle
                this.editListTitle = false
            },

            cancelNewTitle () {
                this.newTitle = this.data.title
                this.editListTitle = false
            },

            addNewCard (list) {
                list.cards.push({
                    id: list.cards.length,
                    date: new Date().toLocaleDateString('fi-FI'),
                    title: 'Заметка#' + Math.floor(Math.random() * 100),
                    description: 'Без описания...'
                })
            },

            deleteList () {
                this.$emit('delete-list', this.data.id)
            },

            deleteCard (cardID) {
              this.$emit('delete-card', {
                listID: this.$props.data.id,
                cardID
              })
            }
        }
    }
</script>
  
<style scoped>
</style>