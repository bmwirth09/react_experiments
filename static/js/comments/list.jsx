var React = require('react'),
    Comment = require('./comment.jsx');

module.exports = React.createClass({
  render: function() {
    var commentNodes = this.props.comments.map(function (comment) {
      return (
        <Comment author={comment.get('author')}>
          {comment.get('text')}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});