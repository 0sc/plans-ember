import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  isLoggedIn: Ember.computed('session', function(){
    return this.get('session').getApiKey() ? true : false;
  })
});
