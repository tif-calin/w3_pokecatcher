// import functions and grab DOM elements
import { getSubset } from './utils.js';
import { makePokemon } from './utilsDOM.js';
import pokemon from './data/pokemon.js';

const pokemonContainer = document.querySelector('#pokemon-select');

// initialize state
const initPage = () => {
    pokemonContainer.innerHTML = '';
    const pokes = getSubset(pokemon);

    for (let poke of pokes) pokemonContainer.appendChild(makePokemon(poke));
};

initPage();

// set event listeners to update state and DOM