import Ember from 'ember';

export function getbucketlist(params/*, hash*/) {
  return params[0].get('bucketlist');
}

export default Ember.Helper.helper(getbucketlist);
