import Ember from 'ember';

export default Ember.Component.extend({
  isActive: true,
  addItem: true,
  store: Ember.inject.service(),
  plan: Ember.computed('store', function(){
    return this.get('store').createRecord('bucketlist');
  }),
  actions: {
    switch(){
      this.toggleProperty('isActive');
    },
    savePlan(){
      alert("Saving plan");
      this.get('plan').save().then(function(data){
        this.toggleProperty('isActive');
        this.set('addItem', false);
      }).catch(function(reason){
        console.log(reason);
      });
    }
  }
});
