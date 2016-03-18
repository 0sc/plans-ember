import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bucketlists/manage-item', 'Integration | Component | bucketlists/manage item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bucketlists/manage-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bucketlists/manage-item}}
      template block text
    {{/bucketlists/manage-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
