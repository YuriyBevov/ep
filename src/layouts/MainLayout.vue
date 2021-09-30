<template>
  <q-layout view="hHh lpR fFf" class="q-pa-lg">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          ООО "ПРОспект"
        </q-toolbar-title>

        {{activeUser.fullName}}
        
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="q-ml-sm"/>

        <q-btn
          flat
          padding="xs"
          color="negative"
          icon="power_settings_new"
          class="q-ml-sm"
          @click="logout"
        >
          <q-tooltip :content-style="{ backgroundColor: '#1976D2', color: '#ffffff' }">
            Выйти
          </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"

      :width="250"
      :breakpoint="500"
      bordered
    >

      <q-scroll-area class="fit">
        <q-list padding>

          <!-- ИНТЕРФЕЙС ПОЛЬЗОВАТЕЛЯ -->
          
          <div v-if="userRole.find(role => role === 'user')">
            <!--ЗАДАЧИ-->

            <q-item clickable v-ripple :to="'/'">
              <q-item-section avatar>
                <q-icon name="task" color="primary"/>
              </q-item-section>

              <q-item-section>
                Мои задачи
              </q-item-section>

            </q-item>

            <q-item clickable v-ripple :to="'/opened_tasks'">
              <q-item-section avatar>
                <q-icon name="task" color="primary"/>
              </q-item-section>

              <q-item-section>
                Открытые задачи
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/create_task'">
              <q-item-section avatar>
                <q-icon name="build" color="primary"/>
              </q-item-section>

              <q-item-section>
                Создать новую задачу
              </q-item-section>
            </q-item>

            <q-separator />

          </div>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {

    data() {
      return {
        drawer: false,

        isUser: true,
      }
    },

    computed: {
      ...mapGetters('auth', ['activeUser', 'userRole'])
    },

    methods: {
      logout() {
        console.log('logout')
      }
    }
  }
</script>
