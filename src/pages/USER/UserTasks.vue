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
                <Search 
                    :arr="this.activeUserTasks"
                    @search="setSearchField"
                />

            </div>

            <div class="user-tasks__filter q-mr-xl">
                <q-select
                    filled
                    v-model="filterData"
                    :options="filterOptions"
                    label="Фильтр"
                    style="width: 250px"
                />
            </div>

            <div class="user-tasks__sort q-mr-xl">
                <q-select
                    filled
                    v-model="sortData"
                    :options="sortOptions"
                    label="Сортировка"
                    style="width: 250px"
                />
            </div>

            <div class="user-tasks__reverse">
                <q-btn @click="isReversed = !isReversed" icon="height"/>
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
    import { search } from 'src/mixins/search.js'
    // import { filter } from 'src/mixins/filter.js'
    import { filtration } from 'src/functions/filtration.js'

    export default {
        name: "TasksPage",

        mixins: [search],

        components: {
            TaskCard
        },

        data() {
            return {
                cardView: false,

                // убрать фильтрацию в миксин и компонент !!
                //filterOption: 'Все',
                filterOptions: ['Все', 'Открытая задача', 'В работе', 'Выполнена', 'Приостановлена', 'Закрыта'],
                filterData: '',

                // убрать сортировку в миксин и компонент !! 
                // добавить "По срочности: cначала срочные", "По срочности: сначала не срочные", "По сроку выполнения: близкие к сдаче", "По сроку выполнения: не близкие к сдаче"
                // вместо этого добавить стрелочки вниз вверх и делать reverse массива
                //sortOption: 'Без сортировки',
                sortOptions: ['Без сортировки', 'По срочности', 'По сроку выполнения'],
                sortData: '',

                // убрать в отдельный компонент
                isReversed: false
            }
        },

        computed: {
            ...mapGetters('task', ['activeUserTasks', 'openedTasks','taskList']),

            filteredTasks() {
                // filtration(searchOpt = null, filterOpt = null, sortOpt = null, isReversed = false, arr)

                let searchOpt = {
                    data: this.searchingText,
                    identifier: 'title'
                }

                let filterOpt = {
                    data: this.filterData !== 'Все' ? this.filterData : '',
                    identifier: 'statusDesc'
                }

                let sortOpt = {
                    isReversed: this.isReversed,
                    data: this.sortData !== 'Без сортировки' ? this.sortData : '',
                    identifier: this.sortData === 'По срочности' ? 'urgentState' : this.sortData === 'По сроку выполнения' ? 'expDate' : null
                }

                let isReversed = this.isReversed

                return filtration(searchOpt, filterOpt, sortOpt, isReversed, this.activeUserTasks )
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