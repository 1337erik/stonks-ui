<template>

  <div :class="messageClass" role="alert" v-if="visible">

    <button type="button" class="close" aria-label="Close" @click="dismiss()">
      <span aria-hidden="true">&times;</span>
    </button>

    <strong>{{ msg.type | capitalize }}! </strong>

    <p v-html=" $options.filters.nl2br( msg.msg ) "></p>
  </div>
</template>

<script>

  // TODO => have translator keep track of all the message statuses
  // TODO => somehow have the translator track all the messages as well..

  export default {

    props: [ "msg" ],

    data() {

      return {

        visible: true
      };
    },

    mounted() {

      var message = this;
      setTimeout(function() {

        message.dismiss();
      }, 5000 );
    },

    methods: {

      classFromType(type) {

        if (type === "error") return "danger";
        return type;
      },

      dismiss() {

        this.visible = false;
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
    text-align: right;
    margin-left: auto;
  }

  p {

    display: inline-block;
    margin: 0px 10px 0px auto;
  }
</style>