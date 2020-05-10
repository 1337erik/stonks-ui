import Form from '@/classes/Form';

export default {

    namespaced : true,
    state : {

        intentions : [],
        intentionModel : {

            id         : null,
            user_id    : null,
            title      : null,
            created_at : null,
            updated_at : null
        }
    },
    mutations : {

        setIntentions : ( state, intentions ) => state.intentions = intentions,
        removeIntention( state, id ){

            console.log( state, id );
        },
        addIntention : ( state, intention ) => state.intentions.push( intention )
    },
    actions : {

        getIntentionsForUser( ctx ){

            let form = new Form();
            form.alertOnResponse = false;
            form.get( '/api/intentions' )
                .then( ( res ) => {

                    console.log( res );
                    ctx.commit( 'setIntentions', res.data );
                })
                .catch( ( err ) => {

                    console.log( err );
                })
                .finally( () => {

                    console.log( 'yaaayy lmao' );
                });
        }
    },
    getters : {

        all : state => state.intentions,
    }
}