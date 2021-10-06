<template>
    <div class="user-tasks" style="max-width: 1100px;">

        <span class="user-tasks__title">Мои задачи:</span>

        <div class="user-tasks__header flex items-center q-mb-lg">
            <div class="user-tasks__toggler q-mr-xl">
                <q-toggle
                    v-model="cardView"
                    color="green"
                />
                <span>Сокр./Подр.</span>
            </div>

            <div class="user-tasks__search q-mr-xl">
                <!-- компонент поиска -->
                <SearchInput 
                    :arr="this.openedTasks"
                    @search="setSearchField"
                />

            </div>

            <div class="user-tasks__sort q-mr-xl">
                <!-- компонент сортировки -->
                <SortSelect
                    :sortOptions="['Без сортировки', 'По приоритету', 'По сроку выполнения']"
                    @sortOption="setSortOpt"
                />
            </div>

            <div class="user-tasks__reverse">
                <!-- компонент реверсивной кнопки -->
                <!-- <ReverseBtn
                    :reverseStatus="isReversed"
                    @reverse="reverse"
                />-->

                <q-btn @click="reverse" icon="height"/>
            </div>
        </div>

        <q-list class="flex user-tasks__list" :style="!this.cardView ? 'flex-direction: column;' : null" v-if="filteredTasks.length">
            <q-item
                class="user-tasks__item"
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

        <div v-else class="q-mb-xl">Задач нет ?! Попробуйте изменить параметры фильтра или возьмите открытую задачу !</div>

        Все задачи: <!-- Для тех, кто имеет доступ !-->
        <ul>
            <li
                v-for="(task, i) of taskList"
                :key="'task_i' + i"
            >
                {{task.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    import TaskCard from 'src/components/TASK/TaskCard'

    import { sortSelectMixin } from 'src/mixins/sortSelectMixin.js'
    import { searchInputMixin } from 'src/mixins/searchInputMixin.js'

    import { searching } from 'src/functions/searching.js'
    import { sorting } from 'src/functions/sorting.js'

    export default {
        name: "OpenedTasksPage",

        mixins: [searchInputMixin, sortSelectMixin],

        components: {
            TaskCard
        },

        data() {
            return {
                cardView: false
            }
        },

        computed: {
            ...mapGetters('task', ['openedTasks', 'taskList']),

            filteredTasks() {
                let filteredData = this.openedTasks

                if(this.searchingText) {
                    filteredData = searching(filteredData, this.searchingText, 'title')
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
            reverse() {
                //this.isReverseBtnClicked = true
                console.log('reverse')
            }
        },
    }
</script>