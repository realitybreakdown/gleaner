import React from 'react';
import './CommentList.css';

const CommentList = (props) => (
    <div className="CommentList">
        {props.comments.map(comment => (
            <div className="CommentBox">
                {comment.content}
            </div>  
        ))}
    </div>
);

export default CommentList;

