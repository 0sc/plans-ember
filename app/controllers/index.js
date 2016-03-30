import Ember from 'ember';

var loginSuccessful = function(){
  $(".authentication.modal").modal('hide dimmer');
  $(".login.modal").modal('hide dimmer');
  this.transitionToRoute('bucketlists');
};
var loginFailure = function(){
  console.log("Something went wrong");
};

export default Ember.Controller.extend({
  checked: true,
  isRegister: true,
  session: Ember.inject.service(),
  formHeader: function(){
    return this.get('isRegister') ? 'Register' : 'Login';
  }.property('isRegister'),

  formAction: function(){
    return this.get('isRegister') ? 'register' : 'login';
  }.property('isRegister'),

  formSwitchText: function(){
    return this.get('isRegister') ? 'Login' : 'Register';
  }.property('isRegister'),

  actions: {
    switchType(){
      this.set('isRegister', !this.get('isRegister'));
    },
    openModal() {
      $('.authentication.modal').modal('show');
      $('.login.modal').modal('attach events', '.authentication.modal .switch');
      $('.authentication.modal').modal('attach events', '.login.modal .switch');
    },
    register() {
      this.get('model').save().then(function(){
        this.actions.login.bind(this)();
      }.bind(this), ()=>{
        this.set("isProcessing", false);
        this.set("loginFailed", true);
      }.bind(this));
    },
    login() {
      this.get('session').login(this.get('model'), function(err){
        if(err){
          loginFailure();
        }
        else {
          loginSuccessful.bind(this)();
        }
      }.bind(this));
    }
  }
});
