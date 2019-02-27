import React, { Component } from 'react';
import Comment from './Comment';

class CommentContainer extends Component {
    state = {
        commentList: this.props.comments
    };

    render(){
        let comments = this.state.commentList.map( (comment, i) => {
            return(<Comment message={ comment } key={ i } />)
        });
        return(
            <div>
                <h3>Comments</h3>
                { comments }

                <form onSubmit={ this.setState.handleSubmit }>
                    <label>
                        Message:
                        <input type="text"/>
                    </label>
                </form>
            </div>
        )
    }
}

export default CommentContainer;