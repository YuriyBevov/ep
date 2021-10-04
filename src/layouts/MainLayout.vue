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
                <q-icon name="contact_support" color="primary"/>
              </q-item-section>

              <q-item-section>
                Открытые задачи
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/all_tasks'">
              <q-item-section avatar>
                <q-icon name="list" color="primary"/>
              </q-item-section>

              <q-item-section>
                Список всех задач
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/done_tasks'">
              <q-item-section avatar>
                <q-icon name="done" color="primary"/>
              </q-item-section>

              <q-item-section>
                Выполненные задачи
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/archived_tasks'">
              <q-item-section avatar>
                <q-icon name="archive" color="primary"/>
              </q-item-section>

              <q-item-section>
                Архив задач
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
          ...mapGetters('user', ['activeUser', 'userRole'])
      },

      methods: {
          ...mapActions('task', ['GET_TASK_LIST']),
          ...mapActions('project', ['GET_PROJECT_LIST']),

          initAppData() {
              this.GET_TASK_LIST()
              this.GET_PROJECT_LIST()
          },
          
          logout() {
              console.log('logout')
          }
      },

      mounted() {
          this.initAppData()
      }
  }
</script>
