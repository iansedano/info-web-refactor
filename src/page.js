

function buildStartingPage(root) {
    const welcomeSection = c("div", "", "section")
    welcomeSection.id = "welcome-section"
    const countrySection = c("div", "", "section")
    countrySection.id = "country-section"
    const weatherSection = c("div", "", "section")
    weatherSection.id = "weather-section"
    const issSection = c("div", "", "section")
    issSection.id = "iss-section"

    root.appendChild(welcomeSection)
    root.appendChild(countrySection)
    root.appendChild(weatherSection)
    root.appendChild(issSection)
}


function fillWelcomeSection(section, data){
    const header = c("h2", "Welcome!", "section-header")
} 

function fillCountrySection(section, data){
    const header = c("h2", "Welcome!", "section-header")
} 

function fillWeatherSection(section, data){
    const header = c("h2", "Welcome!", "section-header")
} 

function fillIssSection(section, data){
    const header = c("h2", "Welcome!", "section-header")
} 