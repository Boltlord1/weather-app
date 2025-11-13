function getInfo(time, celsius) {
    let tempS = time.temp
    let feelS = time.feelslike
    let dewS = time.dew
    let unit = '\u00B0 F'
    if (celsius) {
        unit = '\u00B0 C'
        tempS = (tempS - 32) * 5 / 9
        feelS = (feelS - 32) * 5 / 9
        dewS = (dewS - 32) * 5 / 9
    }

    const dateI = 'As of'
    const date = `${time.datetime}`
    const condI = 'Weather'
    const cond = `${time.conditions}`
    const tempI = 'Temperature'
    const temp = `${Math.round(tempS)} ${unit}`
    const feelI = 'Feels like'
    const feel = `${Math.round(feelS)} ${unit}`
    const humiI = 'Humidity'
    const humi = `${time.humidity}%`
    const dewI = 'Dew point'
    const dew = `${Math.round(dewS)} ${unit}`

    return { dateI, date, condI, cond, humiI, humi, dewI, dew, tempI, temp, feelI, feel }
}

function getMoreInfo(time, celsius) {
    let minS = time.tempmin
    let maxS = time.tempmax
    let unit = '\u00B0 F'
    if (celsius) {
        unit = '\u00B0 C'
        minS = (minS - 32) * 5 / 9
        maxS = (maxS - 32) * 5 / 9
    }

    const info = getInfo(time, celsius)
    const minI = 'Min'
    const min = `${Math.round(minS)} ${unit}`
    const maxI = 'Max'
    const max = `${Math.round(maxS)} ${unit}`

    delete info.dateI
    delete info.feelI
    delete info.feel

    return { ...info, minI, min, maxI, max }
}

export { getInfo, getMoreInfo }