var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resource('posts', function() {
    this.route('show', { path: ':post_id' });
    this.route('new');
  });
});

export default Router;
