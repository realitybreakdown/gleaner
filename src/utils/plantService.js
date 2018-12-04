import tokenService from './tokenService';
const BASE_URL = '/api/plants/';


function getPlantById(id) {
    return fetch(`/api/plants/${id}`)
    .then(res => res.json());
}

function getAllPlants() {
  return fetch(BASE_URL)
  .then(res => {
     return res.json();
  })
  .then((plants) => plants);
}

function deletePlant(id) {
  return fetch(`/api/plants/${id}`, {
    method: 'DELETE',
    headers: new Headers({
      'Authorization': 'Bearer ' + tokenService.getToken()
    })
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Uh Oh! while deleting')
  })
}

function newPlant(plant) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }),
    body: JSON.stringify(plant)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Uh Oh! while creating a new plant');
  })
  .then((plant) => plant);
}

export default {
  newPlant,
  getPlantById,
  getAllPlants,
  deletePlant,
}