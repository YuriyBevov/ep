<template>
    <q-dialog v-model="isOpened" persistent>
        <q-card>
            <q-card-section class="row items-center">
                <span class="q-ml-sm">{{this.$props.modalText}}</span>
            </q-card-section>
    
            <q-card-actions align="right">
                <q-btn 
                    flat 
                    label="Ок" 
                    color="primary"
                    @click="resetModalState()"
                    v-close-popup 
                />
            </q-card-actions>
        </q-card>

    </q-dialog>
</template>

<script>
    import { mapActions } from "vuex"

    export default {
        props: {
            status  : {type: Boolean},
            modalText : {type : String},
            serverAnswerStatus : {type : Number}
        },

        data() {
            return {
                isOpened: false,
                text: ''
            }
        },

        methods: {
            ...mapActions('common', ['SET_SERVER_ANSWER_MODAL']),
            resetModalState() {
                this.SET_SERVER_ANSWER_MODAL({
                    msg: '',
                    isOpened: false
                })
            }
        },

        watch: {
            status: function(newVal, oldVal) {
                this.isOpened = newVal
            },

            modalText: function(newVal, oldVal) {
                this.text = newVal
            }
        }
    }
</script>