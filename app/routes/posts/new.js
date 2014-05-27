export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post');
  },

  actions: {
    save: function(model) {
      var _this = this;

      model.save().then(function(model) {
        _this.transitionTo('posts.show', model);
      }, function(response) {
        _this.set('errors', response.errors);
      });
    },

    cancel: function() {
      this.transitionTo('index');
    },

    willTransition: function() {
      var model = this.get('controller.model');

      if (model.get('isNew')) {
        model.deleteRecord();
      }
    }
  }
});
