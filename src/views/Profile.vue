<template>

  <div>

      <h1> hey gas </h1>
  </div>
</template>

<script>

    import { mapGetters } from 'vuex';

    export default {


        computed : {

            ...mapGetters({

                user : 'auth/user'
            })
        }
    }
</script>

<style>

</style>