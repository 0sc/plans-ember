import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  isLoggedIn: Ember.computed('session.apiKey', function(){
    return this.get('session').getApiKey() ? true : false;
  }),
  actions: {
    logoutUser: function() {
      this.get('session').logout();
      this.transitionToRoute('index');
    }
  }
});
