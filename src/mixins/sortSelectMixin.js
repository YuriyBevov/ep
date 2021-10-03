/*Миксин для компонента сортировки. Связан с компонентом SortSelect.vue*/

import SortSelect from 'src/components/COMMON/SortSelect'

export const sortSelectMixin = {
    components: {
        SortSelect
    },

    data() {
        return {
            sortOption: ''
        }
    },

    methods: {
        setSortOpt(value) {
            this.sortOption = value
        }
    }
}