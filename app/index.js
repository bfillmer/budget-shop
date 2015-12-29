/**
 * App's entry point
 * Creates and inserts a div and mounts the app on it
 */
import 'normalize.css'
import styles from './styles.css'

import debug from 'debug'
import React from 'react'
import ReactDOM from 'react-dom'
import Marked from 'marked'
// import Hello from './components/Hello'

const log = debug('app:bootstrap')

// Enable debug messages outside of production
if (process.env.NODE_ENV !== 'production') {
  debug.enable('app:*')
}

log('creating app node')
const appNode = document.createElement('div')
appNode.className = styles.app
appNode.id = 'app'

log('adding app node to body')
document.body.appendChild(appNode)

log('mounting app')

// Tutorial Code Below

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

// Comment
var Comment = React.createClass({
  rawMarkup: function() {
    var rawMarkup = Marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});

// Comment List
var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
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

// Comment Form
var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

// Comment Box
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

ReactDOM.render(<CommentBox data={data} />, appNode, () => {
  log('finished mounting comment box')
});
