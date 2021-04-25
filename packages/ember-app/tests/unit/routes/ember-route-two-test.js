import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ember-route-two', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ember-route-two');
    assert.ok(route);
  });
});
