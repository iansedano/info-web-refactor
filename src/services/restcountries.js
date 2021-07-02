async function populateCountrySection(section, country){
    const countryData = await getCountryData(country)
    fillCountrySection(section, countryData)
}

async function getCountryData(country){
    const response = await fetch("https://restcountries.eu/rest/v2/name/" + country)
    const json = await response.json()
    return {
        country : json[0].name,
        gini : json[0].gini,
        nativeName : json[0].nativeName,
        population: json[0].population,
    }
}

function fillCountrySection(section, countryData){
    console.log(countryData)
    const header = c("h2", `${countryData.country}`, "section-header")
    const populationString =
        new Intl.NumberFormat().format(countryData.population)
    const messageString = 
        `Known locally as ${countryData.nativeName}, \
        has a population of ${populationString}. It's gini coefficient is \
        ${countryData.gini}, which is ${compareGini(countryData.gini)}.`

    const message = c("h3", messageString, "message")
    
    section.append(header, message)
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
  