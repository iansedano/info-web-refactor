async function populateIssSection(section, latitude, longitude){
    const issData = await getIssInfo()
    fillIssSection(section, latitude, longitude, issData)
}

async function getIssInfo() {
    const response = await fetch(
        "https://api.wheretheiss.at/v1/satellites/25544"
    ).catch(e => console.log(e, "Error fetching ISS data"))
    const json = await response.json()
    return {
        latitude: json.latitude,
        longitude: json.longitude
    }
}

// NOTE - refactored to use lat and long, instead of welcomeData object
function fillIssSection(section, latitude, longitude, issData){
    console.log(issData)
    const header = c("h2", "The International Space Station", "section-header")

    // This calculation doesn't take altitude into consideration
    const distance = 
        Math.round(
            getDistanceFromLatLonInKm(
                latitude,
                longitude,
                issData.latitude,
                issData.longitude
            )
        )
    
    const formattedDistance = new Intl.NumberFormat().format(distance)
    
    let messageString = null
    if (distance < 1000) {
        messageString = `Is passing over you right now!`
    } else {
        messageString = `Is about ${formattedDistance}km from you right now.`
    }
    
    const message = c("h3", messageString, "message")
    
    section.append(header, message)
}

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