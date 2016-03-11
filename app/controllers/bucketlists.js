import Ember from 'ember';

export default Ember.Controller.extend({
  'isActive': false,
  'addItem': false,
  'store': Ember.inject.service(),
  'plan': Ember.computed('store', function(){
    return this.get('store').createRecord('bucketlist');
  }),
  actions: {
    setActive(){
      this.toggleProperty('isActive');
    },
    savePlan(){
      this.get('plan').save().then(function(model){
        this.transitionToRoute('bucketlists.show', model);
      }.bind(this), function(){
        console.log('Something went wrong');
      });
      this.toggleProperty('isActive');
    }
  }

});
