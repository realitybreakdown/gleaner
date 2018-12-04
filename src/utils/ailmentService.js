const BASE_URL = '/api/ailments/';

function getAll() {
    return fetch(BASE_URL)
    .then(res => {
    return res.json();
    })
    .then((ailments) => ailments);
}

function getAilmentById(id) {
    return fetch(`/api/ailments/${id}`)
    .then(res => res.json());
}

function getWithPlants(ailmentId) {
    return fetch(BASE_URL + ailmentId)
    .then(res => {
        return res.json();
    })
    .then((ailment) => ailment);
}

function addPlantToAilment(ailmentId) {
    return fetch(`/api/ailments/${ailmentId}`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ailmentId})
    })
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('No Plant Added');
    })
    .then(ailment => ailment);
  }

export default {
    getAll,
    getWithPlants,
    getAilmentById,
    addPlantToAilment
}