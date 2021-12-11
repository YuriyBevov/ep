<template>
    <div>
        <q-card @click="openCard = true" class="q-mb-sm">
            <q-card-section>
                <div class="text-body2">{{ data.title }}</div>
        
                <div class="row items-center text-caption text-grey-7 q-pt-xs" v-if="data.duedate">
                    <q-icon class="q-mr-xs" name="timer" />
                    <span>{{ data.duedate }}</span>
                </div>
            </q-card-section>
        </q-card>
    
        <q-dialog v-model="openCard">
            <TodoCardModal :data="data" @delete-card="deleteCard"/>
        </q-dialog>
    </div>
</template>
  
<script>
    import TodoCardModal from 'src/components/ToDo/TodoCardModal'
    
    export default {
        name: 'TodoCard',

        props: { data: { type: Object }},

        components: {
            TodoCardModal
        },

        data () {
            return {
                openCard: false
            }
        },

        methods: {
          deleteCard(cardID) {
            this.$emit('delete-card', cardID)
          }
        }
    }
</script>

<style>
</style>