export default {
    // TODO have this grab from the api - to get correct values especially
    // TODO move crud functionalities into a vuex-crud-pagination mixin type shit

    namespaced : true,
    state : {

        items : [

            {
                id          : 1,
                name        : 'USDT/BSW',
                current_apr : 188
            },
            {
                id          : 2,
                name        : 'BSW single stake',
                current_apr : 164
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