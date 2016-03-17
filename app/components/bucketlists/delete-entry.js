import Ember from 'ember';

export default Ember.Component.extend({
  modelObj: null,

  actions: {
    addItem(model){
      alert("Dat's all");
      this.set('modelObj', model);
    },
    saveItem(){

    }
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
