<template>

  <div>

    <h1>This is home nigga</h1>

    <p>As the splash page, I should incorporate the elements that I just wrote down are good from my contemporaries</p>
    <p>For instance:</p>
    <ul>

      <li>Employ minimalism</li>
      <li>offer up front</li>
      <li>Intro video</li>
      <li>instantly viewable CTA</li>
      <li>Unique value proposition</li>
      <li>Have testimonials</li>
    </ul>

    <LoginModal />
    <RegisterModal />
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from "@/components/HelloWorld.vue";

  import LoginModal from "@/components/authentication/LoginModal";
  import RegisterModal from "@/components/authentication/RegisterModal";

  export default {

    name: "home",
    data() {

      return {

      };
    },
    methods: {

      fuckme(){

        this.$http.get( '/api/user' )
        .then( res => {

            console.log( 'user res: ', res );
        })
        .catch( err => {

            console.error( 'a user error', err );
        });
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
