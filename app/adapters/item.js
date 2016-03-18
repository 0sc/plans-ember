import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  manager: Ember.inject.service(),

  buildURL: function(modelName, id, snapshot, requestType, query){
    var controller_id = this.get('manager').getUnSavedController();
    var url = `${this.get('host')}/bucketlists/${controller_id}/items/`;
    if(id){
      url += id;
    }
    return url;
  }
});
