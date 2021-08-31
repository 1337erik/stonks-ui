import Form from '@/classes/Form';
// import _ from 'lodash';

export default {

    namespaced : true,
    state : {

        transactions : [],
        transactionModel : {

            id             : null,
            user_id        : null,
            amount         : null,
            effective_date : null,
            type           : null,
            created_at     : null,
            updated_at     : null
        }
    },
    mutations : {

        setTransactions : ( state, transactions ) => state.transactions = transactions
    },
    actions : {

        getTransactionsForUser( ctx ){

            let form = new Form();

            form.alertOnResponse = false;

            form.get( '/api/transactions' )
                .then( ( res ) => {

                    console.log( 'getting back transactions', res );
                    ctx.commit( 'setTransactions', res.data );
                })
                .catch( ( err ) => {

                    console.log( err );
                });
        }
    },
    getters : {

        all : state => state.transactions,
    }
}