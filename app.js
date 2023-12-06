
const root = document.getElementById('root')

const anioActual = 2023
const idioma = 'es'
const meses = [...Array(12).keys()]
const intl = new Intl.DateTimeFormat(idioma, {month: 'long'})


const diasSemana = [...Array(7).keys()]
const intlDias = new Intl.DateTimeFormat(idioma, {weekday: 'short'})
const nombreDias = diasSemana.map( diaKey => intlDias.format(new Date(anioActual, 0, diaKey + 1)))

const calendar = meses.map( mesKey => {
  const nombreMes = intl.format(new Date(anioActual, mesKey))
  const mesSiguiente = mesKey + 1
  return {
    nombreMes: nombreMes,
    diasMes: new Date(anioActual, mesSiguiente, 0).getDate(),
    diaInicio: new Date(anioActual, mesKey, 1).getDay()
  }
})


root.innerHTML = calendar.map( mes => {
  return `
    <div class="mes">
      <h2>${mes.nombreMes} ${anioActual}</h2>
      <div class="dias">
        ${nombreDias.map( dia => `<div class="dia">${dia}</div>`).join('')}
        ${[...Array(mes.diaInicio).keys()].map( () => `<div class="dia"></div>`).join('')}
        ${[...Array(mes.diasMes).keys()].map( dia => `<div class="dia">${dia + 1}</div>`).join('')}
      </div>
    </div>
  `
}).join('')