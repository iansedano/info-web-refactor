/*
The other services have a wrapper function around all the functionality within
the module, however, since the other modules depend on the information obtained
within this module, the functions within this module need to be called
independently from main.js
*/


async function getWelcomeData() {
    const response = await fetch("https://freegeoip.app/json/")
        .catch(e => console.log(e, "Error fetching Welcome Data"))
    const json = await response.json()
    
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