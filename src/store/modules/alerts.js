import utilities from '@/utilities';

export default {

    namespaced : true,
    state : {

        messages : [],
        flashKey : 'flashed_messages'
    },
    mutations : {

        addMessage : ( state, message ) => state.messages.unshift( message ),
        removeMessage( state, id ){

            const index = state.messages.findIndex( msg => msg.id == id );
            state.messages.splice( index, 1 );
        }
    },
    actions : {

        /**
         * Add a message immediately
         *
         * @param type
         * @param message
         */
        addMessage( ctx, { type, msg }){

            ctx.commit( 'addMessage', { id: utilities.uuidv4(), type, msg });
        },

        /**
         * Add a message for the next page load (useful for redirects)
         *
         * @param type
         * @param message
         */
        async flashMessage( ctx, { type, msg }){

            let messages = await ctx.dispatch( 'getLocalMessages' );
            messages.push({

                'type'    : type,
                'message' : msg,
            });
            let string = JSON.stringify( messages );
            localStorage.setItem( ctx.state.flashKey, string );
        },

        async getLocalMessages( ctx ){

            let messages = [];
            let local = localStorage.getItem( ctx.state.flashKey );
            if( local && local !== 'null' ){

                messages = JSON.parse( local );
            }
            return messages;
        },

        async initMessagesFromStorage( ctx ){

            let messages = await ctx.dispatch( 'getLocalMessages' );
            for( let item of messages ){

                // console.log( 'Local Storage Item Found: ', item );
                ctx.commit( 'addMessage', { type: item.type, msg: item.message });
            }
            localStorage.removeItem( ctx.state.flashKey );
        },

        dismiss( ctx, id ){

            ctx.commit( 'removeMessage', id );
        }
    },
    getters : {

        count    : state => state.messages.length,
        messages : state => state.messages
    }
}