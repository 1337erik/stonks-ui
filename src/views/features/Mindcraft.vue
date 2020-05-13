<template>
  <div>
    <h1>Your Intentions</h1>
    <b-row>

      <b-col md="12" lg="8">

        <b-form-group
          id="intention-form"
          description="Create an intention for yourself"
          label="Enter intention"
          label-for="intention-input"
          :invalid-feedback="invalidFeedback"
          :valid-feedback="validFeedback"
          :state="state"
        >
          <b-form-input id="intention-input" v-model=" form.title " :state=" state " trim></b-form-input>
        </b-form-group>
        <p>Enter an optional deadline</p>
        <b-checkbox v-model=" setDeadline ">Set an optional deadline</b-checkbox>
        <div class="flex-lg-row flex-column d-flex">

          <b-form-datepicker v-model=" form.date " :disabled=" !setDeadline " class="mr-0 mr-lg-1 my-1 my-lg-0"></b-form-datepicker>
          <b-form-timepicker v-model=" form.time " :disabled=" !setDeadline " class="ml-0 ml-lg-1 my-1 my-lg-0"></b-form-timepicker>
        </div>
        <b-button variant="primary" class="my-2 mr-1" @click=" saveIntention " :disabled=" !state ">{{ form.id ? 'Update' : 'Create' }} Intention</b-button>
        <b-button variant="default" class="my-2 ml-1" @click=" setIntentionForm( null ) ">Clear Form</b-button>
      </b-col>
      <b-col md="12" lg="4">

        <div v-for=" int in intentions " :key=" int.id " class="intention-wrapper my-3 d-flex justify-content-between">

          <div class="d-flex flex-column">

            <p class="mb-0">{{ int.title }}</p>
            <p class="text-muted">{{ formatDateTime( int.fulfill_by ) }}</p>
          </div>
          <div class="d-flex flex-column">

            <b-button variant="primary" class="mb-1" @click=" initiateUpdateIntention( int ) ">Update</b-button>
            <b-button variant="danger" class="mt-1" @click=" initiateDeleteIntention( int.id ) ">Delete</b-button>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex';
  import FormatsDates from '@/mixins/FormatsDates';
  import moment from 'moment';

  export default {

    name: "mindcraft",
    mixins : [ FormatsDates ],
    data() {

      return {

        form : {

          title : '',
          date  : null,
          time  : null,
          id    : null
        },
        setDeadline : false
      };
    },
    computed: {

      ...mapGetters({

        intentions : 'intentions/all'
      }),
      state() {

        if( this.form.title.length == 0 ) return null;
        return this.form.title.length >= 4 ? true : false;
      },
      invalidFeedback() {

        if( this.form.title.length > 4 ) return '';

        if( this.form.title.length > 0 ) return 'Enter at least 4 characters';

        return 'Please enter something';
      },
      validFeedback() {

        return this.state === true ? 'Thank you' : '';
      }
    },
    methods: {

      ...mapActions({

        getIntentionsForUser : 'intentions/getIntentionsForUser',
        addIntentionForUser  : 'intentions/addIntentionForUser',
        deleteIntention      : 'intentions/deleteIntention',
        updateIntention      : 'intentions/updateIntention',
      }),
      setIntentionForm( intention = null ){

        this.setDeadline = intention && intention.fulfill_by ? true : false;
        this.form.date = intention && intention.fulfill_by ? moment( intention.fulfill_by ).format( 'YYYY-MM-DD' ) : null;
        this.form.time = intention && intention.fulfill_by ? moment( intention.fulfill_by ).format( 'HH:mm' ) : null;
        this.form.title = intention ? intention.title : '';
        this.form.id = intention ? intention.id : null;
      },
      saveIntention(){

        if( this.setDeadline ) this.form.fulfill_by = `${this.form.date} ${this.form.time}`;
        if( this.form.id ) this.updateIntention( this.form );
        else this.addIntentionForUser( this.form );
      },
      initiateDeleteIntention( id ){

        if( confirm( `Are you sure you want to delete ${id}` ) ){

          if( id == this.form.id ) this.setIntentionForm();
          this.deleteIntention( id );
        }
      },
      initiateUpdateIntention( intention ){

        this.setIntentionForm( intention );
      }
    },
    watch : {

      setDeadline( newVal ){

        if( newVal == true ){

          if( this.intention && !this.intention.id ) this.form.date = moment().add( '1', 'months' ).format( 'YYYY-MM-DD' );
          if( this.intention && !this.intention.id ) this.form.time = moment().format( 'HH:mm' );
        } else {

          this.form.date = null;
          this.form.time = null;
        }
      }
    },
    mounted() {

      this.setIntentionForm();
      this.getIntentionsForUser();
    }
  };
</script>

<style scoped>

  .intention-wrapper {

    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 2px 2px 0px rgba( 0, 0, 0, 0.3 );
    padding: 15px 10px;
  }
</style>