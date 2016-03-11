import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function(){
  this.route('bucketlists', function() {
    this.route('show', {
      path: ':bucketlist_id'
    });
    this.route('new');
  });

  this.route('bucketlist', function() {});
});

export default Router;
