<template>
    <q-select
        filled
        v-model="option"
        :options="this.$props.sortOptions"
        label="Сортировка"
        style="width: 250px"
        @input="emitSortOption"
    />
</template>

<script>
    export default {
        name: "SortSelect",

        props: {
            sortOptions: { type: Array }
        },

        data() {
            return {
                option: ''
            }
        },

        methods: {
            emitSortOption() {
                this.$emit('sortOption', this.option)
            },

            reset() {
                this.option = ''
                this.emitSortOption()
            }
        }
    }
</script>