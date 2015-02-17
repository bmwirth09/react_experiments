var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
  urlRoot: '/comments/',

  defaults: {
    'author': '',
    'text': ''
  }
});