/* Main sets up the primary functions of our app: listening for a search, handling a search, and populating 
   the website with results. While the functions are called here, they are defined in different files to keep
   the outline of our functionaility clear and concise.
*/

//Sets up necessary listeners
const init = function() {
    let searchButton = document.querySelector("#search-submit"); 
    searchButton.addEventListener("click",submitSearch); //Clicking it submits the search
}

//Contains functions that are fired when a search is initiated
const submitSearch = function () {
    console.log("clicked");
    clearInformation(); //Finished--forms.js
    processSearch(); //TODO: uses the search to perform API calls and populate the screen
}

//Uses the search info to run API queries and put that info on the site.
const processSearch = async function() {
    let country= document.querySelector("#country-name").value;
    let city = document.querySelector("#city-name").value;
    let state = document.querySelector("#state-name").value;
  
    if(country === "") {
        console.log("Required selection is blank");
        return;
    }

    //Populate weather summary flexbox
    try {
        const weatherResultArray = await getWeatherData(getCountryCode(country),city); //Needs a bit of work. What weather data are we interested in?
        if(weatherResultArray.length > 0) {
            buildWeatherElement(); //TODO: creates and appends the flexbox with weather elements for a country/city.
        }
    } catch (error) {
        console.log("That isn't a valid city for OpenWeather.");
        return;
    }


    const wikipediaResultArray = await getWikiPageSummary(country); //TODO: gets an array of wikipedia summary results
    if(wikipediaResultArray.length > 0) {
        await buildWikipediaElement(country); //TODO: creates and appends the flexbox with wiki image and text for a country/city.
        await renderFlag(country);
    }

    
}

init();