import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord: function(store, type, snapshot){
    var data = this.serialize(snapshot, { includeId: true });
    var url = type;
    console.log(data);
    console.log(url);
    console.log(store);
    console.log(store.get('name'));
  }
});
// export default DS.RESTAdapter.extend({
//   session: Ember.inject.service(),
//
//   host: "http://localhost:3000",
//   headers: Ember.computed('session', function(){
//     return {
//       'Authorization': 'Token ' + this.get('session').getApiKey()
//     };
//   })
// });

// createRecord: function(store, type, snapshot) {
//     var data = this.serialize(snapshot, { includeId: true });
//     var url = type;
//
//     return new Ember.RSVP.Promise(function(resolve, reject) {
//       Ember.$.ajax({
//         type: 'POST',
//         url: url,
//         dataType: 'json',
//         data: data
//       }).then(function(data) {
//         Ember.run(null, resolve, data);
//       }, function(jqXHR) {
//         jqXHR.then = null; // tame jQuery's ill mannered promises
//         Ember.run(null, reject, jqXHR);
//       });
//     });
//   }
