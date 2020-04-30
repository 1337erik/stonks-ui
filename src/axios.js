import store from "@/store/index";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
// import alerts from "./store/modules/alerts";

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent

    console.log( 'the config before!', config );

    return config;
  },
  function(error) {
    // Do something with request error

    console.log( 'an error before!', error );

    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log( 'the response after!', response );

    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    console.log( 'response!', error.response );

    if( error.response.status == 401 ){
      // auth is invalid, also session expired sends this

      store.dispatch( 'alerts/addMessage', { type: 'error', msg: 'Authentication expired! Please login again.' });
      store.dispatch( 'auth/logout' );
      store.dispatch( 'auth/toggleLoginModal' );
    }

    return Promise.reject(error);
  }
);

// get CSRF session key & set auth status/current user
axios.get( "/sanctum/csrf-cookie" )
  .then( () => {

    axios.get( '/api/user/' )
      .then( res => {

        store.dispatch( 'auth/setUser', res.data );
        store.dispatch( 'alerts/addMessage', { type: 'info', msg: 'Welcome to MetaLevel' });
        store.dispatch( 'auth/setAuth', 1 );
      })
      .catch( () => {

        store.dispatch( 'auth/setUser' );
        // store.dispatch( 'alerts/addMessage', { type: 'danger', msg: 'Please log in again to continue' });
        store.dispatch( 'auth/setAuth', 0 );
      });
  })
  .catch( err => {

    console.error( err );
});

export default axios;
