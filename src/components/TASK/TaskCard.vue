<template>
    <q-card 
        flat 
        bordered 
        :style="this.$props.cardView ? 'width: 320px;' : 'width: 100%; display: flex; align-items: center;'"
        class="task-card"
    >
        <q-card-section v-if="!this.$props.cardView" :style="!this.$props.cardView ? 'padding: 0; padding-left: 15px; flex-grow: 1;' : null">
            <div class="flex items-center">
                <span class="task-card__title task-card__title--full text-h6 q-mr-auto" >{{this.$props.taskData.title}}</span>
                <span
                    :class="setTaskStatusColor(this.$props.taskData.status)"
                    class="q-mr-lg"
                >
                    {{this.$props.taskData.statusDesc}}
                </span>

                <span class="text-orange-4 q-mr-lg">Приоритет: {{this.$props.taskData.priority}}</span>

                <span class="text-caption">
                    {{this.setDate(this.$props.taskData.expDate).date}} / {{this.setDate(this.$props.taskData.expDate).time}}
                    <!--обратный отсчет-->
                </span>
            </div>
        </q-card-section>
        
        <q-card-section v-if="this.$props.cardView">
            <!-- Проект задачи -->
            <div class="text-overline flex justify-between">
                <span class="text-orange-9">{{this.$props.taskData.projectMember}}</span>
                <span
                    :class="setTaskStatusColor(this.$props.taskData.status)"
                >
                    {{this.$props.taskData.statusDesc}}
                </span>
            </div>
            <!-- Название задачи -->  
            <div class="text-h5 q-mt-sm q-mb-xs flex justify-between items-center">
                <span class="task-card__title">{{this.$props.taskData.title}}</span>
                <div class="flex column items-end text-caption" >
                    <span class="text-orange-4">Приоритет: {{this.$props.taskData.priority}}</span>
                    <span>{{this.setDate(this.$props.taskData.expDate).date}} / {{this.setDate(this.$props.taskData.expDate).time}}</span>
                </div>
            </div>
            <!--Описание задачи-->
            <div class="text-caption text-grey cmn__text cmn__text--ellipsys">
                {{this.$props.taskData.description}}
            </div>
        </q-card-section>

        <q-card-actions>
            <q-btn 
                flat 
                color="dark" 
                icon-right="navigate_next"
                :label="this.$props.cardView ? 'Перейти в задачу' : null"
                @click="onClickOpenTaskInfo($props.taskData.id)"
            />

            <q-space />
            <q-btn
                color="grey"
                round
                flat
                dense
                :icon="isCardExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                @click="isCardExpanded = !isCardExpanded"
                v-if="this.$props.cardView"
            />
        </q-card-actions>

        <q-slide-transition >
            <div v-show="isCardExpanded && this.$props.cardView">
                <q-separator/>
                <q-card-section class="text-subtitle2">
                    <!--Кем создано-->
                    <div class="text-overline text-grey">
                        Создатель: {{this.$props.taskData.createdBy.fullName}}
                    </div>
                    <!--Когда создано-->
                    <div class="text-overline text-grey">
                        <span>Дата создания: </span>
                        <span> {{this.setDate(this.$props.taskData.createdBy.createdDate).date}} / {{this.setDate(this.$props.taskData.createdBy.createdDate).time}}</span>
                    </div>
                    <!-- ВСЕ участники задачи -->
                    <div class="text-overline text-grey">
                        Участники:
                        <ul class="cmn__list">
                            <li
                                v-for="(member, i) of this.$props.taskData.members"
                                :key="'member_' + i"
                            >
                                {{member.fullName}}
                            </li>
                        </ul>
                    </div>
                    <!-- Исполнители задачи -->
                    <div class="text-overline text-grey">
                        Исполнители:
                        <ul class="cmn__list">
                            <li
                                v-for="(performer, i) of this.$props.taskData.performers"
                                :key="'performer_' + i"
                            >
                                {{performer.fullName}}
                            </li>
                        </ul>
                    </div>
                    <!-- Подзадачи -->

                    <div class="text-overline text-grey">
                        Подзадачи:
                        <ul class="cmn__list" v-if="this.$props.taskData.subtasks">
                            <li
                                v-for="(subtask, i) of this.$props.taskData.subtasks"
                                :key="'subtask_' + i"
                            >
                                {{subtask.title}}
                            </li>
                        </ul>
                        <span v-else>Нет</span>
                    </div>
                    <!-- Отв лицо задачи -->
                    <div class="text-overline text-grey">

                        Ответственное лицо:

                        <p class="q-pl-xl">{{this.$props.taskData.master.fullName}}</p>
                        <!-- <ul class="cmn__list">
                            <li
                                v-for="(master, i) of this.$props.taskData.master"
                                :key="'master_' + i"
                            >
                                {{master.fullName}}
                            </li>
                        </ul> -->
                    </div>


                </q-card-section>
            </div>
        </q-slide-transition>
    </q-card>
</template>

<script>
    import { getDate } from 'src/functions/getDate.js'

    export default {
        name: "TaskCard",

        props: {
            taskData: { type: Object },
            cardView: { type: Boolean }
        },

        data() {
            return {
                isCardExpanded: false
            }
        },

        methods: {
            setTaskStatusColor(statusList) {

                return  this.$props.taskData.status === 'isOpened' ? 'text-red-14'   :
                        this.$props.taskData.status === 'inWork'   ? 'text-green-12' :
                        this.$props.taskData.status === 'isFrozen' ? 'text-grey-4'   :
                        this.$props.taskData.status === 'isDone'   ? 'text-green-10' :
                        this.$props.taskData.status === 'isClosed' ? 'text-grey-10'  : null
            },

            setDate(date) {
                return getDate(date);
            },

            onClickOpenTaskInfo(id) {
                this.$router.push('/task/' + id)
            }
        }
    }
</script>

<style lang="scss">
    .task-card {
        &__title {
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            max-width: 150px;

            &--full {
                max-width: 400px;
            }
        }
    }
</style>