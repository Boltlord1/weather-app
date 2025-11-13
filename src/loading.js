export default function loading() {
    const main = document.querySelector('.main')
    main.replaceChildren()

    main.textContent = 'Loading'
}