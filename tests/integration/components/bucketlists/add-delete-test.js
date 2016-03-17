import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bucketlists/delete-entry', 'Integration | Component | bucketlists/delete entry', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bucketlists/delete-entry}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bucketlists/delete-entry}}
      template block text
    {{/bucketlists/delete-entry}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
