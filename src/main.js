buildStartingPage(root)
getInfo()

function getInfo() {

  return getWelcomeData()
    .then(resp => {
      console.log(resp)
      const welcomeData =  {
        city : resp.city,
        country : resp.country_name,
        lat : resp.latitude,
        long : resp.longitude
      }
      const welcomeDiv = s("welcome-section")
      fillWelcomeSection(welcomeDiv, welcomeData)
      return welcomeData
    })
    .then(welcomeData => {
      console.log("welcome data", welcomeData)

      getCountryData(welcomeData.country)
        .then(countryData => {
          const countryDiv = s("country-section")
          fillCountrySection(countryDiv, {
            gini : countryData.gini,
            nativeName : countryData.nativeName,
            population: countryData.population,
          })
        })
      
      getWeatherData(welcomeData.lat, welcomeData.long)
        .then(weatherData => {
          const weatherDiv = s("weather-section")
          console.log("weather", weatherData)
          // fillWeatherSection(weatherDiv, {

          // })
        })

      getIssInfo()
        .then(issData => {
          const issDiv = s("iss-section")
          console.log("iss", issData)
          // fillIssSection(issDiv, {
            
          // })
        })
    })

}