<template>
    <div class="full-width">
        
        <!-- UserCard -->
        <q-card dark flat bordered class="bg-grey-8 full-width" v-if="dataType === 'user' ">
            <q-card-section class="flex items-center justify-between" @click="isCardOpened = !isCardOpened" style="cursor: pointer;">
                <div class="text-h4">{{ this.$props.data.fullName }}</div>

                <div class="flex items-center">
                    <q-badge
                        class="self-center q-mr-md"
                        :class="this.$props.data.isOnline ? 'bg-secondary' : 'bg-red'"
                    >
                        {{ this.$props.data.isOnline ? 'Online' : Offline}}
                    </q-badge>
                    <q-card-actions class="q-pa-none">
                        <a :href="'tel:' + this.$props.data.phone">
                            <q-icon flat round color="green" size="sm" name="phone"/>
                        </a>

                        <a :href="'mailto:' + this.$props.data.email">
                            <q-icon flat round color="green" size="sm" name="mail"/>
                        </a>
                    </q-card-actions>
                </div>
            </q-card-section>
        
            <div v-if="isCardOpened">
                <q-separator/>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Отдел:</div>
                    <div class="text-subtitle2">{{ this.$props.data.department }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Должность:</div>
                    <div class="text-subtitle2">{{ this.$props.data.dep_position }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Телефон для связи:</div>
                    <div class="text-subtitle2">{{ this.$props.data.phone }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">E-mail:</div>
                    <div class="text-subtitle2">{{ this.$props.data.email }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center" style="height: 68px;">
                    <div class="text-h5 q-mr-md">Текущих задач:</div>
                    
                    <div class="text-subtitle2">
                        <span class="q-mr-sm">{{ this.$props.data.tasks.length }}</span>
                        <q-btn
                            flat 
                            color="white" 
                            :disabled="this.$props.data.taskCount > 0 ? false : true"
                            :icon="!isSubListOpened ? 'expand_less' : 'expand_more'" 
                            @click="isSubListOpened = !isSubListOpened"    
                        />
                    </div>
                </q-card-section>

                <q-card-section v-if="this.isSubListOpened" class="q-pa-sm">
                    <q-list class="q-pa-none">
                        <q-item
                            class="q-pa-none q-mb-sm"
                            v-for="(child, i) of this.$props.data.tasks"
                            :key="'child_' + i"
                        >
                            <DataItem :data="child" :dataType="'shortTaskCard'"/>
                        </q-item>
                    </q-list>
                </q-card-section>
            </div>

            <q-card-section class="flex items-center justify-end bg-white q-pa-none">  
                <q-card-actions class="q-ml-auto">
                    <q-btn flat round color="green" icon="keyboard_tab" :to="'/user/' + this.$props.data._id"/>
                    <q-btn flat round color="red" icon="settings" @click="openAddEditModal()"/>
                    <q-btn flat round color="red" icon="block" />
                    <q-btn flat round color="red" icon="delete" class="q-mr-md" />

                    <q-btn flat round color="primary" icon="task"/>
                    <q-btn flat round color="primary" icon="rule"/>
                </q-card-actions>
            </q-card-section>
        </q-card>

        <!-- ShortTaskCard -->
        <q-card
            v-if="dataType === 'shortTaskCard'"
            dark flat bordered 
            class="full-width" 
            :style="'background-color:' + this.$props.data.statusColor"
        >
            <q-card-section 
                class="flex items-center justify-between" 
                @click="isCardOpened = !isCardOpened"
                style="cursor: pointer;"
            >
                <div class="text-h4">{{ this.$props.data.name }}</div>

                <div class="flex items-center">
                    <q-badge
                        :style="'background-color:' +  this.$props.data.statusColor "
                    >
                        от: 05.05.1989
                    </q-badge>
                </div>
            </q-card-section>
            <q-card-section class="flex items-center justify-end bg-white q-pa-none">  
                <q-card-actions class="q-ml-auto">
                    <q-btn flat round color="green" icon="keyboard_tab" :to="'/task/' + this.$props.data._id"/>
                    <q-btn flat round color="red" icon="settings"/>
                    <q-btn flat round color="red" icon="person_off" />

                    <q-btn 
                        flat round 
                        :color="this.$props.data.status !== 'frozen' ? 'red' : 'green'" 
                        :icon="this.$props.data.status !== 'frozen' ? 'ac_unit' : 'power_settings_new'" 
                    />
                    <q-btn flat round color="red" icon="delete" />
                </q-card-actions>
            </q-card-section>
        </q-card>

        <!-- TaskCard -->
        <q-card
            v-if="dataType === 'task'"
            dark flat bordered 
            class="full-width" 
            :style="'background-color:' + this.$props.data.statusColor"
        >
            <q-card-section 
                class="flex items-center justify-between" 
                @click="isCardOpened = !isCardOpened"
                style="cursor: pointer;"
            >
                <div class="text-h4">{{ this.$props.data.name }}</div>

                <div class="flex items-center">
                    <q-badge
                        :style="'background-color:' +  this.$props.data.statusColor "
                    >
                        от: 05.05.1989
                    </q-badge>
                </div>
            </q-card-section>

            <div v-if="isCardOpened">
                <q-separator/>
                
                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Отдел:</div>
                    <div class="text-subtitle2">{{ this.$props.data.department }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Статус:</div>
                    <div class="text-subtitle2">{{ this.$props.data.statusDesc }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Проект:</div>
                    <div class="text-subtitle2">{{ this.$props.data.project }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Группа проектов:</div>
                    <div class="text-subtitle2">{{ this.$props.data.projectGroup }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Отв. лицо:</div>
                    <div class="text-subtitle2">{{ this.$props.data.head }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Участников:</div>
                    <div class="text-subtitle2">{{ this.$props.data.members }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Исполнителей:</div>
                    <div class="text-subtitle2">{{ this.$props.data.performers }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Связанных задач:</div>
                    <div class="text-subtitle2">
                        <span class="q-mr-sm">{{ this.$props.data.childCount }}</span>
                        <q-btn
                            flat 
                            color="white" 
                            :disabled="this.$props.data.childCount > 0 ? false : true"
                            :icon="!isSubListOpened ? 'expand_less' : 'expand_more'" 
                            @click="isSubListOpened = !isSubListOpened"    
                        />
                    </div>
                </q-card-section>

                <q-card-section v-if="this.isSubListOpened" class="q-pa-sm">
                    <q-list class="q-pa-none">
                        <q-item
                            class="q-pa-none q-mb-sm"
                            v-for="(child, i) of this.$props.data.childrens"
                            :key="'child_' + i"
                        >
                            <DataItem :data="child" :dataType="'task'"/>
                        </q-item>
                    </q-list>
                   
                </q-card-section>
            </div>

            <q-card-section class="flex items-center justify-end bg-white q-pa-none">  
                <q-card-actions class="q-ml-auto">
                    <q-btn flat round color="green" icon="keyboard_tab" :to="'/task/' + this.$props.data._id"/>
                    <q-btn flat round color="red" icon="settings" @click="openAddEditModal()"/>
                    <q-btn flat round color="red" icon="next_week"/>
                    <q-btn 
                        flat round 
                        :color="this.$props.data.status !== 'frozen' ? 'red' : 'green'" 
                        :icon="this.$props.data.status !== 'frozen' ? 'ac_unit' : 'power_settings_new'" 
                    />
                    <q-btn flat round color="red" icon="delete" />
                </q-card-actions>
            </q-card-section>
        </q-card>

        <!--projectCard-->
        <q-card
            v-if="dataType === 'project'"
            dark flat bordered 
            class="full-width" 
            :style="'background-color:' + this.$props.data.statusColor"
        >
            <q-card-section 
                class="flex items-center justify-between" 
                @click="isCardOpened = !isCardOpened"
                style="cursor: pointer;"
            >
                <div class="text-h4">{{ this.$props.data.name }}</div>

                <div class="flex items-center">
                    <q-badge
                        :style="'background-color:' +  this.$props.data.statusColor "
                    >
                        от: 05.05.1989
                    </q-badge>
                </div>
            </q-card-section>

            <div v-if="isCardOpened">
                <q-separator/>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Создатель:</div>
                    <div class="text-subtitle2">{{ this.$props.data.owner }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Статус:</div>
                    <div class="text-subtitle2">{{ this.$props.data.statusDesc }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Группа проектов:</div>
                    <div class="text-subtitle2">{{ this.$props.data.projectGroup }}</div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Задачи проекта:</div>
                    <div class="text-subtitle2">
                        <span class="q-mr-sm">{{ this.$props.data.taskCount }}</span>
                        <q-btn
                            flat 
                            color="white" 
                            :disabled="this.$props.data.taskCount > 0 ? false : true"
                            :icon="!isSubListOpened ? 'expand_less' : 'expand_more'" 
                            @click="isSubListOpened = !isSubListOpened"    
                        />
                    </div>
                </q-card-section>

                <q-card-section v-if="this.isSubListOpened" class="q-pa-sm">
                    <q-list class="q-pa-none">
                        <q-item
                            class="q-pa-none q-mb-sm"
                            v-for="(item, i) of this.$props.data.tasks"
                            :key="'item_' + i"
                        >
                            <DataItem :data="item" :dataType="'task'"/>
                        </q-item>
                    </q-list>
                </q-card-section>
            </div>

            <q-card-section class="flex items-center justify-end bg-white q-pa-none">  
                <q-card-actions class="q-ml-auto">
                    <q-btn flat round color="green" icon="keyboard_tab" :to="'/project/' + this.$props.data._id"/>
                    <q-btn flat round color="red" icon="settings" @click="openAddEditModal()"/>
                    <q-btn 
                        flat round 
                        :color="this.$props.data.status !== 'frozen' ? 'red' : 'green'" 
                        :icon="this.$props.data.status !== 'frozen' ? 'ac_unit' : 'power_settings_new'" 
                    />
                    <q-btn flat round color="red" icon="delete" />
                </q-card-actions>
            </q-card-section>
        </q-card>

        <!--projectGroupCard-->
        <q-card
            v-if="dataType === 'project-group'"
            dark flat bordered 
            class="full-width" 
            :style="'background-color:' + this.$props.data.projectColor"
        >
            <q-card-section 
                class="flex items-center justify-between" 
                @click="isCardOpened = !isCardOpened"
                style="cursor: pointer;"
            >
                <div class="text-h4">{{ this.$props.data.name }}</div>

                <div class="flex items-center">
                    <q-badge
                        :style="'background-color:' +  this.$props.data.projectColor "
                    >
                        от: {{this.$props.data.published_at}}
                    </q-badge>
                </div>
            </q-card-section>

            <div v-if="isCardOpened">
                <q-separator/>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Всего проектов:</div>
                    <div class="text-subtitle2">
                        <span class="q-mr-sm">{{ this.$props.data.projectCount }}</span>
                    </div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Закрытых проектов:</div>
                    <div class="text-subtitle2">
                        <span class="q-mr-sm">{{ this.$props.data.closedProjectCount }}</span>
                    </div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Всего задач:</div>
                    <div class="text-subtitle2">
                        <span class="q-mr-sm">{{ this.$props.data.taskCount }}</span>
                    </div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Закрытых задач:</div>
                    <div class="text-subtitle2">
                        <span class="q-mr-sm">{{ this.$props.data.closedTaskCount }}</span>
                    </div>
                </q-card-section>

                <q-card-section v-if="this.isSubListOpened" class="q-pa-sm">
                    <q-list class="q-pa-none">
                        <q-item
                            class="q-pa-none q-mb-sm"
                            v-for="(item, i) of this.$props.data.tasks"
                            :key="'item_' + i"
                        >
                            <DataItem :data="item" :dataType="'task'"/>
                        </q-item>
                    </q-list>
                </q-card-section>
            </div>

            <q-card-section class="flex items-center justify-end bg-white q-pa-none">  
                <q-card-actions class="q-ml-auto">
                    <q-btn flat round color="green" icon="keyboard_tab" :to="'/projectGroup/' + this.$props.data._id"/>
                    <q-btn flat round color="red" icon="settings" @click="openAddEditModal()"/>
                </q-card-actions>
            </q-card-section>
        </q-card>

         <!--departmentCard-->
         <q-card
            v-if="dataType === 'deps'"
            dark flat bordered 
            class="full-width" 
            :style="'background-color:' + this.$props.data.departmentColor"
        >
            <q-card-section 
                class="flex items-center justify-between" 
                @click="isCardOpened = !isCardOpened"
                style="cursor: pointer;"
            >
                <div class="text-h4">{{ this.$props.data.title }}</div>

                <div class="flex items-center">
                    <q-badge
                        :style="'background-color:' +  this.$props.data.departmentColor "
                    >
                        от: {{this.$props.data.published_at}}
                    </q-badge>
                </div>
            </q-card-section>

            <div v-if="isCardOpened">
                <q-separator/>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Руководитель:</div>
                    <div class="text-subtitle2">
                        <span class="q-mr-sm">{{ this.$props.data.head }}</span>
                    </div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Кол-во подчиненных:</div>
                    <div class="text-subtitle2">
                        <span class="q-mr-sm">{{ this.$props.data.members }}</span>
                    </div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Текущих задач:</div>
                    <div class="text-subtitle2">
                        <span class="q-mr-sm">{{ this.$props.data.currentTasks }}</span>
                    </div>
                </q-card-section>

                <q-card-section class="flex justify-between items-center">
                    <div class="text-h5 q-mr-md">Всего задач выполнено:</div>
                    <div class="text-subtitle2">
                        <span class="q-mr-sm">{{ this.$props.data.closedTasks }}</span>
                    </div>
                </q-card-section>
            </div>

            <q-card-section class="flex items-center justify-end bg-white q-pa-none">  
                <q-card-actions class="q-ml-auto">
                    <q-btn flat round color="green" icon="keyboard_tab" :to="'/department/' + this.$props.data._id"/>
                    <q-btn flat round color="red" icon="settings" @click="openAddEditModal()"/>
                </q-card-actions>
            </q-card-section>
        </q-card>

        <AddEditModal
            :isOpened="isAddEditModalOpened"
            :actionType="'edit'"
            :type="AddEditModalType" 
            :dataType="this.$props.dataType"
            :data="AddEditModalData"
            @closeModal="isAddEditModalOpened = false"
        />
    </div>
</template>

<script>
    import AddEditModal from 'src/components/modals/AddEditModal'

    export default {
        name: 'DataItem',

        methods: {
            openAddEditModal() {
                console.log('open mod', this.$props.data)
                this.isAddEditModalOpened = true
            }
        },

        data() {
            return {
                isCardOpened: (typeof (this.$props.isInfoCardOpened) != 'undefined' ? this.$props.isInfoCardOpened : false),
                isSubListOpened: false,

                isAddEditModalOpened: false,
                AddEditModalType: this.$props.dataType,
                AddEditModalData: this.$props.data
            }
        },

        props: {
            dataType: {type: String },
            data: { type: Object },
            isInfoCardOpened: { type: Boolean }
        },

        components: {
            AddEditModal
        }
    }
</script>

<style lang="scss" scoped>
    .my-card {
        width: 100%;
    }

    a {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
</style>