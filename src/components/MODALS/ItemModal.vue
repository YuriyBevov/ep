<template>
    <q-dialog v-model="this.isOpen" persistent class="q-pa-none">
        <q-card class="q-pa-none" style="width: 100%; max-width: 75vw;">
            <div class="sticky-header bg-primary text-white d-flex items-center row q-mt-auto q-pa-sm" color="primary">
                <span class="q-mr-auto">
                    {{
                        this.$props.dataType === 'user'          ? 'Данные сотрудника'        :
                        this.$props.dataType === 'task'          ? 'Данные задачи'           :
                        this.$props.dataType === 'project'       ? 'Данные проекта'           :
                        this.$props.dataType === 'project-group' ? 'Данные группы проектов'  : null
                    }}
                </span>

                <q-btn flat label="Закрыть" color="white"  @click="$emit('closeModal')"/>
            </div>

            <div class="q-pa-sm">
                <DataItem 
                    :dataType="this.$props.dataType"
                    :data="this.$props.data"
                    :isInfoCardOpened="true"
                />
            </div>
        </q-card>
    </q-dialog>
</template>

<script>
    import DataItem from 'src/components/DataItem'

    export default {
        name: 'ItemModal',

        props: {
            data:   { type: Object  },
            dataType: { type: String },
            isOpened:   { type: Boolean },
        },

        data() {
            return {
                isOpen: this.$props.isOpened,
            }
        },

        watch: {
            isOpened(newVal, oldVal) {
                newVal != oldVal ? this.isOpen = !this.isOpen : null
            }
        },

        components: {
            DataItem
        }
    }
</script>