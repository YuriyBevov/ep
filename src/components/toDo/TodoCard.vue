<template>
    <div>
        <div class="" v-if="this.$props.cardType === 'note'">

            <q-card @click="openCard = true" class="note-card q-mb-sm">
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
        
        <div v-else>
            <q-card 
                class="task-card q-mb-sm" 
                :style="status === 'expired' ? 'border: 2px solid red' : status === 'actual' ? 'border: 2px solid yellow' : status === 'comming' ? 'border: 2px solid green' : null"
                @click="openTask()"
            >
                <q-card-section>
                    12:00 Монтаж ул.Крыленко
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
  
<script>
    import TodoCardModal from 'src/components/ToDo/TodoCardModal'
    
    export default {
        name: 'TodoCard',

        props: { data: { type: Object }, cardType: { type: String }, status: { type: String}},

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
          },

          openTask() {
              console.log('openTask')
              // открыть задачу для редактирования
          }
               
        }
    }
</script>

<style style="scss">
    .task-card {
        
    }

    .note-card {

    }
</style>