<template>
  <div>
    <h1>Your Intentions</h1>
    <b-row>

      <b-col>

        <b-form-group
          id="intention-form"
          description="Create an intention for yourself"
          label="Enter intention"
          label-for="intention-input"
          :invalid-feedback="invalidFeedback"
          :valid-feedback="validFeedback"
          :state="state"
        >
          <b-form-input id="intention-input" v-model=" intention " :state=" state " trim></b-form-input>
        </b-form-group>
        <date-time-picker v-model=" dateshit "></date-time-picker>
      </b-col>
      <b-col>

        <div v-for=" int in intentions " :key=" int.id ">

          <p class="mb-0">{{ int.title }}</p>
          <p class="text-muted">{{ formatDateTime( int.fulfill_by ) }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

  import { mapActions, mapGetters } from 'vuex';
  import FormatsDates from '@/mixins/FormatsDates';
  import DateTimePicker from '@/components/DateTimePicker';
  import moment from 'moment';

  export default {

    name: "mindcraft",
    mixins : [ FormatsDates ],
    components : [ DateTimePicker ],
    data() {

      return {

        intention : '',
        dateshit  : moment.now()
      };
    },
    computed: {

      ...mapGetters({

        intentions : 'intentions/all'
      }),
      state() {

        return this.intention.length >= 4 ? true : false;
      },
      invalidFeedback() {

        if( this.intention.length > 4 ) return '';

        if( this.intention.length > 0 ) return 'Enter at least 4 characters';

        return 'Please enter something';
      },
      validFeedback() {

        return this.state === true ? 'Thank you' : '';
      }
    },
    methods: {

      ...mapActions({

        getIntentionsForUser : 'intentions/getIntentionsForUser'
      })
    },
    mounted() {

      this.getIntentionsForUser();
    }
  };
</script>

<style scoped>

</style>