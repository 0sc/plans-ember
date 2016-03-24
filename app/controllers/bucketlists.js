import Ember from 'ember';

export default Ember.Controller.extend({
  pendingItemCount: Ember.computed('pendingItems', function(){
    return this.get('pendingItems.length');
  }),
  items: Ember.computed("store",function(){
    return this.store.peekAll('item');
  }),
  pendingItems: Ember.computed('items.@each.done', function(){
    return this.get('items').rejectBy('done');
  })
});
