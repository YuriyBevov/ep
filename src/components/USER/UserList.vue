<template>
    <q-list class="q-ma-none q-pa-none">
        <q-item
            v-for="(user, i) of this.$props.users"
            :key="'user_' + i"
            clickable v-ripple
            bordered
            class="q-pa-none q-mb-sm"
            style="max-width: 800px;"
        >
            <UserCard 
                :userData="user"
                :cardType="$props.showStyle"
            />
        </q-item>
    </q-list>
</template>

<script>
    import UserCard from 'src/components/USER/UserCard'

    export default {
        name: 'UserList',

        components: {
            UserCard
        },
        props: {
            users:  { type: Array },
            showStyle: { type: String}
        }
    }
</script>