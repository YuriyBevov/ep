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
            </div> 
            
            Логика : 

            если задача открытая, у нее нет отв лица. отв лицо может быть только одно. если отв лицо назначено, по умолчанию он становится исполнителем

            только создатель задачи может сменить отв.лицо
        -->

            

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

        <div v-else class="q-mb-xl">Задач нет ?! Возможно необходимо изменить параметры поиска ?</div>

        <ShortTaskCard
            :title="'Открытые задачи'"
            :emptyText="'Открытых задач пока нет...'"
            :color="'#C10015'"
            :tasks="this.openedTasks.length ? this.openedTasks : []"
            @openTask="onClickOpenTask"
        />

        <ShortTaskCard
            :title="'Все задачи'"
            :emptyText="'Задач пока нет...'"
            :color="'#1976D2'"
            :tasks="this.taskList.length ? this.taskList : []"
            @openTask="onClickOpenTask"
        />
        
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import TaskCard from 'src/components/TASK/TaskCard'
    import ShortTaskCard from 'src/components/TASK/ShortTaskCard'
    //import ReverseBtn from 'src/components/COMMON/ReverseBtn'

    import { sortSelectMixin } from 'src/mixins/sortSelectMixin.js'
    import { filterSelectMixin } from 'src/mixins/filterSelectMixin.js'
    import { searchInputMixin } from 'src/mixins/searchInputMixin.js'
    //import { reverseBtnMixin } from 'src/mixins/reverseBtnMixin.js'

    import { searching } from 'src/functions/searching.js'
    import { filtration } from 'src/functions/filtration.js'
    import { sorting } from 'src/functions/sorting.js'

    export default {
        name: "TasksPage",

        mixins: [searchInputMixin, filterSelectMixin, sortSelectMixin],

        components: {
            TaskCard,
            ShortTaskCard
        },

        data() {
            return {
                cardView: false,
                // isReversed: false,
                // isReverseBtnClicked: false
            }
        },

        computed: {
            ...mapGetters('task', ['activeUserTasks', 'openedTasks', 'taskList']),

            filteredTasks() {
                let filteredData = this.activeUserTasks

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