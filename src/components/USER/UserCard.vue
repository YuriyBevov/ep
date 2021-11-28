<template>
    <div
        class="user-card q-pa-sm full-width"
    >
        <div class="flex items-center no-wrap q-mb-md">
            <div class="flex items-center q-mr-auto">
                <span class="text-h6 text-positive q-mr-md q-mb-xs">Производство/Монтажник</span>
                <span class="text-h6 text-primary q-mr-md q-mb-xs">Добавлен: 05.05.1985 18.22</span>
            </div>

            <q-badge 
                outline
                :color="this.user.isOnline ? 'positive' : 'negative'" 
                :label="this.user.isOnline ? 'Online' : 'Offline'" 
                style="width: fit-content;"
                class="q-pa-sm"
            />
        </div>

        <div class="q-mt-auto q-mb-md">
            <router-link  :to="'/user/' + this.$props.userData.id"class="text-h4 text-no-wrap">{{this.$props.userData.fullName}}</router-link>

            <div class="flex q-pt-md">
                <div class="flex column q-mb-sm q-mr-md">
                    <span class="text-h6 text-primary q-mb-xs">Телефон:</span>
                    <a href="#" class="text-h5 text-blue-6">{{this.$props.userData.phone}}</a>
                </div>
    
                <div class="flex column">
                    <span class="text-h6 text-primary q-mb-xs">E-mail:</span>
                    <a href="#" class="text-h5 text-blue-6">{{this.$props.userData.email}}</a>
                </div>
            </div>
        </div>

        <div class="flex row">
            <q-btn round color="orange-10" icon="task" class="q-mb-sm q-mr-xs"
                @click="initUserInfoModal('tasks')"
            />

            <q-btn round color="indigo" icon="rule" class="q-mb-sm q-mr-md"
                @click="initUserInfoModal('permits')"
            />
            
            <q-btn round color="primary" icon="settings" class="q-mb-sm q-mr-xs" @click="isUserAddEditModalOpened = true"/>
            <q-btn round color="negative" icon="delete" class="q-mb-sm q-mr-xs"/>
            <q-btn round color="warning" icon="block" class="q-mb-sm"/>
        </div>
        
        <UserInfoModal
            v-if="this.isUserInfoModalOpened"
            :type="this.userInfoModalType"
            :isOpened="this.isUserInfoModalOpened"
            :infoData="this.userInfoModalType === 'tasks' ? this.$props.userData.tasks : this.$props.userData.permits"
            
            @closeModal="closeUserInfoModal"
        />

        <UserAddEditModal
            v-if="this.isUserAddEditModalOpened"
            :isOpen="this.isUserAddEditModalOpened"
            :type="'editUser'"
            :userData="this.$props.userData"
            @closeModal="closeUserAddEditModal"
            @saveData="saveUserData"
        />
    </div>
</template>

<script>
    import UserInfoModal from 'src/components/MODALS/UserInfoModal'
    import UserAddEditModal from 'src/components/MODALS/UserAddEditModal'

    export default {
        name: 'UserCard',

        components: {
            UserInfoModal,
            UserAddEditModal
        },

        props: { 
            userData: { type: Object },
            cardType: { type: String }
        },

        data() {
            return {
                userInfoModalType: '',
                isUserInfoModalOpened: false,
                isUserAddEditModalOpened: false,
                isUserPermitsInfoOpened: false,
                isUserTasksInfoOpened: false,
                user: ( typeof ( this.$props.userData) !== 'undefined' ? this.$props.userData : {} ),
            }
        },

        methods: {
            openBlock(str) {
                str === 'permitsInfo' ?
                this.isUserPermitsInfoOpened = !this.isUserPermitsInfoOpened : null

                str === 'tasksInfo' ?
                this.isUserTasksInfoOpened = !this.isUserTasksInfoOpened : null
            },

            initUserInfoModal(str) {
                !this.isUserInfoModalOpened ?
                this.userInfoModalType = str :
                this.userInfoModalType = ''

                this.isUserInfoModalOpened ?
                this.isUserInfoModalOpened = false :
                this.isUserInfoModalOpened = true                
            },

            closeUserInfoModal() {
                this.isUserInfoModalOpened = false
            },

            closeUserAddEditModal() {
                this.isUserAddEditModalOpened = false
            },

            saveUserData() {
                this.isUserAddEditModalOpened = false
                
            }
        }
    }
</script>

<style lang="scss">
    .user-card {
        border: 1px solid $separator-color;
        
        &__body {
            border-top: 1px solid $separator-color;
        }
    }
</style>