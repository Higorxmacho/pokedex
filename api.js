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

// const clientId = "Iv1.c8924cb8480e472c";
// const privateKey = `MIIEogIBAAKCAQEAyavQ3nebld3sr+DO6R3NCIeYgu24kPuQLYpW7TjxcwOru0HZ
// VDkR4UMQyjFMA7tDWmILD5a7ln1Kzf5C24JLX/vWwTYIakHEfq+lz8JwTrWVzhqD
// a5Zsizeq9P4XXw0qO+4LE6ilWsnweIEtnqEmi4Z6hVhOaqfkvMV3XXXN3DHvm+Aj
// Ej77So/60K2vnGaxDm+Qq0Bh+Esg0+cnjqX+sSDdbwHkYy6mQrSDDXNL5ND+nkse
// LWKLkz7GEgpQcUyx7xLhs1y3Z8N0GmzEZ+3G3cOUVXdDV2PfUTqT7VlwUZA6UXAZ
// ivTO6xP8xFbB2EuIGd11hJwJ8bEk4GwIH5rQwQIDAQABAoIBAFD8bH5KLfK7Eid2
// 8eBvlTzNpxM8/5dJTpbbLRlKerujR72FLg9Cc8mwMvffYBVHiD6tjJ+P+njui7G5
// X4PjCP3clls0paB2FMCDLOUHwi35gdUolIoJ+EDX9BE6UIxdLw6uA0i7utuAqM7b
// oURIlsAFGwKdebAfCB4+djbT7f10YLveEc8vYFaSMcEFr5TjXOKxtTd6ne6wgF3b
// BFcd+cMPxITLJGvQsZnVWDgXxOqNXRIPRs50o+r+Hl0DFPHqMg4wbzXC7m7FTvwB
// iTM5mtKvSiv+jYoepXjBYquq708bpL2mqtGDSPlofX1rJAaXwMPdtQMgCm0dQoPu
// lWUN6IECgYEA++YcbXH5GZL7AnVSewr04enz35z/PCYyOWviSSlTsLKcZZ965KCd
// QqfN78VT9SLHFWxEFzohJCOQ9UC7MtQMA+e9AreLIZgZ+eBhPBoNEB+PUK2G3ilm
// KjToDFXj6iroTWKYyzNzBqTuyiToYHzXGezjkV7wFaMCzxin/+sN9dkCgYEAzPRc
// XvvLUuczdjIAceH5+PMLOg+tIAyrj2QsTQMS6e4pMTSOogAIaqR2iYBsaEOGNWJj
// O3/CosGU3Kx8wYvoYHDe3+Bs8iT9y4h/25mz/N+HRInWCgKMMfl9oGyzxLw7N0tf
// K7YX1EBLdKvWQKg0VaDDkOnM5RotPVCJ6LFWWSkCgYAA130C1J2rezVBhdjXtmqp
// EpoRBjpIHiyOypCABBZWgdJJ+KV1fB/qaBslEPi92fbmWG1F0pjnwQKr/yJhAhpk
// LPMRvkFFxHdZwWkxxTiD9EcLUvkfZu4DeBfKasMPNkN+drTiAPMCc6ykmkj4gZJK
// cOM1yiZtPBU3UfLFxShPyQKBgG4Oaeu3Wh9Sd5fokcSVjB3apRSwhk7Hfvio2gEg
// vW9QrF330v+69MoPNnfvtkbmu5K/GnpAyMuNF9rH5NYpwsbG1WdypA4DPyWkTsQl
// bTlE7uYm/gCyDYZoasVSmdXzHfk7SAe46GLZg6tK+uoNaMzyXxHZ+mSsAc8DCIsj
// bzLBAoGADqjxJl8WirrZ9kiho1HmqtwXYQbQIOWjVJnE3E9MrQKdsjxGpM9/l3/s
// DZHkTxi8BglbzwEP5DPtgKni9hPATiGhL/gyVakUPVCw9PBwedG/vBLVr9pGM7FL
// m8rx7S5cSZq+ZXjJ78yC9fYJ9ImUUzrj20GD2MWmQt1QmCeuWPI=`;
// const url = "https://api.github.com/users";
// const inputValue = document.querySelector("input.search-input").value;
// const button = document.querySelector("button.searchIcon-button");
// const userItem = document.querySelector("div.userItem");

// async function getUser(username) {
//   try {
//     const response = await fetch(
//       `${url}/Higorxmacho?client_id=${clientId}&private_key=${privateKey}`
//     );
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// button.addEventListener("click", getUser(inputValue));

// setInterval(function () {
//   console.log(inputValue);
// }, 1000);
