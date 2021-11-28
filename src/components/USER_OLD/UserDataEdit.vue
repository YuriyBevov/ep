<template>
    <div v-if="this.userData">
        <div class="flex items-center q-mb-lg">
            <div class="q-mr-lg">
                <q-toggle
                    :disable="this.isDataSaved ? false : true"
                    v-model="isUserEditing"
                    color="green"
                />
                <span>Открыть для редактирования</span>
            </div>
            <q-btn label="удалить" color="negative" @click="deleteUser()"/>
        </div>

        <div class="q-mb-lg">
            <q-input
                @input="setChangeState()"
                filled
                v-model="userData.login"
                hint="LogIn"
                :disable="this.isUserEditing ? false : true"
                class="q-mb-md"
            />

            <q-input
                @input="setChangeState()"
                filled
                v-model="userData.fullName"
                hint="Имя пользователя"
                disable
                v-show="!this.isUserEditing"
                class="q-mb-md"
            />

            <q-input
                @input="setChangeState()"
                filled
                v-model="userData.name"
                hint="Имя"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
                v-show="this.isUserEditing"
                class="q-mb-md"
            />               

            <q-input
                @input="setChangeState()"
                filled
                v-model="userData.surname"
                hint="Фамилия"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
                v-show="this.isUserEditing"
                class="q-mb-md"
            />

            <q-input
                @input="setChangeState()"
                filled
                v-model="userData.phone"
                hint="Телефон"
                :disable="this.isUserEditing ? false : true"
                mask="+7(###)###-##-##"
                lazy-rules
                :rules="[ 
                    val => val && val.length > 0 || 'Поле не может быть пустым',
                    val => val.length > 15 || '* Проверьте правильность указаного номера' 
                ]"
                class="q-mb-md"
            />

            <q-input
                @input="setChangeState()"
                filled
                v-model="userData.email"
                hint="E-mail"
                :disable="this.isUserEditing ? false : true"
                class="q-mb-md"
            />

            <q-input
                @input="setChangeState()"
                filled
                v-model="userData.roles"
                hint="Роль(и)"
                :disable="this.isUserEditing ? false : true"
                v-show="!this.isUserEditing"
                class="q-mb-md"
            />

            <q-select
                @input="setChangeState()"
                filled 
                v-model="userData.roles" 
                multiple
                :options="['СуперАдмин', 'Админ', 'Пользователь', 'Гость']" 
                hint="Роль(и)"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
                v-show="this.isUserEditing"
                class="q-mb-md"
            />

            <q-select
                @input="setChangeState()"  
                filled
                v-model="userData.department.title" 
                hint="Отдел"
                :options="getDepartments()"
                :disable="this.isUserEditing ? false : true"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
                class="q-mb-md"
            />

            <q-checkbox
                v-if="this.userData.department.title !== 'Без отдела'"
                @input="setChangeState()"
                :disable="this.isUserEditing ? false : true"
                filled
                v-model="userData.department.isHead"
                label="Руководитель отдела"
                class="q-mb-md"
            />
        </div>

        <div class="flex">
            <q-btn
                class="q-mr-sm"
                v-show="isFieldsDirty"
                label="Сохранить изменения" 
                color="positive" 
                @click="updateUser()"
            />

            <q-btn
                v-show="isFieldsDirty"
                label="Отмена"
                color="negative" 
                @click="resetChanges()"
            />
        </div>
    </div>
</template>

<script>
    import { translater } from 'src/functions/translater'

    export default {
        props: {
            user: { type: Object },
            departments: { type: Array }
        },

        data() {
            return {
                isFieldsDirty: false,
                isDataSaved: true,
                isUserEditing: false,
                userData: null,
            }
        },

        methods: {
            setUserData() {
                if(this.$props.user) {
                    // глубокая КОПИЯ объекта
                    this.userData = JSON.parse(JSON.stringify(this.$props.user))

                    let roles = []

                    this.userData.roles.forEach(role => {
                        console.log(role)
                        roles.push( translater(role) )
                    })

                    this.userData.roles = roles
                }
            },

            getDepartments() {
                let deps = []
                
                this.$props.departments.forEach(dep => {
                    deps.push(dep.title)                    
                })

                return ['Без отдела', ...deps]
            },

            setChangeState() {
                if(this.isDataSaved && !this.isFieldsDirty) {
                    this.isDataSaved = false
                    this.isFieldsDirty = true
                }
            },

            resetChanges() {
                this.setUserData()
                this.isDataSaved = true
                this.isFieldsDirty = false
                this.isUserEditing = false
            },

            deleteUser() {
                this.$emit('deleteUser', this.userData._id)
            },

            updateUser() {
                let roles = []

                this.userData.roles.forEach(role => {
                    roles.push( translater(role) )
                })

                this.userData.roles = roles

                if(this.userData.department.title === 'Без отдела') {
                    this.userData.department._id = null
                    this.userData.department.isHead = false
                } else {
                    this.userData.department._id = this.$props.departments.find(dep => dep.title === this.userData.department.title)._id
                }

                this.$emit('updateUser', this.userData)
            }
        },

        mounted() {
            this.setUserData()
        },

        watch: {
            user: function() {
                this.setUserData()
            }
        }
    }
</script>