import Ember from 'ember';

export default Ember.Component.extend({
  manager: Ember.inject.service(),
  actions: {
    deleteItem(item){
      if(confirm(`Are you sure you want to delete: ${item.get('name')}`)){
        this.get('manager').setUnSavedController(item.get('bucketlist.id'));
        item.destroyRecord().then(function(){
          console.log('Deleted successfully');
        }, function(data){
          console.log(data.errors)
        });
      }
    }
  }
});
