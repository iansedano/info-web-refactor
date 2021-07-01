// async function populateWelcomeSection(section){
//     const welcomeData = await getWelcomeData()
//     fillWelcomeSection(section, welcomeData)
//     return welcomeData
// }

async function getWelcomeData() {
    const response = await fetch("https://freegeoip.app/json/")
    const json = await response.json()
    
    /* RESPONSE FORMAT
    city: "Arbucies"
    country_code: "ES"
    country_name: "Spain"
    ip: "185.58.174.168"
    latitude: 41.8167
    longitude: 2.5167
    metro_code: 0
    region_code: "CT"
    region_name: "Catalonia"
    time_zone: "Europe/Madrid"
    zip_code: "17401" */
    
    return {
        city : json.city,
        country : json.country_name,
        latitude : json.latitude,
        longitude : json.longitude
    }
}

function fillWelcomeSection(section, welcomeData){
    console.log(welcomeData)
    const header = c("h2", "Welcome!", "section-header")
    const message = c(
        "h3",
        `Looks like you are in ${welcomeData.city}, ${welcomeData.country}`,
        "message"
    )
    section.append(header, message)
} 