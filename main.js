
const pokeGet = async x => {        
    const url = `https://pokeapi.co/api/v2/pokemon/${x}`
    const response = await fetch(url)
    const pokemon = await response.json()

    document.getElementById('sprite').setAttribute('src', pokemon.sprites.versions['generation-v']['black-white'].animated.front_default)
    document.getElementById('name').innerHTML = pokemon.name
    document.getElementById('type').innerHTML = pokemon.id
    document.getElementById('Abilities').innerHTML = "Abilities"
    document.getElementById('ability_01').innerHTML = pokemon.abilities[0].ability.name
    document.getElementById('ability_02').innerHTML = pokemon.abilities[1].ability.name
    document.getElementById('Stats').innerHTML = "Stats"
    document.getElementById('HP').innerHTML = `HP: ${pokemon.stats[0].base_stat}`
    document.getElementById('ATK').innerHTML = `ATK: ${pokemon.stats[1].base_stat}`
    document.getElementById('DEF').innerHTML = `DEF: ${pokemon.stats[2].base_stat}`

}

const search_poke = document.getElementById('pokeInput')
const search_btn = document.getElementById('pokeButton')
search_btn.addEventListener('click', () => pokeGet(search_poke.value))

// const pokeGet = async x => {
//     let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${x}`)
//     if (response.status ==200){
//         console.log(response.data)
//     }
//     return 'API call broken'
// }


// const pokeLoad = async (data) => {
//     // calls our api call function
//     console.log(data);

//     let new_img = `<img src='${data.sprites.other.dream_world.front_default}' alt='pokemon'>`;
//     let name_row = `<tr><th scope='row'>${data.name}</th></tr>`;
//     let ability_row = `<tr><th scope='row'>Abilities</th></tr>`;
//     let new_row = `<tr><td scope='row'>${data.abilities[0][ability][0]}</td></tr>`;
//     let new_row1 = `<tr><td scope='row'>${data.abilities[1][ability][0]}</td></tr>`;

//     let stats_row = `<tr><th scope='row'>Stats</th></tr>`;
//     let hp_row = `<tr><td scope='row'>${data.stats[0][base_stat]}</td></tr>`;
//     let attack_row = `<tr><td scope='row'>${data.stats[1][base_stat]}</td></tr>`;
//     let defense_row = `<tr><td scope='row'>${data.stats[2][base_stat]}</td></tr>`;

//     document.getElementById('pokemonImage').insertAdjacentHTML('afterbegin', new_img);
//     document.getElementById('1').insertAdjacentHTML('afterbegin', name_row)
//     document.getElementById('1').insertAdjacentHTML('afterbegin', ability_row)
//     document.getElementById('1').insertAdjacentHTML('afterbegin', new_row)
//     document.getElementById('1').insertAdjacentHTML('afterbegin', new_row1)

//     document.getElementById('2').insertAdjacentHTML('afterbegin', stats_row)
//     document.getElementById('2').insertAdjacentHTML('afterbegin', hp_row)
//     document.getElementById('2').insertAdjacentHTML('afterbegin', attack_row)
//     document.getElementById('2').insertAdjacentHTML('afterbegin', defense_row)

    
// }


