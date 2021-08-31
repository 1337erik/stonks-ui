<template>

    <main id="main-container" :class=" sidenavClass " class="scrollyboi">

        <b-container fluid>

            <transition name="slide-fade" mode="out-in">

                <keep-alive>

                    <router-view />
                </keep-alive>
            </transition>
        </b-container>

        <foot />
    </main>
</template>

<script>

    import { mapGetters } from 'vuex';
    import Foot from '@/components/partials/Foot';

    export default {

        computed : {

            ...mapGetters({

                sidenavClass : 'nav/sidenavClass'
            })
        },
        components : {

            Foot
        }
    }
</script>

<style scoped>

    #main-container {

        position: relative;
        width: 100%;
        min-height: 100%;
        padding-top: 95px;
        padding-bottom: 100px;
        z-index: 555;
    }

    @media only screen and ( max-width: 768px ){

        .sidenav-open {

            padding-left: 15px !important;
        }
    }
</style>