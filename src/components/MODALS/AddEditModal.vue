<template>
    <q-dialog v-model="this.isOpen" persistent full-width position="bottom">
        <q-card >
            <div class="bg-primary q-pa-sm q-py-md text-white">  
                <span class="text-h5">
                    Новый пользователь
                </span>
            </div> 

            <div class="q-pa-sm">
                <q-form
                    @submit="onSubmit"
                >
                    <q-input
                        v-model="userData.login"
                        :label="!this.userData.login ? 'User_' + this.currentOrdinalNumber : 'Login:'"
                        hint="LogIn"
                    />

                    <q-input 
                        v-model="userData.password" 
                        :type="isPwdVisible ? 'text' : 'password'" 
                        hint="Пароль: *"
                        :rules="[
                            val => !!val || '* Поле обязательно для заполнения',
                            val => val.length > 5 || '* Пароль должен быть больше пяти символов'
                        ]"
                        lazy-rules
                    >
                        <template v-slot:append>
                        <q-icon
                            :name="isPwdVisible ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwdVisible = !isPwdVisible"
                        />
                        </template>
                    </q-input>

                    <q-input 
                        v-model="userData.confirmPassword" 
                        :type="isPwdVisible ? 'text' : 'password'" 
                        hint="Подтверждение пароля: *"
                        :rules="[
                            val => !!val || 'Поле не может быть пустым',
                            val => val === this.userData.password || '* Пароли не совпадают'
                        ]"
                        lazy-rules
                    >
                        <template v-slot:append>
                        <q-icon
                            :name="isPwdVisible ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwdVisible = !isPwdVisible"
                        />
                        </template>
                    </q-input>

                    <q-input
                        v-model="userData.name"
                        hint="Имя: *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
                    />

                    <q-input
                        v-model="userData.surname"
                        hint="Фамилия: *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
                    />

                    <q-select 
                        v-model="userData.roles" 
                        multiple
                        :options="['Админ', 'Пользователь', 'Гость']" 
                        hint="Роль: *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
                    />

                    <q-input
                        v-model="userData.email"
                        hint="E-mail:"
                    />

                    <q-input
                        v-model="userData.phone"
                        hint="Телефон:"
                        label="+7(###)###-##-##"
                        mask="+7(###)###-##-##"
                    />

                    <q-card-actions align="right" class="q-mt-auto">
                        <q-btn flat label="Отмена" color="primary"  @click="onReset()"  />
                        <q-btn flat label="Создать" color="primary" type="submit" />
                    </q-card-actions>
                </q-form>
            </div>
        </q-card>
    </q-dialog>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'AddModal',

        props: {
            type:       { type: String },
            isOpened:   { type: Boolean }
        },

        computed: {
            ...mapGetters('user', ['currentOrdinalNumber']),
        },

        mounted() {
            this.fillData
        },

        data() {
            return {
                isPwdVisible: false,
                isOpen: this.$props.isOpened,

                userData: {
                    login: '',
                    password: '',
                    confirmPassword: '',
                    name: '',
                    surname: '',
                    phone: '',
                    email: '',
                    roles: []
                }
            }
        },

        methods: {
            refreshData() {
                this.userData = {
                    login: '',
                    password: '',
                    confirmPassword: '',
                    name: '',
                    surname: '',
                    phone: '',
                    email: '',
                    roles: []
                }
            },

            onSubmit() {
                this.refreshData()
                this.$emit('saveData', this.userData)
            },

            onReset() {
                this.refreshData()
                this.$emit('closeModal')
            },            
        },      

        watch: {
            isOpened(newVal, oldVal) {
                newVal === true ? this.isOpen = true : this.isOpen = false
            }
        }
    }
</script>