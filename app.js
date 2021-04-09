// import functions and grab DOM elements
import { getSubset, getDex, findById, setDex, resetDex } from './utils.js';
import { makePokemon } from './utilsDOM.js';
import pokemon from './data/pokemon.js';

const pokemonContainer = document.querySelector('#pokemon-select');
const btnCapture = document.querySelector('#button-capture');

// page functions
const updateSessionStats = () => {
    const currentDex = getDex();
    const currentDisplayed = pokemonContainer.children;

    // for each pokemon, update stats and increase the encounters count or create new entry
    for (let pokemon of currentDisplayed) {
        const pokemonState = findById(currentDex, pokemon.id);

        if (pokemonState) {
            pokemonState['encounters']++;

            // update stats
            pokemon.querySelector('.stats').innerHTML = `&#x1F512; ${pokemonState.captures} &#x1F441; ${pokemonState.encounters}`;
        } else currentDex.push({ 'id': pokemon.id, 'encounters': 1, 'captures': 0 });
    };

    // choose a random pokemon
    currentDisplayed[Math.floor(Math.random() * currentDisplayed.length)].querySelector('input').checked = true;

    setDex(currentDex);
};

const newPokemons = () => {
    pokemonContainer.innerHTML = '';
    const pokes = getSubset(pokemon);

    for (let poke of pokes) {
        const pokeElement = makePokemon(poke);
        pokemonContainer.appendChild(pokeElement);
    };

    updateSessionStats();
};

// set event listeners to update state and DOM
newPokemons();

btnCapture.addEventListener('click', () => {
    const currentDex = getDex();
    const selected = pokemonContainer.querySelector('input:checked');
    const selectedState = findById(currentDex, selected.id);

    if (selectedState) selectedState['captures']++;
    else currentDex.push({ 'id': selected.id, 'encounters': 0, 'captures': 1 })

    setDex(currentDex);

    // reset session if this was the 10th capture
    let sessionCaptures = 0;
    for (let entry of currentDex) {
        sessionCaptures += entry.captures;
    };
    if (sessionCaptures >= 10) {
        resetDex();
        window.location = './stats/';
    };

    newPokemons();
});