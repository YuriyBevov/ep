<template>
    <q-card class="no-shadow bg-indigo-1" style="max-width: 380px">
        <q-card-section>
            <div class="text-subtitle1 text-weight-medium text-grey-10">
                {{ data.title }}
            </div>
        </q-card-section>

        <!-- Cards -->
        <q-card-section>
            <draggable group="cards" v-if="this.$props.type === 'task'">
                <TodoCard :data="card" :status="data.type" :cardType="'task'" :key="card.id" v-for="card in data.cards" @delete-card="deleteCard" />
            </draggable>

            <TodoCard :data="card" :cardType="'note'" :key="card.id" v-for="card in data.cards" @delete-card="deleteCard" v-else/>

            <span class="flex justify-center q-mt-md">
                <q-btn color="grey-7" dense flat icon="add" @click="$props.type === 'note' ? addNewCard(data) : $emit('addNewTask')"/>
            </span>
        </q-card-section>
    </q-card>
</template>
  
<script>
    import draggable from 'vuedraggable'
    import TodoCard from 'src/components/ToDo/TodoCard.vue'
      
    export default {
        name: 'TodoList',
        props: { data: { type: Object }, type: { type: String }},

        components: {
            draggable,
            TodoCard
        },
        data () {
            return {
            }
        },
        methods: {
            addNewCard (list) {
                list.cards.push({
                    id: list.cards.length,
                    date: new Date().toLocaleDateString('fi-FI'),
                    title: 'Заметка#' + Math.floor(Math.random() * 100),
                    description: 'Без описания...'
                })
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