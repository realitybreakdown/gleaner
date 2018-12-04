const BASE_URL = '/api/comments/'

function addComment(comment) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(comment)
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('No Comment..');
    })
    .then(comment => comment);
  }
  
  export default {addComment}