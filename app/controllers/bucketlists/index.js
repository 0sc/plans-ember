import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
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
