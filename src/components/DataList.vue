<template>
    <div>
        <q-list bordered class="list flex flex-wrap q-ma-none q-pa-sm" v-if="this.$props.options.data.length">
            <q-item
                v-for="(item, i) of this.$props.options.data"
                :key="'item_' + i"
                bordered
                class="item q-pa-none q-ma-sm"
            >
                <DataItem :data="item" :dataType="$props.dataType"/>
            </q-item>
        </q-list>
        <span v-else class="text-h5 text-primary">Нет данных для отображения...</span>       
    </div>
</template>

<script>
    import DataItem from 'src/components/DataItem'

    export default {
        name: 'DataList',

        components: {
            DataItem
        },

        props: {
            dataType: { type: String },
            options:  { type: Object }
        }
    }
</script>

<style lang="scss" scoped>
    .list {
        max-height: 800px;
        overflow: hidden;
        overflow-y: auto;
    }

    .item {
        width: 100%; 
        max-width: 600px;
    }
</style>