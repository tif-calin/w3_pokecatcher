export function makePokemon(pokemon) {
    // pass in a pokemon object, return an html element

    // create main label (wrapper)
    const lblMain = document.createElement('label');
    lblMain.classList.add('wrapper-v');
    lblMain.id = pokemon.id;
    lblMain.name = 'pokemon-select';

    // create input
    const inpRadio = document.createElement('input');
    inpRadio.id = pokemon.id;
    inpRadio.type = 'radio';
    inpRadio.name = 'pokemon-select';
    lblMain.appendChild(inpRadio);

    // create image
    const imgPokemon = document.createElement('img');
    imgPokemon.src = pokemon['url_image'];
    imgPokemon.alt = pokemon['pokemon'];
    lblMain.appendChild(imgPokemon);

    // create stats
    const stats = document.createElement('label');
    stats.classList.add('stats');
    stats.innerHTML = '&#x1F512; 0 &#x1F441; 1';
    lblMain.appendChild(stats);

    return lblMain;
}