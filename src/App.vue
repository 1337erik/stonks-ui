<template>

  <div id="app">

    <topnav />

    <sidenav />

    <div id="main-app-container" :style=" appContainerStyles ">

      <!-- Alert Messages - see alerts.js and Message.vue -->
      <messages-container />

      <main-app-container />
    </div>

    <Footer />
  </div>
</template>

<script>

  import Topnav from './components/partials/Topnav';
  import Sidenav from './components/partials/Sidenav';
  import MessagesContainer from './components/partials/MessagesContainer';
  import MainAppContainer from './components/partials/MainAppContainer';
  import Footer from './components/partials/Footer';
  import { mapGetters } from 'vuex';

  export default {

    computed : {

      ...mapGetters({

        appContainerStyles : 'nav/appContainerStyles',
      })
    },
    methods : {

    },
    mounted(){

      // load local storage messages
      this.initMessagesFromStorage();
    },
    components : {

      Topnav,
      Sidenav,
      MessagesContainer,
      MainAppContainer,
      Footer,
    }
  }
</script>

<style lang="scss">

  html, body, #app {

    height: 100vh;
    width: 100vw;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 0;
    margin: 0;
    background-color: #f3f6f9;
    overflow-y: scroll;
  }

  #main-app-container {

    height: 100%;
    overflow-y: scroll;
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
  /** ******************************************* **/
</style>