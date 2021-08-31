<template>

    <div id="messages-outer-container" class="scrollyboi" :style="{ 'top' : ( messages.length == 0 ? '-50%' : '0' ) }">

      <transition-group name="message-animation" tag="div" @before-leave=" beforeLeave " class="d-flex flex-column align-items-end" id="messages-inner-container">

        <message v-for=" message in messages " :msg=" message " :key=" message.id "></message>
      </transition-group>
    </div>
</template>

<script>

  import Message from './Message';
  import { mapActions, mapGetters } from 'vuex';

  export default {

    computed : {

      ...mapGetters({

        messages : 'alerts/messages',
      })
    },
    methods : {

      ...mapActions({

        initMessagesFromStorage : 'alerts/initMessagesFromStorage',
        flashMessage : 'alerts/flashMessage'
      }),
      beforeLeave( el ){

        const { marginLeft, marginTop, width, height } = window.getComputedStyle( el );
        el.style.left = `${el.offsetLeft - parseFloat( marginLeft, 10 )}px`;
        el.style.top = `${el.offsetTop - parseFloat( marginTop, 10 )}px`;
        el.style.width = width;
        el.style.height = height;
      },
    },
    mounted(){

      // load local storage messages
      this.initMessagesFromStorage();
    },
    components : {

      Message
    }
  }
</script>

<style lang="scss">

  #messages-outer-container {

    position: fixed;
    top: 0px;
    min-height: 145px;
    right: 75px;
    min-width: 50%;
    overflow-y: scroll;
    z-index: 777;
  }

  #messages-inner-container {

    height: 100%;
    min-height: 145px;
    padding-top: 75px;
  }

  .message-animation-enter-active {

    transition: all 0.8s ease;
  }
  .message-animation-enter {

    position: relative;
    opacity: 0;
    transform: translateY( -25px );
  }
  .message-animation-leave-to {

    opacity: 0;
  }
  .message-animation-leave-active {

    position: absolute !important;
  }
  .message-animation-move {

    transition: all 0.8s ease;
  }

  @media only screen and ( max-width: 768px ){

    #messages-outer-container {

      min-width: 185px;
      right: 15px;
    }
  }
</style>