<template>
  <div>

    <b-row>

      <b-col sm="12" class="mb-5">

        <b-card>

          <h1 class="mb-3">Manage all Posts</h1>

          <div class="d-flex align-items-center justify-contet-end">

            <b-button variant="info" class="mr-2">Create new</b-button>
            <b-button variant="primary" @click=" loadItems() " :disabled=" loading ">Generate</b-button>
          </div>
        </b-card>
      </b-col>

      <b-col lg="6" >

        <b-pagination :total-rows=" totalRows " :per-page=" perPage " v-model=" currentPage " />
      </b-col>

      <b-col lg="6" class="text-right">

        {{ paginationText }}
      </b-col>

      <b-col class="d-flex align-items-center flex-wrap">

        <b-card v-for=" post in items " :key=" `post${post.id}` " class="m-2" style="width: 200px; height: 150px">

          {{ post.title }}
          <b-button variant="danger" @click=" deleteOne( post.id ) ">Delete</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

  import FullCRUD from '../../mixins/FullCRUD';

  export default {

    name: "backlog",
    mixins: [ FullCRUD ],
    data() {

      return {

        baseUrl : 'posts',
        perPage : 10
      };
    },
    computed: {

      appliedFilters(){ return `?`; }
    },
    methods: {

    },
    mounted() {

    }
  };
</script>

<style scoped>

</style>