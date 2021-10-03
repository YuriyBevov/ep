/*Миксин для компонента фильтрации. связан с компонентом FilterSelect.vue*/

import FilterSelect from 'src/components/COMMON/FilterSelect'

export const filterSelectMixin = {
    components: {
        FilterSelect
    },

    data() {
        return {
            filterOption: ''
        }
    },

    methods: {
        setFilterOpt(value) {
            this.filterOption = value
        }
    }
}