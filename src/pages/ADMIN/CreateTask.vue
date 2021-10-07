<!-- Перемещено в ADMIN-->

<template>

    <!--

        1) название задачи+ (валидация на уникальность, на заполненность+)
        2) описание задачи+
        3) материалы(фото) + подпись к ним (пока -)
        4) отв лицо (если его нет => задача открытая)+
        5) исполнители(пока просто протыкать, в дальнейшем по отделам)+
        6) в какой отдел направлен(в дальнейшем => при выборе отдела выбераются все участники, как исполнители)
        7) приоритет+
        8) добавить задачу в проект+
        9) участники задачи+
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

            <q-btn @click="isMemberSelectionOpened = !isMemberSelectionOpened">Выбор состава задачи</q-btn>

            <q-dialog v-model="isMemberSelectionOpened" transition-show="fade" transition-hide="fade" full-width>
                <q-card style="height: 50vh; " class="flex column no-wrap q-pa-lg" >
                    <!-- <UserSelectionModal
                        :users="this.userList"
                        :departments="this.departmentList"
                        @chooseResult="createTaskMembersList"
                    /> -->
                    <UserSelection
                        :type="'task_create'"
                        :users="this.userList"
                        @memberList="fillMemberList"
                    />
                </q-card>
            </q-dialog>

            <div v-if="this.memberList.length">
                <q-list bordered>
                    <q-item
                        v-for="(member, i) of this.memberList"
                        :key="'member_i' + i"
                    >
                        {{member.fullName}} ( {{member.isHead ? 'Рук.' : null }} {{member.isMaster ? 'Отв.' : null }} {{ member.isPerformer ? 'Исп.' : null }} {{ member.isMember ? 'Уч-к.' : null }} )
                    </q-item>
                </q-list>
            </div>

            <!--убрать в компонент выбора даты и времени-->
            <q-input filled v-model="expDate" label="Срок сдачи:">
                <template v-slot:prepend>
                    <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-date v-model="expDate" mask="YYYY-MM-DD HH:mm">
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
                        <q-time v-model="expDate" mask="YYYY-MM-DD HH:mm" format24h>
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
    import { mapGetters, mapActions } from 'vuex'
    import UserSelection from 'src/components/COMMON/UserSelection'

    export default {
        components: {
            UserSelection
        },

        data () {
            return {
                title: 1,
                description: 'Без описания',
                members: null,
                performers: null,
                master: null,
                projectMember: 'Без привязки к проекту',
                // projectOptions: ['Нет', 'Ам', 'Аптеки'],
                priority: 0,
                expDate: 'Не выбрано',

                submit: true,
                isMemberSelectionOpened: false,
                memberList: []
            }
        },

        methods: {
            ...mapActions('task', ['CREATE_TASK']),

            fillMemberList(members) {
                this.memberList = members
                this.isMemberSelectionOpened = false
            },

            getProjectsName() {
                let projects = []
                
                this.projectList.forEach(pr => {
                    projects.push(pr.title)                    
                })

                return projects
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
                    let members = []
                    let performers = []
                    let master = null

                    this.memberList.forEach(member => {
                        member.isMember ?
                        members.push({ _id: member._id }) : null
                        member.isPerformer ?
                        performers.push({ _id: member._id }) : null
                        member.isMaster ?
                        master = { _id: member._id } : null
                        
                    })

                    this.CREATE_TASK({
                        title: this.title,
                        description: this.description,
                        members: members.length ? members : null,
                        performers: performers.length ? performers : null,
                        master: master !== null ? master : null,
                        projectMember: this.projectMember === 'Без привязки к проекту' ? null : this.projectMember,
                        priority: parseInt(this.priority, 10),
                        expDate: this.expDate === 'Не выбрано'? null : this.expDate,
                        created: new Date(),
                        createdBy: { _id: this.activeUser._id, fullName: this.activeUser.fullName }
                    })
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
            ...mapGetters('department', ['departmentList']),
        }
    }
</script>
