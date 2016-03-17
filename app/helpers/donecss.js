import Ember from 'ember';

export function donecss(params) {
  var css = params[0] ? 'green' : 'grey';
  return `large ${css} checkmark middle aligned icon`;
}

export default Ember.Helper.helper(donecss);
