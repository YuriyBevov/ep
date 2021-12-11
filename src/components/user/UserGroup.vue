<template>
    <div class="">
        <div class="flex items-start row">
            <div class="col-5 q-pa-sm">
                <q-input
                    square 
                    outlined
                    v-model="searchByGroup" 
                    type="search" 
                    placeholder="Поиск"
                    class="search"
                    style="flex-grow: 1;"
                >
                    <template v-slot:append>
                        <q-icon name="search" v-if="!searchByGroup.length"/>
                        <q-btn
                            v-else
                            flat
                            @click="resetSearchField('group')"
                        >
                            <q-icon name="close"/>
                        </q-btn>
                    </template>
                </q-input>

                <div class="">
                    <div
                        v-for="(groupItem, i) of groups"
                        :key="'groupItem_' + i"
                    >
                        <q-radio 
                            v-model="currentGroup" :val="groupItem.permits" :label="groupItem.name" color="teal"
                            @input="checker(currentGroup, users)"
                        />
                        <!-- По клику -> модалка с текущими разрешениями группы, с табами по логическим привязкам. напр. разр-я по действиям с пол-ми, щадачами, проектами и тд -->
                        <q-btn flat round color="primary" icon="help_outline"/>
                        <!--По клику открывается модалка с разрешениями текущей гр., где можно будет их убрать или добавить-->
                        <q-btn flat round color="primary" icon="settings"/>
                    
                    </div>
                </div>
            </div>

            <div class="col-5 q-pa-sm">
                <q-input
                    square 
                    outlined
                    v-model="searchByUser" 
                    type="search" 
                    placeholder="Поиск"
                    class="search"
                    style="flex-grow: 1;"
                    
                >
                    <template v-slot:append>
                        <q-icon name="search" v-if="!searchByUser.length"/>
                        <q-btn
                            v-else
                            flat
                            @click="resetSearchField('user')"
                        >
                            <q-icon name="close"/>
                        </q-btn>
                    </template>
                </q-input>

                <div class="">
                    <div class=""
                        v-for="(user, i) of users"
                        :key="'user_' + i"
                    >
                        <q-checkbox
                            v-model="user.isChecked"
                            style="width: 50%; min-width: 250px;"
                            disable
                        >
                            {{user.fullName}}
                        </q-checkbox>
                        <!-- По клику -> модалка с текущими разрешениями пользователя, где можно дабвить/убрать раз-ние-->
                        <!-- *В два ряда. В левом список разрешений, в правом список его тек-х групп польз-й -->
                        <!-- Плюс фильтрация с показом только текущих разр-й/групп или всех разр-й/групп. чтобы можно было выбрать новые-->
                        <q-btn flat round color="primary" icon="rule"/>
                        <!-- * либо еще одну кнопку -->
                        <q-btn flat round color="primary" icon="settings"/>
                    </div>
                </div>
            </div>

            <div class="flex justify-end col-2 q-pa-sm">
                <q-btn
                    class="q-ma-none"
                    outline 
                    color="primary" 
                    icon="add"
                />
            </div>
        </div>

        <q-list bordered class="flex flex-wrap q-pa-none" v-if="this.currentGroupPermits.length">
            <q-item
                v-for="(permit, i) of this.currentGroupPermits"
                :key="'permit_' + i"
                class="flex items-center"
            >
                {{ 
                    permit === 1 ? 'разрешение №1' : permit === 2 ? 'разрешение №2' : 
                    permit === 3 ? 'разрешение №3' : permit === 4 ? 'разрешение №4' :
                    permit === 5 ? 'разрешение №5' : permit === 6 ? 'разрешение №6' :
                    permit === 7 ? 'разрешение №7' : permit === 8 ? 'разрешение №8' :
                    permit === 9 ? 'разрешение №9' : null
                }}
            </q-item>
        </q-list>
    </div>
</template>

<script>
    let userList = [
        {fullName: 'Юрий Бевов', permits: [1,3,5,8,9],isChecked: false },
        {fullName: 'Юрий Кураев', permits: [1,4,6,8,9],isChecked: false },
        {fullName: 'Артем Чернух', permits: [1,3,7,8,9],isChecked: false },
        {fullName: 'Некто Нектов', permits: [1,2,9],isChecked: false },
        {fullName: 'Григорий Дзнеладзе', permits: [1,3],isChecked: false },
    ]

    let userGroups = [
        { name: 'Группа пол-х раз-й 1', permits: [1,2,3], isChecked: true },
        { name: 'Группа пол-х раз-й 2', permits: [1,3,4,6,9], isChecked: false },
        { name: 'Группа пол-х раз-й 3', permits: [2,4,6,7], isChecked: false },
        { name: 'Группа пол-х раз-й 4', permits: [1,5,6], isChecked: false },
        { name: 'Группа пол-х раз-й 5', permits: [3,8,9], isChecked: false },
        { name: 'Группа пол-х раз-й 6', permits: [2,4,5], isChecked: false },
        { name: 'Группа пол-х раз-й 7', permits: [4,6,7], isChecked: false },
        { name: 'Группа пол-х раз-й 8', permits: [3,7,9], isChecked: false },
        { name: 'Группа пол-х раз-й 9', permits: [1,3,4], isChecked: false },
    ]

    export default {
        data() {
            return {
                searchByUser: '',
                searchByGroup: '',
                users: userList,
                groups: userGroups,

                currentGroup: '',

                currentGroupPermits: []
            }
        },

        computed: {
            
        },

        methods: {
            resetSearchField(field) {
                if(field === 'user') {
                    this.searchByUser = ''
                }

                if(field === 'group') {
                    this.searchByGroup = ''
                }
            },

            checker(arr, userList) {
                this.currentGroupPermits = arr

                userList.forEach(user => {
                    let isContain = arr.every(p => user.permits.includes(p))

                    isContain ?
                    user.isChecked = true : user.isChecked = false
                });
            }

            //checker = (arr, target) => target.every(v => arr.includes(v))
        },

        mounted() {
            
        }
    }
</script>