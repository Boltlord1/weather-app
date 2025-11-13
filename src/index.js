import './styles.css'
import DataController from './data-controller.js'
import displayPage from './page.js'
import loading from './loading.js'

let current
let celsius = true

async function newCity() {
    const city = prompt('Enter a city:')
    loading()
    const link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?
        unitGroup=us&include=days%2Ccurrent&key=TP5NVFQL2P2EWLFRWFK7XSBRN&contentType=json`
    const data = await fetch(link)
    const json = await data.json()
    current = new DataController(json)
    displayPage(current, celsius)
}

const newBut = document.querySelector('.new')
newBut.addEventListener('click', newCity)

const celBut = document.querySelector('.toggle')
celBut.addEventListener('click', () => {
    celsius = celsius ? false : true
    displayPage(current, celsius)
})