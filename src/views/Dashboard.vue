<template>
  <div>
    <h1>This is an dashbaord page</h1>
    <b-row>
      <b-col>
        Testing this
      </b-col>
      <b-col>
        Testing this
      </b-col>
    </b-row>
    <p>Your fucking email: {{ email }}</p>
    <button @click="logout">lmao wut</button>
  </div>
</template>

<script>

  export default {

    name: "dashboard",
    data() {

      return {

        email: "n/a"
      };
    },
    methods: {

      logout() {

        this.$http.post("/logout").then(res => {

          console.log(res);
        });
      }
    },
    mounted() {

      this.$http.get("/api/user").then(res => {

        console.log(res);
        this.email = res.data.email;
      });
    }
  };
</script>
