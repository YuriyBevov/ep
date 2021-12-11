<template>
    <q-select
        filled
        v-model="option"
        :options="this.$props.filterOptions"
        label="Фильтр"
        style="width: 250px"
        @input="emitFilterOption"
    />
</template>

<script>
    export default {
        name: "FilterSelect",

        props: {
            filterOptions: { type: Array }
        },

        data() {
            return {
                option: ''
            }
        },

        methods: {
            emitFilterOption() {
                this.$emit('filterOption', this.option)
            },

            reset() {
                this.option = ''
                this.emitFilterOption()
            }
        },

        mounted() {
            console.log(this.$props.filterOptions)
        }
    }
</script>