<template>
    <div class="selection">
        <div class="selection__header q-mb-lg flex">
            <div class="q-mr-sm">
                <SearchInput 
                    :arr="this.$props.users"
                    @search="setSearchField"
                />
            </div>
            <div>
                <FilterSelect 
                    :filterOptions="concatOptions()"
                    @filterOption="setFilterOpt"
                />
            </div>
        </div>          

        <div class="selection__content flex items-center q-mb-lg">
            <div  class="q-mr-lg" v-if="this.filteredUserList.length">
                <div
                    v-for="(user, i) of filteredUserList"
                    :key="'user_' + i"
                    style="width: 100%; max-width: 500px; height: 40px;"
                    class="flex items-center"
                >
                    <span class="q-mr-auto">{{user.fullName}}({{ user.department.title }})</span>
                </div>
            </div>

            <div v-else>
                <span>Никого нет...</span>
            </div>

            <div class="flex column">
                <div
                    v-for="(member, i) of filteredMembersData"
                    :key="'member_' + i"
                >
                    <!-- при редактировании отдела -->
                    <q-checkbox
                        v-if="$props.type === 'department_update'"
                        v-model="member.isHead"
                        style="width: 80px;"
                        @input="checkMemberRole(member)"
                    >
                        <q-badge outline color="orange" label="Рук." />
                    </q-checkbox>
                    
                    <!-- при создании задачи -->
                    <q-checkbox
                        v-if="$props.type === 'task_create'"
                        v-model="member.isMaster"
                        @input="checkIsUnique(member, 'isMaster'), checkMemberRole(member)"
                    >
                        <q-badge outline color="orange" label="Отв." />
                    </q-checkbox>

                    <!-- при создании задачи -->
                    <q-checkbox
                        v-if="$props.type === 'task_create'"
                        v-model="member.isPerformer"
                        style="width: 80px;"
                        @input="checkMemberRole(member)"
                    >
                        <q-badge outline color="secondary" label="Исп." />
                    </q-checkbox>

                    <!-- при создании задачи  -->
                    <q-checkbox
                        v-if="$props.type === 'task_create' || $props.type === 'department_update'"
                        v-model="member.isMember"
                        style="width: 80px;"
                        @input="checkMemberRole(member)"
                        :disable="member.isPerformer || member.isHead || member.isMaster ? true : false"
                    >
                        <q-badge outline color="secondary" label="Уч-к" />
                    </q-checkbox>

                    <!-- <q-checkbox
                        v-if="$props.type === 'department_update'"
                        v-model="member.isMember"
                        style="width: 80px;"
                        :disable="member.isPerformer || member.isHead || member.isMaster ? true : false"
                    >
                        <q-badge outline color="secondary" label="Уч-к" />
                    </q-checkbox> -->
                </div>

            </div>
        </div>
        
        <div>
            <span v-if="this.$props.type === 'department_create'" class="text-italic" style="color: #C10015;"> * Если пользователь уже состоит в каком-либо отделе, он покидает его, при условии, что не является единственным руководителем прежнего отдела !</span> 
        </div>

        <!-- emit в родителя данных о выбранных пользователях --> 
        <q-btn @click="submit">Подтвердить</q-btn>
    </div>
</template>

<script>
    import { filterSelectMixin } from 'src/mixins/filterSelectMixin.js'
    import { filtration } from 'src/functions/filtration.js'
    import { searchInputMixin } from 'src/mixins/searchInputMixin.js'
    import { searching } from 'src/functions/searching.js'
    import { getUniqueArrayItems } from 'src/functions/getUniqueArrayItems.js'

    export default {
        name: "UserSelection",

        mixins: [searchInputMixin, filterSelectMixin],

        props: {
            users: { type: Array },
            type: { type: String },
            department: { type: String }
        },

        data() {
            return {
                members: []
            }
        },

        methods: {
            concatOptions() {
                let departments = []

                this.$props.users.forEach(user => {
                    departments.push(user.department)
                })

                return ['Все', ...getUniqueArrayItems(departments)]
            },

            checkMemberRole(member) {
                if(member.isHead || member.isPerformer || member.isMaster) {
                    console.log(member.isHead, member.isMaster)
                    member.isMember = true
                }
            },

            checkIsUnique(user, param) {
                let selected = this.members.find(member => member._id === user._id)

                this.members.forEach(member => {
                    member._id !== selected._id ?
                    member[param] = false : null
                })
            },

            submit() {
                let users = []

                this.members.forEach(member => {
                    member.isMember ?
                    users.push(member) : null
                })

                this.$emit('memberList', users)
            }
        },

        computed: {
            filteredUserList() {
                let filteredData = this.$props.users

                if(this.searchingText) {
                    filteredData = searching(filteredData, this.searchingText, 'fullName')
                }

                if(this.filterOption && this.filterOption !== 'Все') {
                    let objKey = 'department'

                    let option = this.filterOption
                    filteredData = filtration(filteredData, option, objKey)
                }
               
                return filteredData
            },

            poolData() {
                this.$props.users.forEach(member => {
                    let isMaster = false
                    let isHead = false
                    let isMember = false
                    let isPerformer = false

                    if(this.$props.department) {
                        member.department.title === this.$props.department ?
                        isMember = true : null
                        member.department.title === this.$props.department && member.department.isHead ?
                        isHead = true : null
                    }

                    this.members.push({
                        _id: member._id,
                        fullName: member.fullName,
                        isMaster,
                        isHead,
                        isMember,
                        isPerformer,
                        // пополняемый набор, используется в зависимости от модуля из которого вызван
                    })
                })
            },

            filteredMembersData() {
                let result = []

                this.filteredUserList.forEach(user => {
                    let isExist = this.members.find(member => member._id === user._id)
                    !!isExist ? result.push(isExist) : null
                })

                return result
            },
        },

        beforeMount() {
            this.poolData
        }
    }
</script>