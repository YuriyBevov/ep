<template>
    <div>
        <div>
            <div class="q-pa-sm">
                <h3 class="q-ma-none q-mb-sm">
                    {{ 
                       this.$props.dataType === 'stats'   ? 'Статистика'   :
                       this.$props.dataType === 'user'    ? 'Сотрудники'   :
                       this.$props.dataType === 'project' ? 'Проекты'      :
                       this.$props.dataType === 'main'    ? 'Кабинет'      :
                       this.$props.dataType === 'deps'    ? 'Отделы'       :
                       this.$props.dataType === 'task'    ? 'Задачи'       : null
                    }} 
                </h3>
        
                <div class="q-mb-sm">
                    <q-tabs
                        v-model="activeTab"
                        no-caps
                        outside-arrows
                        mobile-arrows
                        class="bg-secondary text-white shadow-2"
                    >
                        <q-tab
                            v-for="(tab, i) of this.$props.tabs"
                            :key="'tab_' + $props.dataType + i"
                            :name="tab.name"
                            :label="tab.label"
                        />
                    </q-tabs>
                </div>

                <BlockFilterHeader
                    :activeTab="activeTab"
                    :dataType="this.$props.dataType"
                    :viewMode="this.viewMode"
                    @changeViewMode="setViewMode" 
                    @filter="emitFilterOptions" 
                    @openAddEditModal="openAddEditModal"
                />
            </div>
        </div>

        <div>
            <q-tab-panels
                v-model="activeTab"
                animated
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
            >
                <q-tab-panel
                    class="q-pa-sm"
                    v-for="(tabData, i) of this.$props.tabs"
                    :key="'tabData_' + $props.dataType + i"
                    :name="tabData.name"
                >
                    <div 
                        v-if="tabData.options.components && tabData.options.components.includes('List')"
                    >
                        <DataList
                            v-if="viewMode === 'card' "
                            :dataType="activeTab === 'project-group' ? 'project-group' : $props.dataType" 
                            :options="tabData.options"
                        />

                        <DataTable 
                            v-if="viewMode === 'table'"
                            :dataType="activeTab === 'project-group' ? 'project-group' : $props.dataType" 
                            :data="tabData.options.data"
                            :columns="tabData.options.tableViewColumns"
                        />
                    </div>

                    <div 
                        v-if="tabData.options.components && tabData.options.components.includes('Tree')"
                    >
                        <ProjectTree />
                    </div>

                    <div 
                        v-if="tabData.options.components && tabData.options.components.includes('Group')"
                    >
                        <UserGroup 
                            v-if="$props.dataType === 'user'"
                        />
                    </div>

                    <div v-if="tabData.options.components && tabData.options.components.includes('Info')">
                        <ItemInfo 
                            :dataType="$props.dataType"
                            :data="tabData.options.data"
                            @changeActiveTab="changeActiveTab"
                        />
                    </div>

                    <div v-if="tabData.options.components && tabData.options.components.includes('Permits')">
                        <UserPermits
                            :permits="tabData.options.data.permits"
                        />
                    </div>

                    <div v-if="tabData.options.components && tabData.options.components.includes('UserTasks')">
                        <UserTasks
                            :tasks="tabData.options.data.tasks"
                        />
                    </div>

                    <div v-if="tabData.options.components && tabData.options.components.includes('Stat')">
                        <StatCharts 
                            :dataType="$props.dataType"
                            :data="tabData.options.data"
                        />
                    </div>

                    <div v-if="tabData.options.components && tabData.options.components.includes('ToDo')">
                        <TodoBoard />
                    </div>
                    <div v-if="tabData.options.components && tabData.options.components.includes('Calendar')">
                        <Calendar />
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </div>

        <AddEditModal
            :isOpened="this.isAddEditModalOpened"
            :actionType="'add'"
            :dataType="this.activeTab === 'project-group' ? 'project-group' : this.$props.dataType"
            @closeModal="isAddEditModalOpened = false"
        />
    </div>
</template>

<script>
    import DataList from 'src/components/DataList'
    import DataTable from 'src/components/DataTable'
    import TodoBoard from 'src/components/toDo/TodoBoard'
    import Calendar from 'src/components/Calendar'

    import UserGroup from 'src/components/user/UserGroup'
    import StatCharts from 'src/components/StatCharts'
    import UserPermits from 'src/components/user/UserPermits'
    import UserTasks from 'src/components/user/UserTasks'
    
    import ItemInfo from 'src/components/common/ItemInfo'
    import ProjectTree from 'src/components/common/ProjectTree'
    import BlockFilterHeader from 'src/components/BlockFilterHeader'
    import AddEditModal from 'src/components/modals/AddEditModal'

    export default {
        name: "BlockTabHeader",

        components: {
            DataTable,
            DataList,
            TodoBoard,
            Calendar,

            ItemInfo,
            ProjectTree,
            UserGroup,
            UserPermits,
            UserTasks,
            StatCharts,
            BlockFilterHeader,
            AddEditModal
        },

        props: {
            dataType: { type: String },
            tabs: { type: Array }
        },

        data() {
            return {
                activeTab: '',
                viewMode: 'table',

                isAddEditModalOpened: false,
                AddEditModalType: this.$props.dataType,
            }
        },

        methods: {
            changeActiveTab(tab) {
                console.log(tab)
                this.activeTab = tab
            },

            setViewMode(opt) {
                this.viewMode = opt
            },

            emitFilterOptions(opt) {
                console.log('filOpt', opt)
                this.$emit('filter', opt)
            },

            openAddEditModal() {
                console.log('open mod', this.$props.dataType, this.activeTab)

                this.isAddEditModalOpened = true
            }
        },

        mounted() {
            this.$props.tabs ?
            this.activeTab = this.$props.tabs.find(tab => tab.active === true).name : null
        },
    }
</script>