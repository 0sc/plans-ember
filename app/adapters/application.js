import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  session: Ember.inject.service(),

  host: "http://localhost:3000",
  headers: Ember.computed('session.apiKey', function(){
    return {
      'Authorization': 'Token ' + this.get('session').getApiKey()
    };
  })
});
