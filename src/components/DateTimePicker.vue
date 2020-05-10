<template>

  <div>

    <b-form-datepicker v-model=" date "></b-form-datepicker>
  </div>
</template>

<script>

  export default {

    name: "date-time-picker",
    props: {

      value: String
    },
    computed: {

      date : {

        get : function(){

          return this.value;
        },
        set : function( newVal ){

          this.$emit( 'input', newVal );
        }
      }
    }
  };
</script>

<style scoped lang="scss">

</style>
