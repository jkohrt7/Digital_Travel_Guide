/* Main sets up the primary functions of our app: listening for a search, handling a search, and populating 
   the website with results. While the functions are called here, they are defined in different files to keep
   the outline of our functionaility clear and concise.
*/

//Sets up necessary listeners
const init = function() {
    const searchButton = document.getElementById(""); // TODO: add the search button element 
    search.addEventListener("click",submitSearch); //Clicking it submits the search
}

//Contains functions that are fired when a search is initiated
const submitSearch = function () {
    clearInformation(); //TODO: removes all old information
    processRequest(); //TODO: uses the search to perform API calls and populate the screen
}

//Uses the search info to run API queries and put that info on the site.
const processSearch = async function() {
    const searchTerm = getSearchTerm(); //TODO: return the value in the search bar
    if(searchTerm === "") {
        console.log("Search bar is blank");
        return;
    }

    //Populate weather summary flexbox
    try {
        const weatherResultArray = await getWeatherData(); //Needs a bit of work. What weather data are we interested in?
        if(weatherResultArray.length > 0) {
            buildWeatherElement(); //TODO: creates and appends the flexbox with weather elements for a country/city.
        }
    } catch (error) {
        console.log("That isn't a valid city for OpenWeather.");
        return;
    }

    //Populate wikipedia summary flexbox
    const wikipediaResultArray = await getWikiSummary(searchTerm); //TODO: gets an array of wikipedia summary results
    try{
        if(wikipediaResultArray.length > 0) {
            buildWikipediaElement(wikipediaResultArray); //TODO: creates and appends the flexbox with wiki image and text for a country/city.
        }
    } catch (error) {
        console.log("That isn't a valid Wikipedia search.")
    }

}

init();