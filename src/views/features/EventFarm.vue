<template>

    <b-row>

        <b-col>

            <b-card header="Event a Farm" header-bg-variant="primary" header-text-variant="white" class="mb-4">

                <b-row class="mb-3">

                    <b-col sm="12" md="6">

                        <b-row>

                            <b-col sm="12">

                                <b-form-group class="mr-2" label="Select Farm" for="farm-id">

                                    <b-form-select v-model=" form.farm_id " id="farm-id">

                                        <option value="" disabled>-- Select One --</option>
                                        <option v-for=" item in farms " :value=" item.id " :key=" `farm-${item.name}` ">{{ item.name }}</option>
                                    </b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="12">

                                <b-form-group label="Farm Recorded APR" for="farm-apr">

                                    <b-form-input id="farm-apr" v-model=" form.farm_recorded_apr "></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="12">

                                <b-form-group label="Farm Total LP USD Value" for="farm-usd">

                                    <b-form-input id="farm-usd" v-model=" form.farm_usd_value "></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col sm="12" md="6">

                        <b-row>

                            <b-col sm="12">

                                <b-form-group label="Select Coin" for="coin-id">

                                    <b-form-select v-model=" form.coin_id " id="coin-id">

                                        <option value="" disabled>-- Select One --</option>
                                        <option v-for=" item in coins " :value=" item.id " :key=" `coin-${item.name}` ">{{ item.name }}</option>
                                    </b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col sm="12">

                                <b-form-group label="Coins Harvested" for="coin-amount">

                                    <b-form-input id="coin-amount" v-model=" form.coin_amount "></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col sm="12">

                                <b-form-group label="USD per Coin" for="coin-usd-value">

                                    <b-form-input id="coin-usd-value" v-model=" form.coin_usd_value "></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col sm="12" class="d-flex justify-content-end mt-3">

                        <b-btn variant="info" @click=" submit() " :disabled=" form.busy ">Event Farm</b-btn>
                    </b-col>
                </b-row>

                <!-- <b-modal :noCloseOnBackdrop="true" id="detailsModal" title="Task Details" v-model="detailsModal" size="lg">

                    <business-task-details :admin="true" :task="task" />

                    <div slot="modal-footer">

                    <b-btn variant="default" @click="detailsModal = false">Close</b-btn>
                    </div>
                </b-modal> -->
            </b-card>
            <b-card header="New Transactions" header-bg-variant="info" header-text-variant="white">

                <p v-for=" tran in newTrans " :key=" `trans${tran.id}` ">{{ `user_id: ${tran.user_id} gets ${tran.coin_amount} BSW at $${tran.usd_value} USD` }}</p>
                <p v-if=" newTrans.length == 0 ">No Transactions listed..</p>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>

    import Form from '../../classes/Form';
    import { mapGetters } from 'vuex';

    export default {

        data: () => ({

            form : new Form({

                farm_id           : '',
                farm_recorded_apr : '',
                farm_usd_value    : '',
                coin_amount       : '',
                coin_id           : '',
                coin_usd_value    : '',
            }),
            formModel : {

                farm_id           : '',
                farm_recorded_apr : '',
                farm_usd_value    : '',
                coin_amount       : '',
                coin_id           : '',
                coin_usd_value    : '',
            },

            newTrans : []

        }),

        computed: {

            ...mapGetters({

                coins : 'coins/items',
                farms : 'farms/items'
            })
        },

        methods: {

            submit(){

                console.log( this.form );
                if( !this.form.farm_id || !this.form.coin_id ) return;

                this.form.post( `/api/farms` )
                    .then( res => {

                        console.log( 'yeet lmao', res );
                        this.newTrans = res.data.data.trans;
                    })
                    .catch( err => {

                        console.error( 'yeet lmao this shit sucks', err );
                    })

                this.clearForm();
            },
            clearForm(){

                this.form = new Form({

                    farm_id           : '',
                    farm_recorded_apr : null,
                    farm_usd_value    : null,
                    coin_amount       : null,
                    coin_id           : '',
                    coin_usd_value    : null,
                });
            }
        },
        created(){

            this.clearForm();
        }
    }
</script>