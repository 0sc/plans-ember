import Ember from 'ember';

export default Ember.Controller.extend({
  editMode: false,
  newItem(){
    return this.store.createRecord('item', { bucketlist: this.get('model') });
  },
  actions: {
    cancelEdit(){
      this.get('model').rollbackAttributes();
      this.set('editMode', false);
    },
    editBucketlist(){
      this.toggleProperty('editMode');
    },
    updateBucketlist(){
      if (this.get('model').get('hasDirtyAttributes')){
        this.get('model').save();
      }
      this.toggleProperty('editMode');
    }
  }
});
