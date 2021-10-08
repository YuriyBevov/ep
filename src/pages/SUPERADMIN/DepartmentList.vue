<template>
    <div class="">
        {{this.departmentList}}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'DepartmentList',

        computed: {
            ...mapGetters('department', ['departmentList']),
        }
    }
</script>