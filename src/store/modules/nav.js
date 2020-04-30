import routes from '@/router/routes';

export default {

    namespaced : true,
    state : {

        sidenavOpen  : false
    },
    mutations : {

        toggleSidenav   : state => state.sidenavOpen = !state.sidenavOpen,
    },
    actions : {

        toggleSidenav( ctx ){ ctx.commit( 'toggleSidenav' ); },
    },
    getters : {

        topNavRoutes      : () => routes.filter( r => r.meta && r.meta.onTopNav ),
        sidenavOpen       : state => state.sidenavOpen,
        sidenavClass      : state => 'unified-transition-class ' + ( state.sidenavOpen ? 'sidenav-open' : 'sidenav-closed' ),
        sidenavToggleIcon : state => state.sidenavOpen ? 'caret-left-fill' : 'caret-right',
    }
}