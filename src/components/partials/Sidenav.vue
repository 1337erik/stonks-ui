<template>

    <aside id="sidenav-container" :class=" sidenavClass " class="bg-secondary scrollyboi">

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

        isAuth        : "auth/isAuth",
        topNavRoutes  : "topNavRoutes",
        sidenavClass  : 'nav/sidenavClass',
      })
    }
  }
</script>

<style lang="scss" scoped>

  #sidenav-container {

    height: 100%;
    position: fixed;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba( 0, 0, 0, 0.3 );
    z-index: 999;
    overflow-y: scroll;

    padding-left: 0px !important;
  }

  .sidenav-open {

    width: 275px;
  }

  .sidenav-closed {

    width: 75px;
  }

  @media only screen and ( max-width: 768px ){

    .sidenav-closed {

      width: 0px;
    }
  }
</style>