/**
 * 
 * @param {number} sunset 
 * @param {number} sunrise 
 */
 function getTimeOfDayData(sunrise, sunset) {
    // dawn, sunrise, morning, noon, evening, sunset, dusk, night
    const output = {}

    output.now = new Date()
    
    output.sunrise = dateFromUtcSeconds(sunrise)
    output.sunset = dateFromUtcSeconds(sunset)

    
    
    output.timeOfDay = getTimeOfDay(output.now, output.sunrise, output.sunset)
  
    console.log(output)
    return output
  }
  
  /**
   * 
   * @param {Date} now 
   * @param {Date} sunrise 
   * @param {Date} sunset 
   */
  function getTimeOfDay(now, sunrise, sunset) {
    const minsFromStartOfDay = getMinsFromStartOfDay(now)

    const sunriseMinsFromStartOfDay = getMinsFromStartOfDay(sunrise)
    const sunsetMinsFromStartOfDay = getMinsFromStartOfDay(sunset)

    const minsToSunrise = sunriseMinsFromStartOfDay - minsFromStartOfDay 
    const minsToSunset = sunsetMinsFromStartOfDay - minsFromStartOfDay

    console.log("hours", now.getHours(), "sunrise in", minsToSunrise, "sunset in", minsToSunset)

    // Will probably not work if you live close to the poles!
    if (minsToSunrise <= 60 && minsToSunrise > 0) {
        return "dawn";
    } else if (minsToSunrise <= 0 && minsToSunrise > -60) {
        return "sunrise";
    } else if (minsToSunset <= 60 && minsToSunset > 0) {
        return "sunset";
    } else if (minsToSunset <= 0 && minsToSunset > -60) {
        return "dusk";
    } else if (now.getHours() >= 11 && now.getHours() < 12) {
        return "almost noon";
    } else if (now.getHours() >= 12 && now.getHours() <= 13) {
        return "noon";
    } else if (now.getHours() >= 23) {
        return "almost midnight";
    } else if (now.getHours() <= 1) {
        return "midnight";
    } else if (minsToSunrise < -60 && now.getHours() < 11) {
        return "morning"
    } else if (minsToSunset > 60 && now.getHours() > 13) {
        return "afternoon"
    } else if (now.getHours() < 23 && minsToSunset > 60) {
        return "evening"
    } else if (now.getHours() > 1 && minsToSunset < -60) {
        return "night"
    } else {
        return "can't determine time of day"
    }

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