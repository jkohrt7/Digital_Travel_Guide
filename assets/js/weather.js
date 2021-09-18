/**
 * @function getWeatherData : Uses OpenWeather API to retrieve weather information.
 * See https://openweathermap.org/api/one-call-api for more information on the final result.
 * @param {String} cityName : The name of the city you need to get weather data from.
 * @returns Error : returns an error object if the API call fails.
 * @returns Promise : a Promise that will return as a Response containing a JSON if .then/await is utilized
 */
let getWeatherData = function(countryCode, cityName) {
    //use the city's name to create a GET http request for the geo API endpoint
    let requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q="
        + countryCode + "," + cityName
        + "&appid=acdc16ce9b81fc931de962a6dfeeba4f" //api key
    
    //Use geo API endpoint to return the city coordinates
    return fetch(requestUrl, {
        method: "GET",
        mode: "cors"
    }).then(function (response) {
        let dataPromise = response.json();
        return dataPromise;
    }).then(function(coordinatesResponse) { 

        //Use the promised lat and lon city values to create an API call to the onecall API endpoint.
        //First check if the response was valid.
        if (coordinatesResponse.length == 0) {
            throw new Error;
        }

        //Use the coordinates to construct a GET request for that city's weather
        let requestUrl = "https://api.openweathermap.org/data/2.5/onecall?"
        + "lat="
        + coordinatesResponse[0].lat 
        + "&lon="
        + coordinatesResponse[0].lon
        + "&units=imperial&appid=acdc16ce9b81fc931de962a6dfeeba4f";

      //Use the API to return a Promise of the weather data.
      return fetch(requestUrl, {
        method: "GET",
        mode: "cors",
      }).then(function (weatherResponse) {
        
        let dataPromise = weatherResponse.json();
        return dataPromise;
      });
    }).catch((error) => {
      console.log("Error: Problem with API call--invalid city name.");
      return error;
    });
};
