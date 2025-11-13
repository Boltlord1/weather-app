import './styles.css'
import weather from './data.json'
import DataController from './data-controller.js'

async function getData(city) {
    const link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?
        unitGroup=us&include=days%2Ccurrent&key=TP5NVFQL2P2EWLFRWFK7XSBRN&contentType=json`
    const data = await fetch(link)
    const json = await data.json()
    return json
}

const button = document.querySelector('button')
button.addEventListener('click', async () => {
    let city = prompt('Enter a city:', 'London')
    const data = await getData(city)
})

console.log(weather)
const faisalabad = new DataController(weather)
console.log(faisalabad.timezone)