<template>

  <b-navbar toggleable="md" type="light" variant="faded" fixed="top" id="topnav-container" :class=" sidenavClass ">

    <b-icon :icon=" sidenavToggleIcon " @click=" toggleSidenav " class="mr-2 unified-transition-class" font-scale="1.5" id="sidenav-toggle" :class=" `${sidenavClass}-absolute` "></b-icon>

    <b-navbar-brand class="unified-transition-class noselect brand-left-padding" key="app-header">{{ $t( "appName" ) | capitalize }}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" style="position: absolute; right: 10px;" class="unified-transition-class" :class=" sidenavOpen ? 'opacityzero' : 'opacityfull' " ></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="unified-transition-class" :class=" sidenavOpen ? 'sm-opacityzero' : 'sm-opacityfull' " >

      <b-navbar-nav>

        <b-nav-item v-for=" route in topnavRoutes" :key=" route.name " :to=" route.path " exact :exact-active-class=" activeClass " class="noselect">{{ $t( `routes.${route.name}` ) | capitalize }}</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right class="noselect">

          <b-dropdown-item href="#">{{ $t( 'language' ) | capitalize }}</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right v-if=" isAuth " class="noselect">

          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>{{ $t( 'user' ) | capitalize }}</template>
          <b-dropdown-item v-if="isAuth" :to="{ name: 'profile' }">{{ $t( 'routes.profile' ) | capitalize }}</b-dropdown-item>
          <b-dropdown-item v-if="isAuth" @click="logout">{{ $t( 'routes.logout' ) | capitalize }}</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item v-if=" !isAuth " @click=" toggleLoginModal " class="noselect">{{ $t( "routes.login" ) | capitalize }}</b-nav-item>
        <b-nav-item v-if=" !isAuth " @click=" toggleRegisterModal " class="noselect">{{ $t( "routes.register" ) | capitalize }}</b-nav-item>
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
        toggleSidenav       : "nav/toggleSidenav",
        logout              : "auth/logout",
      })
    },
    computed: {

      ...mapGetters({

        isAuth            : "auth/isAuth",
        topnavRoutes      : "nav/topnavRoutes",
        sidenavClass      : 'nav/sidenavClass',
        sidenavToggleIcon : 'nav/sidenavToggleIcon',
        sidenavOpen       : 'nav/sidenavOpen',
      })
    }
  }
</script>

<style lang="scss" scoped>

  #sidenav-toggle {

    cursor: pointer;
    position: absolute;
    left: 15px;
  }

  #topnav-container {

    height: 50px;
    padding: 5px 15px;
    box-shadow: 0px 0px 5px 5px rgba( 0, 0, 0, 0.2 );
    width: 100%;
    position: fixed;
    z-index: 888;
    background-color: #fff;
    justify-content: center !important;
  }

  .brand-left-padding {

    width: 160px;
    padding-left: 50px !important;
  }

  .navbar-collapse {

    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
    background-color: white;
    margin: 5px -20px 0px;
    padding: 0 25px;
    text-align: right;
  }

  @media only screen and ( max-width: 768px ){

    .brand-left-padding {

      padding-left: 0px !important;
    }

    .navbar-collapse {


    }
  }
</style>