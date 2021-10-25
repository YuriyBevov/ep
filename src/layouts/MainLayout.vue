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

      :width="300"
      :breakpoint="500"
      bordered
    >

      <q-scroll-area class="fit">
        <q-list padding>

          <!-- ИНТЕРФЕЙС ПОЛЬЗОВАТЕЛЯ -->
          
          <div v-if="roles && roles.find(role => role !== 'quest')">
            <!--ЗАДАЧИ-->

            <q-item clickable v-ripple :to="'/'">
              <q-item-section avatar>
                <q-icon name="task" color="primary"/>
              </q-item-section>

              <q-item-section>
                Мои задачи({{this.activeUserTasks.length}})
              </q-item-section>

            </q-item>

            <q-item clickable v-ripple :to="'/opened_tasks'">
              <q-item-section avatar>
                <q-icon name="contact_support" color="primary"/>
              </q-item-section>

              <q-item-section>
                Открытые задачи({{this.openedTasks.length}})
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/all_tasks'">
              <q-item-section avatar>
                <q-icon name="list" color="primary"/>
              </q-item-section>

              <q-item-section>
                Список всех задач({{this.taskList.length}})
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/done_tasks'">
              <q-item-section avatar>
                <q-icon name="done" color="primary"/>
              </q-item-section>

              <q-item-section>
                Выполненные задачи({{this.doneTasks.length}})
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/archived_tasks'">
              <q-item-section avatar>
                <q-icon name="archive" color="primary"/>
              </q-item-section>

              <q-item-section>
                Архив задач({{this.closedTasks.length}})
              </q-item-section>
            </q-item>

            <q-separator />

          </div>

          <div v-if="roles && roles.find(role => role === 'admin') || roles && roles.find(role => role === 'superadmin') ">
            <q-item clickable v-ripple :to="'/create_task'">
              <q-item-section avatar>
                <q-icon name="build" color="accent"/>
              </q-item-section>

              <q-item-section>
                Создать новую задачу
              </q-item-section>
            </q-item>
            <q-separator />
          </div>

          <!-- ИНТЕРФЕЙС СУПЕРАДМИНА -->

          <div v-if="roles && roles.find(role => role === 'superadmin')">
            <q-item clickable v-ripple :to="'/departments'">
              <q-item-section avatar>
                <q-icon name="home_work" color="negative"/>
              </q-item-section>
              <q-item-section>
                Отделы({{this.departmentList.length}})
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/create_department'">
              <q-item-section avatar>
                <q-icon name="dashboard" color="negative"/>
              </q-item-section>

              <q-item-section>
                Создать отдел
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/users'">
              <q-item-section avatar>
                <q-icon name="person" color="negative"/>
              </q-item-section>

              <q-item-section>
                Пользователи({{this.userList.length}})
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/create_user'">
              <q-item-section avatar>
                <q-icon name="manage_accounts" color="negative"/>
              </q-item-section>

              <q-item-section>
                Добавить пользователя
              </q-item-section>
            </q-item>
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
          }
      },

      computed: {
          ...mapGetters('user', ['userList', 'activeUser', 'roles']),
          ...mapGetters('task', ['taskList', 'openedTasks', 'doneTasks', 'frozenTasks', 'activeUserTasks', 'closedTasks']),
          ...mapGetters('department', ['departmentList'])
      },

      methods: {
          ...mapActions('user', ['LOGOUT']),
          
          logout() {
              this.LOGOUT()
          }
      },
  }
</script>
