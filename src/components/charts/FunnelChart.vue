<template>
    <div class="d-flex column q-pa-md" style="border: 1px solid #dedede;">
        <div class="flex items-center q-mb-md " style="border-bottom: 1px solid #dedede; height: 50px;">
            <span class="">{{ this.$props.title }}</span>
        </div>

        <div class="q-mb-lg">
            <div class="position-relative q-mb-lg">
                <div id="funnelchart" style="min-height: 260px; width: 280px;" class=""></div>
            </div>
            
            <div id="funnellegend" class="mt-auto"></div>
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
        name: 'FunnelChart',

        props: { data: { type: Array }, title: { type: String }},

        data() {
            return {
                totalCount: null
            }
        },

        methods: {
            initFunnelChart() {
                let chart = am4core.create("funnelchart", am4charts.SlicedChart);

                chart.data = chart.data = this.$props.data

                chart.data.forEach(item => this.totalCount += item.value)

                chart.colors.list = [
                    am4core.color("#2E7233"),
                    am4core.color("#61B965"),
                    am4core.color("#E8F5E9")
                ];

                // Add and configure Series
                let series = chart.series.push(new am4charts.PyramidSeries());

                series.colors.list = [
                    am4core.color("#2E7233"),
                    am4core.color("#61B965"),
                    am4core.color("#E8F5E9")
                ];

                series.dataFields.value = "value";
                series.dataFields.category = "name";
                series.topWidth = "100%";
                series.bottomWidth = "40%";

                series.tooltip.label.disabled = false;
                series.labels.template.disabled = true;

                // Create custom legend
                chart.events.on("ready", function(event) {
                    chart.customLegend = document.getElementById('funnellegend');

                    series.dataItems.each((row, i) => {                       
                        let color = chart.colors.getIndex(i);
                        let value = row.value;

                        let item = document.createElement("div");
                        item.innerHTML += '<div class="legend-item" id="legend-item-' + i + '"><div class="legend-marker" style="background: ' + color + '"></div><span class="legend-title">' + row.category + '</span><div class="legend-value">' + value + '</div></div>';                   
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
                        item.classList.remove('item-disabled')
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
            this.initFunnelChart()
		},

		beforeUnmount() {
			if (this.chart) {
				this.chart.dispose();
			}
		}
    }
</script>

<style lang="scss">
    .item-disabled {
        opacity: 0.5;
    }
</style>