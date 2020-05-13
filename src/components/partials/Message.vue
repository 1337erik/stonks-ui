<template>

  <div :class="messageClass" role="alert">

    <button type="button" class="close" aria-label="Close" @click="dismiss( msg.id )">
      <span aria-hidden="true">&times;</span>
    </button>

    <strong>{{ msg.type | capitalize }}! </strong>

    <p v-html=" $options.filters.nl2br( msg.msg ) "></p>
  </div>
</template>

<script>

  // TODO => have translator keep track of all the message statuses
  // TODO => somehow have the translator track all the messages as well..
  import { mapActions } from 'vuex';

  export default {

    props: [ "msg" ],

    data() {

      return {

      }
    },

    mounted() {

      var message = this;
      setTimeout(function() {

        message.dismiss( message.msg.id );
      }, 5000 );
    },

    methods: {

      ...mapActions({

        dismiss : 'alerts/dismiss'
      }),
      classFromType(type) {

        if (type === "error") return "danger";
        return type;
      }
    },

    computed: {

      messageClass: function() {

        return "message-container alert alert-" + this.classFromType(this.msg.type);
      }
    }
  };
</script>

<style scoped>

  .message-container {

    position: relative;
    display: inline-block;
    text-align: right;
    min-width: 240px;
    max-width: 50%;
    z-index: 800;
  }

  p {

    display: inline-block;
    margin: 0px 10px 0px auto;
  }

  @media only screen and ( max-width: 768px ){

    .message-container {

      font-size: 14px;
      max-width: 185px;
    }
  }
</style>