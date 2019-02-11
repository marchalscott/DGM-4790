const fetch = require('node-fetch')

fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
  .then(res => res.json())
  .then(myJson => {
    const pokeArray = myJson.results
    pokeArray.forEach(pokemon => {
      postData(`http://localhost:5775/pokemon/pokemon`, pokemon)
        .then(data => {
          fetch(data.url)
          .then(result => (result.json))
          .then(pokemonJson => {
            console.log(pokemonJson.results)
          })
        }) 
        .catch(error => console.error(error))
    })
  })

const postData = (url = ``, data = {}) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  }).then(response => response.json())
}
