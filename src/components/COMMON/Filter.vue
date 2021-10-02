<!--<template>
    <q-select
        filled
        v-model="filterData"
        :options="filterOptions"
        label="Фильтр"
        style="width: 250px"
        @input="emitFilterOpt"
    />
</template>

<script>
    export default {
        data() {
            return {
                filterOption: 'Все',
                filterOptions: ['Все', 'Открытая задача', 'В работе', 'Выполнена', 'Приостановлена', 'Закрыта'],
                filterData: '',
            }
        },

        methods: {
            emitFilterOpt() {
                this.$emit('setFilterOpt', this.filterData)
            }
        }
    }
</script>-->