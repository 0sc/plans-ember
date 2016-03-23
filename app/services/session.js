import Ember from 'ember';

export default Ember.Service.extend({
  apiKey: null,
  login(model, callback){
    $.post("http://localhost:3000/auth/login", {
      user:{
        email: model.get('email'),
        password: model.get('password')
      }
    }).then(function(result){
      this.setApiKey(result.auth_token);
      if (callback){
        callback(null, result) ;
      }
    }.bind(this), function(result){
      if (callback){
        callback("there was an error", result);
      }
    });
  },
  logout(){
    this.unsetApiKey();
  },
  setApiKey(key){
    this.set('apiKey', key);
    localStorage.setItem('api_key', key);
  },
  unsetApiKey(){
    this.set('apiKey', null);
    localStorage.removeItem('api_key');
  },
  getApiKey(){
    return this.get('apiKey') ? this.get('apiKey') : localStorage.getItem('api_key');
  }
});
