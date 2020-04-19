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

    <b-button variant="info" @click="fuckme">Hey niggg</b-button>

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

        email    : "erikpwhite@gmail.com",
        password : "password"
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
      }
    },
    components: {

      LoginModal,
      RegisterModal
    }
  };
</script>
