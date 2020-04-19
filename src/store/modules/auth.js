import axios from '@/axios';
import router from '@/router/index';

export default {

    namespaced : true,
    state : {

        error               : null,
        isAuth              : !!parseInt( localStorage.getItem( 'isAuth' ) || 0 ),
        loginModalActive    : false,
        registerModalActive : false,
    },
    mutations : {

        toggleLoginModal    : state => state.loginModalActive = !state.loginModalActive,
        toggleRegisterModal : state => state.registerModalActive = !state.registerModalActive,
        setError            : ( state, error ) => state.error = error,
        setAuth( state, val ){

            state.isAuth = !!val;
            localStorage.setItem( 'isAuth', val );
        },
    },
    actions : {

        toggleLoginModal( ctx ){

            ctx.commit( 'setError', null );
            ctx.commit( 'toggleLoginModal' );
        },
        toggleRegisterModal( ctx ){

            ctx.commit( 'setError', null );
            ctx.commit( 'toggleRegisterModal' );
        },
        setAuth( ctx, val ){

            ctx.commit( 'setAuth', val );
        },
        login( ctx, data ){

            ctx.commit( 'setError', null );
            axios.post( '/login', data )
                .then( () => {

                    ctx.commit( 'setAuth', 1 );
                    ctx.dispatch( 'alerts/addMessage', { type: 'success', msg: 'Successful login!'}, { root: true });
                    ctx.commit( 'toggleLoginModal' );
                })
                .catch( err => {
                    // TODO => will have to see if other error statuses come to play.. and how to play with them.. later
                    // maybe they get caught in the interceptors? like.. not even sure what else could happen.. fuck

                    ctx.commit( 'setAuth', 0 );
                    if( err.response.status == 422 ) ctx.commit( 'setError', err.response.data.message );
                });
        },
        logout( ctx ){

            axios.post( '/logout' )
                .then( () => {

                    ctx.commit( 'setAuth', 0 );
                    if( router.currentRoute && router.currentRoute.name !== 'home' ) router.replace({ name: 'home' });
                })
                .catch( err => {

                    console.error( 'Logout error: ', err );
                });
        }
    },
    getters : {

        isAuth              : state => state.isAuth,
        loginModalActive    : state => state.loginModalActive,
        registerModalActive : state => state.registerModalActive,
        error               : state => state.error
    }
}