<template>
    <q-inner-loading :showing="this.$props.loadingState">
        <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
</template>

<script>
    export default {
        name: "Loader",

        props: {
            loadingState: {type: Boolean, default: true }
        },
    }
</script>

<style lang="scss">
    .q-inner-loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: skyblue;
        opacity: 0.9;
    }
</style>