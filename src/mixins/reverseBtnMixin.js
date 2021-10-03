/*Миксин для компонента реверса. Связан с компонентом ReverseBtn.vue*/

import ReverseBtn from 'src/components/COMMON/ReverseBtn'

export const reverseBtnMixin = {
    props: {
        reverseStatus: { type: Boolean }
    },

    components: {
        ReverseBtn
    },

    data() {
        return {
            isReversed: false
        }
    },

    methods: {
        reverse(value) {
            console.log(this.isReversed)
            this.isReversed = value
        }
    }
}