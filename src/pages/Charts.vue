<template>
    <div class="">
        <!--Шапка-->
        <div class="q-pa-sm">
            <h3 class="q-ma-none q-mb-sm">Статистика</h3>
        </div>

        <div class="flex row flex-wrap">
            
            <div class="d-flex column col-6 q-pa-lg">
                <PieChart    :data="pieChartData" :title="'Группы проектов:'"/>
            </div>

            <div class="d-flex column col-6 q-pa-lg">
                <div class="q-mb-md">
                    <FunnelChart :data="funnelChartData" :title="'Проекты в текущем месяце:'"/>
                </div>
                <div class="q-pa-md q-mt-auto" style="border: 1px solid #dedede;">
                    <span>Проектов выполнено за год: 682</span>
                </div>
            </div>

            <div class="col-12 q-pa-lg">
                <BarChart  :data="barChartData" :title="'Период: '"/>
            </div>
        </div>
    </div>
</template>

<script>
    import PieChart from 'src/components/charts/PieChart'
	import FunnelChart from 'src/components/charts/FunnelChart'
    import BarChart from 'src/components/charts/BarChart'

    export default {
        name: 'Tasks',

        components: {
            PieChart,
            FunnelChart,
            BarChart
        },
        
        data() {
            return {
                tab: 'common',

                barChartData: [{
                        "month": "Янв",
                        "projects": 23,
                        "tasks": 250
                    }, {
                        "month": "Фев",
                        "projects": 12,
                        "tasks": 140
                    }, {
                        "month": "Март",
                        "projects": 18,
                        "tasks": 69
                    }, {
                        "month": "Апр",
                        "projects": 4,
                        "tasks": 14
                    }, {
                        "month": "Май",
                        "projects": 64,
                        "tasks": 189
                    }, {
                        "month": "Июнь",
                        "projects": 23,
                        "tasks": 220
                    }, {
                        "month": "Июль",
                        "projects": 6,
                        "tasks": 58
                    }, {
                        "month": "Авг",
                        "projects": 46,
                        "tasks": 123
                    }, {
                        "month": "Сен",
                        "projects": 94,
                        "tasks": 94
                    }, {
                        "month": "Окт",
                        "projects": 56,
                        "tasks": 84
                    }, {
                        "month": "Ноя",
                        "projects": 0,
                        "tasks": 0
                    }, {
                        "month": "Дек",
                        "projects": 0,
                        "tasks": 0
                    }
                ],

                funnelChartData: [
                    {
                        "name": "В работе",
                        "value": 17,
                    }, 
                    {
                        "name": "Приостановленные",
                        "value": 25
                    }, 
                    {
                        "name": "Завершенные проекты",
                        "value": 37
                    }
                ],

				pieChartData: [
					{
						"title": "Ароматный мир",
						"value": 11
                    }, 
                    
                    {
						"title": "Винлаб",
						"value": 2
                    }, 
                    
                    {
						"title": "Аптека для бережливых",
						"value": 13
                    }, 
                    
                    {
						"title": "Всякий хлам",
						"value": 16
                    }, 
                    
                    {
                    	"title": "Свои проекты",
                    	"value": 9
                    },
				],
				
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

    .legend-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
        cursor: pointer;
	}

	.legend-title {
		margin-right: auto;
	}

	.legend-marker {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin-right: 20px;
        
	}
</style>

