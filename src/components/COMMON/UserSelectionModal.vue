<template>
    <div class="selection" v-if="this.members.length">
        <!--показываю только тогда, когда data сформировалась. Иначе будет ошибка в консоли, так как pollData не успевает залить массив members-->
        <div class="selection__search q-mb-lg flex">
            
            <div class="q-ma-sm q-ml-none">
                <SearchInput 
                    :arr="this.$props.users"
                    @search="setSearchField"
                />
            </div>
            <div class="q-ma-sm">
                <FilterSelect 
                    :filterOptions="concatOptions()"
                    @filterOption="setFilterOpt"
                />
            </div>
        </div>

        <!-- <div 
            style="width: 100%; max-width: 500px;"
            class="flex items-center justify-end"
        >

            <q-checkbox
                v-model="includeAllAsPerformer"
                @input="includeAll('isPerformer')"
            >
                <q-icon name="keyboard_arrow_down" size="md" color="primary"/>
            </q-checkbox>

            <q-checkbox
                v-model="includeAllAsMember"
                @input="includeAll('isMember')"
            >
                <q-icon name="keyboard_arrow_down" size="md" color="secondary"/>
            </q-checkbox>
        </div>-->

        <div 
            v-for="(user, i) of filteredUserList"
            :key="'user_' + i"
            style="width: 100%; max-width: 500px;"
            class="flex items-center"
        >
            <span class="q-mr-auto">{{user.fullName}}</span>

            <q-checkbox
                :value=user.fullName
                v-model="members[i].isMaster"
            >
                <q-badge outline color="orange" label="Отв." />
            </q-checkbox>

            <q-checkbox
                :value=user.fullName
                v-model="members[i].isPerformer"
            >
                <q-badge outline color="primary" label="Исп." />
            </q-checkbox>

            <q-checkbox
                :value=user.fullName
                v-model="members[i].isMember"
            >
                <q-badge outline color="secondary" label="Уч-к" />
            </q-checkbox>
        </div>

        <!-- emit в родителя данных о выбранных пользователях --> 
        <q-btn>Подтвердить</q-btn>
    </div>
</template>

<script>
    import { filterSelectMixin } from 'src/mixins/filterSelectMixin.js'
    import { filtration } from 'src/functions/filtration.js'

    import { searchInputMixin } from 'src/mixins/searchInputMixin.js'
    import { searching } from 'src/functions/searching.js'

    export default {
        mixins: [searchInputMixin, filterSelectMixin],

        props: {
            users: { type: Array },
            departments: { type: Array },
        },

        data() {
            return {
                members: [],
                //includeAllAsMember: false,
                //includeAllAsPerformer: false
            }
        },

        computed: {
            filteredUserList() {
                let filteredData = this.$props.users

                if(this.searchingText) {
                    filteredData = searching(filteredData, this.searchingText, 'fullName')
                }

                if(this.filterOption && this.filterOption !== 'Все отделы') {
                   filteredData = filtration(filteredData, this.filterOption, 'department', 'title')
                }
                
                return filteredData
            }
        },

        methods: {
           /* includeAll(role) {
                console.log(this.filterOption === '')

                /*this.filterOption === '' || this.filterOption === 'Все отделы' ?

                this.members.forEach(member => {
                    member[role] === true ? member[role] = false : member[role] === false ? member[role] = true : null
                }) : 

                this.members.forEach(member => {
                    console.log(member)
                    member[role] === true && member.department === this.filterOption ? member[role] = false : member[role] === false && member.department === this.filterOption ? member[role] = true : null
                }) */

               /* if(this.filterOption === '' || this.filterOption === 'Все отделы') {
                    console.log('all')
                } else {
                    console.log('not')
                }
            },*/

            poolData() {
                this.$props.users.forEach(member => {                  
                    this.members.push({
                        id: member.id,
                        department: member.department.title,
                        isMaster: false,
                        isMember: false,
                        isPerformer: false,
                    })
                })
            },

            concatOptions() {
                let departments = ['Все отделы']
                this.$props.departments.forEach(dep => {
                    departments.push(dep.title)
                })
                return departments
            },
        },
        
        mounted() {
            this.poolData()
        }
    }
</script>

<style>
    .q-checkbox {
        width: 80px;
    }
</style>