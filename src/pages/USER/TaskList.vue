<template>
    <div style="max-width: 1100px;">
        <span>Список всех задач:</span>

        <div class="flex items-center q-mb-lg">
            <div class="q-mr-xl">
                <q-toggle
                    v-model="cardView"
                    color="green"
                />
                <span>Сокр./Подр.</span>
            </div>

            <div class="q-mr-xl">
                <!-- компонент поиска -->
                <SearchInput 
                    :arr="this.openedTasks"
                    @search="setSearchField"
                />
            </div>

            <div class="user-tasks__filter q-mr-xl">
                <!-- компонент фильтрации -->
                <FilterSelect 
                    :filterOptions="['Все', 'Открытая задача', 'В работе', 'Выполнена', 'Приостановлена', 'Закрыта']"
                    @filterOption="setFilterOpt"
                />
            </div>

            <div class="q-mr-xl">
                <!-- компонент сортировки -->
                <SortSelect
                    :sortOptions="['Без сортировки', 'По приоритету', 'По сроку выполнения']"
                    @sortOption="setSortOpt"
                />
            </div>

            <div>
                <!-- компонент реверсивной кнопки -->
                <!-- <ReverseBtn
                    :reverseStatus="isReversed"
                    @reverse="reverse"
                />-->

                <q-btn @click="reverse" icon="height"/>
            </div>
        </div>

        <q-list class="flex q-mb-xl" :style="!this.cardView ? 'flex-direction: column;' : null" v-if="filteredTasks.length">
            <q-item
                :class="!cardView ? 'q-mb-xs q-mr-none' : 'q-mb-lg q-mr-lg'"
                clickable 
                v-ripple
                v-for="(userTask, i) of filteredTasks"
                :key="'userTask_i' + i"
                style="height: fit-content;"
                :style="!cardView ? 'max-width: 100%;' : 'max-width: 500px;'"
            >
                <TaskCard
                    :taskData="userTask"
                    :cardView="cardView"
                />
            </q-item>
        </q-list>

        <div v-else class="q-mb-xl">Задач нет ?! Возможно необходимо изменить параметры поиска ?</div>

        <ShortTaskCard
            :title="'Мои задачи'"
            :emptyText="'Личных задач пока нет...'"
            :color="'#21BA45'"
            :tasks="this.activeUserTasks.length ? this.activeUserTasks : []"
            @openTask="onClickOpenTask"
        />

    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    import TaskCard from 'src/components/TASK/TaskCard'
    import ShortTaskCard from 'src/components/TASK/ShortTaskCard'

    import { sortSelectMixin } from 'src/mixins/sortSelectMixin.js'
    import { filterSelectMixin } from 'src/mixins/filterSelectMixin.js'
    import { searchInputMixin } from 'src/mixins/searchInputMixin.js'

    import { searching } from 'src/functions/searching.js'
    import { sorting } from 'src/functions/sorting.js'
    import { filtration } from 'src/functions/filtration.js'

    export default {
        name: "OpenedTasksPage",

        mixins: [searchInputMixin, filterSelectMixin, sortSelectMixin],

        components: {
            TaskCard,
            ShortTaskCard
        },

        data() {
            return {
                cardView: false
            }
        },

        computed: {
            ...mapGetters('task', ['openedTasks', 'taskList', 'activeUserTasks']),

            filteredTasks() {
                let filteredData = this.openedTasks

                if(this.searchingText) {
                    filteredData = searching(filteredData, this.searchingText, 'title')
                }

                if(this.filterOption && this.filterOption !== 'Все') {
                    let objKey = 'statusDesc'
                    filteredData = filtration(filteredData, this.filterOption, 'statusDesc')
                }

                if(this.sortOption && this.sortOption !== 'Без сортировки') {
                    let objKey = this.sortOption === 'По приоритету' ? 'priority' : 
                                 this.sortOption === 'По сроку выполнения' ? 'expDate' : null

                    let sortMethod = this.sortOption === 'По приоритету' ? 'fromBiggest' :
                                     this.sortOption === 'По сроку выполнения' ? 'fromSmaller' : null

                    filteredData = sorting(filteredData, sortMethod, objKey)
                }

                return filteredData
            },
        },

        methods: {
            onClickOpenTask(id) {
                this.$router.push('task/' + id)
            },
            reverse() {
                //this.isReverseBtnClicked = true
                console.log('reverse')
            }
        },
    }
</script>