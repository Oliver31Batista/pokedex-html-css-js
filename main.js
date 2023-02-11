const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const pokemonInfo = document.getElementById("pokemon-info");

const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";

form.addEventListener("submit", event => {
  event.preventDefault();

  const pokemonName = input.value.toLowerCase();

  fetch(pokemonAPI + pokemonName)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const pokemon = {
        sprite: data.sprites.front_default,
        name: data.name,
        number: data.id,
        type: data.types[0].type.name
      };

      pokemonInfo.innerHTML = `
        <img src=${pokemon.sprite} alt=${pokemon.name}>
        <p>Nombre: ${pokemon.name}</p>
        <p>Número Pokédex: ${pokemon.number}</p>
        <p>Tipo: ${pokemon.type}</p>
      `;
    })
    .catch(error => {
      console.error(error);
    });
});