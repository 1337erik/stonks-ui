import Form from '../classes/Form';
import { mapGetters } from 'vuex';
import _ from 'lodash';

export default {

    data(){

        return {

            baseUrl     : '/', // override with slash first like '/business/example/route'
            loading     : false,
            items       : [],

            fields     : [

                // {
                //     key      : 'sample',
                //     label    : 'OverrideMe',
                //     sortable : true
                // },
            ],

            sortBy      : 'lastname',
            sortDesc    : false,

            pagination  : {

                page       : 1,
                per_page   : 25,
                total_rows : 0
            },

            aggregates  : [],

            form        : new Form()
        }
    },
    computed: {

        ...mapGetters({

            'isAuth' : 'auth/isAuth'
        }),

        sortableFields(){ return this.fields ? this.fields.filter( x => x.sortable ).map( x => x.key ) : []; },

        paginationControls(){

            return `&page=${this.pagination.page}&perPage=${this.pagination.per_page}`;
        },
        sortControls(){

            let sort = this.sortableFields.includes( this.sortBy ) ? this.sortBy : '';
            return `&sort=${sort}&desc=${this.sortDesc}`;
        },

        firstItem(){ return ( this.pagination.page - 1 ) * this.pagination.per_page; },
        lastItem(){ return ( this.firstItem + this.pagination.per_page <= this.pagination.total_rows ? this.firstItem + this.pagination.per_page : this.pagination.total_rows ); },
        total(){ return this.lastItem - this.firstItem; },

        paginationText(){

            return `Showing ${this.firstItem} - ${this.lastItem} of ${this.pagination.total_rows} records`;
        },

        appliedFilters(){ /* define in component computed properties to override this for component-specific filters that will trigger the watch-reload */ return '?override=incomponent'; },
        unwatchedFilters(){ /* define in component computed properties to override this for component-specific filters that you dont want to trigger the watch-reload, like free-text search */ return ''; },
        combinedFilters(){ return this.appliedFilters + this.unwatchedFilters; }
    },
    methods: {

        setPerPage( int ){

            this.pagination.per_page = int;
        },
        mapAggregateTitle( title ){

            return _.startCase( _.toLower( title ) ) + ':';
        },
        loadItems() {

            if( !this.isAuth || this.loading ) return;

            this.loading = true;
            this.form.alertOnResponse = false;
            this.form.get( `/api/${this.baseUrl}${this.combinedFilters}${this.paginationControls}${this.sortControls}` )
                .then( ({ data }) => {

                    console.log( 'hey penis lol', data.aggregates.total, data.results );
                    this.pagination.total_rows = data.aggregates.total;
                    this.items = data.results || [];
                })
                .catch( () => {

                    this.totalRows = 0;
                    this.items     = [];
                }).finally( () => this.loading = false );
        },

        deleteOne( id ){

            if( !id ) return;

            this.form.delete( `/api/${this.baseUrl}/${id}` )
                .then( ({ data }) => {

                    console.log( 'hey penis lol', data );
                    const index = this.items.findIndex( i => i.id == id );
                    if( index != '-1' ) this.loadItems();
                })
                .catch( () => {


                }).finally( () => this.loading = false );
        },

        updateOne( data ){

            console.log( data );
        },

        createOne( data ){

            console.log( data );
        },

        showOne( id ){

            console.log( id );
        },

        exportXls() {

            // window.open( `${this.baseUrl}${this.appliedFilters}&export=1`, '_blank' );
        },
    },
    mounted(){

        this.loadItems();
    },
    watch: {

        paginationControls(){

            this.loadItems();
        },
        appliedFilters(){

            this.loadItems();
        }
    }
}