<template>

  <div>


    <p>today at a glance</p>
    <ul>
      <li>What is today? is this from anchor? Statistics?</li>
    </ul>
    <p>news of the day</p>
    <ul>
      <li>From where.. youtube? Medium?</li>
      <li>What about a slider displaying random thrivemind facts.. thats cool</li>
    </ul>
    <p>community rankings / shoutouts</p>
    <ul>
      <li>based on authorship</li>
      <li>based on coaching feedback?</li>
    </ul>

  </div>
</template>

<script>

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

    }
  };
</script>
