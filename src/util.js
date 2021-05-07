/**
 * https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
 */

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}
  
function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function KtoC(temp) {
  return Math.round(temp - 273.15)
}

function compareGini(x) {
  if (x > 50) {
    return "very high"
  } else if (x > 40) {
    return "high"
  } else if (x > 30) {
    return "medium"
  } else return "low"
}

/**
 * 
 * @param {Date} sunset 
 * @param {Date} sunrise 
 */
function getTimeOfDayData(sunset, sunrise) {
  // dawn, sunrise, morning, noon, evening, sunset, dusk, night
  const now = new Date();
  const hourNow = now.getHours()
  const minutesNow = now.getMinutes()

  const sunsetHour = sunset.getHours()
  const sunsetMinutes = sunset.getMinutes()

  const timeToSunset = Math.abs(now.getTime() - sunset.getTime())
  const timeToSunrise = Math.abs(now.getTime() - sunrise.getTime())

  console.log(sunset, sunrise)

  console.log("now", now.getHours())

  console.log(timeToSunset > timeToSunrise)

  return {
    timeOfDay: "sunrise",
    closestEvent: "sunrise",
    timeTo: "-1023948"
  }
}