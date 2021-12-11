<template>
    <div class="">
        <div class="flex items-center q-mb-md">
            <div class="flex column q-mr-auto">
                <span class="text-h4 q-mr-md q-mb-sm">
                    {{
                        this.$props.dataType === 'user-info'         ? user.fullName    :
                        this.$props.dataType === 'task-info'         ? 'Задача №123423' :
                        this.$props.dataType === 'project-info'      ? 'Проект №123232' :
                        this.$props.dataType === 'projectGroup-info' ? 'Группа проектов: "Ароматный мир"' : null
                    }}
                </span>
                <span class="text-h6" v-if="this.$props.dataType === 'user-info'">Статус: Заблокирован</span>
            </div>

            <div v-if="this.$props.dataType === 'user-info'">
                <q-btn flat round color="primary" icon="settings"/>
                <q-btn flat round color="warning" icon="block" />
                <q-btn flat round color="red" icon="delete" class="q-mr-md" />
            </div>
        </div>

        <form v-if="this.$props.dataType === 'user-info'">
            <div class="form-fieldset">
                <span class="form-name q-mr-md">Имя:</span>
                <q-input class="form-field" outlined :label="this.user.name" />
            </div>

            <div class="form-fieldset">
                <span class="form-name q-mr-md">Фамилия:</span> 
                <q-input class="form-field" outlined :label="this.user.surname" />
            </div>

            <div class="form-fieldset">
                <span class="form-name q-mr-md">Отдел:</span>
                <q-select class="form-field" outlined v-model="department" :options="departmentOptions" />
            </div>

            <div class="form-fieldset">
                <span class="form-name q-mr-md">Должность:</span>
                <q-select class="form-field" outlined v-model="departmentRole" :options="departmentRoleOptions" />
            </div>

            <div class="form-fieldset">
                <span class="form-name q-mr-md">Телефон:</span> 
                <q-input class="form-field" outlined :label="this.user.phone" mask="+7(###) ### - ####"/>
            </div>

            <div class="form-fieldset">
                <span class="form-name q-mr-md">Почта:</span> 
                <q-input class="form-field" outlined :label="this.user.email" />
            </div>

            <div class="form-fieldset">
                <span class="form-name q-mr-md">Активных задач:</span> 
                <div class="form-field flex justify-end items-center">
                    <span class="q-mr-md">16</span>
                    <q-btn flat round color="green" icon="keyboard_tab" @click="emitActiveTab('task')"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'ItemInfo',

        data() {
            return {
                department: 'Производство',

                departmentOptions: [
                    'Производство', 'Офис', 'Менеджерский отдел'
                ],

                departmentRole: 'Руководитель',

                departmentRoleOptions: [
                    'Руководитель', 'Монтажник', 'Сборщик рекламы', 'Пайщик'
                ],

                user: (typeof ( this.$props.data !== 'undefined') && this.$props.dataType === 'user-info' ? this.$props.data : {} )
            }
        },

        methods: {
            emitActiveTab(tab) {
                this.$emit('changeActiveTab', tab)
            }
        },
        props: {
            dataType:   { type: String },
            data:       { type: Object }
        }
    }
</script>

<style lang="scss" scoped>
    .form-fieldset {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        width: 100%;
        max-width: 320px;
    }
    .form-name {
        display: block;
        width: 100%;
        max-width: 120px;
    }
    .form-field {
        
        width: 100%;
        max-width: 200px;
    }
</style>