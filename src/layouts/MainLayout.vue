<template>
  <q-layout view="hHh lpR lFf">
  
    <q-header reveal bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />       

        <span 
          class="q-ml-auto"
        >{{activeUser.fullName}}</span>

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

      :width="300"
      :breakpoint="500"
      bordered
      overlay elevated
    >
      <q-scroll-area class="fit">
        <q-list class="q-pa-none">
          <!--v-if="roles && roles.find(role => role === 'admin')"-->
            <q-item clickable v-ripple :to="'/'">
              <q-item-section avatar>
                <q-icon name="keyboard_alt" color="primary"/>
              </q-item-section>
              <q-item-section>
                Кабинет
              </q-item-section>
            </q-item>

            <q-separator />
            
            <q-item clickable v-ripple :to="'/tasks'">
              <q-item-section avatar>
                <q-icon name="task" color="primary"/>
              </q-item-section>
              <q-item-section>
                Задачи
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple :to="'/projects'">
              <q-item-section avatar>
                <q-icon name="fact_check" color="primary"/>
              </q-item-section>
              <q-item-section>
                Проекты
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple :to="'/calendar'">
              <q-item-section avatar>
                <q-icon name="date_range" color="primary"/>
              </q-item-section>
              <q-item-section>
                Календарь
              </q-item-section>
            </q-item>

            <q-separator />
            
            <q-item clickable v-ripple :to="'/users'">
              <q-item-section avatar>
                <q-icon name="people" color="primary"/>
              </q-item-section>
              <q-item-section>
                Сотрудники
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple :to="'/departments'">
              <q-item-section avatar>
                <q-icon name="apartment" color="primary"/>
              </q-item-section>
              <q-item-section>
                Отделы
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple :to="'/charts'">
              <q-item-section avatar>
                <q-icon name="stacked_bar_chart" color="primary"/>
              </q-item-section>
              <q-item-section>
                Статистика
              </q-item-section>
            </q-item>
  
            <q-separator />

            <q-item clickable v-ripple :to="'/chat'">
              <q-item-section avatar>
                <q-icon name="chat" color="primary"/>
              </q-item-section>
              <q-item-section>
                Чат
              </q-item-section>
            </q-item>

            <q-separator />
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
          }
      },

      computed: {
          ...mapGetters('user', ['userList', 'activeUser', 'roles']),
          //...mapGetters('task', ['taskList', 'openedTasks', 'doneTasks', 'frozenTasks', 'activeUserTasks', 'closedTasks']),
          //...mapGetters('department', ['departmentList'])
      },

      methods: {
          ...mapActions('user', ['LOGOUT']),
          
          logout() {
              this.LOGOUT()
          }
      },
  }
</script>
