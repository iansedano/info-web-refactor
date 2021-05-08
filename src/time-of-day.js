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
        backgroudColor: backgroundColor,
        textColor: textColor
    }

  }
  
  /**
   * 
   * @param {Date} now 
   * @param {Date} sunrise 
   * @param {Date} sunset 
   */
  function getTimeOfDay(now, sunrise, sunset) {

    

  }
  
  function dateFromUtcSeconds(secs){
    var d = new Date(0); // 0 sets the date to the epoch.
    d.setUTCSeconds(secs);
    return d
  }
  
  function getMinsFromStartOfDay(date){
    const hours = date.getHours()
    const minutes = date.getMinutes()
  
    return (hours * 60) + minutes
  }
  
  function msToMin(ms) {
    return (ms / 1000) / 60
  }