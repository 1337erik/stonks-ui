<template>

  <div>

    <p>No this wont be the splash page.. thats what the main site will be for.. this should just be the dashboard for the main app</p>
    <p>things to see:</p>
    <ul>

      <li>daily mindfullness calibration</li>
      <li>the library of information</li>
      <li>highlight the authorship program.. maybe a call-to-action</li>
      <li>coach highlights? gather stats and data</li>
      <li>relevant reads - maybe blog format, or videos too</li>
      <li>personal profile</li>
    </ul>

    <b-row>

      <b-col>

        <h1>Testing Echo : {{ i }}</h1>

        <p v-for=" ( msg, i ) in msgs " :key=" i ">{{ msg }}</p>
      </b-col>
    </b-row>
    <b-row>

      <b-col>

        <b-button variant="priamry" @click=" dothing ">Send it</b-button>
      </b-col>
    </b-row>


    <LoginModal />
    <RegisterModal />
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from "@/components/HelloWorld.vue";

  import LoginModal from "@/components/authentication/LoginModal";
  import RegisterModal from "@/components/authentication/RegisterModal";
import { mapGetters } from 'vuex';

  export default {

    name: "home",
    data() {

      return {

        i : 0,
        msgs : []
      };
    },
    computed :{

      ...mapGetters({

        user : 'auth/user'
      })
    },
    mounted(){

      if( !this.user.id ) return;
      // this.$echo.private( 'metalevel_database_penile-transplants.' + this.user.id )
      //   .listen( '.UserEvent', ( data ) => {

      //     console.log( 'gottem!', data );
      //     this.i++;
      //     this.pushMsg( data.title );
      //   })
    },
    methods: {

      pushMsg( title ){

        this.msgs.push( title );
      },
      dothing(){

        const num = Math.floor( Math.random() * 10 ) + 1;
        let txt = [
          'erik lipsum big titties',
          'flat earther gory bus tragedy lip synching',
          'penile transplants for research into devleopment of the species',
          'noone was the wiser, crackheads are anonymous',
          'fat jits',
          'why would yo usay some thing so controvertial',
          'the commericals are based upon truer fictions',
          'thanos was framed',
          'espom salts on the  wound would lick a tiger thicker',
          'please police plead kneees weak bees treat screech liger and lions',
        ];
        let type;
        if( num <= 2 ) type = 'error';
        if( num > 2 && num <= 4 ) type = 'info';
        if( num > 4 && num <= 6 ) type = 'default';
        if( num > 6 && num <= 8 ) type = 'warning';
        if( num > 8 && num <= 10 ) type = 'success';
        this.$store.dispatch( 'alerts/addMessage', { type: type, msg: txt[ num - 1 ] });
      }
    },
    components: {

      LoginModal,
      RegisterModal
    }
  };
</script>
