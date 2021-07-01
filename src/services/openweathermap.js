async function populateOpenWeatherSection(section){
    const weatherData = await getWeatherData()
    fillWeatherSection(section, weatherData)
}

async function getWeatherData(latitude, longitude) {
    const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude + "&lon=" + longitude +
        "&appid=1866411b5b586495c200d03f6cfa7a77"
        )
    const json = response.json()
    return {
        feels_like: json.main.feels_like,
        sunrise: json.sys.sunrise,
        sunset: json.sys.sunset,
        weather: json.weather[0].main
    }
}

function fillWeatherSection(section, weatherData){
    
    const sunrise = new Date(weatherData.sunrise * 1000)
    const sunset = new Date(weatherData.sunset * 1000)
    
    const timeOfDayData = getTimeOfDayData(sunrise, sunset)
    
    colorPage(timeOfDayData)
    
    const temp = KtoC(weatherData.feels_like)
    const weather = weatherData.weather
    const messageString = `It's ${weather} and around ${temp} degrees`

    const header = c("h2", `It's ${timeOfDayData.timeOfDay}`, "section-header")
    const message = c("h3", messageString, "message")
    
    section.append(header, message)
}

/**
 * 
 * @param {number} sunset 
 * @param {number} sunrise 
 */
 function getTimeOfDayData(sunrise, sunset) {
    const now = new Date()

    const minsNow = getMinsFromStartOfDay(now)

    const sunriseMinsFromStartOfDay = getMinsFromStartOfDay(sunrise)
    const sunsetMinsFromStartOfDay = getMinsFromStartOfDay(sunset)

    const minsToSunrise = sunriseMinsFromStartOfDay - minsNow 
    const minsToSunset = sunsetMinsFromStartOfDay - minsNow

    let timeOfDay = null
    let backgroundColor = null
    let textColor = null

    if (minsToSunrise <= 60 && minsToSunrise > 0) {
        timeOfDay = "dawn";
        backgroundColor = "#E3C8C4"
        textColor = "#1F2D50"
    } else if (minsToSunrise <= 0 && minsToSunrise > -60) {
        timeOfDay = "sunrise";
        backgroundColor = "#F2E879"
        textColor = "#122959"
    } else if (minsToSunset <= 60 && minsToSunset > 0) {
        timeOfDay = "sunset";
        backgroundColor = "#F78807"
        textColor = "#161A1D"
    } else if (minsToSunset <= 0 && minsToSunset > -60) {
        timeOfDay = "dusk";
        backgroundColor = "#3F548C"
        textColor = "#11121E"
    } else if (minsToSunrise <= 0 && minsToSunset >= 0) {
        timeOfDay = "day";
        backgroundColor = "#9AD4DB"
        textColor = "#14826F"
    } else if (minsToSunrise <= 0 || minsToSunset >= 0) {
        timeOfDay = "night";
        backgroundColor = "#131D35"
        textColor = "#DBF7A0"
    } else {
        timeOfDay = "can't determine time of day"
    }

    return {
        minsToSunset: minsToSunset,
        minsToSunrise: minsToSunrise,
        timeOfDay: timeOfDay,
        backgroundColor: backgroundColor,
        textColor: textColor
    }

  }
  

function getMinsFromStartOfDay(date){
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return (hours * 60) + minutes
    }

    function msToMin(ms) {
    return (ms / 1000) / 60
}


// TODO - refactor to take argument of background color and color
function colorPage(timeOfDayData){
    console.log(timeOfDayData)
    document.body.style.backgroundColor = timeOfDayData.backgroundColor
    document.body.style.color = timeOfDayData.textColor
}