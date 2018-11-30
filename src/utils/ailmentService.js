const BASE_URL = '/api/ailments/';

function getAll() {
    return fetch(BASE_URL)
    .then(res => {
       return res.json();
    })
    .then((ailments) => ailments);
  }

  function getWithPlants(ailmentId) {
      return fetch(BASE_URL + ailmentId)
      .then(res => {
          return res.json();
      })
      .then((ailment) => ailment);
  }

export default {
    getAll,
    getWithPlants
}