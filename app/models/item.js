import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  done: DS.attr('boolean'),
  date_modified: DS.attr(),
  bucketlist: DS.belongsTo('bucketlist'),
  last_updated: Ember.computed('date_modified', function(){
    var d = (Date.now() - Date.parse(this.get('date_modified')))/1000;

    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + "h :" + (m < 10 ? "0" : "") : "") + m + "m :" + (s < 10 ? "0" : "") + s + 's');
  })
});
