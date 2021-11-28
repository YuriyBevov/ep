<template>
    <q-dialog v-model="this.isOpen" maximized>
        <q-card class="d-flex column no-wrap">
            <div class="bg-primary q-pa-sm q-py-md text-white">  
                <span class="text-h5">
                    {{this.$props.type === 'addUser' ? 'Новый пользователь' : this.$props.type === 'editUser' ? 'Редактирование пользователя' : null}}
                </span>
            </div> 
            <q-form
                @submit="onSubmit()"
                class="d-flex column col-grow"
            >
            <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                narrow-indicator
                align="left"
            >
                <q-tab name="common" label="Общие" />
                <q-tab name="permits" label="Разрешения" />
            </q-tabs>

            <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
            >
                <q-tab-panel name="common">
                    
                    <q-input
                        v-model="user.login"
                        :label="this.user.login !== ''? 'User_' + this.currentOrdinalNumber : 'Login:'"
                        label="LogIn"
                        style="margin-bottom: 20px;"
                    />

                    <q-input
                        v-if="this.$props.type === 'addUser'"
                        v-model="user.password" 
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
                        v-if="this.$props.type === 'addUser'"
                        v-model="user.confirmPassword" 
                        :type="isPwdVisible ? 'text' : 'password'" 
                        label="Подтверждение пароля: *"
                        :rules="[
                            val => !!val || 'Поле не может быть пустым',
                            val => val === this.user.password || '* Пароли не совпадают'
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
                        v-model="user.name"
                        label="Имя: *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
                    />

                    <q-input
                        v-model="user.surname"
                        label="Фамилия: *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
                    />

                    <q-select 
                        v-model="user.roles" 
                        multiple
                        :options="['Админ', 'Пользователь', 'Гость']" 
                        label="Роль: *"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
                    />

                    <q-select 
                        v-model="user.department" 
                        
                        :options="['Производство', 'Офис']" 
                        label="Отдел: "
                        style="margin-bottom: 20px;"
                    />

                    <q-select 
                        v-model="user.position" 
                        
                        :options="['Руководитель', 'Рабочий']" 
                        label="Должность: "
                        style="margin-bottom: 20px;"
                    />

                    <q-input
                        v-model="user.email"
                        label="E-mail:"
                        style="margin-bottom: 20px;"
                    />

                    <q-input
                        v-model="user.phone"
                        label="+7(###)###-##-##"
                        mask="+7(###)###-##-##"
                        style="margin-bottom: 20px;"
                    />

                    
                    </q-tab-panel>

                    <q-tab-panel name="permits" class="q-pa-sm">

                        <div class="d-flex row">
                            <div class="col-6 q-pr-sm">

                                <q-input
                                    outlined
                                    type="search" 
                                    placeholder="Поиск по разрешениям"
                                    
                                />

                                <q-select
                                    square
                                    label="Типы разрещений"
                                    :options="['Все', 'Задачи', 'Проекты']"
                                    class="q-mb-sm"
                                />

                                <div class="scroll-container d-flex column no-wrap " style="">

                                    <q-checkbox>
                                        <span>Создание задач</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        <span>Ред-е задач</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        <span>Удаление задач</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        <span>Делегирование задач</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        <span>Смена уч-в задачи</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        <span>Смена статуса задачи</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        <span>Выбор исп-й в задаче</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        <span>Выбор рук-я в задаче</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        <span>Создание проектов</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        <span>Ред-е проектов</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        <span>Удаление проектов</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        <span>Создание групп проектов</span>
                                    </q-checkbox>
                                </div>
                            </div>

                            <div 
                                class="d-flex column col-6"
                            >
                                <q-input
                                    outlined
                                    type="search" 
                                    placeholder="Поиск по группам разрешений"
                                    class="q-mb-md"
                                />
    
                                <div class="scroll-container d-flex column no-wrap">
                                    <q-checkbox >
                                        <span >Группа разрешений 1</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 2
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 3
                                    </q-checkbox>
                                    <q-checkbox >
                                        <span>Группа разрешений 1</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 2
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 3
                                    </q-checkbox>
                                    <q-checkbox >
                                        <span>Группа разрешений 1</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 2
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 3
                                    </q-checkbox>
                                    <q-checkbox >
                                        <span>Группа разрешений 1</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 2
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 3
                                    </q-checkbox>
                                    <q-checkbox >
                                        <span>Группа разрешений 1</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 2
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 3
                                    </q-checkbox>
                                    <q-checkbox >
                                        <span>Группа разрешений 1</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 2
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 3
                                    </q-checkbox>
                                    <q-checkbox >
                                        <span>Группа разрешений 1</span>
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 2
                                    </q-checkbox>

                                    <q-checkbox>
                                        Группа разрешений 3
                                    </q-checkbox>
                                </div>
                            </div>
                        </div>
                    </q-tab-panel>
                </q-tab-panels>

                <q-card-actions align="right" class="q-mt-auto">
                    <q-btn flat label="Отмена" color="primary"  @click="$emit('closeModal')"/>
                    <q-btn flat label="Сохранить" color="primary"  type="submit"/>
                </q-card-actions>
            </q-form>
        </q-card>
    </q-dialog>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        props: {
            type  :   { type: String  }, 
            isOpen:   { type: Boolean },
            userData: { type: Object  }
        },

        computed: {
            ...mapGetters('user', ['currentOrdinalNumber']),
        },

        data() {
            return {
                isPwdVisible: false,
                tab: 'common',
                user: {}
            }
        },

        methods: {
            fillUserData() {
                if(typeof (this.$props.userData) === 'undefined') {
                    this.user = {}
                } else {
                    this.user = Object.assign(this.$props.userData)
                }
            },

            onSubmit() {
                this.$emit('saveData', this.user)
            }
        },

        mounted() {
            this.fillUserData()
        }
    }
</script>

<style lang="scss">
    
</style>