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

        sidenavRoutes     : () => routes.filter( r => r.meta && r.meta.onSidenav ).sort( ( a, b ) => a.meta.placement - b.meta.placement ),
        topnavRoutes      : () => routes.filter( r => r.meta && r.meta.onTopnav ).sort( ( a, b ) => a.meta.placement - b.meta.placement ),
        sidenavOpen       : state => state.sidenavOpen,
        sidenavClass      : state => 'unified-transition-class ' + ( state.sidenavOpen ? 'sidenav-open' : 'sidenav-closed' ),
        sidenavToggleIcon : state => state.sidenavOpen ? 'chevron-bar-left' : 'layout-sidebar-inset',
        // sidenavToggleIcon : state => state.sidenavOpen ? 'caret-left-fill' : 'caret-right',
    }
}