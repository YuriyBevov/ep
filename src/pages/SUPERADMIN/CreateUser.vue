<template>
    <div class="create-task q-pa-md" style="max-width: 400px">

        <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
        >
            <q-input
                filled
                v-model="login"
                :label="!this.login ? 'Login: user_' + this.currentOrdinalNumber : 'Login:'"
            />

            <q-input 
                v-model="password" 
                :type="isPwdVisible ? 'text' : 'password'" 
                label="Пароль: *"
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
                v-model="confirmPassword" 
                :type="isPwdVisible ? 'text' : 'password'" 
                label="Подтверждение пароля: *"
                :rules="[
                    val => !!val || 'Поле не может быть пустым',
                    val => val === this.password || '* Пароли не совпадают'
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
                filled
                v-model="name"
                label="Имя: *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
            />

            <q-input
                filled
                v-model="surname"
                label="Фамилия: *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
            />

            <q-input
                filled
                v-model="email"
                label="E-mail: *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
            />

            <q-input
                filled
                v-model="phone"
                label="Телефон: *"
                mask="+7(###)###-##-##"
                lazy-rules
                :rules="[ 
                    val => val && val.length > 0 || 'Поле не может быть пустым',
                    val => val.length > 15 || '* Проверьте правильность указаного номера' 
                ]"
            />

            <q-select 
                filled 
                v-model="department" 
                :options="getDepartments()" 
                label="Отдел: *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
            />

            <q-checkbox
                v-if="department !== 'Без отдела'"
                filled
                v-model="isDepartmentHead"
                label="Назначить руководителем отдела"
            />

            <!--Брать динамически !-->
            <q-select 
                filled 
                v-model="roles" 
                multiple
                :options="['СуперАдмин', 'Админ', 'Пользователь', 'Гость']" 
                label="Роль: *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
            />
            
            <div>
                <q-btn type="submit" label="Создать" class="q-mr-sm"/>
                <q-btn type="reset" label="Очистить"/>
            </div>
        </q-form>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { setUserRoles } from 'src/functions/setUserRoles'

    export default {
        name: "CreateUser",

        data() {
            return {
                isPwdVisible: false,

                login: '',
                password: '000000',
                confirmPassword: '000000',
                name: 'Юрий',
                surname: 'Бевов',
                department: 'Без отдела',
                isDepartmentHead: false,
                email: 'test',
                phone: '123456789',
                roles: []
            }
        },

        computed: {
            ...mapGetters('user', ['currentOrdinalNumber']),
            ...mapGetters('department', ['departmentList'])
        },

        methods: {
            ...mapActions('user', ['CREATE_USER']),

            getDepartments() {
                let deps = []
                
                this.departmentList.forEach(dep => {
                    deps.push(dep.title)                    
                })

                return ['Без отдела', ...deps]
            },

            onSubmit() {
                let roles = setUserRoles(this.roles)

                this.CREATE_USER({
                    ordinalNumber: this.currentOrdinalNumber,
                    login: this.login.length ? this.login : 'user_' + this.currentOrdinalNumber,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                    name: this.name,
                    surname: this.surname,
                    fullName: this.name + ' ' + this.surname,
                    department: this.department,
                    isDepartmentHead: this.isDepartmentHead,
                    email: this.email,
                    phone: this.phone,
                    roles,
                    created: new Date()
                })
            },

            onReset() {
                this.login = ''
                this.password = ''
                this.confirmPassword = '',
                this.name =  ''
                this.surname = ''
                this.department = ''
                this.email = ''
                this.phone = ''
                this.roles = []
            }
        }
    }
</script>