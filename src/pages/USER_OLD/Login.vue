<template>
    <div class="q-pa-md column justify-center items-center" style="min-height: 100vh">
  
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md column form"
        style="min-width: 320px"
      >

        <q-input
          v-model="login"
          label="Логин: *"
          :rules="[
            val => !!val || '* Поле обязательно для заполнения'
          ]"
          lazy-rules
        />

        <q-input 
          v-model="password" 
          :type="isPwdVisible ? 'text' : 'password'" 
          label="Пароль: *"
          :rules="[
            val => !!val || '* Поле обязательно для заполнения',
            val => val.length > 5 || '* Пароль должен быть больше пяти символов',
          ]"
          lazy-rules          
        >
          <template v-slot:append>
            <q-icon
              :name="isPwdVisible ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwdVisible = !isPwdVisible"
            />
          </template>
        </q-input>
  
        <div>
          <q-btn label="Войти" type="submit" class="q-mr-sm"/>
          <q-btn label="Очистить" type="reset" />
        </div>
      </q-form>
    </div>
  </template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Login',

    data() {
      return {
        login: 'user_5',
        password: '000000',

        isPwdVisible: false,
      }
    },

    methods: {
      ...mapActions('user', ['LOGIN']),
      
      onSubmit() {
        this.LOGIN({
            login: this.login,
            password: this.password
        })

      },

      onReset() {
        this.login = '',
        this.password = '',
        this.isPwdVisible = false
      }
    }
  }
</script>