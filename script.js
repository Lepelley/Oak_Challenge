const table = document.querySelector('#js-table')
let index = 0
let pokemonData = null
if (window.localStorage.getItem(name) !== null) {
  pokemonData = JSON.parse(window.localStorage.getItem(name))
}

pokemon.forEach((poke, index) => {
  const imgElement = document.createElement('img')
  imgElement.src = poke.image
  if (poke.caught || (pokemonData && pokemonData[index] && pokemonData[index].caught)) {
    imgElement.classList.add('caught')
  }

  imgElement.addEventListener('click', () => {
    imgElement.classList.toggle('caught')
    poke.caught = imgElement.classList.contains('caught')

    changeCounter()
    saveData()
  })
  table.appendChild(imgElement)
})

const saveData = () => {
  window.localStorage.setItem(name, JSON.stringify(pokemon))
}

const changeCounter = () => {
  const nbCaught = document.querySelectorAll('.caught').length
  document.querySelector('#js-counter').textContent = nbCaught + ' / ' + pokemon.length
}

changeCounter()
