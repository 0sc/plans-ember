import Ember from 'ember';

export default Ember.Controller.extend({
  manager: Ember.inject.service(),
  'includeItem': false,
  rollback(){
    this.get('model.plan').rollbackAttributes();
    this.get('model.item').rollbackAttributes();
  },
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
        else {
          this.get('model.item').rollbackAttributes();
        }
        this.toggleProperty('includeItem');
        this.transitionToRoute('bucketlists.show', model);
      }.bind(this), function(){
        console.log('Something went wrong');
      });
    }
  }
});
