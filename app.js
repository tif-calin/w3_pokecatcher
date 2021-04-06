// import functions and grab DOM elements
import { getSubset, getDex, findById, setDex } from './utils.js';
import { makePokemon } from './utilsDOM.js';
import pokemon from './data/pokemon.js';

const pokemonContainer = document.querySelector('#pokemon-select');
const btnCapture = document.querySelector('#button-capture');

// initialize state
const newPokemons = () => {
    pokemonContainer.innerHTML = '';
    const pokes = getSubset(pokemon);

    for (let poke of pokes) {
        pokemonContainer.appendChild(makePokemon(poke));
    };
};

newPokemons();

// set event listeners to update state and DOM
btnCapture.addEventListener('click', () => {
    const currentDex = getDex();

    console.log(currentDex);

    for (let pokemon of pokemonContainer.children) {
        const pokemonState = findById(currentDex, pokemon.id);
        
        if (pokemonState) pokemonState['encounters']++;
        else {
            currentDex.push({
                'id': pokemon.id,
                'encounters': 1,
                'captures': 0
            });
        }

        if (pokemon.querySelector('input').checked) pokemonState['captures']++;
    };

    setDex(currentDex);

    newPokemons();
});