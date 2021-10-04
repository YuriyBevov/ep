<template>

    <!--

        1) название задачи+ (валидация на уникальность, на заполненность+)
        2) описание задачи+
        3) материалы(фото) + подпись к ним (пока -)
        4) отв лицо (если его нет => задача открытая)
        5) исполнители(пока просто протыкать, в дальнейшем по отделам)
        6) в какой отдел направлен(в дальнейшем => при выборе отдела выбераются все участники, как исполнители)
        7) приоритет+
        8) добавить задачу в проект+
        9) участники задачи
        10) срок и дата выполнения+
        
    -->
    <div class="create-task q-pa-md" style="max-width: 400px">

        <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
        >
            <q-input
                filled
                v-model="title"
                label="Название задачи: *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
            />

            <q-input
                filled
                v-model="description"
                label="Описание:"
            />

            <q-select
                filled 
                v-model="members"
                multiple
                :options="getUsersName()" 
                label="Выбрать участников:"
            />

            <q-select
                filled 
                v-model="performers"
                multiple
                :options="getUsersName()" 
                label="Выбрать исполнителей:"
            />

            <q-select
                filled 
                v-model="master" 
                :options="getUsersName()" 
                label="Выбрать отв. лицо:"
            />

            <q-select 
                filled 
                v-model="projectMember" 
                :options="getProjectsName()" 
                label="Добавить в проект:" 
            />

            <q-input
                filled
                type="number"
                v-model="priority"
                label="Приоритет:"
                lazy-rules
                min="0"
                max="10"
                :rules="[
                    val => val < 11 || 'Приоритет варьируется от 0 до 10, по умолчанию 0'
                ]"
            />

            <q-input filled v-model="date" label="Срок сдачи:">
                <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-date v-model="date" mask="YYYY-MM-DD HH:mm">
                        <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                        </q-date>
                    </q-popup-proxy>
                    </q-icon>
                </template>

                <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h>
                        <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                        </q-time>
                    </q-popup-proxy>
                    </q-icon>
                </template>
            </q-input>
  
            <q-toggle v-model="submit" label="Поставьте галочку, если уверены в правильности введенных данных" />

            <div>
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            </div>
        </q-form>

    </div>
</template>

<script>
    import { mapGetters, mapAtions } from 'vuex'
    
    export default {

        data () {
            return {
                title: null,
                description: 'Без описания',
                members: null,
                performers: null,
                master: null,
                projectMember: 'Нет',
                projectOptions: ['Нет', 'Ам', 'Аптеки'],
                priority: 0,
                date: 'Не выбрано',
                dating: new Date('2021-10-15 22:30'),

                submit: false
            }
        },

        methods: {
            getProjectsName() {
                let projects = []

                this.projectList.forEach(pr => {
                    projects.push(pr.title)                    
                })

                return projects
            },

            getUsersName() {
                let users = []

                this.userList.forEach(user => {
                    users.push(user.fullName)                    
                })

                return users
            },

            onSubmit() {
                if (this.submit !== true) {
                    this.$q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'Вы должны подтвердить правильность введенных данных !'
                    })
                } else {
                    console.log(this.data)

                }
            },

            onReset() {
                this.title = null
                this.description = null
                this.submit = false
            }
        },

        computed: {
            ...mapGetters('user', ['userList', 'activeUser']),
            ...mapGetters('project', ['projectList']),

            /*setCreator() {
                this.master = this.activeUser.fullName
            }*/
        }
    }
</script>
