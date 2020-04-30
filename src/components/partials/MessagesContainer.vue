<template>

    <div id="messages-outer-container" class="scrollyboi">

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
                messagesContainerStyles : 'nav/messagesContainerStyles',
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
        components : {

            Message
        }
    }
</script>

<style>

  #messages-outer-container {

    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 75px;
    overflow-y: scroll;
    z-index: 777;
  }

  #messages-inner-container {

    position: relative;
  }

  .message-animation-enter {

    opacity: 0;
    transform: translateY( -25px );
  }

  .message-animation-leave-to {

    transform: translateX( 25px );
    opacity: 0;
  }
  .message-animation-leave-active {

    position: absolute !important;
  }
  .message-animation-move {

    transition: all 0.8s ease;
    opacity: 0.85;
  }
</style>