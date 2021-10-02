/*Миксин для компонента поиска. Возврашает искомое слово, для дальнейшего поиска по массиву, с использованием функции filtration.js*/

import Search from 'src/components/COMMON/Search'

export const search = {
    components: {
        Search
    },

    data() {
        return {
            searchingText: ''
        }
    },

    methods: {
        setSearchField(str = '') {
            this.searchingText = str
        }
    }
}