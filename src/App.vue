<template>
    <div id="q-app">
        <router-view />
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
      name: 'App',

      methods: {
        ...mapActions('init', ['INIT_APP']),

        initApp() {
          this.INIT_APP()
        }
      },

      created() {
          this.initApp()
      }
  }
</script>
