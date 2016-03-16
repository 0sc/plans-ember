import Ember from 'ember';

export default Ember.Service.extend({
  unsavedControllerId: null,

  getUnSavedController(){
    return this.get('unsavedControllerId');
  },

  setUnSavedController(id){
    this.set('unsavedControllerId', id);
  }
});
