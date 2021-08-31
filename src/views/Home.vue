<template>

  <b-row>

    <b-col>

      <accounts></accounts>
    </b-col>
    <!-- <line-chart :chartdata=" data " :options=" options " />

    <b-row class="mt-4">

      <b-col>

        <b-btn variant="primary" class="mr-2" @click=" loadItems() ">Reload Transactions</b-btn>
        <b-btn variant="danger" class="mr-2">Request Withdraw</b-btn>
        <b-btn variant="info">Request Deposit</b-btn>
      </b-col>
    </b-row> -->
  </b-row>
</template>

<script>

  import { mapGetters } from 'vuex';
  // import LineChart from '../components/charts/Linechart.vue';
  import Accounts from '../views/features/Accounts';

  export default {

    name: "home",
    data() {

      return {

        i : 0,
        msgs : [],

        data: {
          // TODO move the charts to either some account summary component,
          //    or a transactions component

          labels: [ '7/9/21', '7/16/21', '7/23/21', '7/30/21', '8/6/21', '8/13/21' ],
          datasets: [

            {
              label: 'Johns Record',
              backgroundColor: '#f87979',
              data: [ 18500, 19750, 20150, 21050, 21200, 21450 ]
            },
            {
              label: 'Jimmys Record',
              backgroundColor: '#79f8b0',
              data: [ 1500, 1750, 2050, 2350, 2600, 3050 ]
            }
          ]
        },
        options: {

          responsive: true,
          maintainAspectRatio: false
        }
      };
    },
    computed :{

      ...mapGetters({

        user : 'auth/user'
      }),
    },
    mounted(){

      if( !this.user.id ) return;

      // REFERENCE FOR INIT ECHO
      // this.$echo.private( 'stonks_database_penile-transplants.' + this.user.id )
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

      // LineChart,
      Accounts
    }
  };
</script>
