/*Миксин для компонента реверса. Связан с компонентом ReverseBtn.vue*/

import ReverseBtn from 'src/components/COMMON/ReverseBtn'

export const reverseBtnMixin = {
    components: {
        ReverseBtn
    },

    data() {
        return {
            isReversed: false
        }
    },

    methods: {
        setReverseStatus(value) {
            console.log(this.isReversed)
            this.isReversed = value
        }
    }
}