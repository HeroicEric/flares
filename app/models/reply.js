export default DS.Model.extend({
  post: DS.belongsTo('post'),
  body: DS.attr('string')
});
