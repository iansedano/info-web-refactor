buildStartingPage(root)
getInfo()
  .then(resp => console.log(resp))
  .catch(err => console.log(err))


function getInfo() {

  return getWelcomeData()
    .then(response => filterWelcomeData(response))
    .then(welcomeData => {
      const welcomeDiv = s("welcome-section")
      fillWelcomeSection(welcomeDiv, welcomeData)

      getCountryData(welcomeData.country)
        .then(countryData => filterCountryData(countryData))
        .then(countryData => {
          const countryDiv = s("country-section")
          fillCountrySection(countryDiv, countryData)
        })
      
      getWeatherData(welcomeData.lat, welcomeData.long)
        .then(weatherData => filterWeatherData(weatherData))
        .then(weatherData => {
          const weatherDiv = s("weather-section")
          fillWeatherSection(weatherDiv, weatherData)
        })

      getIssInfo()
        .then(issData => filterIssData(issData))
        .then(issData => {
          const issDiv = s("iss-section")
          fillIssSection(issDiv, welcomeData, issData)
        })

    })

}