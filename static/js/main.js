var React = require('react');
var CommentBox = require('./comments/box.jsx');
React.render(
  <CommentBox url="comments/" />,
  document.getElementById('content')
);