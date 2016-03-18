import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel(transtition){
    var session = this.get('session');
    if(session.getApiKey()){
      this.transitionTo('bucketlists');
    }
  },
  model(){
    return this.store.createRecord('user');
  }
});
