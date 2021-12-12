<template>
    <div id="q-app">
        <router-view />

        <!--<Loader
            :loadingState="loadingState"
        />

        <ServerAnswerModal
            :modalText="serverAnswerData.message"
            :status="serverAnswerData.isOpened"
        /> -->
    </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  //import Loader from "components/COMMON/Loader"
  //import ServerAnswerModal from "components/COMMON/ServerAnswerModal"

  export default {
      name: 'App',

      components: {
        //Loader,
        //ServerAnswerModal
      },

      methods: {
        ...mapActions('user', ['AUTHENTICATION']),

        initApp() {
          this.AUTHENTICATION()
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

<style lang="scss">
    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: #bdbdbd;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #2a4d6b;
    }
</style>
