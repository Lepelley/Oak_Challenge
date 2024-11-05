const table = document.querySelector('#js-table')
let index = 0
let pokemonData = null
if (window.localStorage.getItem(name) !== null) {
  pokemonData = JSON.parse(window.localStorage.getItem(name))
}

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

pokemon.forEach((poke, index) => {
  const imgElement = document.createElement('img')
  imgElement.src = poke.image
  if (poke.caught && (pokemonData && pokemonData[index] && !pokemonData[index].caught)) {

  } else if (poke.caught || (pokemonData && pokemonData[index] && pokemonData[index].caught)) {
    imgElement.classList.add('caught')
    if (poke.caught && 'caught' === urlParams.get('hide')) {
      return;
    }
  }

  imgElement.addEventListener('click', () => {
    imgElement.classList.toggle('caught')
    poke.caught = imgElement.classList.contains('caught')
    if (pokemonData && pokemonData[index]) {
      pokemonData[index] = poke
    }

    changeCounter()
    saveData()
  })
  table.appendChild(imgElement)
})

const saveData = () => {
  window.localStorage.setItem(name, JSON.stringify(pokemonData ? pokemonData : pokemon))
}

const changeCounter = () => {
  const stepLength = document.querySelectorAll('#js-table img').length
  const nbCaught = document.querySelectorAll('.caught').length
  const perCent = Math.floor((nbCaught / stepLength) * 100)
  document.querySelector('#js-counter').textContent = nbCaught + ' / ' + stepLength + ' (' + perCent + '%)'
}

changeCounter()

const body = document.querySelector('body')
const buttonElement = document.createElement('button')
buttonElement.textContent = 'Reset'
buttonElement.addEventListener('click', (event) => {
  event.preventDefault()
  window.localStorage.removeItem(name)
  window.location.reload()
})
body.appendChild(buttonElement)
