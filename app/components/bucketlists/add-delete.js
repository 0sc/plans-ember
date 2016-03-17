import Ember from 'ember';

export default Ember.Component.extend({
  objModel: null,
  addItemMode: false,
  manager: Ember.inject.service(),
  store: Ember.inject.service(),
  actions: {
    addItem(model){
      var item = this.get('store').createRecord('item', { bucketlist: model });
      this.set('objModel', item);
      this.toggleProperty('addItemMode');
    },
    saveItem(){
      var item = this.get('objModel');
      this.get('manager').setUnSavedController(item.get('bucketlist.id'));
      item.save().then(function(){
        this.toggleProperty('addItemMode');
        console.log('Yippee');
      }.bind(this), function(data){
        console.log(data.errors);
      });
    },
    cancelAddItem(){
      if(this.get('objModel')){
        this.get('objModel').rollbackAttributes();
      }
      this.set('addItemMode', false);
    },
    delete(bucketlist){
      if (confirm(`Are you sure you want to delete Plan: ${bucketlist.get('name')} with ${bucketlist.get('itemCount')} items.`)){
        bucketlist.destroyRecord();
      }
      else {
        alert("Ok, won't delete it.");
      }
    }
  }
});
