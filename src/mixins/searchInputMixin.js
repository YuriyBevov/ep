/*Миксин для компонента поиска. Связан с компонентом SearchInput.vue*/

import SearchInput from 'src/components/COMMON/SearchInput'

export const searchInputMixin = {
    components: {
        SearchInput
    },

    data() {
        return {
            searchingText: ''
        }
    },

    methods: {
        setSearchField(str) {
            this.searchingText = str
        }
    }
}