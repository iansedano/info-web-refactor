let countrydiv = document.getElementById("country");
countrydiv.textContent = "searching";

let ip_info = {};
const ip_promise = fetch("https://freegeoip.app/json/");
ip_promise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    ip_info = data;
    /* FORMAT of IP INFO
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
    countrydiv.textContent = `${ip_info.city}, ${ip_info.country_name}`;
    const fetchPromise5 = fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        ip_info.latitude +
        "&lon=" +
        ip_info.longitude +
        "&appid=1866411b5b586495c200d03f6cfa7a77"
    );
    fetchPromise5
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].description);
      });
  });
console.log(ip_info);

const fetchPromise3 = fetch("https://api.wheretheiss.at/v1/satellites/25544");
fetchPromise3.then((response) => {
  console.log(response.json());
});
