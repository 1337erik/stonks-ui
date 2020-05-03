<template>

    <div id="backdrop" :class=" sidenavOpen ? 'backdrop-full' : 'backdrop-empty' " @click=" toggleSidenav ">

    </div>
</template>

<script>

    import { mapGetters, mapActions } from "vuex";

    export default {

        methods :{

            ...mapActions({

                toggleSidenav : 'nav/toggleSidenav'
            })
        },
        computed: {

            ...mapGetters({

                sidenavOpen : 'nav/sidenavOpen',
            })
        }
    }
</script>

<style scoped>

    #backdrop {

        position: fixed;
        transition: all 0.4s ease;
        background-color:rgba( 0, 0, 0, 0 );
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    @media only screen and ( max-width: 768px ){

        .backdrop-full {

            width: 100%;
            height: 100%;
            z-index: 887 !important;
            background-color:rgba( 0, 0, 0, 0.5 ) !important;
        }
      }
</style>