import axios from '@/axios';
import router from '@/router/index';
import _ from 'lodash';

export default {

    namespaced : true,
    state : {

        errors              : null,
        isAuth              : !!parseInt( localStorage.getItem( 'isAuth' ) || 0 ),
        loginModalActive    : false,
        registerModalActive : false,
        user                : {},
        userModel           : {

            id                : null,
            card_brand        : null,
            card_last_four    : null,
            created_at        : null,
            deleted_at        : null,
            email             : null,
            email_verified_at : null,
            name              : null,
            stripe_id         : null,
            timezone          : null,
            trial_ends_at     : null,
            updated_at        : null
        }
    },
    mutations : {

        setLoginModal       : ( state, bool ) => state.loginModalActive = bool,
        toggleLoginModal    : state => state.loginModalActive = !state.loginModalActive,
        toggleRegisterModal : state => state.registerModalActive = !state.registerModalActive,
        setErrors           : ( state, errors ) => state.errors = errors,
        setAuth( state, val ){

            state.isAuth = !!val;
            localStorage.setItem( 'isAuth', val );
        },
        setUser : ( state, user ) => state.user = Object.assign( state.user, user )
    },
    actions : {

        toggleLoginModal( ctx ){

            ctx.commit( 'setErrors', null );
            ctx.commit( 'toggleLoginModal' );
        },
        setLoginModal( ctx, bool ){

            ctx.commit( 'setErrors', null );
            ctx.commit( 'setLoginModal', bool );
        },
        toggleRegisterModal( ctx ){

            ctx.dispatch( 'alerts/addMessage', { type: 'error', msg: 'Registration is closed for the moment!' }, { root: true });
            // ctx.commit( 'setErrors', null );
            // ctx.commit( 'toggleRegisterModal' );
        },
        setAuth( ctx, val ){

            ctx.commit( 'setAuth', val );
        },
        register( ctx ){

            ctx.dispatch( 'alerts/addMessage', { type: 'error', msg: 'Registration is closed for the moment!' }, { root: true });
            return;
            /*
            ctx.commit( 'setErrors', null );
            axios.post( '/register', data )
                .then( res => {

                    ctx.dispatch( 'setUser', res.data );
                    ctx.commit( 'setAuth', 1 );
                    ctx.dispatch( 'alerts/addMessage', { type: 'success', msg: 'Welcome to MetaLevel!'}, { root: true });
                    ctx.commit( 'toggleRegisterModal' );
                })
                .catch( err => {

                    ctx.commit( 'setAuth', 0 );
                    ctx.dispatch( 'alerts/addMessage', { type: 'error', msg: err.response.data.message }, { root: true });
                    if( err.response.status == 422 ) ctx.commit( 'setErrors', err.response.data.errors );
                });
                */
        },
        login( ctx, data ){

            ctx.commit( 'setErrors', null );
            axios.post( '/login', data )
                .then( res => {

                    ctx.commit( 'setAuth', 1 );
                    ctx.dispatch( 'setUser', res.data );
                    ctx.dispatch( 'alerts/addMessage', { type: 'success', msg: 'Successful login!'}, { root: true });
                    ctx.commit( 'toggleLoginModal' );
                })
                .catch( err => {

                    ctx.commit( 'setAuth', 0 );
                    ctx.dispatch( 'setUser' );
                    ctx.dispatch( 'alerts/addMessage', { type: 'error', msg: err.response.data.message }, { root: true });
                    if( err.response.status == 422 ) ctx.commit( 'setErrors', err.response.data.errors );
                });
        },
        logout( ctx ){

            axios.post( '/logout' )
                .then( () => {

                    ctx.commit( 'setAuth', 0 );
                    ctx.dispatch( 'setUser' );
                    if( router.currentRoute && router.currentRoute.name !== 'home' ) router.replace({ name: 'home' });
                })
                .catch( err => {

                    console.error( 'Logout error: ', err );
                });
        },
        setUser( ctx, user = null ){

            if( !user ) user = _.cloneDeep( ctx.state.userModel );
            ctx.commit( 'setUser', user );
        }
    },
    getters : {

        user                : state => state.user,
        isAuth              : state => state.isAuth,
        loginModalActive    : state => state.loginModalActive,
        registerModalActive : state => state.registerModalActive,
        errors              : state => state.errors
    }
}