<template>
    <div class="task-info">

        <!-- 

            Подробная карточка задачи.

            Функционал:
            Подробное описание задачи + галерея +  чат

            + модалка с редактированием задачи(если есть разрешение) =>

           =>   Ред-е участников(доб/уд),
                Смена отв.лица(доб/уд, текущее отв лицо не может удалить сам себя, если он один),
                Ред-е исполнителей(доб/уд),
                Смена статуса задачи
                Чат задачи
                Галерея задачи
                Ред. кфф срочности ?? Должен ли вобще быть у задачи ?!
                Список подзадач -> переход в 

        -->
        <div class="task-info__part q-pa-sm"  v-if="this.currentTask">
            <q-list bordered separator>
                <q-item clickable v-ripple >
                    <q-item-section>
                    <q-item-label overline>Группа проектов:</q-item-label>
                    <q-item-label>{{this.currentTask.projectMember}}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple >
                <q-item-section>
                    <q-item-label overline>Название задачи:</q-item-label>
                    <q-item-label>{{this.currentTask.title}} от <!--{{this.setDate(this.currentTask.createdBy.createdDate).date}}/{{this.setDate(this.currentTask.createdBy.createdDate).time}}--></q-item-label>
                </q-item-section>
                </q-item>

                <q-item clickable v-ripple class="flex column">
                    <q-item-section>
                    <q-item-label overline>Описание задачи:</q-item-label>
                    <q-item-label>{{this.currentTask.description}}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple class="flex column">
                    <q-item-section>
                    <q-item-label overline>Статус задачи:</q-item-label>
                    <q-item-label>{{this.currentTask.statusDesc}}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple class="flex column">
                    <q-item-section>
                    <q-item-label overline>Дата сдачи:</q-item-label>
                    <!--<q-item-label>{{this.setDate(this.currentTask.expDate).date}}/{{this.setDate(this.currentTask.expDate).time}}</q-item-label>-->
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple class="flex column">
                    <q-item-section>
                        <q-item-label overline>Отделы:</q-item-label>
                        <q-item-label>
                            <span>{{this.currentTask.department.title}}</span>
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple class="flex column">
                    <q-item-section>
                        <q-item-label overline>Ответственные лица:</q-item-label>
                        <q-item-label>
                            <span>
                                <!--{{ this.currentTask.master.fullName }} вызывает ошибку-->
                            </span>
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple class="flex column">
                    <q-item-section>
                        <q-item-label overline>Исполнители:</q-item-label>
                        <q-item-label>
                            <span 
                                v-for="(perf, i) of this.currentTask.performers"     
                                :key="'perf_' + i"
                            >   
                                {{perf.fullName}} <span v-if="i < currentTask.performers.length - 1">/</span>
                            </span>
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple class="flex column">
                    <q-item-section>
                        <q-item-label overline>Участники:</q-item-label>
                        <q-item-label>
                            <span 
                                v-for="(member, i) of this.currentTask.members"     
                                :key="'member_' + i"
                            >   
                                {{member.fullName}} <span v-if="i < currentTask.members.length - 1">/</span>
                            </span>
                        </q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
        </div>

        <div class="task-info__part q-pa-sm">
            <!--галерея-->
            <div class="task-info__gallery">
                <q-carousel
                    swipeable
                    animated
                    arrows
                    v-model="slide"
                    :fullscreen.sync="fullscreen"
                    infinite
                >
                    <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg">
                        <div class="absolute-bottom task-info__gallery-caption">
                            <div class="text-caption">Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains Mountains</div>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
                        <div class="absolute-bottom task-info__gallery-caption">
                            <div class="text-caption">Mountains</div>
                        </div>
                    </q-carousel-slide>
            
                    <template v-slot:control>
                        <q-carousel-control
                            position="top-right"
                            :offset="[18, 18]"
                        >
                            <q-btn
                            push round dense color="white" text-color="primary"
                            :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                            @click="fullscreen = !fullscreen"
                            />
                        </q-carousel-control>
                    </template>
                </q-carousel>
            </div>
            <!-- Чат задачи-->
            <div style="width: 100%; height: 100%;" class="task-info__chat">
                <div class="task-info__chat-wrapper">
                    <q-chat-message
                    name="me"
                    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                    :text="['hey, how are you?']"
                    stamp="7 minutes ago"
                    sent
                    bg-color="amber-7"
                    />
                    <q-chat-message
                    name="Jane"
                    avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                    :text="['doing fine, how r you?']"
                    stamp="4 minutes ago"
                    text-color="white"
                    bg-color="primary"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getDate } from 'src/functions/getDate.js'

    export default {
        name: "TaskInfo",

        data() {
            return {
                isEditable: false,
                slide: 1,
                fullscreen: false,

                currentTask: {}
            }
        },

        computed: {
            ...mapGetters('task', ['taskList']),
            ...mapGetters('user', ['activeUser'])
        },

        methods: {

            onReset() {
                console.log('reset')
            },

            onSubmit() {
                console.log('submit')
            },

            onToggleChange() {
                console.log('change')
            },

            setTaskInfo() {
                this.currentTask = this.taskList.find(task => task.id === this.$route.params.id)
                console.log(this.currentTask)
            },

            setDate(date) {
                return getDate(date);
            },
        },

        mounted() {
            this.setTaskInfo()
        },

        watch: {
            taskList: function() {
                this.setTaskInfo()
            }
        }
    }
</script>

<style lang="scss">
    .task-info {
        display: flex;

        &__part {
            display: flex;
            flex-direction: column;
            width: 50%;
            height: fit-content;
            max-width: 500px;
        }

        &__chat {
            margin-top: auto;
            max-height: 300px;
            overflow-y: hidden;

            &-wrapper {
                overflow-y: scroll;
                max-height: inherit;
            }
        }

        &__gallery {
            margin-bottom: 20px;

            &-caption {
                text-align: center;
                padding: 12px;
                color: white;
                background-color: rgba(0, 0, 0, .3);
            }
        }
    }
</style>  