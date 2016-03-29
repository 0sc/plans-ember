import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  manager: Ember.inject.service(),

  buildURL: function(model_name, id){
     id = id ? id : '';
     let controller_id = this.get('manager').getUnSavedController();
    return `${this.get('host')}/bucketlists/${controller_id}/items/${id}`;
  }
});
