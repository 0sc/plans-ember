import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel(){
    var session = this.get('session');
    if(session.getApiKey() != null){
      this.transitionTo('bucketlists');
    }
  },
  model(){
    return this.store.createRecord('user');
  }
});
