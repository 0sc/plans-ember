import Ember from 'ember';

export default Ember.Component.extend({
  isActive: true,
  addItem: true,
  actions: {
    switch(){
      this.toggleProperty('isActive');
    }
  }
});
