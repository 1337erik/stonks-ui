import moment from 'moment';

export default {

    methods: {

        formatDate( date, format='MM/DD/YYYY', fromFormat = null, dash = true ) {

            if( dash && [ null, 'null' ].includes( date ) ){

                return '-';
            }
            return moment( date, fromFormat ).format( format );
        },

        formatDateFromUTC( date, format = 'MM/DD/YYYY', fromFormat = null, dash = true ){

            if( date === null ) return 'N/A';

            if( dash && [ null, 'null' ].includes( date ) ) return '-';

            return moment.utc( date, fromFormat ).local().format( format );
        },

        formatTime( dateTime, format = 'h:mm a', fromFormat = null ){

            return this.formatDate( dateTime, format, fromFormat );
        },

        formatTimeFromUTC( dateTime, format = 'h:mm a', fromFormat = null ){

            return this.formatDateFromUTC( dateTime, format, fromFormat );
        },

        formatDateTime( dateTime, format = 'MM/DD/YYYY h:mm a', fromFormat = null ){

            return this.formatDate(dateTime, format, fromFormat);
        },

        formatDateTimeFromUTC( dateTime, format = 'MM/DD/YYYY h:mm a', fromFormat = null){

            return this.formatDateFromUTC( dateTime, format, fromFormat );
        }
    }
}