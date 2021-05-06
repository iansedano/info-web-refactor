


function getWelcomeData() {
    return fetch("https://freegeoip.app/json/")
    .then((response) => response.json())
    .catch(err => console.log(err, "welcome data failed"))
      /* FORMAT
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
}

function getCountryData(country){
    return fetch("https://restcountries.eu/rest/v2/name/" + country)
        .then(response => response.json())
        .catch(err => console.log(err, "country data failed"))
}


function getWeatherData(latitude, longitude) {
    return fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        latitude + "&lon=" + longitude +
        "&appid=1866411b5b586495c200d03f6cfa7a77"
        )
        .then(response => response.json())
        .catch(err => console.log(err, "weather data failed"))
}

function getIssInfo() {
    return fetch("https://api.wheretheiss.at/v1/satellites/25544")
        .then(response => response.json())
        .catch(err => console.log(err, "iss data failed"))
}

function filterWelcomeData(response) {
    return {
        city : response.city,
        country : response.country_name,
        lat : response.latitude,
        long : response.longitude
    }
}

function filterCountryData(response) {
    return {
        gini : response[0].gini,
        nativeName : response[0].nativeName,
        population: response[0].population,
    }
}

function filterWeatherData(response) {
    return {
        feels_like: response.main.feels_like,
        sunrise: response.sys.sunrise,
        sunset: response.sys.sunset,
        weather: response.weather[0].main
    }
}

function filterIssData(response) {
    return {
        latitude: response.latitude,
        longitude: response.longitude
    }
}


//       const fetchPromise5 = fetch(
//         "https://api.openweathermap.org/data/2.5/weather?lat=" +
//           ip_info.latitude +
//           "&lon=" +
//           ip_info.longitude +
//           "&appid=1866411b5b586495c200d03f6cfa7a77"
//       );
//       fetchPromise5
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           console.log(data);
//           console.log(data.weather[0].description);
//         });
//     });
//   console.log(ip_info);

//   const fetchPromise3 = fetch("https://api.wheretheiss.at/v1/satellites/25544");
//   fetchPromise3.then((response) => {
//     console.log(response.json());
//   });
// }
