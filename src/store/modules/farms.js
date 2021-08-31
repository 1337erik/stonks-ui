import Form from '../../classes/Form';
import _ from 'lodash';

export default {
    // TODO have this grab from the api - to get correct values especially
    // TODO move crud functionalities into a vuex-crud-pagination mixin type shit

    // TODO maybe one day look into indexedDB/localstorage options to get this going..
    // Perhaps even taking it to sync with echo for true offline-realtime-orgasms

    namespaced : true,
    state : {

        baseUrl   : '/api/farms',
        items     : [],
        itemModel : {
            // Not in use.. keep just in case

            id           : null,
            user_id      : null,
            created_at   : null,
            updated_at   : null
        }
    },
    mutations : {

        createData : ( state, item ) => state.items.push( item ),
        readData : ( state, items ) => state.items = items,
        updateData( state, item ){

            const index = state.items.findIndex( i => i.id == item.id );
            if( index >= 0 ) state.items[ index ] = item;
            state.items = _.cloneDeep( state.items );
        },
        deleteData( state, id ){

            const index = state.items.findIndex( i => i.id == id );
            if( index >= 0 ) state.items.splice( index, 1 );
        },
    },
    actions : {

        createData( ctx, data ){

            let form = new Form( data );
            form.post( this.baseUrl )
                .then( ( res ) => {

                    console.log( 'createData', res );
                    ctx.commit( 'createData', res.data.data );
                })
                .catch( ( err ) => {

                    console.log( err );
                });
        },
        readData( ctx ){

            let form = new Form();
            form.alertOnResponse = false;
            form.get( this.baseUrl )
                .then( ( res ) => {

                    console.log( 'readData', res );
                    ctx.commit( 'readData', res.data );
                })
                .catch( ( err ) => {

                    console.log( err );
                });
        },
        updateData( ctx, data ){

            console.log( 'updating the ', data );
            let form = new Form( data );
            form.patch( `${this.baseUrl}/${data.id}` )
                .then( ( res ) => {

                    console.log( 'updateData', res );
                    ctx.commit( 'updateData', res.data.data );
                })
                .catch( ( err ) => {

                    console.log( err );
                });
        },
        deleteData( ctx, id ){

            let form = new Form();
            form.delete( `${this.baseUrl}/${id}` )
            .then( ( res ) => {

                console.log( 'deleteData', res );
                ctx.commit( 'deleteData', id );
            })
            .catch( ( err ) => {

                console.log( err );
            });
        }
    },
    getters : {

        allItems : state => state.items,
    }
}