<!-- Компонент поиска. Работает в связке с миксином search.js. Возвращает строку для поиска. -->

<template>
    <q-input
        square 
        outlined
        v-model="search" 
        type="search" 
        placeholder="Поиск"
        style="width: 200px;"
        class="search"
        @input="emitSearchText"
    >
        <template v-slot:append>
            <q-icon name="search" v-if="!search.length"/>
            <q-btn 
                flat 
                @click="reset()"  
                v-else
            >
                <q-icon name="close"/>
            </q-btn>
        </template>
    </q-input>
</template>

<script>
    export default {
        name: "Search",

        data() {
            return {
                search: ''
            }
        },

        methods: {
            emitSearchText() {
                this.$emit('search', this.search)
            },

            reset() {
                this.search = ''
                this.emitSearchText()
            }
        }
    }
</script>

<style lang="scss">
    .search {
        .q-btn__wrapper {
            padding: 0;
        }

        .q-icon {
            padding: 4px 8px;
        }
    }
</style>