<template>
  <div>

    <h1>This is THE FOOKIN BACKLOG YEEEET</h1>
    <b-row>

      <b-col sm="12">

        <b-button variant="primary" @click=" loadItems() " :disabled=" false && loading ">Generate</b-button>
      </b-col>
      <b-col>

        <b-card v-for=" post in items " :key=" `post${post.id}` ">

          {{ post.title }}
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

  import Pagination from '../../mixins/Pagination';

  export default {

    name: "backlog",
    mixins: [ Pagination ],
    data() {

      return {

        baseUrl : 'posts'
      };
    },
    computed: {

      appliedFilters(){ return `?nothing=okay`; }
    },
    methods: {


    },
    mounted() {

    }
  };
</script>

<style scoped>

</style>