import React from 'react';
import './CommentForm.css'
import commentService from '../../utils/commentService';

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           content: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        commentService.addComment(this.props.plant._id, this.state.content)
        .then(plant => {
            this.setState({content: ''});
            this.props.handleCommentAdd(plant)
        });
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
    };
    
    render() {
      return (
        <div className="CommentForm">
            <form>
                <div className="CommentInput">
                    <input type="text" name='content' value={this.state.content} onChange={this.handleChange} className="CommentFormIn" placeholder="Comment" />
                </div>
                <button className="CommentBtn" onClick={this.handleSubmit} type="submit">Comment</button>
            </form>
        </div>
      )
    }
}
  
  export default CommentForm;