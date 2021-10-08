<template>
    <div id="q-app">
        <router-view />

        <Loader
            :loadingState="loadingState"
        />

        <ServerAnswerModal
            :modalText="serverAnswerData.message"
            :status="serverAnswerData.isOpened"
        />
    </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import Loader from "components/COMMON/Loader"
  import ServerAnswerModal from "components/COMMON/ServerAnswerModal"

  export default {
      name: 'App',

      components: {
        Loader,
        ServerAnswerModal
      },

      methods: {
        ...mapActions('init', ['INIT_APP']),

        initApp() {
          this.INIT_APP()
        }
      },

      computed: {
          ...mapGetters('common', ['loadingState', 'serverAnswerData'])
      },

      created() {
          this.initApp()
      }
  }
</script>
