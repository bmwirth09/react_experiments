var Comment = require('./model'),
    Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Collection.extend({
  url: '/comments/',
  model: Comment
});