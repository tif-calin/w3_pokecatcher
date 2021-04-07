import pokemon from '../data/pokemon.js';
import { findById, getDex, getHistory } from '../utils.js';

const bubblechart = document.querySelector('#bubble-chart');

function loadBubbles() {
    const sessions = getHistory();
    sessions.push(getDex());
    
    const pokeData = {};
    for (let session of sessions) {
        for (let entry of session) {
            const pokemon = findById(pokemon, entry.id);
            const name = pokemon.name;

            if (pokeData[name]) {
                pokeData[name].data[0].x += entry.encounters;
                pokeData[name].data[0].y += entry.captures;
            } else {
                pokeData[name] = {
                    label: [name],
                    backgroundColor: pokemon.color_1,
                    borderColor: pokemon.color_2,
                    data: [
                        {
                            x: entry.encounters,
                            y: entry.captures
                        }
                    ]
                }
            }
        };
    };

    new CharacterData(bubblechart, {
        type: 'bubbles',
        data: {
            labels: 'Pokemon',
            datasets: pokeData
        }
    });
};

loadBubbles();