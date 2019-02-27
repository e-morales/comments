import React, { Component } from 'react';
import CommentContainer from './CommentContainer';
import Comment from './Comment';

class Post extends Component {
    render() {
        return (
            <div className="post-page">
                <h1> { this.props.title } </h1>
                <h2>By: {this.props.author}</h2>
                <p>{this.props.body}</p>

                <CommentContainer comments={this.props.comments} />

            </div>
        );
    };
};

export default Post;