import Form from '@/classes/Form';
import _ from 'lodash';

export default {

    namespaced : true,
    state : {

        intentions : [],
        intentionModel : {

            id           : null,
            user_id      : null,
            title        : null,
            fulfilled_by : null,
            created_at   : null,
            updated_at   : null
        }
    },
    mutations : {

        setIntentions : ( state, intentions ) => state.intentions = intentions,
        removeIntention( state, id ){

            const index = state.intentions.findIndex( i => i.id == id );
            if( index >= 0 ) state.intentions.splice( index, 1 );
        },
        updateIntention( state, intention ){

            const index = state.intentions.findIndex( i => i.id == intention.id );
            if( index >= 0 ) state.intentions[ index ] = intention;
            state.intentions = _.cloneDeep( state.intentions );
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
                });
        },
        addIntentionForUser( ctx, data ){

            console.log( 'adding the ', data );
            let form = new Form( data );
            form.post( '/api/intentions' )
                .then( ( res ) => {

                    console.log( res );
                    ctx.commit( 'addIntention', res.data.data );
                })
                .catch( ( err ) => {

                    console.log( err );
                });
        },
        updateIntention( ctx, data ){

            console.log( 'updating the ', data );
            let form = new Form( data );
            form.patch( `/api/intentions/${data.id}` )
                .then( ( res ) => {

                    console.log( res );
                    ctx.commit( 'updateIntention', res.data.data );
                })
                .catch( ( err ) => {

                    console.log( err );
                });
        },
        deleteIntention( ctx, id ){

            let form = new Form();
            form.delete( `/api/intentions/${id}` )
            .then( ( res ) => {

                console.log( res );
                ctx.commit( 'removeIntention', id );
            })
            .catch( ( err ) => {

                console.log( err );
            });
        }
    },
    getters : {

        all : state => state.intentions,
    }
}