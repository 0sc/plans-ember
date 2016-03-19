import Ember from 'ember';

export default Ember.Service.extend({
  apiKey: null,
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
