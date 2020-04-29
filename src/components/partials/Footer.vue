<template>

    <div id="footer" :style=" footerStyles ">

        fuck yeah
    </div>
</template>

<script>

    import { mapGetters } from "vuex";

    export default {

        computed: {

            ...mapGetters({

                footerStyles : 'nav/footerStyles'
            })
        }
    }
</script>

<style scoped>

    #footer {

        position: absolute;
        bottom:0;
        left:0;
        right:0;
        height: 75px;
        width: 100%;
    }
</style>