<template>

  <div>

    <p>Get basic data</p>
    <ul>
      <li>CRUD basic data</li>
    </ul>
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