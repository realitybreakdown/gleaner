import React from 'react';
import './CommentList.css';

const CommentList = (props) => (
    <div className="CommentList">
        {props.comments.map(comment => (
            <div>
                {comment.content}
            </div>  
        ))}
    </div>
);

export default CommentList;

