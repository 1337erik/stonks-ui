<template>

    <aside class="sidenav" :style=" sidenavStyles ">

      testing this
    </aside>
</template>

<script>

  import { mapGetters, mapActions } from "vuex";

  export default {

    data(){

      return {

      }
    },
    methods: {

      ...mapActions({

        toggleLoginModal    : "auth/toggleLoginModal",
        toggleRegisterModal : "auth/toggleRegisterModal",
        logout              : "auth/logout",
      })
    },
    computed: {

      ...mapGetters({

        isAuth       : "auth/isAuth",
        topNavRoutes : "topNavRoutes",
        sidenavStyles : 'nav/sidenavStyles',
      })
    }
  }
</script>

<style lang="scss" scoped>

    .sidenav {

        height: 100vh;
        position: fixed;
        background-color: white;
        box-shadow: 0px 2px 5px #ccc;
        z-index: 999;
    }
</style>