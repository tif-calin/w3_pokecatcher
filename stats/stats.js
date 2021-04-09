import pokemons from '../data/pokemon.js';
import { findById, getDex, getHistory, resetDex } from '../utils.js';

const buttonReset = document.querySelector('#button-reset');
const buttonErase = document.querySelector('#button-erase');
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
                    borderColor: pokemon.color_2,
                    data: [
                        {
                            x: entry.encounters,
                            y: entry.captures,
                            r: 6
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
            responsive: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Encounters (all-time)'
                    },
                    min: 0
                },
                y: {
                    title: {
                        display: true,
                        text: 'Captures (all-time)'
                    },
                    min: 0
                }
            },
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
};

loadBubbles();

buttonReset.addEventListener('click', () => {
    resetDex();
    loadBubbles();
});

buttonErase.addEventListener('click', () => {
    localStorage.clear();
    loadBubbles();
});