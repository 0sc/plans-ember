import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bucketlists/create-bucketlist', 'Integration | Component | bucketlists/create bucketlist', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{bucketlists/create-bucketlist}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#bucketlists/create-bucketlist}}
      template block text
    {{/bucketlists/create-bucketlist}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
