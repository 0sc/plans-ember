import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logoutUser: function() {
      console.log("Got here");
      this.transitionToRoute('index');
    }
  }
});
