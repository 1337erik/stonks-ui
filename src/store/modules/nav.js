export default {

    namespaced : true,
    state : {

        topnavHeight : 85,
        sidenavWidth : 295,
    },
    mutations : {

        setTopnavHeight : ( state, val ) => state.topnavHeight = val,
        setSidenavWidth : ( state, val ) => state.sidenavWidth = val,
    },
    actions : {

        setTopnavHeight( ctx, val ){

            ctx.commit( 'setTopnavHeight', val );
        },
        setSidenavWidth( ctx, val ){

            ctx.commit( 'setSidenavWidth', val );
        },
    },
    getters : {

        sidenavStyles : state => {

            return {

                width : `${state.sidenavWidth}px`
            }
        },
        topnavStyles : state => {

            return {

                height: `${state.topnavHeight}px`,
                paddingLeft : `${state.sidenavWidth + 35}px`,
            }
        },
        appContainerStyles : state => {

            return {

                paddingTop: `${state.topnavHeight + 45}px`,
                paddingLeft: `${state.sidenavWidth + 45}px`,
            }
        },
        messagesContainerStyles : state => {

            return {

                paddingTop: `${state.topnavHeight + 60}px`,
                right: `${45}px`,
            }
        },
        footerStyles : state => {

            return {

                height: `${state.topnavHeight - 15}px`,
                paddingLeft: `${state.sidenavWidth + 35}px`,
            }
        },
    }
}