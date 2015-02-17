var React = require('react'),
    $ = require('jquery'),
    _ = require('underscore'),
    CommentList = require('./list.jsx'),
    CommentForm = require('./form.jsx');

module.exports = React.createClass({displayName: 'CommentBox',
  handleCommentSubmit: function(comment) {
    this.props.comments.create(comment, {
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.props.comments.on('sync', _.bind(function(){
      this.forceUpdate();
    }, this));
    this.props.comments.fetch();
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={this.props.comments} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});