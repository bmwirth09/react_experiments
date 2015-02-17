var React = require('react'),
    CommentCollection = require('./comments/collection.js'),
    CommentBox = require('./comments/box.jsx');

var comments = new CommentCollection();

React.renderComponent(
  <CommentBox comments={comments} />,
  document.getElementById('content')
);