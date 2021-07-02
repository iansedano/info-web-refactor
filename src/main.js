main()

async function main() {
    buildStartingPage(root)
    const {latitude, longitude, ...welcomeData} = await getWelcomeData()
    fillWelcomeSection(s("welcome-section"), welcomeData)
    populateCountrySection(s("country-section"), welcomeData.country)
    populateWeatherSection(s("weather-section"),latitude, longitude)
    populateIssSection(s("iss-section"),latitude, longitude)
}

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