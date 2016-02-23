import Ember from 'ember';

var login = function(data){
  $.post("http://localhost:3000/auth/login", {
    user:{
      email: data.user.email,
      password: this.get("password")
    }
  }).then(loginSuccessful, loginFailure);
};

var loginSuccessful = function(result){
  console.log(result);
};
var loginFailure = function(result){
  console.log(result);
};

export default Ember.Controller.extend({
  name: "",
  email: "",
  password: "",
  checked: true,
  actions: {
    openModal: function() {
      $('.ui.modal').modal('show');
    },
    register: function(){
      // validate forms not empty
      $.post("http://localhost:3000/users", {
        user:{
          name: this.get("name"),
          email: this.get("email"),
          password: this.get("password")
        }
      }).then(login.bind(this), function(data) {
        this.set("isProcessing", false);
        this.set("loginFailed", true);
        console.log(data);
        console.log(data['user']);
      }.bind(this));
    }
  }
});
