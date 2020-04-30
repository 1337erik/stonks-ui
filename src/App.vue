<template>

  <div id="app">

    <topnav />

    <sidenav />

    <!-- Alert Messages - see alerts.js and Message.vue -->
    <messages-container />

    <main-app-container />

    <LoginModal />
    <RegisterModal />
  </div>
</template>

<script>

  import Topnav from './components/partials/Topnav';
  import Sidenav from './components/partials/Sidenav';
  import MessagesContainer from './components/partials/MessagesContainer';
  import MainAppContainer from './components/partials/MainAppContainer';
  import LoginModal from "@/components/authentication/LoginModal";
  import RegisterModal from "@/components/authentication/RegisterModal";
  import { mapGetters } from 'vuex';

  export default {

    computed : {

      ...mapGetters({

      })
    },
    methods : {

    },
    mounted(){

    },
    components : {

      Topnav,
      Sidenav,
      MessagesContainer,
      MainAppContainer,
      LoginModal,
      RegisterModal
    }
  }
</script>

<style lang="scss">

  // @ is an alias to /src
  // import HelloWorld from "@/components/HelloWorld.vue";

  html, body, #app {

    height: 100%;
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 0;
    margin: 0;
    background-color: #f3f6f9;
    position: relative;
  }

  /** ******************************************* **/
  /*            GLOBAL                            */
  /* Enter and leave animations can use different */
  /* durations and timing functions. */

  .slide-fade-enter-active {

    transition: all .2s ease;
  }
  .slide-fade-leave-active {

    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter {

    transform: translateX(-10px);
    opacity: 0;
  }
  .slide-fade-leave-to {

    transform: translateX( 10px );
    opacity: 0;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollyboi::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE and Edge */
  .scrollyboi {
    -ms-overflow-style: none;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Opera and Firefox */
  }

  // global class for the components that slide when the sidenav toggles
  .unified-transition-class {

    transition: all 0.3s ease;
  }

  .sidenav-open {

    padding-left: 285px !important;
  }

  .sidenav-closed {

    padding-left: 95px !important;
  }

  @media only screen and ( max-width: 768px ){

    .sidenav-closed {

      padding-left: 15px !important;
    }
  }
  /** ******************************************* **/
</style>