import EmberRouter from '@ember/routing/router';
import config from 'ember-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('ember-route-one', { path: '/' });
  this.route('ember-route-two');
  this.route('ember-exit-route', function() {
    this.route('child-routes', { path: '/*path' });
  });
});
