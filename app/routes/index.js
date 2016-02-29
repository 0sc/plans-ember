import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    console.log("Should do this");
    Ember.$.ajaxSetup({
      headers: {
        'Authorization': 'Token ' + localStorage.getItem('api_key')
      }
    });
    return this.store.createRecord('user');
  }
});
