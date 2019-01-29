const fetch = require('node-fetch');

fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const pokeArray = myJson.results;
  });