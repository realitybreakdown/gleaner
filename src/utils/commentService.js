import commentAPI from './commentAPI';

function addComment(plantId, content) {
  return commentAPI.addComment(plantId, content)
  .then(plant => plant);
}

export default {
  addComment
}