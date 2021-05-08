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

    const minsNow = getMinsFromStartOfDay(now)

    const sunriseMinsFromStartOfDay = getMinsFromStartOfDay(sunrise)
    const sunsetMinsFromStartOfDay = getMinsFromStartOfDay(sunset)

    const minsToSunrise = sunriseMinsFromStartOfDay - minsNow 
    const minsToSunset = sunsetMinsFromStartOfDay - minsNow

    console.log("hours", now.getHours(), "sunrise in", minsToSunrise, "sunset in", minsToSunset)

    let timeOfDay = null

    if (minsToSunrise <= 60 && minsToSunrise > 0) {
        timeOfDay = "dawn";
    } else if (minsToSunrise <= 0 && minsToSunrise > -60) {
        timeOfDay = "sunrise";
    } else if (minsToSunset <= 60 && minsToSunset > 0) {
        timeOfDay = "sunset";
    } else if (minsToSunset <= 0 && minsToSunset > -60) {
        timeOfDay = "dusk";
    } else if (minsNow > minsToSunrise && minsNow < minsToSunset) {
        timeOfDay = "day";
    } else if (minsNow < minsToSunrise || minsNow > minsToSunset) {
        timeOfDay = "night";
    } else {
        timeOfDay = "can't determine time of day"
    }

    return {
        minsToSunset: minsToSunset,
        minsToSunrise: minsToSunrise,
        timeOfDay: timeOfDay
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

  function colorTimeOfDay(timeOfDay) {

  }