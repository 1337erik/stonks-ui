<template>

  <b-row>

    <b-col>

      <farm v-for=" farm in items " :key=" `farm${farm.id}` " class="mb-2" :farm=" farm "></farm>

      <div class="mb-4">{{ paginationText }}</div>

      <farm class="mb-2" :farm=" null "></farm>

    </b-col>
  </b-row>
</template>

<script>

  import { mapGetters, mapActions } from 'vuex';
  import FullCRUD from '../../mixins/FullCRUD';
  import Farm from '../../components/Farm';

  export default {

    mixins     : [ FullCRUD ],
    components : { Farm },
    data() {

      return {

        baseUrl : '/api/farms'
      }
    },
    computed : {

      ...mapGetters({

        allFarms : 'farms/allItems'
      })
    },
    methods : {

      ...mapActions({

        readData : 'farms/readData'
      })
    }
  }
</script>

<style>

</style>