<template>

    <div class="d-flex column">
        <div class="q-mb-md" v-if="this.$props.dataType !== 'main'">
            <span class="text-h4">Юрий Кураев</span>
        </div>
        
        <div class="q-mb-md">
            <BarChart  :data="this.$props.data.barChartData" :title="'За год: '" :dataType="'userStat'"/>
        </div>

        <div class="q-pa-md q-mt-auto" style="border: 1px solid #dedede;">
            <span>Задач выполнено: 682</span>
        </div>
    </div>

</template>

<script>
    import BarChart from 'src/components/charts/BarChart'
    export default {
        name: 'StatCharts',

        props: {
            dataType: { type: String },
            data: { type: Object }
        },

        components: {
            BarChart
        }
    }
</script>