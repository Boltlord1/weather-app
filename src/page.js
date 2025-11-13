import { getInfo, getMoreInfo } from "./get-info.js"
export default function displayPage(data, celsius) {
    const main = document.querySelector('.main')
    main.replaceChildren()

    const divs = [
        { class: 'location' },
        { class: 'current' },
        { class: 'days' }
    ]

    for (const div of divs) {
        div.element = document.createElement('div')
        div.element.classList.add(div.class)
        main.appendChild(div.element)
    }

    divs[0].element.textContent = `${data.address} (UTC ${data.timezone})`

    const current = getInfo(data.current, celsius)
    for (const datum in current) {
        const div = document.createElement('div')
        div.textContent = current[datum]
        divs[1].element.appendChild(div)
    }

    for (let i = 0; i < 8; i++) {
        const day = document.createElement('div')
        day.classList.add(`day`)
        const info = getMoreInfo(data.days[i], celsius)
        for (const datum in info) {
            const div = document.createElement('div')
            div.textContent = info[datum]
            day.appendChild(div)
        }
        divs[2].element.appendChild(day)
    }
}