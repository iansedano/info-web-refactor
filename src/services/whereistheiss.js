function getIssInfo() {
    return fetch("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response => response.json())
        .catch(err => console.log(err, "iss data failed"))
}


function filterIssData(response) {
    return {
        latitude: response.latitude,
        longitude: response.longitude
    }
}

function fillIssSection(section, welcomeData, issData){
    console.log(issData)
    const header = c("h2", "The International Space Station", "section-header")

    // This calculation doesn't take altitude into consideration
    const distance = 
        Math.round(
            getDistanceFromLatLonInKm(
                welcomeData.latitude,
                welcomeData.longitude,
                issData.latitude,
                issData.longitude
            )
        )
    
    const formattedDistance = new Intl.NumberFormat().format(distance)
    
    let messageString = null
    if (distance < 1000) {
        messageString = `Is passing over ${welcomeData.city} right now!`
    } else {
        messageString = `Is about ${formattedDistance}km from ${welcomeData.city} right now.`
    }

    const message = c("h3", messageString, "message")
    
    section.append(header, message)
    
}