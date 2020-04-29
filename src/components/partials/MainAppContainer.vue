<template>

    <b-container id="main-container">

        <transition name="slide-fade" mode="out-in">

            <keep-alive>

                <router-view />
            </keep-alive>
        </transition>
    </b-container>
</template>

<script>

    export default {
        
    }
</script>

<style scoped>

</style>