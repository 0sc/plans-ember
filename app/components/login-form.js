import Ember from 'ember';

var loginSuccessful = function(result){
  console.log(result.auth_token);
};
var loginFailure = function(result){
  console.log(result);
};

export default Ember.Component.extend({
  // actions: {
  //   attachRegisterModal() {
  //     $('.authentication.modal').modal('show');
  //   },
  //   login(){
  //     $.post("http://localhost:3000/auth/login", {
  //       user:{
  //         email: this.get('model.email'),
  //         password: this.get('model.password')
  //       }
  //     }).then(loginSuccessful, loginFailure);
  //   }
  // }
});
