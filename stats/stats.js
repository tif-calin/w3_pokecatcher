import pokemons from '../data/pokemon.js';
import { findById, getDex, getHistory } from '../utils.js';

const ctx = document.getElementById('bubble-chart').getContext('2d');

function loadBubbles() {
    const sessions = getHistory();
    sessions.push(getDex());
    
    const pokeData = {};
    for (let session of sessions) {
        for (let entry of session) {
            const pokemon = findById(pokemons, entry.id);
            const name = pokemon.pokemon;

            if (pokeData[name]) {
                pokeData[name].data[0].x += entry.encounters;
                pokeData[name].data[0].y += entry.captures;
            } else {
                pokeData[name] = {
                    label: [name],
                    backgroundColor: pokemon.color_1,
                    borderColor: pokemon.color_1,
                    data: [
                        {
                            x: entry.encounters,
                            y: entry.captures,
                            r: 4
                        }
                    ]
                };
            };
        };
    };

    console.log(Object.values(pokeData));

    new Chart(ctx, {
        type: 'bubble',
        data: {
            labels: 'Pokemon',
            datasets: Object.values(pokeData)
        },
        options: {
            title: {
                display: true,
                text: 'pokemans'
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Encounters'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Captures'
                    }
                }]
            }
        }
    });
};

loadBubbles();