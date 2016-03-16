import Ember from 'ember';

export default Ember.Controller.extend({
  'includeItem': false,
  actions: {
    addItem(){
      this.toggleProperty('includeItem');
    },
    savePlan(){
      var toSave = this.get('model.plan');
      toSave.save().then(function(model){
        var itemToSave = this.get('model.item')
        model.get('items').pushObject(itemToSave);
        itemToSave.save().then(function(){
          console.log('Successful');
        }, function(){ console.log('ouch');});
        this.transitionToRoute('bucketlists.show', model);
      }.bind(this), function(){
        console.log('Something went wrong');
      });
      this.toggleProperty('isActive');
    }
  }
});
