export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.post_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    var reply = this.store.createRecord('reply');
    controller.set('reply', reply);
  },

  actions: {
    saveReply: function(post, reply) {
      var _this = this;

      reply.save().then(function() {
        post.get('replies').addObject(reply);

        var newReply = _this.store.createRecord('reply');
        _this.controller.set('reply', newReply);
      });
    }
  }
});
