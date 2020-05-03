<template>

    <aside id="sidenav-container" :class=" sidenavClass " class="bg-default scrollyboi">

      <b-container fluid class="d-flex flex-column">

        <b-row class="sidenav-header-section d-flex align-items-center">

          <transition mode="out-in" name="slide-fade">

            <b-col v-if=" sidenavClass.includes( 'sidenav-open' ) " key="first-element">

              MetaLevel
            </b-col>
            <b-col v-else class="text-center" key="second-element">

              M
            </b-col>
          </transition>
        </b-row>
        <b-row style="flex: 11">

          <b-col>

            <div v-for=" route in sidenavRoutes " :key=" route.name " class="sidenav-route d-flex align-items-center">

              <i :class=" route.meta.icon + ' ' + iconClass " class="sidenav-icon noselect" :id=" `sidenav-icon-${route.name}` " style="font-size: 24px"></i>
              <transition mode="out-in" name="slide-fade">

                <b-link :to=" route.path " exact :exact-active-class=" activeClass " class="noselect sidenav-text" v-if=" sidenavOpen " :key=" route.name ">{{ route.name | capitalize }}</b-link>
              </transition>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </aside>
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

        isAuth        : "auth/isAuth",
        sidenavClass  : 'nav/sidenavClass',
        sidenavRoutes : 'nav/sidenavRoutes',
        sidenavOpen   : 'nav/sidenavOpen',
      }),
      iconAnimated(){return this.sidenavOpen ? 'cylon' : null},
      iconClass(){return this.sidenavOpen ? 'mr-3' : null},
    }
  }
</script>

<style lang="scss" scoped>

  #sidenav-container {

    height: 100%;
    position: fixed;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba( 0, 0, 0, 0.3 );
    z-index: 999;
    overflow-y: scroll;

    padding-left: 0px !important;
  }

  .sidenav-header-section {

    height: 50px;
  }

  .sidenav-icon {

    cursor: pointer;
    width: 40px;
    text-align: center;
    position: absolute;
  }

  .sidenav-text {

    padding-left: 60px;
  }

  .sidenav-route {

    height: 75px;
  }

  .sidenav-open {

    width: 275px;
  }

  .sidenav-closed {

    width: 75px;
  }

  @media only screen and ( max-width: 768px ){

    .sidenav-closed {

      width: 0px;
    }
  }
</style>