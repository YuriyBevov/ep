<template>
    <q-dialog v-model="this.isOpen" persistent full-width position="bottom" style="min-height: 65vh;">
        <q-card class="q-pa-sm">
            <q-card-section class="q-mb-lg" v-if="this.$props.type === 'tasks'">
                <q-card-section class="q-pa-none q-mb-md">
                    <q-input outlined v-model="text" label="Поиск"/>

                    <div class="d-flex column">
                        <q-select
                            square  
                            label="Тип задач"
                            :options="['Задачи отдела(Производство)', 'Общие задачи']"
                            v-model="typeOption"
                        />

                        <q-select
                            square  
                            label="Сортировка по задачам"
                            :options="['Все задачи', 'Задачи, в которых является руководителем', 'Задачи, в которых является исполнителем', 'Задачи, в которых является участником']"
                            v-model="sortOption"
                        />
                    </div>
                </q-card-section>

                <q-card-section class="q-pa-none bordered">
                    <q-list class="d-flex row scroll-container">
                        <q-item
                            v-for="(task, i) of this.$props.infoData"
                            :key="'task_' + i"
                            class="q-pa-none q-mb-sm q-mr-sm"
                        >
                            <q-btn 
                                :color="task.role === 0 ? 'positive' : task.role === 1 ? 'negative' : task.role === -1 ? 'warning' : null" 
                                icon-right="settings" 
                                :label=task.title 
                            />
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card-section>

            <q-card-section class="q-mb-lg" v-if="this.$props.type === 'permits'">
                <q-card-section class="q-pa-none bordered">
                    <div class="d-flex row">
                        <div class="col-6 q-pr-sm">

                            <q-input
                                outlined
                                type="search" 
                                placeholder="Поиск по разрешениям"
                                class="q-mb-md"
                            />

                            <q-list class="scroll-container d-flex row flex-wrap">
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                                <q-item>
                                    <span>разрешение 1</span>
                                </q-item>
                            </q-list>
                        </div>

                        <div 
                            class="d-flex column col-6"
                        >
                            <q-input
                                outlined
                                type="search" 
                                placeholder="Поиск по группам разрешений"
                                class="q-mb-md"
                            />

                            <q-list class="scroll-container d-flex row flex-wrap">
                                <q-item>
                                    <span> Группа разрешений 1</span>
                                </q-item>
                                
                            </q-list>
                        </div>
                    </div>
                </q-card-section>
            </q-card-section>

            <q-card-actions align="right" class="q-mt-auto">
                <q-btn flat label="Закрыть" color="primary"  @click="$emit('closeModal')"  />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
    export default {
        props: {
            type:       { type: String  },
            isOpened:   { type: Boolean },
            infoData:   { type: Array   }
        },

        computed: {
            
            filteredTasks() {
                return this.$props.infoData.filter(user => user.role === type)

            }
        },

        data() {
            return {
                isOpen: this.$props.isOpened,
                taskRole: 0,
                text: '',
                sortOption: 'Все задачи',
                typeOption: 'Задачи отдела(Пр-во)'
            }
        }
    }
</script>