export default DS.Model.extend({
  replies: DS.hasMany('reply', { async: true }),

  title: DS.attr('string'),
  description: DS.attr('string')
});
