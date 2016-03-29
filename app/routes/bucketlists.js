import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel(){
    var session = this.get('session');
    if(!session.getApiKey()){
      this.transitionTo('index');
    }
  },
  model(){
    return this.store.findAll('bucketlist');
  },
  actions: {
    error(event, transition){
      let status = event.errors[0].status;
      if(status == 401){
        let user = this.store.peekAll("user").first;
        if (user){
          alert("will try login");
          console.log(user) ;
          this.get("session").login(user, transition.retry());
        }
        else {
          this.get("session").logout();
          this.transitionTo('index');
        }
      }
    }
  }
});
