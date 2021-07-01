function getCountryData(country){
    return fetch("https://restcountries.eu/rest/v2/name/" + country)
        .then(response => response.json())
        .catch(err => console.log(err, "country data failed"))
}


function filterCountryData(response) {
    console.log(response)
    return {
        country : response[0].name,
        gini : response[0].gini,
        nativeName : response[0].nativeName,
        population: response[0].population,
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
