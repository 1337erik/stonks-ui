import Form from '../classes/Form';
import { mapGetters } from 'vuex';

export default {

    data(){

        return {

            loading     : false,
            items       : [],

            totalRows   : 0,
            perPage     : 25,
            currentPage : 1,
            sortBy      : 'lastname',
            sortDesc    : false,

            form        : new Form()
        }
    },
    computed: {

        ...mapGetters({

            'isAuth' : 'auth/isAuth'
        }),
        sortableFields(){ return this.fields ? this.fields.filter( x => x.sortable ).map( x => x.key ) : []; },
        paginationControls(){

            let sort = this.sortableFields.includes( this.sortBy ) ? this.sortBy : '';

            return `&page=${this.currentPage}&perPage=${this.perPage}&sort=${sort}&desc=${this.sortDesc}`;
        },
        firstItem(){ return ( this.currentPage - 1 ) * this.perPage; },
        lastItem(){ return ( this.firstItem + this.perPage <= this.totalRows ? this.firstItem + this.perPage : this.totalRows ); },
        total(){ return this.lastItem - this.firstItem; },
        paginationText(){

            return `Showing ${this.firstItem} - ${this.lastItem} of ${this.totalRows} records`;
        },
        appliedFilters(){ return `?override=incomponent`; }
    },
    methods: {

        loadItems() {

            if( !this.isAuth || this.loading ) return;

            this.loading = true;

            this.form.get( `/api/${this.baseUrl}${this.appliedFilters}/${this.paginationControls}` )
                .then( ({ data }) => {

                    console.log( 'hey penis lol', data, data.data.total, data.data.results );
                    this.totalRows = data.data.total;
                    this.items     = data.data.results || [];
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