<template>
    <div class="selection">
        <div class="selection__header q-mb-lg flex">
            
            <div>
                <SearchInput 
                    :arr="this.$props.users"
                    @search="setSearchField"
                />
            </div>
            <!-- <div class="q-ma-sm">
                <FilterSelect 
                    :filterOptions="concatOptions()"
                    @filterOption="setFilterOpt"
                />
            </div> -->
        </div>          

        <div class="selection__content flex items-center q-mb-lg">
            <div  class="q-mr-lg">
                <div
                    v-for="(user, i) of filteredUserList"
                    :key="'user_' + i"
                    style="width: 100%; max-width: 500px; height: 40px;"
                    class="flex items-center"
                >
                    <span class="q-mr-auto">{{user.fullName}}</span>
                </div>
            </div>

            <div class="flex column">

                <!--<div 
                    style="width: 100%; max-width: 500px;"
                    class="flex items-center justify-end"
                >
  
                    <q-btn
                        v-if="$props.type === 'task_create'"
                        flat 
                        @click="selectPerformersClicked = true, selectPerformers = !selectPerformers, includeAll(filteredUserList, 'isPerformer')"
                        style="width: 40px; margin-right: 40px;"
                    >
                        <q-icon :name="!selectPerformers ? 'task_alt' : 'published_with_changes'" size="sm" :color="!selectPerformers ? 'positive' : 'negative'"/>
                    </q-btn>


                    <q-btn
                        v-if="$props.type === 'task_create' || $props.type === 'department_create'"
                        flat 
                        @click="selectMembersClicked = true, selectMembers = !selectMembers, includeAll(filteredUserList, 'isMember')"
                        style="width: 40px; margin-right: 40px;"
                    >
                        <q-icon :name="!selectMembers ? 'task_alt' : 'published_with_changes'" size="sm" :color="!selectMembers ? 'positive' : 'negative'"/>
                    </q-btn>
                </div> -->

                <div
                    v-for="(member, i) of filteredMembersData"
                    :key="'member_' + i"
                >
                    <!-- при создании отдела -->
                    <q-checkbox
                        v-if="$props.type === 'department_create'"
                        v-model="member.isHead"
                        style="width: 80px;"
                        
                    >
                        <q-badge outline color="orange" label="Нач." />
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

                    <!-- при создании отдела и задачи  -->
                    <q-checkbox
                        v-if="$props.type === 'task_create' || $props.type === 'department_create'"
                        v-model="member.isMember"
                        style="width: 80px;"
                        @input="checkMemberRole(member)"
                        :disable="member.isPerformer || member.isHead || member.isMaster ? true : false"
                    >
                        <q-badge outline color="secondary" label="Уч-к" />
                    </q-checkbox>
                </div>
            </div>
        </div>

        <!-- emit в родителя данных о выбранных пользователях --> 
        <q-btn @click="submit">Подтвердить</q-btn>
    </div>
</template>

<script>
    /*import { filterSelectMixin } from 'src/mixins/filterSelectMixin.js'
    import { filtration } from 'src/functions/filtration.js'*/
    import { searchInputMixin } from 'src/mixins/searchInputMixin.js'
    import { searching } from 'src/functions/searching.js'

    export default {
        name: "UserSelection",

        mixins: [searchInputMixin/*, filterSelectMixin*/],

        props: {
            users: { type: Array },
            type: { type: String }
        },

        data() {
            return {
                members: [],
                /*selectMembersClicked: false,
                selectMembers:    false,
                selectPerformersClicked: false,
                selectPerformers: false,*/
            }
        },

        methods: {
            checkMemberRole(member) {
                if(!member.isMember && member.isHead || member.isPerformer || member.isMaster) {
                    member.isMember = true
                }
            },

            /*includeAll(users) {
                    this.selectMembers === true && this.selectMembersClicked === true ?
                    this.users.forEach(user => {
                        this.members.find(member => {
                            user._id === member._id ?
                            member.isMember = true  : null
                        })
                    }) : 

                    this.users.forEach(user => {
                        this.members.find(member => {
                            user._id === member._id ?
                            member.isMember = false  : null
                        })
                    })

                    console.log(this.selectMembersClicked)
                    this.selectMembersClicked = false
                    console.log(this.selectMembersClicked)

                    this.selectPerformers === true && this.selectPerformersClicked === true?

                    this.users.forEach(user => {
                        this.members.find(member => {
                            if(user._id === member._id) {
                                member.isPerformer = true
                                member.isMember = true
                            }
                        })
                    }) : 

                    this.users.forEach(user => {
                        this.members.find(member => {
                            if(user._id === member._id) {
                                member.isPerformer = false
                            }
                        })
                    })

                    this.selectPerformersClicked = false

            }, */

            checkIsUnique(user, param) {
                let selected = this.members.find(member => member._id === user._id)

                this.members.forEach(member => {
                    member._id !== selected._id ?
                    member[param] = false : null
                })
            },

            submit() {
                let users = []
                console.log(this.members)
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
               
                return filteredData
            },

            poolData() {
                this.$props.users.forEach(member => {                  
                    this.members.push({
                        _id: member._id,
                        fullName: member.fullName,
                        isMaster: false,
                        isHead: false,
                        isMember: false,
                        isPerformer: false,
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