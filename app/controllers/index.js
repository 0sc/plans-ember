import Ember from 'ember';

var login = function(){
  $.post("http://localhost:3000/auth/login", {
    user:{
      email: this.get('model.email'),
      password: this.get('model.password')
    }
  }).then(loginSuccessful, loginFailure);
};

var loginSuccessful = function(result){
  console.log(result.auth_token);
};
var loginFailure = function(result){
  console.log(result);
};

export default Ember.Controller.extend({
  checked: true,
  isRegister: true,
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
      this.get('model').save().then(login.bind(this), ()=>{
        this.set("isProcessing", false);
        this.set("loginFailed", true);
      }.bind(this));
    },
    login() {
      login.bind(this)();
    }
  }
});
