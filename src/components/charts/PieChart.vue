<template>
    
    <div class="d-flex column q-pa-md" style="border: 1px solid #dedede;">
        <div class="flex items-center q-mb-md " style="border-bottom: 1px solid #dedede; height: 50px;">
            <span class="q-mb-md">{{ this.$props.title }}</span>
        </div>

        <div class="q-mb-lg">
            <div class="position-relative q-mb-lg">
                <div id="chartdiv" style="min-height: 260px;" class=""></div>
            </div>
            <div id="legend" class="mt-auto"></div>
        </div>
        
        <div class="flex items-center" style="border-top: 1px solid #dedede; height: 50px;">
            <span class="d-block">Всего: {{ this.totalCount }}</span>
        </div>
    </div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
	import * as am4charts from "@amcharts/amcharts4/charts";
	import am4themes_animated from "@amcharts/amcharts4/themes/animated";

	am4core.useTheme(am4themes_animated);

    export default {
        name: 'PieChart',

        props: { data: { type: Array }, title: { type: String }},

        data() {
            return {
                totalCount: null
            }
        },

        methods: {
            initPieChart() {
                const chart = am4core.create('chartdiv', am4charts.PieChart);

                // Add data
                chart.data = this.$props.data

                chart.data.forEach(item => this.totalCount += item.value)

                chart.colors.list = [
                    am4core.color("#EF7E76"),
                    am4core.color("#8EB3F5"),
                    am4core.color("#81ADBB"),
                    am4core.color("#2E7233"),
                    am4core.color("#48964C"),
                    am4core.color("#61B965"),
                    am4core.color("#C8E6C9"),
                    am4core.color("#E8F5E9"),
                    am4core.color("#2CD873"),
                    am4core.color("#DDDDDD"),
                    am4core.color("#999999"),
                    am4core.color("#333333"),
                    am4core.color("#97F277"),
                    am4core.color("#BCBD63"),
                    am4core.color("#74E3C7"),
                ];

                // Add and configure Series
                let series = chart.series.push(new am4charts.PieSeries());
                series.colors.list = [
                    am4core.color("#EF7E76"),
                    am4core.color("#8EB3F5"),
                    am4core.color("#81ADBB"),
                    am4core.color("#2E7233"),
                    am4core.color("#48964C"),
                    am4core.color("#61B965"),
                    am4core.color("#C8E6C9"),
                    am4core.color("#E8F5E9"),
                    am4core.color("#2CD873"),
                    am4core.color("#DDDDDD"),
                    am4core.color("#999999"),
                    am4core.color("#333333"),
                    am4core.color("#97F277"),
                    am4core.color("#BCBD63"),
                    am4core.color("#74E3C7"),
                ];              

                series.dataFields.value = "value";
                series.dataFields.category = "title";
                series.labels.template.disabled = true;
                series.slices.template.stroke = "#ffffff";
                series.slices.template.strokeWidth = 2;

                chart.radius = am4core.percent(85);
                chart.innerRadius = "3";
                chart.clickable = true;

                // Create custom legend
				chart.events.on("ready", function(event) {
					chart.customLegend = document.getElementById('legend');

					series.dataItems.each((row, i) => {
						let slice = series.dataItems.getIndex(i);
						let color = chart.colors.getIndex(i);
						let value = row.value;

						let item = document.createElement("div");
						item.innerHTML = '<div class="legend-item" id="legend-item-' + i + '"><div class="legend-marker" style="background: ' + color + '"></div><span class="legend-title">' + row.category + '</span><div class="legend-value">' + value + '</div></div>';
						item.onclick = () => toggleSlice(item, value, i, series);
                        item.onmouseover = () => hoverSlice(i, series);
                        item.onmouseout = () => blurSlice(i, series);

						chart.customLegend.appendChild(item);
					});
				});

                const toggleSlice = (item, value, i, series) => {
                    let slice = series.dataItems.getIndex(i);
                    if (slice.visible) {
                        slice.hide();

                        if(!item.classList.contains('item-disabled')) {
                            this.totalCount -= value
                        }
                        item.classList.add('item-disabled');
                    }
                    else {
                        slice.show();
                        if(item.classList.contains('item-disabled')) {
                            this.totalCount += value
                        }
                        item.classList.remove('item-disabled');
                    }
                }

                function hoverSlice(i, series) {
                    
                    let slice = series.slices.getIndex(i);
                    slice.isHover = true;
                }

                function blurSlice(i, series) {
                    let slice = series.slices.getIndex(i);
                    slice.isHover = false;
                }
            }
        },

        mounted() {
            this.initPieChart()
		},

		beforeUnmount() {
			if (this.chart) {
				this.chart.dispose();
			}
		}
    }
</script>

<style>
    .item-disabled {
        opacity: 0.5;
    }
</style>