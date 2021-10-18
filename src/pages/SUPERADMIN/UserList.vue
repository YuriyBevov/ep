<template>
    <div>
        <div class="flex q-mb-sm">
            <div class="user-tasks__search q-mr-xl">
                <!-- компонент поиска -->
                <SearchInput 
                    :arr="this.userList"
                    @search="setSearchField"
                />

            </div>

            <div class="user-tasks__filter q-mr-xl">
                <!-- компонент фильтрации -->
                <FilterSelect 
                    :filterOptions="this.setFilterOptions()"
                    @filterOption="setFilterOpt"
                />
            </div>
        </div>

        <q-list class="q-mb-xl">
            <q-item
                clickable 
                v-ripple
                v-for="(user, i) of filteredUsers"
                :key="'user_i' + i"
                bordered

                @click="onClickShowUserInfo(user._id)"
            >
                <q-item-section>
                    <q-item-label overline>{{i + 1 + '-'}}{{user.fullName}}</q-item-label>
                </q-item-section>

                <q-item-section side >
                    <div class="flex items-center">
                        <div class="q-mr-xs"><q-icon :color="user.isDepartmentHead ? 'warning' : 'positive'" :name="user.isDepartmentHead ? 'face' : 'person'" size="xs"/>/{{user.department}}</div>
                    </div>
                </q-item-section>
            </q-item>
        </q-list>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { filterSelectMixin } from 'src/mixins/filterSelectMixin.js'
    import { filtration } from 'src/functions/filtration.js'
    import { searchInputMixin } from 'src/mixins/searchInputMixin.js'
    import { searching } from 'src/functions/searching.js'
    import { getUniqueArrayItems } from 'src/functions/getUniqueArrayItems.js'
    
    export default {
        name: 'UserList',
        mixins: [searchInputMixin, filterSelectMixin],

        computed: {
            ...mapGetters('user', ['userList']),

            filteredUsers() {
                let filteredData = [...this.userList]

                if(this.searchingText) {
                    filteredData = searching(filteredData, this.searchingText, 'fullName')
                }

                if(this.filterOption && this.filterOption !== 'Показать всех') {
                    let objKey = 'department'
                    filteredData = filtration(filteredData, this.filterOption, objKey)
                }

                return filteredData
            },
        },

        methods: {
            onClickShowUserInfo(id) {
                this.$router.push('user/' + id)
            },

            setFilterOptions() {
                console.log(this.userList, 'TEST')

                let options = []
                this.userList.forEach(user => {
                    options.push(user.department)
                })
                
                return ['Показать всех', ...getUniqueArrayItems(options)]
            }
        }
    }
</script>