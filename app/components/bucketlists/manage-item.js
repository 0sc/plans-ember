import Ember from 'ember';

export default Ember.Component.extend({
  editMode: false,
  manager: Ember.inject.service(),
  actions: {
    editItem(){
      this.set('editMode', true);
    },
    updateItem(item){
      item.set('done', item.toggleProperty('done'));
      this.get('manager').setUnSavedController(item.get('bucketlist.id'));
      item.save().then(function(){
        console.log('Updated done successfully.');
        this.set('editMode', false);
      }.bind(this), function(data){
        console.log('Something went wrong: ' + data.errors);
      });
    },
    deleteItem(item){
      if(confirm(`Are you sure you want to delete: ${item.get('name')}`)){
        this.get('manager').setUnSavedController(item.get('bucketlist.id'));
        item.destroyRecord().then(function(){
          console.log('Deleted successfully');
        }, function(data){
          console.log(data.errors);
        });
      }
    },
    cancelEdit(item){
      item.rollbackAttributes();
      this.set('editMode', false);
    }
  }
});
