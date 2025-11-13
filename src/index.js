import './styles.css'

async function getData(city) {
    const link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}
        ?unitGroup=us&include=days&key=TP5NVFQL2P2EWLFRWFK7XSBRN&contentType=json`
    const data = await fetch(link)
    const json = await data.json()
    return json
}

const button = document.querySelector('button')
button.addEventListener('click', async () => {
    let city = prompt('Enter a city:', 'London')
    const data = await getData(city)
    
})