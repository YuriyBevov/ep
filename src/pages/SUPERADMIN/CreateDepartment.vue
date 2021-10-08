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
                label="Название отдела: *"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Поле не может быть пустым']"
            />

            <q-btn @click="isMemberSelectionOpened = !isMemberSelectionOpened">Выбрать состав отдела</q-btn>

            <q-dialog v-model="isMemberSelectionOpened" transition-show="fade" transition-hide="fade" full-width>
                <q-card style="height: 50vh; " class="flex column no-wrap q-pa-lg" >
                    <UserSelection
                        :type="'department_create'"
                        :users="this.userList"
                        @memberList="fillMemberList"
                    />
                </q-card>
            </q-dialog>
            
            <div class="" v-if="this.memberList.length">
                <q-list bordered>
                    <q-item
                        v-for="(member, i) of this.memberList"
                        :key="'member_i' + i"
                    >
                        {{member.fullName}} ( {{member.isHead ? 'Рук.' : null }} {{member.isMaster ? 'Отв.' : null }} {{ member.isPerformer ? 'Исп.' : null }} {{ member.isMember ? 'Уч-к.' : null }} )
                    </q-item>
                </q-list>
            </div>
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
        name: 'CreteDepartment',

        components: {
            UserSelection
        },

        data() {
            return {
                title: '',

                isMemberSelectionOpened: false,
                submit: false,

                memberList: []
            }
        },

        computed: {
            ...mapGetters('user', ['userList']),
        },

        methods: {
            ...mapActions('department', ['CREATE_DEPARTMENT']),

            fillMemberList(members) {
                this.memberList = members
                this.isMemberSelectionOpened = false
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
                    let heads = []
                    let members = []

                    this.memberList.forEach(member => {
                        member.isMember ?
                        members.push({ _id: member._id }) : null
                        member.isHead ?
                        heads.push({ _id: member._id }) : null
                    })

                    this.CREATE_DEPARTMENT({
                        title: this.title,
                        members: members.length ? members : null,
                        heads: heads.length ? heads : null
                    })

                    this.onReset()
                }
            },

            onReset() {
                this.title = null
                this.submit = false
                this.memberList = []
            }
        }
    }
</script>
