import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      plan: this.store.createRecord('bucketlist'),
      item: this.store.createRecord('item', {})
    });
  }
});
