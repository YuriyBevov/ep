<template>
    <div class="">
        <!--Шапка-->
        <div class="q-pa-sm">
            <h3 class="q-ma-none q-mb-sm">Статистика</h3>
        </div>

        <div class="q-mb-sm">
            <q-tabs
                v-model="tab"
                no-caps
                outside-arrows
                mobile-arrows
                class="bg-secondary text-white shadow-2"
            >
                
                <q-tab name="common" label="Общая" />
                <q-tab name="projects" label="Проекты" />
                <q-tab name="tasks" label="Задачи" />
                <q-tab name="users" label="Пользователи" />
            </q-tabs>
        </div>

        <div class="">
            <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
            >
                <q-tab-panel name="common">
                    <q-list
                    bordered separator 
                        class="stat-list d-flex row"
                        style="border-radius: 15px;"
                    >
                        <q-item class="stat-list__item row col-6 q-pa-none d-flex items-center justify-between">
                            <div 
                                style="border: 1px solid red;"
                                class="q-pa-md"
                            ><span class="text-secondary col-7" style="font-size: 24px;">Групп проектов:</span></div>
                            <div 
                                class="q-pa-md"
                            >
                                <span class="text-primary d-flex items-center justify-center" style="font-size: 30px;">15</span></div>
                            
                        </q-item>

                        <q-item class="stat-list__item row col-6 q-pa-none d-flex items-center justify-between">
                            <span class="text-secondary col-7" style="font-size: 24px;">Проектов в работе:</span>
                            <span class="text-primary d-flex items-center justify-center" style="font-size: 30px;">135</span>
                        </q-item>
                    </q-list>
                </q-tab-panel>

                    
                <q-tab-panel name="projects" class="q-pa-none"> 
                    
                </q-tab-panel>
    
                <q-tab-panel name="tasks">
                    
                </q-tab-panel>

                <q-tab-panel name="users">
                    
                </q-tab-panel>

            </q-tab-panels>
        </div>       
    </div>
</template>
<script>
    

    export default {
        name: 'Tasks',

        components: {
            
        },
        
        data() {
            return {
                tab: 'common'
            }
        },
    }
</script>

<style lang="scss">
    .stat-list__item {
        &:nth-child(odd) {
            border-right: 1px solid #dedede;
        }

        &:nth-child(2) {
            border-top: 0 !important;
        }

        @media(max-width: 768px) {
            min-height: 70px !important;

            span:first-child {
                font-size: 18px !important;
                padding-right: 10px !important;
            }

            span:last-child {
                font-size: 22px !important;
            }
        }

        @media(max-width: 568px) {
            min-height: 70px !important;

            span:first-child {
                font-size: 12px !important;
                padding-right: 10px !important;
            }

            span:last-child {
                font-size: 14px !important;
            }
        }

        @media(max-width: 480px) {
            min-height: 70px !important;

            span:first-child {
                font-size: 12px !important;
                padding-right: 10px !important;
            }

            span:last-child {
                font-size: 14px !important;
            }
        }
        
    }
</style>

