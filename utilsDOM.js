export function makePokemon(pokemon) {
    // pass in a pokemon object, return an html element

    // create main label (wrapper)
    const lblMain = document.createElement('label');
    lblMain.classList.add('wrapper-h');
    lblMain.id = 'pokemon-select';
    lblMain.name = 'pokemon-select';

    // create input
    const inpRadio = document.createElement('input');
    inpRadio.type = 'radio';
    inpRadio.name = 'pokemon-select';
    lblMain.appendChild(inpRadoi);

    // create image
    const imgPokemon = document.createElement('img');
    imgPokemon.src = pokemon['url_image'];
    imgPokemon.alt = pokemon['pokemon'];
    lblMain.appendChild(imgPokemon);

    // create stats
    const stats = document.createElement('label');
    stats.classList.add('stats');
    lblMain.appendChild(stats);

    return lblMain;
};