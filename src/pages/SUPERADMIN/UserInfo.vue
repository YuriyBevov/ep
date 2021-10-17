<template>
    <div class="user-info">
        <div class="" v-if="this.userData">
            <q-list bordered separator class="q-mb-md">
                <q-item clickable v-ripple >
                    <q-item-section>
                    <q-item-label overline>Имя:</q-item-label>
                    <q-item-label>{{this.userData.fullName}}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple >
                    <q-item-section>
                    <q-item-label overline>Отдел:</q-item-label>
                    <q-item-label>{{this.userData.department}}{{this.userData.isDepartmentHead === true ? '(РУК)' : null}}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple >
                    <q-item-section>
                    <q-item-label overline>Роль(и):</q-item-label>
                    <q-item-label>
                        <span
                            v-for="(role, i) of this.userData.roles"
                            :key="'role_' + i"
                        >
                            {{role}}
                        </span>
                    </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple >
                    <q-item-section>
                    <q-item-label overline>Телефон:</q-item-label>
                    <q-item-label >{{this.userData.phone}}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple >
                    <q-item-section>
                    <q-item-label overline>E-mail:</q-item-label>
                    <q-item-label >{{this.userData.email}}</q-item-label>
                    </q-item-section>
                </q-item>

                <!-- добавить информацию о задачах  -->
            </q-list>

            <div>
                <q-btn label="Редактировать пользователя" color="positive" class="q-mr-sm"/>
                <q-btn label="Удалить пользователя" color="negative"/>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data() {
            return {
                userData: {}
            }
        },

        computed: {
            ...mapGetters('user', ['userList']),
        },

        methods: {
            setUserData() {
                this.userList ?
                this.userData = this.userList.find(user => user._id === this.$route.params.id) : null
            }
        },

        mounted() {
            this.setUserData()
        },

        watch: {
            userList: function() {
                this.setUserData()
            }
        }
    } 
</script>
