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
  isLogin: false,
  alternateText: Ember.computed('isLogin', function(){
    return this.get('isLogin') ? 'register' : 'login';
  }),
  actions: {
    openModal: function() {
      $('.ui.modal').modal('show');
    },
    switchAction: function(){
      console.log('switcched');
      this.toggleProperty('isLogin');
    },
    register: function(){
      // validate forms not empty
      this.get('model').save().then(login.bind(this), (user)=>{
        this.set("isProcessing", false);
        this.set("loginFailed", true);
        console.log(user);
      }.bind(this));
    }
  }
});
