const urlDaApi = "https://pokeapi.co/api/v2/pokemon/";

const searchInput = document.querySelector(".search-input");
const button = document.querySelector(".searchIcon-button");
const pokemonContainer = document.querySelector(".pokemonCard-container");

var pokemon;

function buscarPokemon(name) {
  fetch(urlDaApi + name)
    .then((response) => response.json())
    .then((data) => {
      pokemon = data;
    })
    .catch((err) => console.log(err));
}

function templateDoCardDoPokemon() {
  card = `
  <div class="pokemon-card">
      <div class="pokemon-card-img">
        <img src="${pokemon.sprites.front_default}" alt="imagem do pokemon ${
    pokemon.name
  }">
      </div>
      <div class="pokemon-card-info">
          <span class="pokemonAttribute name">Nome: <span class="attributeValue"> ${
            pokemon.name
          }</span></span>
          <span class="pokemonAttribute number">ID: <span class="attributeValue">${
            pokemon.id
          }</span></span>
          <span class="pokemonAttribute type">Tipo: <span class="attributeValue">${pokemon.types
            .map((item) => " " + item.type.name)
            .toString()}</span></span>
          <span class="pokemonAttribute weight">Peso:<span class="attributeValue"> ${
            pokemon.weight / 10
          }kg</span></span>
          <span class="pokemonAttribute height">Altura:<span class="attributeValue"> ${
            pokemon.height / 10
          }m</span></span>
      </div>
    </div>`;
  return card;
}

async function gerarPokemonCard(nomeDoPokemon) {
  buscarPokemon(nomeDoPokemon);
  setTimeout(function () {
    pokemonContainer.innerHTML = templateDoCardDoPokemon();
  }, 500);
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  var nomeDoPokemon = searchInput.value.toLowerCase();
  gerarPokemonCard(nomeDoPokemon);
});
