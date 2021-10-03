<template>
    <div class="user-tasks" style="max-width: 1100px;">

        <span class="user-tasks__title">Мои задачи:</span> 

        <!-- <div class="">
            <span>Компонент текущих задач пользователя: </br></span>
            <span>
                Пользователь видит два поля:</br>

                <span>
                    1) Поле с ЕГО текущими задачами, в которых он состоит.</br>
                       Он может не играть никакой роли в данной задаче, а просто состоять в ней.</br>
                </span>

                <span>
                    2) Поле с открытыми задачами(также доступными на странице "Открытые задачи").</br>
                       При переходе в открытую задачу, пользователь может назначить себя исполнителем. 
                </span>
            </span>
        </div> -->

        <!--Добавить поиск и сортировку задач, а также переключение вида с карточек на список-->

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
                    :arr="this.activeUserTasks"
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

            <div class="user-tasks__sort q-mr-xl">
                <!-- компонент сортировки -->
                <SortSelect
                    :sortOptions="['Без сортировки', 'По срочности', 'По сроку выполнения']"
                    @sortOption="setSortOpt"
                />
            </div>

            <div class="user-tasks__reverse">
                <!-- компонент реверсивной кнопки -->
                <ReverseBtn
                    @reverse="reverse"
                />
            </div>
        </div>

        <q-list class="flex user-tasks__list" :style="!this.cardView ? 'flex-direction: column;' : null">
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

        Открытые задачи:

        <ul>
            <li
                v-for="(openedTask, i) of openedTasks"
                :key="'openedTask_i' + i"
            >
                {{openedTask.title}}
            </li>
        </ul>

        Все задачи:
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
    // добавить миксины сортировки, фильтрации и реверса!!
    import { filtration } from 'src/functions/filtration.js'
    import { FilterSort } from 'src/functions/FilterSort';
    import ReverseBtn from 'src/components/COMMON/ReverseBtn'

    import { sortSelectMixin } from 'src/mixins/sortSelectMixin.js'
    import { filterSelectMixin } from 'src/mixins/filterSelectMixin.js'
    import { searchInputMixin } from 'src/mixins/searchInputMixin.js'
    // import { reverseBtnMixin } from 'src/mixins/reverseBtnMixin.js'   

    export default {
        name: "TasksPage",

        mixins: [searchInputMixin, filterSelectMixin, sortSelectMixin],

        components: {
            TaskCard,
            ReverseBtn
        },

        data() {
            return {
                cardView: false
            }
        },

        computed: {
            ...mapGetters('task', ['activeUserTasks', 'openedTasks', 'taskList']),

            filteredTasks() {
                return new FilterSort(this.activeUserTasks, {
                    searchOpt: {
                        data: this.searchingText === '' ? null : this.searchingText,
                        objKey: 'title'
                    },

                    filterOpt: {
                        data: this.filterOption === '' || this.filterOption === 'Все' ? null : this.filterOption,
                        objKey: 'statusDesc'
                    },

                    sortOpt: {
                        data: this.sortOption === '' ? null : this.sortOption,
                        objKey: this.sortOption === 'По срочности' ? 'urgentState' : this.sortOption === 'По сроку выполнения' ? 'expDate' : null
                    } 
                }).init()
            },
        },

        methods: {
            reverse() {
                // console.log(this.activeUserTasks)
                // this.activeUserTasks.reverse()
            }
        }
    }
</script>

<style lang="scss">
    .user-tasks {
        &__title {
            display: block;
            margin-bottom: 20px;
        }

        &__list {
            margin-bottom: 30px;
        }

        &__item {
            padding: 0;
        }
    }
</style>