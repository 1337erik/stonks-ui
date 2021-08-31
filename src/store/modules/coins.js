export default {
    // TODO have this grab from the api - to get correct values especially
    // TODO move crud functionalities into a vuex-crud-pagination mixin type shit

    namespaced : true,
    state : {

        items : [

            {
                id        : 1,
                name      : 'USDT',
                usd_value : 1
            },
            {
                id        : 2,
                name      : 'BSW',
                usd_value : 1.6
            }
        ]
    },
    mutations : {

    },
    actions : {

    },
    getters : {

        items : state => state.items,
    }
}