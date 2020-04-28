import Vue from 'vue';
import Echo from 'laravel-echo';

window.io = require( 'socket.io-client' );

export var echo_instance = new Echo({

    broadcaster: "socket.io",
    host: process.env.VUE_APP_API_BASE_URL + ':6001',
    auth: {

        headers: {

            /** I'm using access tokens to access  **/
            // Authorization: "Bearer " + Cookies.get('access_token')
        }
    }
})

Vue.prototype.$echo = echo_instance;

export default Vue;