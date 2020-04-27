// import router from "../router/index";
import store from "../store/index";

class AxiosResponseHandler {
  constructor() {
    this.error = {};
    this.formErrors = {};
    this.response = {};
  }

  handleResponse(response, alert = true) {
    this.response = response;
    console.log( this.getMessage() );
    if (alert && this.getMessage())
      this.handleAlert("success", this.getMessage());
  }

  handleError(error, alert = true, ignoreStatuses = []) {
    this.error = error;
    this.response = error.response;
    if (ignoreStatuses.includes(this.response.status)) {
      return;
    }
    if (this.response.status === 503) {
      this.handleAlert(
        "error",
        "The application is updating. Please try again in 1 minute."
      );
      return;
    }
    if (this.response.data.errors) {
      this.formErrors = this.response.data.errors;
    }
    if (alert) {
      if (this.hasFormError()) {
        this.handleAlert("error", this.getFormError());
      } else if (this.getMessage()) {
        this.handleAlert("error", this.getMessage());
      } else {
        this.handleAlert("error", "Please refresh and try again.");
      }
    }
  }

  handleAlert(type, message) {

    store.dispatch( 'alerts/addMessage', { type: type, msg: message });
  }

  getStatusCode() {
    return this.response && this.response.status ? this.response.status : 0;
  }

  getResponseData() {
    return this.response && this.response.data ? this.response.data : null;
  }

  getMessage() {
    let data = this.getResponseData();
    return data.message ? data.message : null;
  }

  hasError() {
    return Object.keys(this.error) > 0;
  }

  hasFormError(field = null) {

    if( !field ){

      return Object.keys( this.formErrors ).length > 0;
    }

    let formErrors = this.formErrors;
    return Object.prototype.hasOwnProperty.call( formErrors, field );
  }

  getFormError(field = null) {
    if (!this.hasFormError(field)) {
      return null;
    }
    if (!field) {
      field = Object.keys(this.formErrors)[0];
    }
    let formError = this.formErrors[field];
    if (Array.isArray(formError)) {
      if (formError.length === 0) {
        return "Unknown error when processing " + field;
      }
      return formError[0];
    }
    return formError;
  }

  addFormError(field, message) {
    if (!this.hasFormError(field)) {
      this.formErrors[field] = [];
    }
    this.formErrors[field].push(message);
  }

  clearFormError(field = null) {
    if (!field) {
      this.formErrors = {};
      return;
    }

    // if (Vue) {
    //   return Vue.delete(this.formErrors, field);
    // }
    return delete this.formErrors[field];
  }
}

export default AxiosResponseHandler;
