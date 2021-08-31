<template>

    <b-card>

        <b-row>

            <b-col>

                <h3>Farm Name: {{ farm ? farm.name : '--' }}</h3>
                <h5>Current APR: {{ farm ? farm.current_apr : '--' }}</h5>
            </b-col>
            <b-col>

                <h3>Produces {{ farm ? farm.coin_name : '--' }}</h3>
                <h5>At Cost {{ farm ? farm.coin_usd_value : '--' }}</h5>
            </b-col>
            <b-col>

                <b-button variant="primary" @click=" toggleEdit() ">Fuck Baby</b-button>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>

    export default {

        props : {

            farm : {

                type     : Object,
                default  : () => {},
                required : false
            }
        },
        data(){

            return {

                isEditing : false
            }
        },
        methods: {

            toggleEdit(){ this.isEditing = !this.isEditing; }
        }
    }
</script>

<style>

</style>