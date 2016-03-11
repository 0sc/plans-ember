import Ember from 'ember';

export default Ember.Controller.extend({
  'addItem': false,
  'store': Ember.inject.service(),
  actions: {
    addItem(){
      console.log('Can I please add an item?');
    },
    savePlan(){
      this.get('model').save().then(function(model){
        this.transitionToRoute('bucketlists.show', model);
      }.bind(this), function(){
        console.log('Something went wrong');
      });
      this.toggleProperty('isActive');
    }
  }
});
