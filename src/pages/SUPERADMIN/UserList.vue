<template>
    <div>
        <q-list>
            <q-item
                v-for="(user, i) of this.userList"
                :key="'user_i' + i"
            >
                {{user}}
                {{ user.fullName }} ({{ user.department }}) 
            </q-item>
        </q-list>
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