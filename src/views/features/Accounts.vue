<template>

  <b-row>

    <b-col>

      <b-card v-for=" account in items " :key=" `account${account.id}` " class="mb-3">

        <b-row>

          <b-col sm="12" md="6" class="d-flex align-items-center">

            <div class="mr-5">

              <h3 class="mb-0 font-bold" style="color: green">{{ moneyFormat( account.usd_value_override ) }}</h3>
              <h5 class="mb-0 font-bold" style="color: cadetblue">{{ `${numberFormat( account.usd_value_override )} ${ account.coin_name } Tokens` }}</h5>
            </div>
          </b-col>
          <b-col sm="12" md="6" class="d-flex align-items-center">

            <div class="d-flex align-items-center justify-content-start mr-3">

              <img src="@/assets/biswaplogo.png" style="width: 35px" class="mr-3" v-if=" !!account.farm_id " />
              <h3 class="mb-0">{{ `${account.farm_name || '-- no farm --'}` }}</h3>
            </div>
            <div class="d-flex align-items-start justify-content-center flex-column" v-if=" !!account.farm_id ">

              <h6>Produces BSW</h6>
              <h6>{{ `Current APR: %${account.farm_current_apr}` }}</h6>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>

  import FullCRUD from '../../mixins/FullCRUD';
  import FormatsNumbers from '../../mixins/FormatsNumbers';

  export default {

    mixins : [ FullCRUD, FormatsNumbers ],

    data(){

      return {

        baseUrl : 'accounts',
      }
    }
  }
</script>

<style>

</style>