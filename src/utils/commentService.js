import commentAPI from './commentAPI';
import tokenService from './tokenService';
const BASE_URL = `/api/plants/comments`


function addComment(comment) {
  return commentAPI.addComment(comment)
  .then(token => tokenService.setToken(token));
}

export default {
  addComment
}