<template>
    <q-btn @click="emitReverseStatus" icon="height"/>
</template>

<script>
    export default {
        name: "ReverseBtn",

        methods: {
            emitReverseStatus() {
                this.$emit('reverse')
            }
        }
    }
</script>