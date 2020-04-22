import axios from '@/axios';
import router from '@/router/index';

export default {

    namespaced : true,
    state : {

        errors              : null,
        isAuth              : !!parseInt( localStorage.getItem( 'isAuth' ) || 0 ),
        loginModalActive    : false,
        registerModalActive : false,
    },
    mutations : {

        toggleLoginModal    : state => state.loginModalActive = !state.loginModalActive,
        toggleRegisterModal : state => state.registerModalActive = !state.registerModalActive,
        setErrors           : ( state, errors ) => state.errors = errors,
        setAuth( state, val ){

            state.isAuth = !!val;
            localStorage.setItem( 'isAuth', val );
        },
    },
    actions : {

        toggleLoginModal( ctx ){

            ctx.commit( 'setErrors', null );
            ctx.commit( 'toggleLoginModal' );
        },
        toggleRegisterModal( ctx ){

            ctx.commit( 'setErrors', null );
            ctx.commit( 'toggleRegisterModal' );
        },
        setAuth( ctx, val ){

            ctx.commit( 'setAuth', val );
        },
        register( ctx, data ){

            ctx.commit( 'setErrors', null );
            axios.post( '/register', data )
                .then( () => {

                    ctx.commit( 'setAuth', 1 );
                    ctx.dispatch( 'alerts/addMessage', { type: 'success', msg: 'Welcome to MetaLevel!'}, { root: true });
                    ctx.commit( 'toggleRegisterModal' );
                })
                .catch( err => {

                    ctx.commit( 'setAuth', 0 );
                    if( err.response.status == 422 ) ctx.commit( 'setErrors', err.response.data.errors );
                });
        },
        login( ctx, data ){

            ctx.commit( 'setErrors', null );
            axios.post( '/login', data )
                .then( () => {

                    ctx.commit( 'setAuth', 1 );
                    ctx.dispatch( 'alerts/addMessage', { type: 'success', msg: 'Successful login!'}, { root: true });
                    ctx.commit( 'toggleLoginModal' );
                })
                .catch( err => {

                    ctx.commit( 'setAuth', 0 );
                    if( err.response.status == 422 ) ctx.commit( 'setErrors', err.response.data.errors );
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
        errors              : state => state.errors
    }
}