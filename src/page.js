

function buildStartingPage(root) {
    const welcomeSection = c("div", "", "section")
    welcomeSection.id = "welcome-section"
    const countrySection = c("div", "", "section")
    countrySection.id = "country-section"
    const weatherSection = c("div", "", "section")
    weatherSection.id = "weather-section"
    const issSection = c("div", "", "section")
    issSection.id = "iss-section"

    root.append(welcomeSection, countrySection, weatherSection, issSection)
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

function fillCountrySection(section, countryData){
    console.log(countryData)
    const header = c("h2", "Welcome!", "section-header")
} 

function fillWeatherSection(section, weatherData){
    console.log(weatherData)
    const header = c("h2", "Welcome!", "section-header")
} 

function fillIssSection(section, welcomeData, issData){
    console.log(issData)
    const header = c("h2", "Welcome!", "section-header")
} 