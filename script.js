const table = document.querySelector('#js-table')
let index = 0

pokemon.forEach((poke, index) => {
  const imgElement = document.createElement('img')
  imgElement.src = poke

  imgElement.addEventListener('click', () => {
    imgElement.classList.toggle('caught')
    changeCounter()
  })
  table.appendChild(imgElement)
})

const changeCounter = () => {
  const nbCaught = document.querySelectorAll('.caught').length
  document.querySelector('#js-counter').textContent = nbCaught + ' / ' + pokemon.length
}

changeCounter()
