import Vue from "vue";
import moment from "moment";

/**
 *
 * Instantiate global pipes
 */

Vue.filter("date", value => {
  return moment
    .utc(value)
    .local()
    .format("L");
});

Vue.filter("datetime", value => {
  return moment
    .utc(value)
    .local()
    .format("L LT");
});

Vue.filter("capitalize", value => {
  if (!value && value !== 0) {
    return "";
  }

  let full = value.split( ' ' );

  return full.map( word => {

    return word
      .toString()
      .charAt(0)
      .toUpperCase() + word.slice(1)
    }
  ).join( ' ' );
});

Vue.filter("uppercase", value => {
  return value.toString().toUpperCase();
});

Vue.filter("lowercase", value => {
  return value.toString().toLowerCase();
});

Vue.filter("nl2br", value => {
  return value.toString().replace(/(?:\r\n|\r|\n)/g, "<br />");
});
