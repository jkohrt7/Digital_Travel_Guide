/**
 * @function getWeatherData : Uses OpenWeather API to retrieve weather information.
 * See https://openweathermap.org/api/one-call-api for more information on the final result.
 * @param {String} cityName : The name of the city you need to get weather data from.
 * @returns Error : returns an error object if the API call fails.
 * @returns Promise : a Promise that will return as a Response containing a JSON if .then/await is utilized
 */
let getWeatherData = function(countryCode, cityName, stateCode) {
    //use the city's name to create a GET http request for the geo API endpoint
    let requestUrl = "";
    if(stateCode) {
      requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q="
      + cityName + "," +  stateCode + "," + countryCode
      + "&appid=acdc16ce9b81fc931de962a6dfeeba4f" //api key
    }
    else {
      requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q="
      + cityName + "," + countryCode
      + "&appid=acdc16ce9b81fc931de962a6dfeeba4f" //api key
    }
    
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
        return dataPromise
      }).then(function(dataPromise){
        console.log(dataPromise)
        let iconEl = $(".weatherIcon");
        let descriptionEl = $(".weatherDescription");
        let tempEl = $(".weatherTemp");
        let humidityEl = $(".weatherHumidity");
        let cityIconVal = $("<img />", {
          src:
            "http://openweathermap.org/img/wn/" +
            dataPromise.current.weather[0].icon +
            "@4x.png",
        });
        iconEl.append(cityIconVal);
        descriptionEl.text(dataPromise.current.weather[0].description);
        tempEl.text(dataPromise.current.temp + "℉");
        humidityEl.text(dataPromise.current.humidity +"%");
      })
    }).catch((error) => {
      alert(error + ": Please enter a valid city name");
      return error;
    });
};

//Adds curr weather data from a weather response to the daily weather element
function buildWeatherElement(country, city, state) {
  let dataContainer = document.querySelector("#weather-text");
  let imageContainer = document.querySelector("#weather-icon")

  //add data to container
  getWeatherData(country, city, state).then(function(response){
      if(response instanceof Error) {
          console.log("save me from error hell")
          return;
      }

      //Update HTML
      dataContainer.innerHTML = ""; 
      imageContainer.innerHTML = "";
      document.querySelector("#weather-date").textContent = city;

      //set values from response
      let temp = response.current.temp;
      let wind = response.current.wind_speed;
      let humidity = response.current.humidity;
      let icon = response.current.weather[0].icon;
      let uvi = response.current.uvi;

      //append temperature
      let node = document.createElement("H2");
      let textnode = document.createTextNode(temp + " °F");
      node.appendChild(textnode);
      dataContainer.appendChild(node);

      //append Wind
      node = document.createElement("P");
      textnode = document.createTextNode("Wind: " + wind +" MPH");
      node.appendChild(textnode);
      dataContainer.appendChild(node);

      //append Humidity
      node = document.createElement("P");
      textnode = document.createTextNode("Humidity: " + humidity + "%");
      node.appendChild(textnode);
      dataContainer.appendChild(node);

      //append UVI
      node = document.createElement("P");

      //Need a span for the title...
      let titleSpanNode = document.createElement("SPAN");
      textnode = document.createTextNode("UV Index: ");
      titleSpanNode.appendChild(textnode);
      node.appendChild(titleSpanNode);
      
      //...and for the dynamically colored UV Index
      let colorSpanNode = document.createElement("SPAN");
      if(uvi <= 4) {
          colorSpanNode.style = "background-color: green; color: white; border-radius: 3px; padding: 2px"
      } 
      else if (uvi <=7 ) {
          colorSpanNode.style = "background-color: orange; color: white; border-radius: 3px; padding: 2px"
      }
      else {
          colorSpanNode.style = "background-color: red; color: white; border-radius: 3px; padding: 2px"
      }
      textnode = document.createTextNode(uvi);
      colorSpanNode.appendChild(textnode);
      node.appendChild(colorSpanNode);
      
      dataContainer.appendChild(node);

      //append Icon
      node = document.createElement("IMG");
      node.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      imageContainer.appendChild(node);
      
  });

}
