<template>
    <div class="d-flex column">
        <div class="d-flex items-center q-mb-md row">
            <span class="q-mr-md">{{ this.$props.title }}</span>
            <q-select square outlined v-model="model" :options="options" class="col-2"/>
        </div>

        <div class="q-mb-lg">
            <div class="position-relative q-mb-lg">
                <div id="barchart" style="min-height: 500px;"></div>
            </div>
        </div>

        <div class="q-mt-auto">
            
        </div>
    </div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
	import * as am4charts from "@amcharts/amcharts4/charts";
	import am4themes_animated from "@amcharts/amcharts4/themes/animated";
    
	am4core.useTheme(am4themes_animated);

    export default {
        name: 'BarChart',

        props: { data: { type: Array }, title: { type: String }, dataType: { type: String }},

        data() {
            return {
                totalCount: null,
                model: '2021',
                options: [
                    '2021', '2020', '2019'
                ]
            }
        },

        methods: {
            initBarChart() {

            am4core.useTheme(am4themes_animated);

            // Create chart instance
            var chart = am4core.create("barchart", am4charts.XYChart);

            // Add data
                chart.data = this.$props.data;

                // Create axes
                var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "month";
                // categoryAxis.title.text = "Local month offices";
                categoryAxis.renderer.grid.template.location = 0;
                categoryAxis.renderer.minGridDistance = 20;

                var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                // valueAxis.title.text = "Expenditure (M)";

                // Create series
                if(this.$props.dataType !== 'userStat') {
                    var series = chart.series.push(new am4charts.ColumnSeries());
                    series.dataFields.valueY = "projects";
                    series.dataFields.categoryX = "month";
                    series.name = "projects";
                    series.tooltipText = "Выполненных проектов: [bold]{valueY}[/]";
                    series.stacked = true;
                }

                var series2 = chart.series.push(new am4charts.ColumnSeries());
                series2.dataFields.valueY = "tasks";
                series2.dataFields.categoryX = "month";
                series2.name = "tasks";
                series2.tooltipText = "Выполненных задач: [bold]{valueY}[/]";
                series2.stacked = true;

                // Add cursor
                chart.cursor = new am4charts.XYCursor();
            }
        },

        mounted() {
            this.initBarChart()
        },

        beforeUnmount() {
			if (this.chart) {
				this.chart.dispose();
			}
		}
    }
</script>