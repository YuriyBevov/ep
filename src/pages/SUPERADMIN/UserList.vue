<template>
    <div>
        {{this.userList}}
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    
    export default {
        name: 'UserList',

        computed: {
            ...mapGetters('user', ['userList'])
        }
    }
</script>