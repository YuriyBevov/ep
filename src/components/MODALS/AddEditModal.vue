<template>
    <q-dialog v-model="this.isOpen" persistent full-width position="bottom" class="q-pa-none">
        <q-card class="q-pa-none" style="width: 100%; max-width: 75vw; min-height: 75vh;">
            <div class="sticky-header bg-primary text-white d-flex items-center row q-mt-auto q-pa-sm" color="primary">
                <span class="q-mr-auto">
                    {{
                        this.$props.dataType === 'user' && this.$props.actionType === 'add'             ? 'Добавить сотрудника'           :
                        this.$props.dataType === 'user' && this.$props.actionType === 'edit'            ? 'Редактировать сотрудника'      :

                        this.$props.dataType === 'task' && this.$props.actionType === 'add'             ? 'Создать задачу'                :
                        this.$props.dataType === 'task' && this.$props.actionType === 'edit'            ? 'Редактировать задачу'          :

                        this.$props.dataType === 'project' && this.$props.actionType === 'add'          ? 'Создать проект'                :
                        this.$props.dataType === 'project' && this.$props.actionType === 'edit'         ? 'Редактировать проект'          :

                        this.$props.dataType === 'project-group' && this.$props.actionType === 'add'    ? 'Создать группу проектов'       :
                        this.$props.dataType === 'project-group' && this.$props.actionType === 'edit'   ? 'Редактировать группу проектов' : null
                    }}
                </span>

                <q-btn flat label="Закрыть" color="white"  @click="$emit('closeModal')"/>
            </div>

            <div class="q-pa-sm" v-if="this.$props.dataType === 'user' ">
                user{{this.$props}}
            </div>

            <div class="q-pa-sm" v-if="this.$props.dataType === 'task' ">
                task{{this.$props}}
            </div>

            <div class="q-pa-sm" v-if="this.$props.dataType === 'project' ">
                project{{this.$props}}
            </div>

            <div class="q-pa-sm" v-if="this.$props.dataType === 'project-group' ">
                project-group{{this.$props}}
            </div>
        </q-card>
    </q-dialog>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'AddEditModal',

        props: {
            data:   { type: Object  },
            actionType: { type: String },
            dataType: { type: String },
            isOpened:   { type: Boolean },
        },

        data() {
            return {
                modalData: (typeof (this.$props.data !== 'undefined') ? this.$props.data : {} ),
                isOpen: this.$props.isOpened,
            }
        },

        methods: {
            
        },

        watch: {
            isOpened(newVal, oldVal) {
                newVal != oldVal ? this.isOpen = !this.isOpen : null
            }
        },

        computed: {
            ...mapGetters('user', ['currentOrdinalNumber']),
        },

        components: {
            // DataItem
        }
    }
</script>