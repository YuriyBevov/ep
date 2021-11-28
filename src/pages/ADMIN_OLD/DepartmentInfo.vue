<template>
    <div class="department-info">
        <div class="" v-if="this.currentDepartment">
            <q-list bordered separator class="q-mb-md">
                <q-item clickable v-ripple >
                    <q-item-section>
                    <q-item-label overline>Название:</q-item-label>
                    <q-item-label class="text-orange-9">{{this.currentDepartment.title}}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple >
                    <q-item-section>
                        <q-item-label overline>Руководители:</q-item-label>

                        <q-item-label>
                            <span
                                v-for="(head, i) of this.currentDepartment.heads"
                                :key="'head_i' + i"
                            >
                                {{head.fullName}} <span v-if="i !== currentDepartment.heads.length - 1">,</span>
                            </span>
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple >
                    <q-item-section>
                        <q-item-label overline>Состав:</q-item-label>
                        
                        <q-item-label>
                            <span 
                                v-for="(member, i) of this.currentDepartment.members"
                                :key="'member_i' + i"
                            > 
                                {{member.fullName}} <span v-if="i !== currentDepartment.members.length - 1">,</span>
                            </span>
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <!-- Не работает пока -->
                <q-item clickable v-ripple >
                    <div>
                        <ShortTaskCard
                            :title="'Текущие задачи'"
                            :emptyText="'Задач пока нет...'"
                            :color="'#1976D2'"
                            :tasks="this.currentDepartment.tasks ? this.currentDepartment.tasks : []"
                            @openTask="onClickOpenTask"
                        />
                    </div>
                </q-item>
            </q-list>

            <div>
                <q-btn label="Редактировать состав" color="secondary" class="q-mr-md" @click="isMemberSelectionOpened = true"/> 
                
                <q-btn label="Удалить отдел" color="negative" @click="deleteDepartment()"/>
            </div>

            <q-dialog v-model="isMemberSelectionOpened" transition-show="fade" transition-hide="fade" full-width>
                <q-card style="height: 50vh; " class="flex column no-wrap q-pa-lg" >
                    <UserSelection
                        :type="'department_update'"
                        :users="this.userList"
                        :department="this.currentDepartment.title"
                        @memberList="fillMemberList"
                    />
                </q-card>
            </q-dialog>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import ShortTaskCard from 'components/TASK/ShortTaskCard'
    import UserSelection from 'components/COMMON/UserSelection'

    export default {

        components: {
            ShortTaskCard,
            UserSelection
        },

        data() {
            return {
                currentDepartment: {},
                isMemberSelectionOpened: false,
            }
        },

        computed: {
            ...mapGetters('department', ['departmentList']),
            ...mapGetters('user', ['userList'])
        },

        methods: {
            ...mapActions('department', ['DELETE_DEPARTMENT', 'UPDATE_DEPARTMENT']),

            fillMemberList(members) {
                let memberList = []

                members.forEach(member => {
                    if (member.isMember && member.isHead) {
                        memberList.push({
                            _id: member._id,
                            isHead: true
                        })
                    }

                    else if (member.isMember) {
                        memberList.push({
                            _id: member._id,
                            isHead: false
                        })
                    }
                })

                let departmentData = {
                    _id: this.currentDepartment._id,
                    title: this.currentDepartment.title,
                    memberList
                }

                this.UPDATE_DEPARTMENT(departmentData)
                this.isMemberSelectionOpened = false
            },

            setDepartmentInfo() {
                this.departmentList ?
                this.currentDepartment = this.departmentList.find(dep => dep._id === this.$route.params.id) : null
            },

            onClickOpenTask(id) {
                this.$router.push('/task/' + id)
            },

            deleteDepartment(_id, title) {
                this.DELETE_DEPARTMENT(this.currentDepartment)
            }
        },

        mounted() {
            this.setDepartmentInfo()
        },

        watch: {
            departmentList: function() {
                this.setDepartmentInfo()
            }
        }
    }
</script>
