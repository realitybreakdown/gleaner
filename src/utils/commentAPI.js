import tokenService from './tokenService';
const BASE_URL = '/api/plants/';

function addComment(plantId, content) {
    return fetch(BASE_URL + plantId + "/comments", {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }),
      body: JSON.stringify({content})
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('No Comment..');
    })
    .then(plant => plant);
  }
  
  export default {addComment}