const BASE_URL = '/api/ailments/';

function getAll() {
    return fetch(BASE_URL)
    .then(res => {
       return res.json();
    })
    // Parameter destructuring!
    .then((ailments) => ailments);
  }

export default {
    getAll
}