<template>

  <b-navbar toggleable="md" type="light" variant="faded" fixed="top" id="nav">

    <b-navbar-brand to="/" exact-active-class="">{{ $t( "appName" ) | capitalize }}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>

        <b-nav-item v-for=" route in topNavRoutes" :key=" route.name " :to=" route.path " exact :exact-active-class=" activeClass ">{{ $t( `routes.${route.name}` ) | capitalize }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>

          <b-dropdown-item href="#">{{ $t( 'language' ) | capitalize }}</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right v-if=" isAuth ">

          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>{{ $t( 'user' ) | capitalize }}</template>
          <b-dropdown-item v-if="isAuth" :to="{ name: 'profile' }">{{ $t( 'routes.profile' ) | capitalize }}</b-dropdown-item>
          <b-dropdown-item v-if="isAuth" @click="logout">{{ $t( 'routes.logout' ) | capitalize }}</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item v-if=" !isAuth " @click=" toggleLoginModal ">{{ $t( "routes.login" ) | capitalize }}</b-nav-item>
        <b-nav-item v-if=" !isAuth " @click=" toggleRegisterModal ">{{ $t( "routes.register" ) | capitalize }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

  import { mapGetters, mapActions } from "vuex";

  export default {

    data(){

      return {

        activeClass : "router-link-exact-active"
      }
    },
    methods: {

      ...mapActions({

        toggleLoginModal    : "auth/toggleLoginModal",
        toggleRegisterModal : "auth/toggleRegisterModal",
        logout              : "auth/logout",
      })
    },
    computed: {

      ...mapGetters({

        isAuth       : "auth/isAuth",
        topNavRoutes : "topNavRoutes"
      })
    }
  }
</script>

<style lang="scss" scoped>

  #nav {

    height: 60px;
    padding: 5px 15px;

    a {

      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {

        color: #42b983;
      }
    }
  }
</style>