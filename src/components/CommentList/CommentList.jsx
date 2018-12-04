import React from 'react';
import './CommentList.css';

const CommentList = (props) => (
    <div className="CommentList">
        {props.comment ? props.comments.map(comment => (
            <div>
                {comment.content}
            </div>
             
        )) : null}
    </div>
);

export default CommentList;

