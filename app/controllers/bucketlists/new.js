import Ember from 'ember';

export default Ember.Controller.extend({
  manager: Ember.inject.service(),
  'includeItem': false,
  actions: {
    addItem(){
      this.toggleProperty('includeItem');
    },
    savePlan(){
      var toSave = this.get('model.plan');
      toSave.save().then(function(model){
        if(this.get('model.item.name')){
          model.get('items').pushObject(this.get('model.item'));
          this.get('manager').setUnSavedController(model.get('id'));
          this.get('model.item').save().then(function(){
            console.log('Successful');
          }, function(){ console.log('ouch');});
        }
        this.toggleProperty('includeItem');
        this.get('model.item').rollbackAttributes();
        this.transitionToRoute('bucketlists.show', model);
      }.bind(this), function(){
        console.log('Something went wrong');
      });
    }
  }
});
