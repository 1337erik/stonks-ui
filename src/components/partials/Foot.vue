<template>

    <div id="footer" :class=" sidenavClass ">

        fuck yeah
    </div>
</template>

<script>

    import { mapGetters } from "vuex";

    export default {

        computed: {

            ...mapGetters({

                sidenavClass : 'nav/sidenavClass',
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
        z-index: 666;

        background-color: white;
        box-shadow: 0px 2px 10px 2px rgba( 0, 0, 0, 0.2 );
    }
</style>