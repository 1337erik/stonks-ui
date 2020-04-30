<template>

    <main id="main-container" class="sidenav-open scrollyboi">

        <transition name="slide-fade" mode="out-in">

            <keep-alive>

                <router-view />
            </keep-alive>
        </transition>

        <foot />
    </main>
</template>

<script>

    import Foot from '@/components/partials/Foot';

    export default {

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
        padding-top: 75px;
        padding-bottom: 100px;
        z-index: 555;
    }
</style>