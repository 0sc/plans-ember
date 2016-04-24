import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logoutUser: function() {
      this.transitionToRoute('index');
    }
  }
});
