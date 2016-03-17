import Ember from 'ember';

export function donecss(params) {
  var css = params[0] ? params[1] : params[2];
  return `${css} ${params[3]}`;
}

export default Ember.Helper.helper(donecss);
