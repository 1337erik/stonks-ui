<template>

  <div id="app">

    <topnav />

    <!-- Alert Messages - see alerts.js and Message.vue -->
    <transition-group name="message-animation" tag="div" id="message-container">

      <message v-for=" message in messages " :msg=" message " :key=" message.id "></message>
    </transition-group>

    <b-container id="main-container">

      <transition name="slide-fade" mode="out-in">

        <keep-alive>

          <router-view />
        </keep-alive>
      </transition>
    </b-container>
  </div>
</template>

<script>

  import Topnav from './components/partials/Topnav';
  import Message from './components/partials/Message';
  import { mapGetters, mapActions } from 'vuex';

  export default {

    computed : {

      ...mapGetters({

        messages : 'alerts/messages'
      })
    },
    methods : {

      ...mapActions({

        initMessagesFromStorage : 'alerts/initMessagesFromStorage',
        flashMessage : 'alerts/flashMessage'
      })
    },
    mounted(){

      // load local storage messages
      this.initMessagesFromStorage();
      console.log( process.env.NODE_ENV );
    },
    components : {

      Topnav,
      Message
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
  }

  #message-container {

    display: flex;
    flex-direction: column;
    position: absolute;
    top: 65px;
    right: 15px;
  }

  #main-container {

    padding-top: 65px;
  }

  /** ******************************************* **/
  /* Enter and leave animations can use different */
  /* durations and timing functions. */

  .slide-fade-enter-active {

    transition: all .3s ease;
  }
  .slide-fade-leave-active {

    transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter {

    transform: translateX(-10px);
    opacity: 0;
  }
  .slide-fade-leave-to {

    transform: translateX( 10px );
    opacity: 0;
  }

  .message-animation-enter {

    opacity: 0;
    transform: translateY( -25px );
  }
  .message-animation-leave-to {

    opacity: 0;
    transform: translateX( 25px );
  }
  .message-animation-leave-active {

    position: absolute !important;
  }
  .message-animation-move {

    transition: all 0.9s ease;
  }
  /** ******************************************* **/
</style>